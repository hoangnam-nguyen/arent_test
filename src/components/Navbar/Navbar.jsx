import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  styled,
  Toolbar,
  Typography,
  Grow,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import logo from "../../assets/images/logo.png";
import icon_menu from "../../assets/images/icon_menu.png";
import icon_challenge from "../../assets/images/icon_challenge.png";
import icon_info from "../../assets/images/icon_info.png";
import icon_memo from "../../assets/images/icon_memo.png";
import icon_close from "../../assets/images/icon_close.png";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = ({ setMode }) => {
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grow in style={{ transformOrigin: "0 0 0" }}>
      <AppBar
        sx={{
          height: "65px",
          bgcolor: "#414141",
        }}
        position="sticky"
      >
        <StyledToolbar>
          <Link to="/">
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: "fit-content", height: 64 }} src={logo} />
            </Box>
          </Link>
          <Link
            to="/user"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={icon_memo}
                variant="square"
              />
              <Typography
                variant="h6"
                color={location?.pathname === "/user" ? "#FF963C" : "white"}
              >
                自分の記録
              </Typography>
            </IconButton>
          </Link>
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={icon_challenge}
              variant="square"
            />
            <Typography variant="h6" color="white">
              チャレンジ
            </Typography>
          </IconButton>
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={icon_info}
              variant="square"
            />
            <Typography variant="h6" color="white">
              お知らせ
            </Typography>
          </IconButton>
          <IconButton
            sx={{ p: "10px" }}
            aria-label="menu"
            onClick={handleClick}
          >
            {Boolean(anchorEl) ? (
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={icon_close}
                variant="square"
              />
            ) : (
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={icon_menu}
                variant="square"
              />
            )}
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: "#777777",
                width: 280,
                color: "#fff",
              },
            }}
          >
            <Link
              to="/user"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <MenuItem onClick={handleClose} sx={{ height: 72 }}>
                自分の記録
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ height: 72 }}>
              体重グラフ
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ height: 72 }}>
              目標
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ height: 72 }}>
              選択中のコース
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ height: 72 }}>
              コラム一覧
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose} sx={{ height: 72 }}>
              設定
            </MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </Grow>
  );
};

export default Navbar;
