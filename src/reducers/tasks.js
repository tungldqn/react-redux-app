import * as types from '../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('tasks'));
let initialState = data ? data : [];

let findIndex = (tasks, id) => {
  let result;
  tasks.forEach((task, index) => {
    if(task.id === id){
      result = index
    }
  })
  return result;
}

let tasks = (state = initialState, action) => {
  switch(action.type){
    case types.SUBMIT_FORM:
      const task = {
        id:  action.task.id,
        name: action.task.name,
        status: action.task.status
      };
      if(!task.id){
        task.id = Date.now();
        state.push(task);
      } else {
        const index = findIndex(state, action.task.id);
        state[index] = task;
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]      
    case types.UPDATE_STATUS:
      action.task.status = !action.task.status;
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]
    case types.DELETE_TASK:
      state = state.filter(value => {
        return value.id !== action.task.id
      })
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]
    default: return state
  }
}

export default tasks