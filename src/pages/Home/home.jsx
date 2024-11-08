import React from "react";
import { useGetUsers } from "../service/query/useGetUsers";
import { Card, CardContent, Typography, Container } from "@mui/material";
import { Form } from "../../components/form/form";
import { useCreateUsers } from "../service/mutation/useGetUsers.js";
import { useQueryClient } from "@tanstack/react-query";

export const Home = () => {
  const { data, isLoading, error } = useGetUsers();
  const { mutate } = useCreateUsers();
  const client = useQueryClient()
;  const submit = (data) => {
    mutate(data, {
      onSuccess:(res) =>{
        client.invalidateQueries(['todos'])
      }
    })
    console.log(data);
  };
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <Container>
      <Form dataSubmit={submit} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((item) => (
          <Card key={item.id} sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};
