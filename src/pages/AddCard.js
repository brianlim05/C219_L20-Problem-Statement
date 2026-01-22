import { useState } from "react";

export default function CardForm({ onSubmit, busy }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    const cardData = { name, imageUrl, category };
    if (onSubmit) {
      onSubmit(cardData); // Call onSubmit passed from the parent component
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textAlign: "left",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <label style={{ fontSize: "1rem" }}>
        Card Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </label>
      <label style={{ fontSize: "1rem" }}>
        Image URL:
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </label>
      <label style={{ fontSize: "1rem" }}>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "1rem",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
      </label>
      <button
        type="submit"
        disabled={busy}
        style={{
          padding: "10px",
          fontSize: "1rem",
          border: "none",
          backgroundColor: "#02c9c9",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {busy ? "Adding..." : "Add Card"}
      </button>
    </form>
  );
}
