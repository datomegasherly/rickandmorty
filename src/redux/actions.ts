import { types } from "./actionTypes";
import { request } from "graphql-request";
import { endpoint } from "@config";
import { charactersList } from "@queries";
import { AppDispatch } from "@store";

/** fetch list of characters by requested page number */
export const fetch_data =
  (page: number = 1) =>
  async (dispatch: AppDispatch) => {
    const CHARACTER_LIST = charactersList(page);
    const response: { characters?: [] } = await request(
      endpoint,
      CHARACTER_LIST
    );
    dispatch({
      type: types.FETCH,
      payload: response.characters,
    });
  };
