import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Infobox from '../components/Infobox/Infobox';

import body_record from "../assets/images/MyRecommend-1.jpg";
import my_exercise from "../assets/images/MyRecommend-2.jpg";
import my_diary from "../assets/images/MyRecommend-3.jpg";
import Chart from '../components/Chart/Chart';
import DiaryBox from '../components/DiaryBox/DiaryBox';

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

const dataDiary = [
    1, 2, 3, 4, 5, 6, 7, 8
]

const User = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
    }, [screenWidth])

    return (
        <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            width="960px"
        >
            <Stack direction="row" justifyContent="space-between" mt="56px" mb="56px">
                <Infobox imageURL={body_record} text={"body record"} button={"自分のカラダの記録"} />
                <Infobox imageURL={my_exercise} text={"my exercise"} button={"自分の運動の記録"} />
                <Infobox imageURL={my_diary} text={"my diary"} button={"自分の日記"} />
            </Stack>
            <Chart data={dataChart} title={"BODY RECORD - 2021.05.21"} exportable />
            <Typography sx={{ fontFamily: 'Inter', fontSize: "22px", mt: "22px" }}>MY DIARY</Typography>
            <Grid container spacing={2}>
                {dataDiary?.map(image => (
                    <Grid item xs={3} key={image.date}>
                        <DiaryBox />
                    </Grid>
                ))}
            </Grid>
            <Box textAlign="center" mt="40px">
                <Button variant="contained" color="primary" sx={{ width: "296px", height: "56px", fontSize: "26px" }}>記録をもっと見る</Button>
            </Box>
        </Container >
    );
}

export default User