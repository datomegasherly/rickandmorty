import { Dispatch } from "redux";
import { types } from "./actionTypes";

export const fetch_data = () => async (dispatch: Dispatch) => {
  dispatch({
    type: types.FETCH,
    payload: [],
  });
};
