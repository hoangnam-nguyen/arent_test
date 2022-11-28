import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const DiaryBox = () => {
  return (
    <Card sx={{ maxWidth: 231, border: "1px solid black" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          2021.05.21
        </Typography>
        <Typography variant="h5" component="div">
          23:25
        </Typography>
        <Typography variant="body2">
          私の日記の記録が一部表示されます。
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DiaryBox;
