import * as types from '../constants/ActionTypes';

let initialState = {
  id: '',
  name: '',
  status: false
};

let editTask = (state = initialState, action) => {
  switch(action.type){
    case types.EDIT_TASK:
      return action.task
    case types.CLEAR_FORM:
      state = {
        id: '',
        name: '',
        status: false
      }
      return state
    case types.UPDATE_STATUS:
      state = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status
      }
      return state
    default: return state
  }
}

export default editTask