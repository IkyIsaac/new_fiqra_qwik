// src/utils/emailService.ts
import emailjs from 'emailjs-com';

export const sendEmail = async (
  userName: string,
  email: string,
  phoneNumber: string,
  subject: string,
  userMessage: string
) => {
  if (!userName.trim() || !email.trim() || !subject.trim() || !userMessage.trim()) {
    return { success: false, message: 'Please fill all the required fields!' };
  }

  try {
    const templateParams = {
      userName, 
      email,
      phoneNumber,       
      subject,   
      message: userMessage
    };

    const response = await emailjs.send(
      import.meta.env.VITE_QWIK_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_QWIK_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_QWIK_EMAILJS_USER_ID
    );

    if (response.status === 200) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      return { success: false, message: 'Failed to send message' };
    }
  } catch (err) {
    console.error('Error sending email:', err);
    return { success: false, message: 'Failed to send message' };
  }
};
