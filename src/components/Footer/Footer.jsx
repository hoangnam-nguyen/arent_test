import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        width: "100vw",
        height: "128px",
        bgcolor: "#414141",
        mt: "64px",
      }}
    >
      <BottomNavigationAction sx={{ color: "#fff" }} label="会員登録" />
      <BottomNavigationAction sx={{ color: "#fff" }} label="運営会社" />
      <BottomNavigationAction sx={{ color: "#fff" }} label="利用規約" />
      <BottomNavigationAction
        sx={{ color: "#fff" }}
        label="個人情報の取扱について"
      />
      <BottomNavigationAction
        sx={{ color: "#fff" }}
        label="特定商取引法に基づく表記"
      />
      <BottomNavigationAction sx={{ color: "#fff" }} label="お問い合わせ" />
    </BottomNavigation>
  );
};

export default Footer;
