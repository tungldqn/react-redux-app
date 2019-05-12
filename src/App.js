import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import * as actions from './actions/index';

class App extends Component {
  openForm = () => {
    this.props.openForm();
    this.props.clearForm();
  }
  render(){
    let { displayForm } = this.props;
    let elmTaskForm = displayForm ? <TaskForm /> : null;
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
            <button type='button' className='btn btn-primary' onClick={this.openForm}>
              <span className='fa fa-plus mr-5'></span>Add task
            </button>
            <TaskControl />
            <TaskList />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayForm: state.displayForm
  }
}
const mapDispatchToProps = dispatch => {
  return {
    openForm: () => {
      dispatch(actions.openForm())
    },
    clearForm: () => {
      dispatch(actions.clearForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
