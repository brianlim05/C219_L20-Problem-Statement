import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCards();
      setCards(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching cards:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (card) => {
    setDeleting(card.id);
    try {
      await deleteCard(card.id);
      setCards(cards.filter(c => c.id !== card.id));
    } catch (err) {
      setError("Failed to delete card");
      console.error("Error deleting card:", err);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return <main><h1>Card List</h1><p>Loading...</p></main>;
  }

  if (error) {
    return <main><h1>Card List</h1><p style={{ color: "red" }}>Error: {error}</p></main>;
  }

  return <main>
    <h1>Card List</h1>
    {cards.length === 0 ? (
      <p>No cards found.</p>
    ) : (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {cards.map(card => (
          <Card key={card.id} card={card} onDelete={handleDelete} busy={deleting === card.id} />
        ))}
      </div>
    )}
  </main>;
}
