import React, { memo } from "react";
import "./style.sass";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default memo(function TodoStatistics({ list = [] }) {
  return (
    <div className="todo__statistics">
      <FormControl sx={{ mb: 4, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Statistics
        </InputLabel>
      </FormControl>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          m: 0,
          p: 0,
          display: "flex",
        }}>
        <ListItem sx={{ m: 0 }}>
          <ListItemText primary="All:" secondary={list.length} />
        </ListItem>
        <ListItem sx={{ m: 0 }}>
          <ListItemText
            primary="Completed:"
            secondary={list.filter((item) => item.completed).length}
          />
        </ListItem>
        <ListItem sx={{ m: 0 }}>
          <ListItemText
            primary="In progress:"
            secondary={list.filter((item) => !item.completed).length}
          />
        </ListItem>
      </List>
    </div>
  );
});
