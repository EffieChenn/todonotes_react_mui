import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const NotePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const noteId = params.id;

  const [note, setNote] = useState();

  useEffect(() => {
    let getNote = async () => {
      let response = await fetch(`/api/notes/${noteId}`);
      let data = await response.json();
      setNote(data);
    };

    getNote();
  }, [noteId]);

  const updatedNote = { body: note?.body };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("更新筆記時發生錯誤：", error));
  };

  const newNote = { body: note?.body };

  let createNote = async () => {
    fetch(`/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("創建新筆記時發生錯誤：", error));
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };
  let handleSubmit = () => {
    if (
      (noteId === "new" && note.body === "") ||
      (noteId !== "new" && note.body === "")
    ) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };
  return (
    <Container
      sx={{
        textAlign: "center",
        margin: "10vh auto",
      }}
    >
      <Box
        sx={{
          margin: "24px auto",
          width: "80vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={handleSubmit}>
          <ArrowBackIosNewIcon />
        </IconButton>
        {noteId !== "new" ? (
          <Button
            onClick={deleteNote}
            sx={{ color: "#F7AC25", fontSize: "18px", fontWeight: "700" }}
          >
            Delete
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            sx={{ color: "#F7AC25", fontSize: "18px", fontWeight: "700" }}
          >
            Done
          </Button>
        )}
      </Box>
      <TextField
        multiline
        rows={25}
        value={note?.body}
        sx={{ width: "80vh" }}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      />
    </Container>
  );
};

export default NotePage;
