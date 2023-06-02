import { types } from "./actionTypes";
import { request } from "graphql-request";
import { endpoint } from "@config";
import { character, characterInterface, charactersList } from "@queries";
import { AppDispatch, RootState } from "@store";

/** fetch list of characters by requested page number */
export const fetch_data =
  (page: number = 1) =>
  async (dispatch: AppDispatch, getState: Function) => {
    dispatch({
      type: types.LOADING,
      payload: true,
    });
    const state: RootState = getState();
    // move page to first if page is higher than pages(fetched from server) or if page is less than 1
    page = page > state.info.pages || page < 1 ? 1 : page;
    // check if data fetched before in a certain page to prevent reload
    const loaded = state.loadedList[page - 1];
    if (loaded) {
      dispatch({
        type: types.FETCH,
        payload: { results: loaded, page },
      });
      return;
    }
    const CHARACTER_LIST = charactersList(
      page,
      state.info.count ? false : true
    );
    const response: { characters?: [] } = await request(
      endpoint,
      CHARACTER_LIST
    );
    dispatch({
      type: types.FETCH,
      payload: { ...response.characters, page },
    });
  };

export const is_loading = (loading: boolean) => (dispatch: AppDispatch) => {
  dispatch({
    type: types.LOADING,
    payload: loading,
  });
};

export const fetch_one = async (id: string) => {
  const CHARACTER = character(id);
  const response: { character: characterInterface } = await request(
    endpoint,
    CHARACTER
  );
  return response;
};
