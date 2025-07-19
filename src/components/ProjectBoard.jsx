import React, { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/tasks";

const ProjectBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async () => {
    if (!newTask.title) return;
    await createTask(newTask);
    setNewTask({ title: "", description: "" });
    fetchTasks();
  };

  const handleStatusChange = async (task, status) => {
    await updateTask(task._id, { ...task, status });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Project Board</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task title"
          className="p-2 border mr-2"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="p-2 border mr-2"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button onClick={handleCreate} className="bg-green-500 text-white px-4 py-2">
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {columns.map((col) => (
          <div key={col} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{col}</h3>
            {tasks
              .filter((task) => task.status === col)
              .map((task) => (
                <div key={task._id} className="bg-white p-2 mb-2 rounded shadow">
                  <h4 className="font-bold">{task.title}</h4>
                  <p>{task.description}</p>
                  <div className="mt-2 flex space-x-2">
                    {columns.map((status) => (
                      status !== task.status && (
                        <button
                          key={status}
                          onClick={() => handleStatusChange(task, status)}
                          className="text-xs bg-blue-300 px-2 py-1 rounded"
                        >
                          {status}
                        </button>
                      )
                    ))}
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="text-xs bg-red-400 px-2 py-1 rounded text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBoard;