import React, { useState, useRef } from "react";
import "./style.sass";

import { addTodoItem } from "../../../services/todoServices";

import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
// import Checkbox from "@mui/material/Checkbox";

function TodoForm({ liftingNewTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: true,
  });

  const inputTitle = useRef();

  const handleTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const handleCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.title) {
      inputTitle.current.focus();
      return;
    }
    (async () => {
      let addedTodo = await addTodoItem(newTodo);
      liftingNewTodo(addedTodo);
    })();
  };

  return (
    // <Box container spacing={2}>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="todoTitle">
    //       Todo title:{" "}
    //       <input
    //         placeholder="Add a task"
    //         type="text"
    //         id="todoTitle"
    //         defaultValue={newTodo.title}
    //         onChange={handleTitle}
    //         ref={inputTitle}
    //       />
    //     </label>
    //     <label htmlFor="todoCompleted">
    //       {" "}
    //       Todo completed:{" "}
    //       <Checkbox
    //         id="todoCompleted"
    //         defaultChecked={newTodo.completed}
    //         onChange={handleCompleted}
    //       />
    //     </label>
    //     <Button type="submit" variant="text" size="medium">
    //       <AddCircleIcon />
    //     </Button>
    //   </form>
    // </Box>
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add Todo"
          variant="outlined"
          value={newTodo.title}
          onChange={handleTitle}
          ref={inputTitle}
        />
        <FormGroup sx={{ mx: 3 }} variant="outlined">
          <FormControlLabel
            control={
              <Checkbox
                checked={newTodo.completed}
                onChange={handleCompleted}
                color="primary"
              />
            }
            label="Completed"
          />
        </FormGroup>
        <Box>
          <Button
            type="submit"
            variant="outlined"
            size="large"
            startIcon={<AddCircleIcon />}>
            Add
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default TodoForm;
