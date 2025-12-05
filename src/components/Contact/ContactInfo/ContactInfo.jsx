import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="d-flex flex-column gap-3 info">
      <div className="info-item mb-2">
        <h3 className="mb-2">Contact Sales</h3>
        <p className="fw-bold fs-6 mt-4 mb-2">T: (010) 456 7890</p>
        <p className="fw-bold mt-2 mb-4">
          E: <span className="email">sales@hostingdomain.com</span>
        </p>
      </div>
      <div className="info-item mb-2">
        <h3 className="mb-2">Services Hours:</h3>
        <p className="fw-bold my-4">
          Monday to Friday: 9am - 7pm: (010) 456 7890
        </p>
      </div>
      <div className="info-item mb-2">
        <h3 className="mb-2">Office Address:</h3>
        <p className="fw-bold my-4">822 Fancher Drive, Texas, USA</p>
      </div>
    </section>
  );
}

export default ContactInfo;
