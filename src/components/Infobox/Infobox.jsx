import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Infobox = ({ imageURL, text, button }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        border: "24px solid #FFCC21",
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        width: 288,
        height: 288,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: 25,
          textTransform: "uppercase",
        }}
        color="primary"
      >
        {text}
      </Typography>
      <Button variant="contained" color="primary">
        {button}
      </Button>
    </Box>
  );
};

export default Infobox;
