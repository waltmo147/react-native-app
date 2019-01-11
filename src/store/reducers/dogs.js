// implementation for each reducers

import {
  ADD_DOG,
  DELETE_DOG,
} from "../actions/actionTypes";

const initialState = {
  dogs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG:

      // always return a new state, not changing the old state, because of the immutablility
      return {
        ...state,
        dogs: state.dogs.concat({
          key: Math.random(),
          name: action.dogName,
          image: {
            uri:
              "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=animal-chihuahua-cute-39317.jpg&fm=jpg"
          }
        })
      };
    case DELETE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter(dog => {
          return dog.key !== action.dogKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;
