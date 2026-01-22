import { useState } from "react";

export default function CardForm({ onSubmit, busy }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = { name, imageUrl, category };
    onSubmit(cardData);
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <label>
        Card Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <button type="submit" disabled={busy}>
        {busy ? "Adding..." : "Add Card"}
      </button>
    </form>
  );
}
