import React, { Component } from 'react';
// import logo from './logo.svg';
// import Course from './components/Course';
// import Lifecycle from './components/Lifecycle';


// class Result extends React.Component {
//   setStyle(){
//     return {
//       color: this.props.color,
//       borderColor: this.props.color,
//       fontSize: this.props.fontSize
//     }
//   }
//   render(){
//     return (
//       <div className='col-12'>
//         <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
//         <div id='content' style={this.setStyle()}>Content Setting</div>
//       </div>
//     )
//   }
// }

class Result extends React.Component {
  setStyle(){
    return {
      fontSize: this.props.fontSize,
      borderColor: this.props.activeColor
    }
  }
  render(){
    return (
      <div className='col-12'>
        <p>Color: {this.props.activeColor} - Fontsize: {this.props.fontSize}px</p>
        <div id='content' style={this.setStyle()}>Content Setting</div>
      </div>
    )
  }
}

export default Result;
