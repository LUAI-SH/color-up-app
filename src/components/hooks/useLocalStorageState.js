import { useState, useEffect } from "react";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const getData =  (key, defaultValue) => {
  let val;
  try {
    val = JSON.parse(window.localStorage.getItem(key));
    if (isEmpty(val)) val = defaultValue;
} catch (error) {
    val = defaultValue;
  }
  return val;
};

const UseLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(getData(key, defaultValue));
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default UseLocalStorageState;
