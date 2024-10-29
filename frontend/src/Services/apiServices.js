import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const register = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const login = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getGrades = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/grades`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
