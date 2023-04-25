import { Container } from "react-bootstrap";

const ContactMap = () => {
  return (
    <div>
      <Container fluid="lg">
        <div className="py-3">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8338675574223!2d36.90275447535018!3d-1.2728213356123406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f157cf9b383f7%3A0xe85ecd7103fd837f!2sKomarock%20Heights!5e0!3m2!1sen!2ske!4v1682407932559!5m2!1sen!2ske"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default ContactMap;
