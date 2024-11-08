import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useDeleteUsers = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id) => request.delete(`/todos/${id}`).then(res.data),
    onSuccess: () => {
      client.invalidateQueries(["todos"]);
    },
  });
};
