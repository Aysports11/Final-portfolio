export default function ContactModal({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#020617",
          padding: "2rem",
          borderRadius: "12px",
          width: "320px",
          color: "white",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3 style={{ marginBottom: "1.5rem" }}>Contact Me</h3>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li>
            📧{" "}
            <a href="mailto:yourname@email.com" style={{ color: "#6366f1" }}>
              yourname@email.com
            </a>
          </li>

          <li>
            💻{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#6366f1" }}
            >
              github.com/yourusername
            </a>
          </li>

          <li>📞 +123 456 7890</li>
        </ul>

        <button
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            width: "100%",
            padding: "10px",
            background: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
