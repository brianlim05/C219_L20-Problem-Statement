const API_URL = process.env.REACT_APP_API_URL || "";

/**
 * TODO: If your backend routes differ, update the paths here.
 * Required endpoints:
 * - GET    /cards
 * - POST   /addcard
 * - PUT    /updatecard/:id
 * - DELETE /deletecard/:id
 */

export async function getCards() {
  // GET /cards
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addCard(card) {
  // POST /addcard
  const res = await fetch(`${API_URL}/addcard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // Assuming the server returns the created card or a success message
}

export async function updateCard(id, card) {
  // PUT /updatecard/:id
  const res = await fetch(`${API_URL}/updatecard/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // Assuming the server returns the updated card
}

export async function deleteCard(id) {
  // DELETE /deletecard/:id
  const res = await fetch(`${API_URL}/deletecard/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json(); // Assuming the server returns a success message
}
