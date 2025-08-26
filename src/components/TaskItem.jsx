export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task">
      <div className="row">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <div>
          <div style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.name}
          </div>
          <span className="badge">{task.done ? "Completado" : "Pendiente"}</span>
        </div>
      </div>
      <button className="btn" onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}
