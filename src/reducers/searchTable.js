import * as types from '../constants/ActionTypes';

let initialState = '';

let searchTable = (state = initialState, action) => {
  switch(action.type){
    case types.SEARCH_TABLE:
      state = action.keyword;
      return state
    default: return state
  }
}

export default searchTable