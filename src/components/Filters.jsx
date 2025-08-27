export default function Filters({ filter, setFilter }) {
  return (
    <div className="row" style={{ margin: "12px 0" }}>
      <label>Ver: </label>
      <select
        className="select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="pending">Pendientes</option>
        <option value="done">Completadas</option>
      </select>
    </div>
  );
}
