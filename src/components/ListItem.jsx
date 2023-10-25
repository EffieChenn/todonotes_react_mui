import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const cardSx = {
  margin: "12px auto",
  backgroundColor: "#FAFBFD",
  borderRadius: "30px",
  border: "2px solid #F2F2F2",
  boxShadow: "none",
  "&:hover": {
    border: "2px solid #DFE0E0",
    backgroundColor: "#FAFAFA",
  },
  ".MuiTypography-root": {
    paddingInline: "8vh",
  },
};

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

let getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

let getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", " ");
  content = content.replaceAll(title, "");

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`} style={{ textDecoration: "none" }}>
      <Card sx={cardSx}>
        <CardContent>
          <Typography sx={{ mb: 1.5, fontWeight: "700" }}>
            {/* {note.updated.substring(0, 10)} */}
            {getTitle(note)}
            {/* {note.body} */}
          </Typography>
          <Typography color="text.secondary">
            {/* {note.body.substring(0, 40)} */}
            <span>{getTime(note)}&nbsp;&nbsp;</span>
            {getContent(note)}
            {/* {note.body} */}
          </Typography>
          {/* <Typography variant="h5" component="div">
          {note.body.substring(0, 15) + "..."}
        </Typography> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListItem;
