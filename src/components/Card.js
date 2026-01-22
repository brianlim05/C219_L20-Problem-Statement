import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  // Handle the delete action
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete card: ${card.card_name}?`)) {
      onDelete(card);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#fff",
      }}
    >
      {/* Card Image */}
      <img
        src={card.card_pic}
        alt={card.card_name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      
      {/* Card Name */}
      <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>{card.card_name}</h3>
      
      {/* Card ID */}
      <p style={{ fontSize: "12px", color: "#777" }}>Card ID: {card.id}</p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        {/* Edit Button */}
        <Link
          to={`/cards/${card.id}/edit`}
          style={{
            backgroundColor: "#02c9c9",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "5px",
            textDecoration: "none",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Edit
        </Link>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            display: busy ? "none" : "inline-block",
          }}
          disabled={busy}
        >
          {busy ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
