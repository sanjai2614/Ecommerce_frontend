import { useQueryClient,useMutation } from "@tanstack/react-query";
import { removeFromCart } from "../api/cartApi";

export const useRemoveItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    }
  });
};