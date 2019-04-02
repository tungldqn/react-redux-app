import React, { Component } from 'react';

class Search extends Component {
  render(){
    return (
      <div className='col-xs-6'>
        <div className='input-group'>
          <input name='keyword' type='text' className='form-control' placeholder='Enter your key...' />
          <span className='input-group-btn'>
            <button className='btn btn-primary' type='button'>
              <span className='fa fa-search mr-5'></span>Find
            </button>
          </span>
        </div>
      </div>
    )
  }
} 

export default Search