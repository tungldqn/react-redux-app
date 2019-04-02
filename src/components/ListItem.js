import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.updateStatus = this.updateStatus.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  updateStatus(){
    this.props.updateStatus(this.props.task.id);
  }
  deleteItem(){
    this.props.deleteItem(this.props.task.id);
  }
  editItem(){
    this.props.editItem(this.props.task.id);
  }
  render(){
    let { index, task } = this.props;
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ task.name }</td>
        <td className='text-center'>
          <span className={task.status ? 'label label-success' : 'label label-danger'} onClick={this.updateStatus}>{task.status ? 'Active' : 'Disable'}</span>
        </td>
        <td className='text-center'>
          <button type='button' className='btn btn-warning mr-5' onClick={this.editItem}>
            <span className='fa fa-pencil mr-5'></span>Edit
          </button>
          <button type='button' className='btn btn-danger' onClick={this.deleteItem}>
            <span className='fa fa-trash mr-5'></span>Delete
          </button>
        </td>
      </tr>
    )
  }
} 

export default ListItem