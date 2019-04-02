import React, { Component } from 'react';

class Sort extends Component {
  render(){
    return (
      <div className='col-xs-6'>
        <div className='dropdown'>
          <button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown'>
           Sort <span className='fa fa-caret-square-o-down ml-5'></span>
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a role='button' className='sort_selected'>
                <span className='fa fa-sort-alpha-asc'>
                  Name A-Z
                </span>
              </a>
            </li>
            <li>
              <a role='button'>
                <span className='fa fa-sort-alpha-asc'>
                  Name Z-A
                </span>
              </a>
            </li>
            <li role='separator' className='divider'></li>
            <li>
              <a role='button'>
                Active
              </a>
            </li>
            <li>
              <a role='button'>
                Disable
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
} 

export default Sort