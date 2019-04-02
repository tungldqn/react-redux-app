import React, { Component } from 'react';
// import logo from './logo.svg';
// import Course from './components/Course';
// import Lifecycle from './components/Lifecycle';


// class Reset extends React.Component {
//   onReset = () => this.props.onSettingDefault
  
//   render(){
//     return (
//       <button type='button' className='btn btn-primary' onClick={this.onReset()} >Reset</button>
//     )
//   }
// }

class Reset extends React.Component {
  reset(){
    this.props.getReset()
  }
  render(){
    return (
      <button type='button' className='btn btn-primary' onClick={() => this.reset()}>Reset</button>
    )
  }
}

export default Reset;
