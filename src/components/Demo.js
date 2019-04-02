import React, { Component } from 'react';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.test = this.test.bind(this);
  }
  click(a){
    alert(a);
  }
  test(){
    alert(this.refs.name.value)
  }
  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <input ref='name' />
        <button onClick={this.test}>Click</button>
        <button onClick={() => this.click('hello')}>Click</button>
      </div>
    )
  }
}

export default Demo;
