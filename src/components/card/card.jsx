import { Typography } from '@mui/material'
import React from 'react'

export const Card = ({title, description, id}) => {
  return (
    <div>
      <Typography variant='h2'>{title}</Typography>
      <Typography>{description}</Typography>
    </div>
  )
}

