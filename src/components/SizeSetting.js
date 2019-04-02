import React, { Component } from 'react';
// import logo from './logo.svg';
// import Course from './components/Course';
// import Lifecycle from './components/Lifecycle';


// class SizeSetting extends React.Component {
//   changeSize(value){
//     this.props.onChangeSize(value);
//   }
//   render(){
//     return (
//       <div className='panel panel-warning'>
//         <div className='panel-heading'>
//           <h3 className='panel-title'>Size: {this.props.fontSize}px</h3>
//         </div>
//         <div className='panel-body'>
//           <button type='button' className='btn btn-success' onClick={() => this.changeSize(-2)} >Giảm</button>
//           <button type='button' className='btn btn-success' onClick={() => this.changeSize(2)} >Tăng</button>
//         </div>
//       </div>
//     )
//   }
// }

class SizeSetting extends React.Component {
  changeSize(value){
    this.props.getChangeSize(value)
  }
  render(){
    return (
      <div className='panel panel-warning'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Size: {this.props.fontSize}px</h3>
        </div>
        <div className='panel-body'>
          <button type='button' className='btn btn-success' onClick={() => this.changeSize(-2)}>Giảm</button>
          <button type='button' className='btn btn-success' onClick={() => this.changeSize(2)}>Tăng</button>
        </div>
      </div>
    )
  }
}

export default SizeSetting;
