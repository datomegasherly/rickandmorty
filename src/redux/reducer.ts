import { types } from "./actionTypes";

interface state {
  list: Array<{}>;
}

const initialState: state = {
  list: [],
};

const reducer = (
  state: state = initialState,
  action: { type: types; payload: any }
) => {
  switch (action.type) {
    case types.FETCH:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
