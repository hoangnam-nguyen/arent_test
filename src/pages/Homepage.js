import React from 'react';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import Infobox from '../components/Infobox/Infobox';

import body_record from "../assets/images/MyRecommend-1.jpg";
import my_exercise from "../assets/images/MyRecommend-2.jpg";
import my_diary from "../assets/images/MyRecommend-3.jpg";
import Chart from '../components/Chart/Chart';
import Image from '../components/Image/Image';
import Hex from '../components/Hex/Hex';

import I01 from "../assets/images/l01.jpg";
import I02 from "../assets/images/l02.jpg";
import I03 from "../assets/images/l03.jpg";
import m01 from "../assets/images/m01.jpg";
import m02 from "../assets/images/m02.jpg";
import m03 from "../assets/images/m03.jpg";
import s01 from "../assets/images/s01.jpg";
import d01 from "../assets/images/d01.jpg";
import d02 from "../assets/images/d02.jpg";

import h01 from "../assets/images/component_hex.png";
import h02 from "../assets/images/component_hex-1.png";
import h03 from "../assets/images/component_hex-2.png";
import h04 from "../assets/images/component_hex-3.png";
import Stats from '../components/Stats/Stats';
const dataChart = [
  { x: 1, y: 64 },
  { x: 2, y: 61 },
  { x: 3, y: 64 },
  { x: 4, y: 62 },
  { x: 5, y: 64 },
  { x: 6, y: 60 },
  { x: 7, y: 58 },
  { x: 8, y: 59 },
  { x: 9, y: 53 },
  { x: 10, y: 54 },
  { x: 11, y: 61 },
  { x: 12, y: 60 },
  { x: 13, y: 55 },
  { x: 14, y: 60 },
  { x: 15, y: 56 },
  { x: 16, y: 60 },
  { x: 17, y: 59.5 },
  { x: 18, y: 63 },
  { x: 19, y: 58 },
  { x: 20, y: 54 },
  { x: 21, y: 59 },
  { x: 22, y: 64 },
  { x: 23, y: 59 },
];

const dataImage = [
  {
    url: I01,
    date: "05.21.Morning",
  },
  {
    url: I02,
    date: "05.21.Lunch",
  },
  {
    url: I03,
    date: "05.21.Dinner",
  },
  {
    url: m01,
    date: "05.21.Snack",
  },
  {
    url: m02,
    date: "05.20.Morning",
  },
  {
    url: m03,
    date: "05.20.Lunch",
  },
  {
    url: s01,
    date: "05.20.Dinner",
  },
  {
    url: d01,
    date: "05.21.Snack",
  },
]

const dataHex = [
  {
    url: h01,
  },
  {
    url: h02,
  },
  {
    url: h03,
  },
  {
    url: h04,
  },
]


const Homepage = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stack direction="row">
        <Stats imageURL={d02} progress={75} target={"05/21"} />
        <Chart data={dataChart} />
      </Stack>
      <Grid container spacing={2} mt="22px">
        {dataHex?.map(image => (
          <Grid
            item
            xs={3}
            key={image.date}
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Hex imageURL={image.url} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} mt="22px">
        {dataImage?.map(image => (
          <Grid item xs={3} key={image.date}>
            <Image imageURL={image.url} button={image.date} />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt="40px">
        <Button variant="contained" color="primary" sx={{ width: "296px", height: "56px", fontSize: "26px" }}>記録をもっと見る</Button>
      </Box>
    </Container >
  );
}

export default Homepage