import React, { useState, useEffect, memo } from "react";
import "./style.sass";

import { TODO_COLOR } from "../../../constants/todoConstants";

import useLocalStorage from "../../../hooks/useLocalStorage";
export default memo(function TodoColorPicker({ liftingColor }) {
  const [color, setColor] = useLocalStorage(`color`, TODO_COLOR);
  const handleChange = (e) => setColor(e.target.value);

  useEffect(() => {
    liftingColor(color);
  }, [color]);

  const colorTitle = () => <h3>Color:{color}</h3>;

  return (
    <div className="todo__colorPicker">
      {colorTitle()}
      <label htmlFor="">
        Select color:{" "}
        <input type="color" defaultValue={color} onChange={handleChange} />
      </label>
    </div>
  );
});
