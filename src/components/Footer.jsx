import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {" © "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://mui.com/">
        TO-NOTES-DO
      </Link>
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mb: 0,
          position: "sticky",
          mt: "auto",
          textAlign: "center",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            This is a task and notes management site.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
