import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

let getTime = (task) => {
  return new Date(task.created).toLocaleDateString();
};

const TaskItem = (props) => {
  const [completed, setCompleted] = useState(props.task?.completed);
  const [edited, setEdited] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(props.task?.title);

  // const [todo, setTodo] = useState({ title: "", completed: false });

  const updateTask = () => {
    fetch(`/api/tasks/${props.task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTask }),
    }).then(() => {
      fetch("/api/tasks")
        .then((response) => response.json())
        .then((data) => {
          console.log("UPDATE DATA", data);
          props.setTasks(data);
        });
    });
  };

  useEffect(() => {
    completeTask();
  }, [completed]);

  const completeTask = () => {
    fetch(`/api/tasks/${props.task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: props.task.title, completed: completed }),
    }).then(() => {
      fetch("/api/tasks")
        .then((response) => response.json())
        .then((data) => {
          console.log("COMPLETED DATA", data);
          props.setTasks(data);
        });
    });
  };

  const deleteTask = () => {
    fetch(`/api/tasks/${props.task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetch("/api/tasks")
        .then((response) => response.json())
        .then((data) => props.setTasks(data));
      window.location.reload();
    });
  };

  return (
    <>
      <Box
        m={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<TaskAltIcon />}
          checked={completed}
          onChange={() => {
            setCompleted(!completed);
          }}
        />
        <Box display={"flex"} alignItems={"center"}>
          {edited ? (
            <TextField
              variant="standard"
              color="warning"
              sx={{ width: "40vh" }}
              autoFocus={edited}
              value={updatedTask}
              onChange={(e) => {
                setUpdatedTask(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ width: "5vh", height: "3vh", mr: "1vh", mb: "5px" }}
                      onClick={() => {
                        updateTask();
                        setEdited(false);
                      }}
                    >
                      Submit
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <Typography
              sx={{
                mr: "2vh",
                fontSize: "24px",
                fontWeight: "700",
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {props.task?.title}
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary">
            {getTime(props.task)}
          </Typography>
        </Box>
        <span>
          <IconButton
            onClick={() => {
              setEdited(!edited);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
        </span>
      </Box>
      <Divider variant="middle" />
    </>
  );
};

export default TaskItem;
