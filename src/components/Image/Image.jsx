import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Image = ({ imageURL, button }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="end"
      alignItems="start"
      sx={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        width: 275,
        height: 275,
      }}
    >
      <Button variant="contained" color="primary">
        {button}
      </Button>
    </Box>
  );
};

export default Image;
