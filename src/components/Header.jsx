import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, fontWeight: "700" }}
        >
          TO-NOTES-DO
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/"
            sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
          >
            NOTES
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/todo"
            sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
          >
            TODO LIST
          </Link>
        </nav>
        <Button
          href="#"
          variant="outlined"
          sx={{
            my: 1,
            mx: 1.5,
            color: "#363636",
            border: "1px solid #363636",
            ":hover": {
              border: "1px solid #363636",
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
