import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayForm: false,
      tasks: [],
      taskEdit: null,
      filterName: null,
      filterStatus: -1,
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    }
    this.openTaskForm = this.openTaskForm.bind(this);
    this.closeTaskForm = this.closeTaskForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTaskItem = this.deleteTaskItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.editTaskItem = this.editTaskItem.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  openTaskForm(){
    this.setState({
      displayForm: true,
      taskEdit: null
    })
  }
  closeTaskForm(){
    this.setState({
      displayForm: false
    })
  }
  handleSubmit(data){
    let { tasks } = this.state;
    if(data.id === ''){
      data.id = Date.now();
      tasks.push(data);
    } else {
      let index = this.findIndex(data.id);
      tasks[index] = data
    }
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  componentWillMount(){
    if (localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }
  deleteTaskItem(id){
    let { tasks } = this.state;
    let index = this.findIndex(id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  updateStatus(id){
    let { tasks } = this.state;
    let index = this.findIndex(id);
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  editTaskItem(id){
    this.openTaskForm();
    let { tasks } = this.state;
    let index = this.findIndex(id);
    this.setState({
      taskEdit: tasks[index]
    })
  }
  handleFilter(filterName, filterStatus){
    this.setState({
      filterName: filterName.toLowerCase(),
      filterStatus: filterStatus
    })
  }
  handleSearch(keyword){
    this.setState({
      keyword: keyword
    })
  }
  handleSort(sortBy, sortValue){
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }
  findIndex(id){
    let { tasks } = this.state;
    let result;
    tasks.forEach((task, index) => {
      if(task.id === id){
        result = index
      }
    })
    return result;
  }
  render(){
    let { tasks, displayForm, taskEdit, filterName, filterStatus, keyword, sortBy, sortValue } = this.state;
    let elmTaskForm = displayForm ? <TaskForm closeTaskForm={this.closeTaskForm} handleSubmit={this.handleSubmit} taskEdit={taskEdit} /> : null;
    if(filterName){
      tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filterName) !== -1 )
    }
    if(keyword){
      tasks = tasks.filter(task => task.name.toLowerCase().indexOf(keyword) !== -1 )
    }
    tasks = tasks.filter(task => {
      if ( filterStatus === -1 ){
        return task;
      } else {
        return task.status === ( filterStatus === 1 ? true : false );
      }
    })
    if (sortBy === 'name'){
      tasks.sort((a ,b) => {
        if ( a.name < b.name ) return -sortValue;
        else if ( a.name > b.name ) return sortValue;
        return 0;
      })
    } else {
      tasks.sort((a ,b) => {
        if ( a.status < b.status ) return -sortValue;
        else if ( a.status > b.status ) return sortValue;
        return 0;
      })
    }
    return (
      <div className='container'>
        <div className='text-center'>
          <h1>Task management</h1><hr />
        </div>
        <div className='row'>
          <div className={displayForm ? 'col-md-4' : null}>
            {elmTaskForm}
          </div>
          <div className={displayForm ? 'col-md-8' : null}>
            <button type='button' className='btn btn-primary' onClick={this.openTaskForm}>
              <span className='fa fa-plus mr-5'></span>Add task
            </button>
            <TaskControl handleSearch={this.handleSearch} handleSort={this.handleSort} sortBy={sortBy} sortValue={sortValue} />
            <TaskList deleteTaskItem={this.deleteTaskItem} updateStatus={this.updateStatus} editTaskItem={this.editTaskItem} handleFilter={this.handleFilter} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
