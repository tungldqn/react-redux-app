import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskItem extends Component {
  editTaskItem = () => {
    this.props.openForm()
    this.props.editTask(this.props.task)
  }
  deleteTaskItem = () => {
    this.props.deleteTask(this.props.task);
    this.props.clearForm()
  }
  render(){
    let { index, task } = this.props;
    return (
      <tr>
        <td className='text-center'>{index + 1}</td>
        <td>{task.name}</td>
        <td className='text-center'>
          <span className={task.status ? 'label label-success' : 'label label-danger'} onClick={() => this.props.updateStatus(this.props.task)}>{task.status ? 'Active' : 'Disabled'}</span>
        </td>
        <td className='text-center'>
          <button type='button' className='btn btn-warning mr-5' onClick={this.editTaskItem}>
            <span className='fa fa-pencil mr-5'></span>Edit
          </button>
          <button type='button' className='btn btn-danger' onClick={this.deleteTaskItem}>
            <span className='fa fa-trash mr-5'></span>Delete
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStatus: task => {
      dispatch(actions.updateStatus(task))
    },
    deleteTask: id => {
      dispatch(actions.deleteTask(id))
    },
    openForm: () => {
      dispatch(actions.openForm())
    },
    clearForm: () => {
      dispatch(actions.clearForm())
    },
    editTask: task => {
      dispatch(actions.editTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)