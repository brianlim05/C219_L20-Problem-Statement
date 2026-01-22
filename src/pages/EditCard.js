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

  if (!card) return <p>Loading...</p>;

  return (
    <main style={styles.container}>
      <h2>Edit Card</h2>
      {error && <p style={styles.error}>{error}</p>}
      <CardForm initialData={card} onSubmit={handleSubmit} disabled={busy} />
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #eee",
    borderRadius: "10px",
  },
  error: {
    color: "red",
  },
};