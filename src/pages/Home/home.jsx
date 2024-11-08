import React from "react";
import { useGetUsers } from "../service/query/useGetUsers";
import { Card, Typography, Container } from "@mui/material";
import { Form } from "../../components/form/form";
import { useCreateUsers } from "../service/mutation/useGetUsers.js";
import { useQueryClient } from "@tanstack/react-query";

export const Home = () => {
  const { data, isLoading, error } = useGetUsers();
  const { mutate } = useCreateUsers();
  const client = useQueryClient();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        client.invalidateQueries(["todos"]);
      },
    });
    console.log(data);
  };
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <Container>
      <Form dataSubmit={submit} />
      {isLoading ? (
        <Typography variant="h2">loading...</Typography>
      ) : (
        data?.map((item) => <Card key={item.id} {...item} />)
      )}
    </Container>
  );
};
