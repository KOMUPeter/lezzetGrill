import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../assets/img/sandwichmenu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactComponent() {
  const form = useRef();
  const initialFormDetails = { user_name: "", user_email: "", message: "" };
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [status, setStatus] = useState({ success: null, message: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const resetForm = () => {
    setFormDetails(initialFormDetails);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        to_name: "Lezzet Grill",
        user_name: formDetails.user_name,
        to_email: formDetails.user_email,
        from_name: formDetails.user_name,
        message: formDetails.message,
      };

      await emailjs.send(
        "service_ub009bp",
        "template_3qmhg48",
        templateParams,
        "BquAb76bZpRtfg8Mv"
      );

      setStatus({
        success: true,
        message: "Votre message a bien été envoyé!",
      });
      resetForm();
      setShowSuccessMessage(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      let errorMessage = "Message non envoyé. Veuillez réessayer.";

      if (error.text.includes("validation_error")) {
        errorMessage =
          "Veuillez vérifier que tous les champs sont correctement remplis.";
      } else if (error.text.includes("unknown_error")) {
        errorMessage = "Une erreur est survenue. Veuillez réessayer plus tard.";
      }

      setStatus({
        success: false,
        message: errorMessage,
      });
    }
  };

  // Use useEffect to reset success message after it's hidden
  useEffect(() => {
    if (!showSuccessMessage) {
      setStatus({ success: null, message: "" });
    }
  }, [showSuccessMessage]);

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col className="contactDetails">
            <h2>Nous contactez</h2>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} /> Téléphone :{" "}
              <a href="tel:+33954000135">09 54 00 01 35</a>

            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Visitez-nous 📍
              <a
                href="https://www.google.com/maps?q=9+Passage+des+Halles,+74960+Annecy,+France"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliquez pour la carte
              </a>
            </p>
            <img src={contactImage} alt="Contact me" />
          </Col>

          <Col size={12} md={6}>
            <h2>Écrivez-nous</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    required
                    type="text"
                    name="user_name"
                    placeholder="Prenom"
                    value={formDetails.user_name}
                    onChange={(e) => onFormUpdate("user_name", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    required
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formDetails.user_email}
                    onChange={(e) => onFormUpdate("user_email", e.target.value)}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Enter a valid email address"
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    required
                    rows="6"
                    minLength={60}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>Envoyer</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
