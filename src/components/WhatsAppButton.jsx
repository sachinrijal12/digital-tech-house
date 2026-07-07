import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "9765870064";

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
