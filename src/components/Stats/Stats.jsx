import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Stats = ({ imageURL, progress, target }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        width: "40vw",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={181}
          thickness={1}
          sx={{ color: "white" }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="white"
            sx={{ fontSize: "18px", fontWeight: 400 }}
          >{`${target}`}</Typography>
          <Typography
            variant="caption"
            component="div"
            color="white"
            sx={{ fontSize: "25px", fontWeight: 400 }}
          >{`${progress}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
