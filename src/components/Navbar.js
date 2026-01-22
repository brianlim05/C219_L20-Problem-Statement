import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <strong style={styles.brand}>Card App</strong>
      <nav style={styles.nav}>
        <NavLink to="/" end style={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/cards" style={styles.navLink}>
          Card List
        </NavLink>
        <NavLink to="/cards/new" style={styles.navLink}>
          Add Card
        </NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#2575fc",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "6px",
    transition: "background-color 0.2s ease",
  },
  navLinkActive: {
    backgroundColor: "#4c92ff",
  },
};

