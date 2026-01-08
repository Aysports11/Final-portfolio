import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={styles.button}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 99,
    background: "var(--accent)",
    border: "none",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    color: "white",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};
