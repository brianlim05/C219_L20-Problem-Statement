import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
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
          height: "350px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />

      {/* Card Name */}
      <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
        {card.card_name}
      </h3>

      {/* Card ID */}
      <p style={{ fontSize: "12px", color: "#777" }}>
        Card ID: {card.id}
      </p>

      {/* ACTION BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {/* EDIT */}
        <Link
          to={`/cards/${card.id}/edit`}
          style={{ flex: 1, textDecoration: "none" }}
        >
          <button
            style={{
              width: "100%",
              backgroundColor: "#02c9c9",
              color: "#fff",
              border: "none",
              padding: "8px 0",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        </Link>

        {/* DELETE */}
        <button
          onClick={handleDelete}
          disabled={busy}
          style={{
            flex: 1,
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            padding: "8px 0",
            borderRadius: "5px",
            cursor: busy ? "not-allowed" : "pointer",
            opacity: busy ? 0.7 : 1,
          }}
        >
          {busy ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
