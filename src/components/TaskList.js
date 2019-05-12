import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import * as actions from '../actions/index';

class TaskList extends Component {
  constructor(){
    super();
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }
  handleChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'filterStatus'){
      value = parseInt(value);
    }
    this.setState({
      [name]: value
    });
    const filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    };
    this.props.filterTask(filter)
  }
  render(){
    let { tasks, filterTable, searchTable, sortTable } = this.props;
    if( filterTable.name ){
      tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filterTable.name) !== -1 )
    }
    if( searchTable ){
      tasks = tasks.filter(task => task.name.toLowerCase().indexOf(searchTable) !== -1 )
    }
    tasks = tasks.filter(task => {
      if ( filterTable.status === -1 ){
        return task;
      } else {
        return task.status === ( filterTable.status === 1 ? true : false );
      }
    })
    if (sortTable.by === 'name'){
      tasks.sort((a ,b) => {
        if ( a.name < b.name ) return -sortTable.value;
        else if ( a.name > b.name ) return sortTable.value;
        return 0;
      })
    } else {
      tasks.sort((a ,b) => {
        if ( a.status < b.status ) return -sortTable.value;
        else if ( a.status > b.status ) return sortTable.value;
        return 0;
      })
    }
    let elmTaskItem = tasks.map((task, index) => <TaskItem key={task.id} task={task} index={index} />)
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
              <input type='text' className='form-control' name='filterName' value={this.state.filterName} onChange={this.handleChange} />
            </td>
            <td>
              <select className='form-control' name='filterStatus' value={this.state.filterStatus} onChange={this.handleChange}>
                <option value={-1}>All</option>
                <option value={0}>Disable</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTaskItem}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    tasks: state.tasks,
    filterTable: state.filterTable,
    searchTable: state.searchTable,
    sortTable: state.sortTable
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterTask: filter => {
      dispatch(actions.filterTask(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)