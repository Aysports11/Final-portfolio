import { FaEnvelope, FaGithub, FaPhoneAlt, FaCopy } from "react-icons/fa";

export default function Contact() {
  const email = "ayo.oyamine20@gmail.com";

  const requestCV = () => {
    const gmailLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      email +
      "&su=Request for CV&body=Hello Ayo,%0D%0A%0D%0AI would like to request your CV.%0D%0A%0D%0AThank you.";

    window.open(gmailLink, "_blank");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Interested in working together or hiring me?  
        Reach out or request my CV below.
      </p>

      <div className="contact-grid">
        <div className="contact-card" onClick={copyEmail}>
          <FaEnvelope />
          <span>{email}</span>
          <FaCopy />
        </div>

        <a
          className="contact-card"
          href="https://github.com/Aysports11"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a className="contact-card" href="tel:+2340000000000">
          <FaPhoneAlt />
          Phone
        </a>
      </div>

      {/* CENTERED BUTTON */}
      <div className="cv-btn-wrapper">
        <button className="cv-btn" onClick={requestCV}>
          Request My CV
        </button>
      </div>
    </section>
  );
}
