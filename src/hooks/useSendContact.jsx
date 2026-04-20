import { useMutation } from "@tanstack/react-query";
import { sendContact } from "../api/contactApi";
import { toast } from "react-toastify";

export const useSendContact = () => {
  return useMutation({
    mutationFn: sendContact,

    onSuccess: () => {
      toast.success("Message sent successfully ✅");
    },

    onError: () => {
      toast.error("Failed to send message ❌");
    }
  });
};