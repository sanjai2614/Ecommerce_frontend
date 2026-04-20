import { useQueryClient,useMutation } from "@tanstack/react-query";
import { updateQty } from "../api/cartApi";

export const useUpdateQty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateQty,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    }
  });
};