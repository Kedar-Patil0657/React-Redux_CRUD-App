const add = (val) => {
  return {
    type: "add",
    payload: val,
  };
};

const subtract = (num) => {
  return {
    type: "subtract",
    payload: num,
  };
};

const update = (id) => {
  return {
    type: "update",
    payload: id,
  };
};
export { add, subtract, update };
