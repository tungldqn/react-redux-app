import React, { Component } from 'react';
// import logo from './logo.svg';
// import Course from './components/Course';
// import Lifecycle from './components/Lifecycle';

// class ColorPicker extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       colors: ['red', 'green', 'blue', 'black']
//     }
//   }
//   showColor(color){
//     return {
//       backgroundColor: color
//     }
//   }
//   handleClick(color){
//     this.props.onReceiveColor(color);
//   }
//   render(){
//     let elmColors = this.state.colors.map((color, index) => (
//       <span key={index} style={this.showColor(color)} className={ this.props.activeColor === color ? 'active' : null } onClick={() => this.handleClick(color)}></span>
//     ))
//     return (
//       <div className='col-xs-6'>
//         <div className='panel panel-primary'>
//           <div className='panel-heading'>
//             <h3 className='panel-title'>Color Picker</h3>
//           </div>
//           <div className='panel-body'>
//             {elmColors}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colors: ['red', 'blue', 'green', 'grey']
    }
  }
  showColor(color){
    return {
      backgroundColor: color
    }
  }
  handleClick(color){
    this.props.getHandleClick(color);
  }
  render(){
    let elmColors = this.state.colors.map((color, index) => (
      <span key={index} style={this.showColor(color)} className={this.props.activeColor === color ? 'active' : null}onClick={() => this.handleClick(color)}></span>
    ))
    return (
      <div className='col-xs-6'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Color Picker</h3>
          </div>
          <div className='panel-body'>
            {elmColors}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker;
