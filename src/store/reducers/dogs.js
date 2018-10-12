import {
  ADD_DOG,
  DELETE_DOG,
  SELECT_DOG,
  DESELECT_DOG
} from "../actions/actionTypes";

const initialState = {
  dogs: [],
  selectedDog: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOG:
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
          return dog.key !== state.selectedDog.key;
        }),
        selectedDog: null
      };
    case SELECT_DOG:
      return {
        ...state,
        selectedDog: state.dogs.find(dog => {
          return dog.key === action.dogKey;
        })
      };
    case DESELECT_DOG:
      return {
        ...state,
        selectedDog: null
      };
    default:
      return state;
  }
};

export default reducer;
