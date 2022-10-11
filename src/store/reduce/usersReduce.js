import { ADD_USER } from "../constants";

//1. Tạo state
export const initUsers = JSON.parse(localStorage.getItem("users")) || [];

//2. Tạo reducer
const usersReducer = (state, action) => {
  let newState = {};

  switch (action.type) {
    case ADD_USER: {
          newState = [...state, action.payload];
        break;
    }
    
    default: {
      newState = {...state};
      break;
    }
  }

  localStorage.setItem("users", JSON.stringify(newState));
  return newState;
};

export default usersReducer;
