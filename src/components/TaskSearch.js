import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskSearch extends Component {
  constructor(){
    super();
    this.state ={
      keyword: ''
    }
  }
  handleChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }
  render(){
    let { keyword } = this.state;
    return (
      <div className='col-xs-6'>
        <div className='input-group'>
          <input name='keyword' type='text' className='form-control' placeholder='Enter your key...' value={this.state.keyword} onChange={this.handleChange} />
          <span className='input-group-btn'>
            <button className='btn btn-primary' type='button' onClick={() => this.props.searchTask(keyword)}>
              <span className='fa fa-search mr-5'></span>Find
            </button>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchTask: keyword => {
      dispatch(actions.searchTask(keyword))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskSearch)