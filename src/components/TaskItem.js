import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props){
    super(props);
    this.deleteTaskItem = this.deleteTaskItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.editTaskItem = this.editTaskItem.bind(this);
  }
  deleteTaskItem(){
    this.props.deleteTaskItem(this.props.task.id);
  }
  updateStatus(){
    this.props.updateStatus(this.props.task.id);
  }
  editTaskItem(){
    this.props.editTaskItem(this.props.task.id);
  }
  render(){
    let { index, task } = this.props;
    return (
      <tr>
        <td className='text-center'>{index + 1}</td>
        <td>{task.name}</td>
        <td className='text-center'>
          <span className={task.status ? 'label label-success' : 'label label-danger'} onClick={this.updateStatus}>{task.status ? 'Active' : 'Disabled'}</span>
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

export default TaskItem