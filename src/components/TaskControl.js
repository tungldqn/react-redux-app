import React, { Component } from 'react';
import TaskSearch from './TaskSearch'
import TaskSort from './TaskSort'

class TaskControl extends Component {
  render(){
    return (
      <div className='row mt-15'>
        <TaskSearch handleSearch={this.props.handleSearch} />
        <TaskSort handleSort={this.props.handleSort} sortBy={this.props.sortBy} sortValue={this.props.sortValue} />
      </div>
    )
  }
} 

export default TaskControl