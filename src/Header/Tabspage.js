import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Fixture } from "../component/Fixtures/Fixture";

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  display: "flex",
  justifyContent: "center",
});

const StyledTab = styled(Tab)(({ theme }) => ({
  position: "relative",
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "none",
  transition: "color 0.3s",
  "&.Mui-selected": {
    transition: "border-bottom 0.3s, color 0.3s",
    color: theme.palette.primary.main,
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 18,
      width: "60px",
      height: "4px",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      transform: "scaleX(1)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  "&:not(.Mui-selected)": {
    borderBottom: "2px solid transparent",
    "&:hover": {
      content: '""',

      transform: "scaleX(1)",
      transition: "transform 0.3s ease-in-out",
      transition: "border-bottom 0.3s, color 0.3s",
      color: theme.palette.primary.dark,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 18,
      width: "69%",
      height: "4px",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease-in-out",
    },
  },
}));

const TabPanel = ({ value, index, children }) => (
  <div hidden={value !== index}>
    <Box p={3}>{children}</Box>
  </div>
);

const AnimatedTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <StyledTabs value={value} onChange={handleChange} centered>
        <StyledTab
          sx={{
            width: "20px",
          }}
          disableFocusRipple
          disableTouchRipple
          label="Home"
        />
        <StyledTab disableFocusRipple disableTouchRipple label="Fixtures" />
        <StyledTab disableFocusRipple disableTouchRipple label="Result" />
        <StyledTab disableFocusRipple disableTouchRipple label="Teams" />
        <StyledTab disableFocusRipple disableTouchRipple label="Tables" />
        <StyledTab disableFocusRipple disableTouchRipple label="Bookings" />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <h2>Tab 1 Content</h2>
        <p>This is the content for Tab 1.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Fixture />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Tab 3 Content</h2>
        <p>This is the content for Tab 3.</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>Tab 4 Content</h2>
        <p>This is the content for Tab 4.</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h2>Tab 5 Content</h2>
        <p>This is the content for Tab 5.</p>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h2>Tab 6 Content</h2>
        <p>This is the content for Tab 6.</p>
      </TabPanel>
    </Box>
  );
};

export default AnimatedTabs;
