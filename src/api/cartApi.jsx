import axios from "./axiosInstance"

export const getCartByUser=async(userId)=>{
    const res = await axios.get(`/cart/${userId}`)
    return res.data    
}

export const addToCart = async ({ userId, productId }) => {
  const res = await axios.post("/cart/add", {
    userId,
    productId
  }
);

  return res.data;
};

export const updateQty = async ({ userId, productId, action }) => {
  const res = await axios.post("/cart/update", {
    userId,
    productId,
    action
  });
  return res.data;
};

export const removeFromCart = async ({ userId, productId }) => {
  const res = await axios.post("/cart/remove", {
    userId,
    productId
  });
  return res.data;
};