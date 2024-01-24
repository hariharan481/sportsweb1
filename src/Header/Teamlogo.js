import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "../../src/styles/Teamelogo.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";

export default function TeamLogo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="animated-bacground"
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Container>
          <Toolbar>
            {" "}
            <Typography
              color={"gray"}
              variant="body1"
              fontWeight={700}
              flexDirection={"column"}
            >
              Teams <TrendingUpIcon />
            </Typography>{" "}
            <img
              className="img1-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t3.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t7.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t91.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t94.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t3.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t36.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t7.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t8.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t94.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t3.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t31.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t7.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t91.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t94.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t14.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t17.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t17.png"
            ></img>
            <img
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t6.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t14.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t3.png"
            ></img>
            <img
              className="img-hover"
              style={{
                height: "35px",
                marginRight: "15px",
              }}
              src="https://resources.premierleague.com/premierleague/badges/50/t7.png"
            ></img>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
