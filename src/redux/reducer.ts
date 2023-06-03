import { types } from "./actionTypes";

interface list {
  id: string;
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
}

interface state {
  list: Array<list>;
  page: number;
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
  loadedList: Array<list>;
  loading: boolean;
}

export const initialState: state = {
  list: [],
  loadedList: [],
  page: 1,
  info: {
    count: 0,
    pages: 1,
    next: null,
    prev: null,
  },
  loading: true,
};

const reducer = (state: state = initialState, action: any) => {
  switch (action.type) {
    case types.FETCH:
      // just to make sure if loadedlist changed or not, if change occured then loadedlist will be updated
      const fetchPage = state.loadedList;
      const changedLoadedList = fetchPage[action.payload.page - 1]
        ? false
        : true;
      fetchPage[action.payload.page - 1] = action.payload.results;
      return {
        ...state,
        loading: false,
        list: action.payload.results,
        ...(changedLoadedList ? { loadedList: fetchPage } : {}),
        page: action.payload.page,
        ...(action.payload.info
          ? {
              info: {
                ...state.info,
                count: action.payload.info.count,
                pages: action.payload.info.pages,
                next: action.payload.info.next,
                prev: action.payload.info.prev,
              },
            }
          : {}),
      };
    case types.LOADING:
      return { ...state, loading: action.payload };
    // reset list and loadedList when search occured
    case types.SEARCH:
      return {
        ...state,
        list: [],
        loadedList: [],
        page: 1,
        info: { ...state.info, count: 0, pages: 1, next: null, prev: null },
      };
    default:
      return state;
  }
};

export default reducer;
