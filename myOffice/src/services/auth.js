import api from "./apiconfig";

export async function login(data) {
  const response = await api.post("/auth/login", data);
  return response;
}

export async function signup(data) {
  const response = await api.post("/auth/signup", data);
  return response;
}
