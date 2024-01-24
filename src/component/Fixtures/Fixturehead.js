import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";

import "../../styles/fixtures.css";

import c1 from "../../assets/c1.png";
import React from "react";

export const Fixturehead = () => {
  return (
    <div className="fixture-head">
      <div className="fix-1">
        <div className="fix-container">
          <Typography variant="h5" color={"white"} fontWeight={700}>
            Sync/24 fixtures <ArrowForward />
          </Typography>
        </div>
      </div>
    </div>
  );
};
