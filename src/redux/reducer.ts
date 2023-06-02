import { types } from "./actionTypes";

interface state {
  list: Array<{
    id: string;
    gender: string;
    image: string;
    name: string;
    species: string;
    status: string;
    type: string;
  }>;
  page: number;
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
}

const initialState: state = {
  list: [],
  page: 1,
  info: {
    count: 0,
    pages: 1,
    next: null,
    prev: null,
  },
};

const reducer = (state: state = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH:
      return {
        ...state,
        list: action.payload.results,
        info: {
          ...state.info,
          count: action.payload.info.count,
          pages: action.payload.info.pages,
          next: action.payload.info.next,
          prev: action.payload.info.prev,
        },
      };
    default:
      return state;
  }
};

export default reducer;
