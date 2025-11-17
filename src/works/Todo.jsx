import React, { useState, useEffect } from "react";
import "./Todo.css";

export default function Todo() {
  const [task, setTask] = useState("");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [tooltip, setTooltip] = useState(false);

  // Load from localStorage when component mounts
  useEffect(() => {
    const savedPending = JSON.parse(localStorage.getItem("pendingTasks")) || [];
    const savedCompleted =
      JSON.parse(localStorage.getItem("completedTasks")) || [];

    setPendingTasks(savedPending);
    setCompletedTasks(savedCompleted);
  }, []);

  // Save to localStorage every time tasks change
  useEffect(() => {
    localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [pendingTasks, completedTasks]);

  // Add task to pending list
  const addTask = () => {
    if (task.trim() === "") return;

    setPendingTasks([...pendingTasks, task]); // add new task
    setTask(""); // clear input

    // Tooltip (Task Added)
    setTooltip(true);
    setTimeout(() => setTooltip(false), 1500);
  };

  // Move tasks between pending and completed using checkbox
  const handleCheckbox = (item, isCompleted) => {
    if (isCompleted) {
      // Move from completed → pending
      setCompletedTasks(completedTasks.filter((t) => t !== item));
      setPendingTasks([...pendingTasks, item]);
    } else {
      // Move from pending → completed
      setPendingTasks(pendingTasks.filter((t) => t !== item));
      setCompletedTasks([...completedTasks, item]);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List App</h1>

      {/* Add Task Section */}
      <div className="add-section">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">
          Add
        </button>

        {/* Tooltip */}
        {tooltip && <span className="tooltip">Task Added ✔</span>}
      </div>

      {/* Pending Tasks */}
      <div className="task-section">
        <h2>Pending Tasks</h2>
        {pendingTasks.length === 0 && (
          <p className="empty-msg">No pending tasks</p>
        )}

        <ul>
          {pendingTasks.map((item) => (
            <li key={item} className="task-item">
              <input
                type="checkbox"
                onChange={() => handleCheckbox(item, false)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Completed Tasks */}
      <div className="task-section completed">
        <h2>Completed Tasks</h2>
        {completedTasks.length === 0 && (
          <p className="empty-msg">No completed tasks</p>
        )}

        <ul>
          {completedTasks.map((item) => (
            <li key={item} className="task-item completed-item">
              <input
                type="checkbox"
                checked
                onChange={() => handleCheckbox(item, true)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
