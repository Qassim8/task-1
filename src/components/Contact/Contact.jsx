import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import "./Contact.css";

function Contact() {
  return (
    <section className="py-5 bg-white">
      <h2 className="fw-bold fs-1 mb-5 text-center">Need Some Help?</h2>
      <div className="container d-flex gap-5 mt-5 contact-content">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
