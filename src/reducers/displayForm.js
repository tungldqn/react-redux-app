import * as types from '../constants/ActionTypes';

let initialState = false;
let displayForm = (state = initialState, action) => {
  switch(action.type){
    case types.OPEN_FORM:
      return true
    case types.CLOSE_FORM:
      return false
    case types.EDIT_TASK:
      return true
    default: return state
  }
}

export default displayForm