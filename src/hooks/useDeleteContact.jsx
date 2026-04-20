import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact } from "../api/contactApi";
import { toast } from "react-toastify";

export const useDeleteContact = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContact,

    onSuccess: () => {
      toast.success("Deleted successfully 🗑");
      queryClient.invalidateQueries(["contacts"]); // 🔥 refetch
    },

    onError: () => {
      toast.error("Delete failed ❌");
    }
  });
};