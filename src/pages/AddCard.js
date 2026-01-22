import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";
import "./AddCard.css"; // Importing the CSS file for styling

export default function AddCard() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setBusy(true);
    setError(null); // Reset error state before trying to add the card

    try {
      await addCard(formData); // Calling the addCard API
      navigate("/cards"); // Navigate to the cards page after successful submission
    } catch (err) {
      setError("Error adding card. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="add-card">
      <h1>Add New Card</h1>
      {error && <div className="error-message">{error}</div>}
      <CardForm onSubmit={handleSubmit} busy={busy} />
      {busy && <div className="loading">Adding card...</div>}
    </main>
  );
}
