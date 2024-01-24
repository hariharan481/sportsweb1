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

import cs from "../assets/cs.png";
import delhi from "../assets/delhi.png";
import kings from "../assets/kings.png";
import mi from "../assets/mi.png";
import kkr from "../assets/kkr.png";
import rcb from "../assets/rcb.png";
import rr from "../assets/rr.png";
import srh from "../assets/srh.png";

export default function TeamLogo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="animated-background" // Add your animated background class here
        position="static"
        sx={{
          backgroundColor: "transparent", // Set the background color to transparent
          boxShadow: "none", // Remove the default box shadow
        }}
      >
        {/* Wave effect elements */}
        <div className="wave"></div>
        <div
          className="wave"
          style={{ bottom: "-1.25em", animationDuration: "18s" }}
        ></div>
        <div
          className="wave"
          style={{ bottom: "-2.5em", animationDuration: "20s", opacity: 0.9 }}
        ></div>

        {/* Toolbar content */}
        <Toolbar
          sx={{
            alignItems: "center",
          }}
        >
          {/* Your existing content */}
          {/* ... */}

          {/* Teams Typography */}
          <Typography
            color={"gray"}
            variant="body1"
            fontWeight={700}
            flexDirection={"column"}
          >
            Teams <TrendingUpIcon />
          </Typography>

          <img
            className="img1-hover"
            style={{
              height: "35px",
              marginRight: "15px",
            }}
            src={cs}
          ></img>
          <img
            className="img-hover"
            style={{
              height: "35px",
              marginRight: "15px",
            }}
            src={srh}
          ></img>
          <img
            className="img-hover"
            style={{
              height: "35px",
            }}
            src={rcb}
          ></img>

          <img
            style={{
              height: "35px",
              marginRight: "15px",
            }}
            src={kings}
          ></img>
          <img
            style={{
              height: "35px",
              marginRight: "15px",
            }}
            src={kkr}
          ></img>
          <img
            style={{
              height: "35px",
              marginRight: "15px",
            }}
            src={delhi}
          ></img>
          {/* Team logos */}
          {/* ... */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
