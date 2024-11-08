import React from "react";
import { useGetUsers } from "../service/query/useGetUsers";
import { Card, CardContent, Typography, Container, Button } from "@mui/material";
import { Form } from "../../components/form/form";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUsers } from "../service/mutation/useGetUsers.js";
import { useDeleteUsers } from '../../pages/service/mutation/useDeleteUsers'


export const Home = () => {
  const { data, isLoading, error } = useGetUsers();
  const { mutate } = useCreateUsers();
  const client = useQueryClient();
  const {} = useDeleteUsers();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        client.invalidateQueries(["users"]); 
      },
    });
    console.log(data);
  };

  if (error) return <Typography variant="h1">Error: {error.message}</Typography>;

  return (
    <Container>
      <Form dataSubmit={submit} />
      {isLoading ? (
        <Typography variant="h2">Loading...</Typography>
      ) : (
        data?.map((item) => (
          <Card key={item.id} sx={{ margin: 2 }}>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Button color='error' variant='contained'>Delete</Button>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};
