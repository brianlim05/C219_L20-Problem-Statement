import { useState, useEffect } from "react";

export default function CardForm({ initialData, mode = "add", onSubmit, busy }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (initialData && mode === "edit") {
      setName(initialData.card_name || "");
      setImageUrl(initialData.card_pic || "");
    }
  }, [initialData, mode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardData = {
      card_name: name,
      card_pic: imageUrl,
    };

    console.log("Submitting card data:", cardData);

    if (onSubmit) {
      onSubmit(cardData);
    }
  };

  const buttonText = mode === "edit" ? "Save Changes" : "Add Card";
  const loadingText = mode === "edit" ? "Saving..." : "Adding...";

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
        disabled={busy}
      >
        {busy ? loadingText : buttonText}
      </button>
    </form>
  );
}
