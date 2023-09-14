import React from "react";
import "../TodoListItem/style.sass";

import ListItemButton from "@mui/material/ListItemButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  ITEM_COMPLETED,
  ITEM_PROGRESS,
} from "../../../../../constants/todoConstants";

export default function TodoListItem({
  item,
  handleItemCompleted,
  handleItemDelete,
}) {
  const itemClass = (item) => {
    const classes = [`list__item`];

    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);

    return classes.join(` `);
  };
  return (
    <ListItemButton
      sx={{ mb: 1 }}
      className={itemClass(item)}
      onClick={() => handleItemCompleted(item)}>
      <strong>{item.rating}</strong> {item.title}{" "}
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={(e) => handleItemDelete(e, item.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemButton>
  );
}
