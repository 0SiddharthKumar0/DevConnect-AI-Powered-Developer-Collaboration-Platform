import axios from "axios";

export const getTasks = async () => {
  const res = await axios.get("/api/tasks");
  return res.data;
};

export const createTask = async (task) => {
  const res = await axios.post("/api/tasks", task);
  return res.data;
};

export const updateTask = async (id, updatedTask) => {
  const res = await axios.put(`/api/tasks/${id}`, updatedTask);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await axios.delete(`/api/tasks/${id}`);
  return res.data;
};