import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskSort extends Component {
  render(){
    return (
      <div className='col-xs-6'>
        <div className='dropdown'>
          <button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown'>
           Sort <span className='fa fa-caret-square-o-down ml-5'></span>
          </button>
          <ul className='dropdown-menu'>
            <li onClick={() => this.props.sortTask({by: 'name', value: 1})}>
              <a href='#nameaz' role='button' className={this.props.sortTable.by === 'name' && this.props.sortTable.value === 1 ? 'sort_selected' : null}>
                <span className='fa fa-sort-alpha-asc'>
                  Name A-Z
                </span>
              </a>
            </li>
            <li onClick={() => this.props.sortTask({by: 'name', value: -1})}>
              <a href='#nameza' role='button' className={this.props.sortTable.by === 'name' && this.props.sortTable.value === -1 ? 'sort_selected' : null}>
                <span className='fa fa-sort-alpha-asc'>
                  Name Z-A
                </span>
              </a>
            </li>
            <li role='separator' className='divider'></li>
            <li onClick={() => this.props.sortTask({by: 'status', value: 1})}>
              <a href='#statusaz' role='button' className={this.props.sortTable.by === 'status' && this.props.sortTable.value === 1 ? 'sort_selected' : null}>
                Status A-Z
              </a>
            </li>
            <li onClick={() => this.props.sortTask({by: 'status', value: -1})}>
              <a href='#statusza' role='button' className={this.props.sortTable.by === 'status' && this.props.sortTable.value === -1 ? 'sort_selected' : null}>
              Status Z-A
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sortTable: state.sortTable
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortTask: sort => {
      dispatch(actions.sortTask(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort)