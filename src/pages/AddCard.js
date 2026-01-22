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
    setError(null); // Reset previous errors
    try {
      await addCard(cardData); // Call API to add the card
      navigate("/cards"); // Redirect to cards list after success
    } catch (err) {
      setError("There was an error adding the card. Please try again.");
    } finally {
      setBusy(false); // Set busy state to false once the request is complete
    }
  };

  return (
    <main className="add-card-page">
      <h1>Add Card</h1>
      {error && <p className="error-message">{error}</p>}
      <CardForm onSubmit={handleSubmit} busy={busy} />
    </main>
  );
}
