import React, { Component } from 'react';
import ListItem from './ListItem'

class List extends Component {
  render(){
    let { tasks } = this.props;
    let elmTaskList = tasks.map((task, index) => <ListItem key={task.id} index={index} task={task} updateStatus={this.props.updateStatus} deleteItem={this.props.deleteItem} editItem={this.props.editItem} />)
    return (
      <table className='table table-bordered table-hover mt-15'>
        <thead>
          <tr>
            <th className='text-center'>STT</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Status</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type='text' className='form-control' name='filterName' />
            </td>
            <td>
              <select className='form-control' name='filterStatus'>
                <option value={-1}>All</option>
                <option value={0}>Disable</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          { elmTaskList }
        </tbody>
      </table>
    )
  }
} 

export default List