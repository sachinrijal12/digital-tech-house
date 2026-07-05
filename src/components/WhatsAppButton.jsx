import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phone = "9779800000000"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;