import { Button, Typography } from "@mui/material";
import { useDeleteUsers } from "../../pages/service/mutation/useDeleteUsers";
import React from "react";

export const Card = ({ title, description, id }) => {
  const {} = useDeleteUsers();

  return (
    <div>
      <Typography variant="h2">{title}</Typography>
      <Typography>{description}</Typography>
      <Button color="error" variant="contained">
        Delete
      </Button>
    </div>
  );
};
