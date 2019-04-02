import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './components/Hello';
import * as serviceWorker from './serviceWorker';

// function Div(props){
//   if(!props.show){
//     return null;
//   }
//   return (
//     <div >
//       abc
//     </div>
//   )
// }
// class NameForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       show: true
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState({
//       show: !this.state.show
//     })
//   }
//   render(){
//     return (
//       <div>
//         <Div show={this.state.show} />
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('main-content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
