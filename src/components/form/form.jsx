import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({dataSubmit}) => {
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    dataSubmit(data);

    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Stack gap={"20px"} mt={"30px"}>
          <TextField placeholder="Title" {...register("title")} />
          <TextField placeholder="Description" {...register("description")} />
          <Button type="submit" variant="contained">Send</Button>
        </Stack>
      </form>
    </div>
  );
};
