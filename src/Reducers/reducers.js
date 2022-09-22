const intialState = [{ name: "Lord Shiva", surname: "Adiyogi statue" }];
const counter = (state = intialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "subtract":
      return state.filter((val, ind) => {
        return ind !== action.payload;
      });
    case "update":
      return state.map((ele, ind) => {
        if (ind === parseInt(action.payload.id)) {
          return { name: action.payload.name, surname: action.payload.surname };
        } else {
          return ele;
        }
      });
    default:
      return state;
  }
};

export default counter;
