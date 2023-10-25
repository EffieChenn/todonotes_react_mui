import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, CssBaseline } from "@mui/material";

const DefaultLayout = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      {props.children}
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
