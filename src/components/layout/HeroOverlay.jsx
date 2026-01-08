export default function HeroOverlay() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "8vw",
        color: "white",
        zIndex: 5,
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0 }}>
        Your Name
      </h1>

      <p style={{ fontSize: "1.4rem", opacity: 0.8 }}>
        Full-Stack Web Developer
      </p>

      <button
        onClick={scrollToProjects}
        style={{
          marginTop: "2rem",
          padding: "12px 24px",
          background: "#6366f1",
          border: "none",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        View projects
      </button>
    </div>
  );
}
