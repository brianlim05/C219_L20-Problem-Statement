import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    if (window.confirm(`Delete card "${card.card_name}"?`)) {
      try {
        await deleteCard(card.id);
        setCards(cards.filter(c => c.id !== card.id));
      } catch (err) {
        setError("Failed to delete card");
        console.error("Error deleting card:", err);
      }
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
          <div key={card.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
            <img src={card.card_pic} alt="Card" style={{ width: "100%", height: "350px", objectFit: "cover", borderRadius: "4px", marginBottom: "12px" }} />
            <p style={{ fontSize: "12px", color: "#666" }}>Created: {new Date(card.created_at).toLocaleDateString()}</p>
            <button onClick={() => handleDelete(card)} style={{ backgroundColor: "#ff4444", color: "white", border: "none", padding: "8px 12px", borderRadius: "4px", cursor: "pointer" }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    )}
  </main>;
}
