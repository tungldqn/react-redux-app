import * as types from '../constants/ActionTypes'

export const submitForm = (task) => {
  return {
    type: types.SUBMIT_FORM,
    task
  }
}

export const openForm = () => {
  return {
    type: types.OPEN_FORM
  }
}

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}

export const clearForm = () => {
  return {
    type: types.CLEAR_FORM
  }
}

export const updateStatus = task => {
  return {
    type: types.UPDATE_STATUS,
    task
  }
}

export const editTask = task => {
  return {
    type: types.EDIT_TASK,
    task
  }
}

export const deleteTask = task => {
  return {
    type: types.DELETE_TASK,
    task
  }
}

export const filterTask = filter => {
  return {
    type: types.FILTER_TABLE,
    filter
  }
}

export const searchTask = keyword => {
  return {
    type: types.SEARCH_TABLE,
    keyword
  }
}

export const sortTask = sort => {
  return {
    type: types.SORT_TABLE,
    sort
  }
}