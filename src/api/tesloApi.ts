import axios from "axios";

const tesloApi = axios.create({
  baseURL: "http://localhost:3000/api",
});

// TODOD: interceptors
// Leer el store de zustand

export { tesloApi };
