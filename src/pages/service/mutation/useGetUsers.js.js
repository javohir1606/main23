import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useCreateUsers = () => {
  return useMutation({
    mutationFn: (data) =>{
     return request.post("/todos", data).then((res) => res.data)
    }
  });
};
