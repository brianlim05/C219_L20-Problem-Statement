import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const cards = await getCards();
        const found = cards.find((c) => c.card_ID === Number(id));
        setCard(found);
      } catch {
        setError("Failed to load card");
      }
    }
    load();
  }, [id]);

  async function handleSubmit(updatedCard) {
    try {
      setBusy(true);
      setError("");

      await updateCard(id, {
        card_name: updatedCard.card_name,
        card_img: updatedCard.card_URL,
      });

      navigate("/cards");
    } catch {
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  }

  if (!card) return <p style={styles.loadingText}>Loading...</p>;

  return (
    <main style={styles.container}>
      <h2 style={styles.title}>Edit Card</h2>
      {error && <p style={styles.error}>{error}</p>}
      <CardForm initialData={card} onSubmit={handleSubmit} disabled={busy} />
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#333",
  },
  error: {
    color: "#e74c3c",  // Bright red for error visibility
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  loadingText: {
    textAlign: "center",
    fontSize: "20px",
    color: "#555",
  },
};
