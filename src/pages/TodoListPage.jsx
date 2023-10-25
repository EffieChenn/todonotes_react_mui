import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import TaskItem from "../components/TaskItem";
import AddTask from "../components/AddTask";

const TodoListPage = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        console.log("DATA:", data);
      })
      .catch((error) => console.error("error：", error));
  }, []);

  const handleCreateTask = () => {
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTask }),
    }).then(() => {
      fetch("/api/tasks")
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
          console.log("NEW DATA", data);
        });
      setNewTask("");
      window.location.reload();
    });
  };

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
        <Typography variant="h3">&#x2713; TODO List</Typography>
        <Typography variant="h3">{tasks.length}</Typography>
      </Box>
      <Box
        sx={{
          margin: "5vh auto",
          width: "80vh",
        }}
      >
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          handleCreateTask={handleCreateTask}
        />
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} setTasks={setTasks} />
        ))}
      </Box>
    </Container>
  );
};

export default TodoListPage;
