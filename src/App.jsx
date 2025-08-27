import { useMemo } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Filters from "./components/Filters.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { v4 as uuid } from "uuid";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");

  function addTask(name) {
    setTasks(prev => [...prev, { id: uuid(), name, done: false }]);
  }
  function toggleTask(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }
  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const visible = useMemo(() => {
    if (filter === "pending") return tasks.filter(t => !t.done);
    if (filter === "done") return tasks.filter(t => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="container">
      <div className="card">
        <h1>Gestor de Tareas</h1>
        <TaskForm onAdd={addTask} />
        <Filters filter={filter} setFilter={setFilter} />
        <TaskList tasks={visible} onToggle={toggleTask} onDelete={deleteTask} />
        <div className="footer">
          Estado persistido en localStorage. Cambiar de filtro o recargar no borra el estado.
        </div>
      </div>
    </div>
  );
}
