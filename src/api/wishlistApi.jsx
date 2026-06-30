import axios from "./axiosInstance";

export const addToWishlist = async (productId) => {
  const { data } = await axios.post("/wishlist/add", {
    productId,
  });

  return data;
};

export const getWishlist = async () => {
  const { data } = await axios.get("/wishlist");

  return data;
};

export const removeWishlist = async (productId) => {
  const { data } = await axios.post("/wishlist/remove", {
    productId,
  });

  return data;
};