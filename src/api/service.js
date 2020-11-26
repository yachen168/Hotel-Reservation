import axios from "axios";

const token = "ow7i3w9jLlmKW42w2FzKPVgSdHfI8G4dg20IZ1tzdGrMpfzyPAhQhIGAEJcr";

const API = axios.create({
  baseURL: `https://challenge.thef2e.com/api/thef2e2019/stage6/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  }
});

export default API;
