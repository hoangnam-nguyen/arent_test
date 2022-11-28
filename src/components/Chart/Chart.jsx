import React from "react";
import { Box } from "@mui/material";
import CanvasJSReact from "../../assets/lib/canvasjs.react";
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ data, title, exportable }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: exportable,
    theme: "dark2",
    title: {
      text: title,
    },
    axisX: {
      suffix: "月",
      interval: 2,
    },
    data: [
      {
        type: "line",
        toolTipContent: "{x}月: {y}%",
        dataPoints: data,
      },
    ],
  };
  return (
    <Box sx={{ backgroundColor: "#414141", minWidth: "50vw" }}>
      <CanvasJSChart options={options} />
    </Box>
  );
};

export default Chart;
