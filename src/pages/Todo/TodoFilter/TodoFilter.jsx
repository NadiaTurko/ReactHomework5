import React, { useEffect } from "react";
import "./style.sass";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  FILTER_TODO_ALL,
  FILTER_TODO_COMPLETED,
  FILTER_TODO_PROGRESS,
} from "../../../constants/todoConstants";

import useLocalStorage from "../../../hooks/useLocalStorage";

function TodoFilter({ liftingFilter }) {
  const [filter, setFilter] = useLocalStorage(`filter`, FILTER_TODO_ALL);

  const handleFilter = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <div className="todo__filter">
      <FormControl sx={{ m: 0, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Filter todos
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filter}
          onChange={handleFilter}
          autoWidth
          label="Filter todos:">
          <MenuItem value={FILTER_TODO_ALL}>All</MenuItem>
          <MenuItem value={FILTER_TODO_COMPLETED}>Completed</MenuItem>
          <MenuItem value={FILTER_TODO_PROGRESS}>Progress</MenuItem>
        </Select>
      </FormControl>
      {/* <label htmlFor="">
        Filter todos:{" "}
        <select defaultValue={filter} onChange={handleFilter}>
          <option value={FILTER_TODO_ALL}>All</option>
          <option value={FILTER_TODO_COMPLETED}>Completed</option>
          <option value={FILTER_TODO_PROGRESS}>Progress</option>
        </select>
      </label> */}
    </div>
  );
}

export default TodoFilter;
