import React, { Component } from 'react';
import $ from 'jquery';

class Lifecycle extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Life Cycle'
    }
    this.changeTitle = this.changeTitle.bind(this);
    console.log('constructor');
  }
  componentWillMount(){
    console.log('componentWillMount');
    this.setState({
      title: 'Will mount'
    })
  }
  componentDidMount(){
    $('h3').css('color', 'red');
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState);
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  changeTitle(){
    this.setState({
      title: 'Change title'
    })
  }
  render() {
    console.log('render');
    return (
      <h3 onClick={this.changeTitle}>{this.state.title}</h3>
    );
  }
}

export default Lifecycle;
