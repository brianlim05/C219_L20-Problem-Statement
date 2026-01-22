import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCards } from "../services/api";
import "../index.css";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCards().then((arr) => setCount(arr.length));
  }, []);

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>Your cards, everywhere you go.</h1>
          <p style={styles.subtitle}>Create, organise and share digital cards in seconds.</p>
          <Link to="/cards/new">
            <button
              style={styles.btn}
              onMouseEnter={(e) => (e.target.style = styles.btnHover)} 
              onMouseLeave={(e) => (e.target.style = styles.btn)} 
            >
              Create your first card
            </button>
          </Link>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Card App?</h2>
          <div style={styles.grid}>
            <article style={styles.card} className="cardHover">
              <h3 style={styles.cardTitle}>Instant creation</h3>
              <p style={styles.cardText}>Add a new card with a single click.</p>
            </article>
            <article style={styles.card} className="cardHover">
              <h3 style={styles.cardTitle}>Powerful search</h3>
              <p style={styles.cardText}>Find any card in milliseconds.</p>
            </article>
            <article style={styles.card} className="cardHover">
              <h3 style={styles.cardTitle}>Fully responsive</h3>
              <p style={styles.cardText}>Works on phone, tablet, and desktop.</p>
            </article>
          </div>
        </div>
      </section>

      <section style={styles.stats}>
        <div style={styles.container}>
          <div style={styles.stat}>
            <h1 style={styles.statNum}>{count}</h1>
            <span style={styles.statLabel}>Cards created</span>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  main: {
    background: "#f4f7fb",  
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
  },
  hero: {
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    color: "#fff",
    padding: "120px 20px 100px",
    textAlign: "center",
    borderBottom: "5px solid #fff", 
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  title: {
    fontSize: "48px",
    fontWeight: "900",
    marginBottom: "16px",
    letterSpacing: "-1px",
  },
  subtitle: {
    fontSize: "20px",
    opacity: "0.9",
    marginBottom: "32px",
  },
  btn: {
    background: "#fff",
    color: "#2575fc",
    border: "none",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "700",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "transform .3s ease, box-shadow .3s ease",  
    boxShadow: "0 8px 20px rgba(0,0,0,.15)",
    outline: "none",
  },
  btnHover: {
    transform: "scale(1.05)",  
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
  },
  features: {
    padding: "80px 20px",
    background: "#f4f7fb",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "48px",
    color: "#2c3e50",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "32px 24px",
    boxShadow: "0 4px 16px rgba(0,0,0,.05)",
    transition: "transform .3s ease, box-shadow .3s ease",
    cursor: "pointer",
    textAlign: "center",  
  },
  cardHover: {
    transform: "translateY(-5px)",  
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#2c3e50",
  },
  cardText: {
    fontSize: "16px",
    color: "#555",
  },
  stats: {
    background: "#fff",
    padding: "60px 20px",
    textAlign: "center",
  },
  stat: {
    display: "inline-block",
    margin: "0 20px",
  },
  statNum: {
    fontSize: "72px",
    fontWeight: "900",
    color: "#6a11cb",
    margin: 0,
  },
  statLabel: {
    fontSize: "18px",
    color: "#777",
    display: "block",
    marginTop: "8px",
  },
};
