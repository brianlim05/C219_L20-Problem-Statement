import { useState } from "react";

export default function CardForm({ onSubmit, busy }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const cardData = { name, imageUrl };

    console.log("Submitting card data:", cardData);

    if (onSubmit) {
      onSubmit(cardData);
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

      <button
        type="submit"
        style={{
          padding: "10px",
          fontSize: "1rem",
          border: "none",
          backgroundColor: "#02c9c9",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={busy} // Disable the button when busy
      >
        {busy ? "Adding..." : "Add Card"}
      </button>
    </form>
  );
}
