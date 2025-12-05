import logo from "../../../assets/images/logo-hostig-w.png";
import "./FooterInfo.css";

function FooterInfo() {
  return (
    <section className="pt-5 row g-3">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="image mb-3">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <p className="fw-bold fs-4">
          Reliable web hosting services tailored for your needs. Powered by
          expert support and trusted infrastructure
        </p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <h3 className="mb-4 pb-2 fs-4 border-bottom title">Help</h3>
        <div className="flex flex-column gap-4 links">
          <a href="#" className="fs-5 link">
            FAQs
          </a>
          <a href="#" className="fs-5 link">
            Services
          </a>
          <a href="#" className="fs-5 link">
            Contact Us
          </a>
          <a href="#" className="fs-5 link">
            News & Blog
          </a>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <h3 className="mb-4 pb-2 fs-4 border-bottom title">Services</h3>
        <div className="flex flex-column gap-4 links">
          <a href="#" className="fs-5 link">
            Shared Hosting
          </a>
          <a href="#" className="fs-5 link">
            Managed VPS
          </a>
          <a href="#" className="fs-5 link">
            Dedicated Services
          </a>
          <a href="#" className="fs-5 link">
            Domain Registeration
          </a>
        </div>
      </div>
    </section>
  );
}

export default FooterInfo;
