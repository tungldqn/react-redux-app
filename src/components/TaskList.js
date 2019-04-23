import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'filterStatus'){
      value = parseInt(value);
    }
    this.setState({
      [name]: value
    });
    this.props.handleFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus,
    )
  }
  render(){
    let { tasks } = this.props;
    let elmTaskItem = tasks.map((task, index) => <TaskItem key={task.id} task={task} index={index} deleteTaskItem={this.props.deleteTaskItem} updateStatus={this.props.updateStatus} editTaskItem={this.props.editTaskItem} />)
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
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, null)(TaskList)