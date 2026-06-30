import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {getWishlist,addToWishlist, removeWishlist,} from "../api/wishlistApi";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export const useWishlist = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    enabled: !!user,
  });
};

export const useAddWishlist = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: addToWishlist,

    onSuccess: () => {
      toast.success("Added to Wishlist ❤️", {
        toastId: "wishlist",
        theme: "colored",
      });

      qc.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },

    onError: () => {
      toast.error("Failed", {
        toastId: "wishlist-error",
      });
    },
  });
};

export const useRemoveWishlist = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: removeWishlist,

    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
};