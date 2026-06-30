import axios from "./axiosInstance";

// Get Cart
export const getCartByUser = async () => {
  const { data } = await axios.get("/cart");
  return data;
};

// Add to Cart
export const addToCart = async (productId) => {
  const { data } = await axios.post("/cart/add", {
    productId,
  });

  return data;
};

// Update Quantity
export const updateQty = async ({ productId, action }) => {
  const { data } = await axios.post("/cart/update", {
    productId,
    action,
  });

  return data;
};

// Remove Item
export const removeFromCart = async (productId) => {
  const { data } = await axios.post("/cart/remove", {
    productId,
  });

  return data;
};