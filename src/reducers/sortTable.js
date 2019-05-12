import * as types from '../constants/ActionTypes';

let initialState = {
  by: 'name',
  value: 1
};

let sortTable = (state = initialState, action) => {
  switch(action.type){
    case types.SORT_TABLE:
      state = action.sort;
      return state  
    default: return state
  }
}

export default sortTable