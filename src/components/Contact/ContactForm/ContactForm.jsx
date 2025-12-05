import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form">
      <h2 className="fw-bold">Need help? Get in touch</h2>
      <form className="d-flex flex-column gap-3">
        <input type="text" placeholder="Enter your Name" className="" />
        <input
          type="email"
          placeholder="Enter a valid email address"
          className=""
        />
        <textarea placeholder="Enter your message" className=""></textarea>
        <button type="button" className="btn fw-bold fs-5 py-2 contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
