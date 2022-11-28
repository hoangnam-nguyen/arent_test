import { Button } from "@mui/material";
import React from "react";

const Image = ({ imageURL }) => {
  return (
    <Button
      sx={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        width: 134,
        height: 134,
      }}
    ></Button>
  );
};

export default Image;
