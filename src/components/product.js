import React, { Component } from 'react';

class Product extends React.Component {
  render(){
    return (
      <div className='thumbnail'>
        <img data-src='#' alt='' />
        <div className='caption'>
          <h3>Iphone 6 plus</h3>
          <p>16.000.000</p>
          <p>
            <a href='#' className='btn btn-primary'>Action</a>
            <a href='#' className='btn btn-default'>Action</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Product;
