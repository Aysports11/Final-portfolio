import { FaHome, FaUser, FaCogs, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const items = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "services", label: "Services", icon: <FaCogs /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="nav-links">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="nav-btn"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
