import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../api/contactApi";

export const useGetContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts
  });
};