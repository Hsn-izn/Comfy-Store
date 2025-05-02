import axios from "axios";

const productionURL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionURL,
});

export function formatPrice(price) {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
}
