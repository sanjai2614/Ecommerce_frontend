import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../api/cartApi";
import { toast } from "react-toastify";

export const useAddcart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId) => addToCart(productId),

    onSuccess: () => {
      toast.success("Added to cart ✅");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },

    onError: (err) => {
      console.log(err);
      toast.error("Failed ❌");
    },
  });
};