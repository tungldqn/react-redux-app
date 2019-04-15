import React, { Component } from 'react';

class TaskSearch extends Component {
  constructor(props){
    super(props);
    this.state ={
      keyword: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
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
            <button className='btn btn-primary' type='button' onClick={() => this.props.handleSearch(keyword)}>
              <span className='fa fa-search mr-5'></span>Find
            </button>
          </span>
        </div>
      </div>
    )
  }
} 

export default TaskSearch