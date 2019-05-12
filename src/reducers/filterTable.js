import * as types from '../constants/ActionTypes';

let initialState = {
  name: '',
  status: -1
};

let filterTable = (state = initialState, action) => {
  switch(action.type){
    case types.FILTER_TABLE:
      state = action.filter;
      return state  
    default: return state
  }
}

export default filterTable