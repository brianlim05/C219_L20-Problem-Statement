import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCards } from "../services/api";
import "../index.css";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCards().then(arr => setCount(arr.length));
  }, []);

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>Your cards, everywhere you go.</h1>
          <p style={styles.subtitle}>Create, organise and share digital cards in seconds.</p>
          <Link to="/cards/new">
            <button style={styles.btn}>Create your first card</button>
          </Link>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Card App?</h2>
          <div style={styles.grid}>
            <article style={styles.card}>
              <h3 style={styles.cardTitle}>Instant creation</h3>
              <p style={styles.cardText}>Add a new card with a single click.</p>
            </article>
            <article style={styles.card}>
              <h3 style={styles.cardTitle}>Powerful search</h3>
              <p style={styles.cardText}>Find any card in milliseconds.</p>
            </article>
            <article style={styles.card}>
              <h3 style={styles.cardTitle}>Fully responsive</h3>
              <p style={styles.cardText}>Works on phone, tablet and desktop.</p>
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
  main: { background: "#fafafa", minHeight: "100vh" },
  hero: {
    background: "linear-gradient(135deg,#6a11cb 0%,#2575fc 100%)",
    color: "#fff",
    padding: "120px 20px 100px",
    textAlign: "center"
  },
  container: { maxWidth: "960px", margin: "0 auto" },
  title: { fontSize: "44px", fontWeight: "800", marginBottom: "12px", letterSpacing: "-.5px" },
  subtitle: { fontSize: "18px", opacity: ".85", marginBottom: "32px" },
  btn: {
    background: "#fff",
    color: "#2575fc",
    border: "none",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "700",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "transform .2s",
    boxShadow: "0 8px 20px rgba(0,0,0,.15)"
  },
  features: { padding: "80px 20px" },
  sectionTitle: { fontSize: "32px", fontWeight: "700", textAlign: "center", marginBottom: "48px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "28px"
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "32px 24px",
    boxShadow: "0 4px 16px rgba(0,0,0,.05)",
    transition: "transform .2s",
    cursor: "pointer"
  },
  cardTitle: { fontSize: "20px", fontWeight: "700", marginBottom: "8px" },
  cardText: { fontSize: "15px", color: "#555" },
  stats: { background: "#fff", padding: "60px 20px", textAlign: "center" },
  stat: { display: "inline-block" },
  statNum: { fontSize: "72px", fontWeight: "900", color: "#6a11cb", margin: 0 },
  statLabel: { fontSize: "18px", color: "#777", display: "block", marginTop: "8px" }
};