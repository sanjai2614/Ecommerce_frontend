import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../api/cartApi";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import { getUser } from "../utils/getUser";

export const useAddcart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId) => {

      const user = getUser()
      const userId = user?._id;

      console.log("FINAL SEND:", { userId, productId }); // 🔥 MUST SHOW

      return addToCart({ userId, productId });
    },

    onSuccess: () => {
      toast.success("Added to cart ✅");
      queryClient.invalidateQueries(["cart"]);
    },

    onError: (err) => {
      console.log(err);
      toast.error("Failed ❌");
    }
  });
}