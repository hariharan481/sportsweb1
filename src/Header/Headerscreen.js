import React from "react";
import Navbar from "./Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import TeamLogo from "./Teamlogo";
import Tabspage from "./Tabspage";
import CenteredTabs from "./Tabspage";

export const Headerscreen = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TeamLogo />
    
      <Navbar />
   <CenteredTabs/>
    </ThemeProvider>
  );
};
