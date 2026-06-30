import { useQuery } from "@tanstack/react-query";
import { getCartByUser } from "../api/cartApi";
import { useAuth } from "../context/authContext";

export const useGetCart = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["cart"],
    queryFn: getCartByUser,
    enabled: !!user,
  });
};