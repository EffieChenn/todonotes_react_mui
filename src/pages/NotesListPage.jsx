import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => console.error("error：", error));
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vh",
          margin: "50px auto 0",
          color: "#7B7B7C",
        }}
      >
        <Typography variant="h3">&#9782; Notes</Typography>
        <Typography variant="h3">{notes.length}</Typography>
      </Box>
      <Box sx={{ margin: "5vh auto", width: "80vh" }}>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} index={index} />
        ))}
      </Box>
      <Link to={"/note/new"}>
        <AddIcon
          sx={{
            position: "fixed",
            bottom: "13vh",
            right: "45vh",
            width: "80px",
            height: "80px",
            borderRadius: "999em",
            backgroundColor: "#F7AC25",
            color: "#FAFBFD",
            ":hover": {
              backgroundColor: "#FDE28D",
              color: "#FAFBFD",
            },
          }}
        />
      </Link>
    </Container>
  );
};

export default NotesListPage;
