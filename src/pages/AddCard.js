import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (cardData) => {
    setBusy(true); 
    setError(null);

    try {
      await addCard(cardData);
      navigate("/cards");
    } catch (err) {
      setError("An error occurred while adding the card. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="add-card">
      <h1>Add Card</h1>
      {error && <p className="error">{error}</p>}
      <CardForm
        onSubmit={handleSubmit}
        busy={busy}
      />
    </main>
  );
}

