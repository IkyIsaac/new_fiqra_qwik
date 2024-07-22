export default function PageNotFound() {
  return (
    <main>
      <div className="tp-error-area tp-error-ptb p-relative">
        <div className="tp-error-left-shape">
          <img src="/img/login/error-shape.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-error-content-box text-center mb-40">
                <img src="/img/login/text-404.png" alt="" />
              </div>
              <div className="tp-error-text-box text-center">
                <h4 className="error-title-sm">Oops.! Page Not Found!</h4>
                <p>The page vou are looking for does not exist'</p>
                <a
                  className="tp-btn-inner tp-btn-hover alt-color-black"
                  href="#"
                >
                  <span> Back To Home</span>
                  <b></b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
