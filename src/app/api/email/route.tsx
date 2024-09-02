import axios from "axios";

export async function POST(req: any) {
  let res = { message: `Invalid input` };
  const data = await req.formData();

  const full_name = data.get("userName");
  const email = data.get("email");
  const support = data.get("subject");
  const message = data.get("message");

  if (!full_name || !email || !support || !message) {
    res = { message: "Please fill out all required fields" };
  } else {
    try {
      const body = {
        //   service_id: "service_i3c391e",
        //   template_id: "template_rsw31wh",
        //   user_id: "-s6-Kbh5QA1q6DwpV",
        //   template_params: {
        //     userName: data.get("userName"),
        //     email: data.get("email"),
        //     subject: data.get("subject"),
        //     message: data.get("message"),
        //   },
        // }

        service_id: "service_i3c391e",
        template_id: "template_rsw31wh",
        user_id: "-s6-Kbh5QA1q6DwpV",
        template_params: {
          userName: "emmanuel",
          email: "ikes@go.com",
          subject: "Online support",
          message: "hello",
        },
      };
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        }
      );
      if (response.status === 200) {
        return Response.json({ message: "Message sent successfully" });
      }
      if (response.status === 400) {
        return Response.json({ message: "Failed to send the message" });
      }
      return Response.json(res);
    } catch (err) {
      console.log("email error", err);
      return Response.json({ message: "We have an internal server error" });
    }
  }
}
