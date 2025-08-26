import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="row" style={{ marginBottom: 12 }}>
      <input
        className="input"
        placeholder="Nueva tarea..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn">Agregar</button>
    </form>
  );
}
