import { Box, Button, TextField } from "@mui/material";
import React from "react";

const AddTask = (props) => {
  return (
    <Box sx={{ m: "16px", display: "flex", justifyContent: "space-between" }}>
      <TextField
        variant="standard"
        label="Add Task"
        color="warning"
        sx={{ width: "68vh", mr: "16px" }}
        value={props.newTask}
        onChange={(e) => {
          props.setNewTask(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="warning"
        onClick={props.handleCreateTask}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTask;
