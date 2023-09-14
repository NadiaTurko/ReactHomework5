import { useState, useEffect } from "react";
import { FILTER_TODO_ALL, TODO_COLOR } from "../constants/todoConstants";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
