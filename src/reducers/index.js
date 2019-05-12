import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayForm';
import editTask from './editTask';
import filterTable from './filterTable';
import searchTable from './searchTable';
import sortTable from './sortTable'

const myReducer = combineReducers({
  tasks,
  displayForm,
  editTask,
  filterTable,
  searchTable,
  sortTable
})

export default myReducer