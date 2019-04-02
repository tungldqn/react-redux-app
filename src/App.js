import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Course from './components/Course';
// import Lifecycle from './components/Lifecycle';
// import Demo from './components/Demo';
// import Header from './components/header';
// import Product from './components/product';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import List from './components/List'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayForm: false,
      tasks: [],
      taskEdit: null
    }
    this.openTaskForm = this.openTaskForm.bind(this);
    this.closeTaskForm = this.closeTaskForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  openTaskForm(){
    this.setState({
      displayForm: true
    })
  }
  closeTaskForm(){
    this.setState({
      displayForm: false
    })
  }
  componentWillMount(){
    if ( localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }
  s4(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  generateId(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  handleSubmit(data){
    let { tasks } = this.state;
    data.id = this.generateId();
    tasks.push(data);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  updateStatus(id){
    let { tasks } = this.state;
    let index = this.findIndex(id);
    tasks[index].status = !tasks[index].status
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  deleteItem(id){
    let { tasks } = this.state;
    let index = this.findIndex(id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.closeTaskForm();
  }
  editItem(id){
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEdit = tasks[index];
    this.setState({
      taskEdit: taskEdit
    })
    this.openTaskForm();
  }
  findIndex(id){
    let { tasks } = this.state;
    let result;
    tasks.forEach((task, index) => {
      if ( id === task.id ){
        result = index;
      }
    })
    return result;
  }
  render(){
    let { displayForm, tasks, taskEdit }= this.state;
    let elmTaskForm = displayForm ? <TaskForm closeTaskForm={this.closeTaskForm} handleSubmit={this.handleSubmit} taskEdit={taskEdit} /> : null;
    return (
      <div className='container'>
        <div className='text-center'>
          <h1>Task management</h1><hr />
        </div>
        <div className='row'>
          <div className={displayForm ? 'col-xs-4' : null}>
            {elmTaskForm}
          </div>
          <div className={displayForm ? 'col-xs-8' : 'col-xs-12'}>
            <button type='button' className='btn btn-primary mr-5' onClick={this.openTaskForm}>
              <span className='fa fa-plus mr-5'></span>Add task
            </button>
            <Control />
            <List tasks={tasks} updateStatus={this.updateStatus} deleteItem={this.deleteItem} editItem={this.editItem} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
