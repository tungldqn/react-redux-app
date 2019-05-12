import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }
  handleChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.submitForm(this.state);
    if(this.props.editTask.id === ''){
      this.props.clearForm();
    }
  }
  componentWillMount(){
    this.setState({
      id: this.props.editTask.id,
      name: this.props.editTask.name,
      status: this.props.editTask.status
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.editTask.id,
      name: nextProps.editTask.name,
      status: nextProps.editTask.status
    })
  }
  render(){
    return (
      <div className='panel panel-warning'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            { this.state.id ? 'Edit Task' : 'Add Task' } 
          </h3>
        </div>
        <div className='panel-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label>Name</label>
              <input type='text' name='name' className='form-control' value={this.state.name} onChange={this.handleChange} />
            </div>
            <label>Status:</label>
            <select className='form-control' name='status' value={this.state.status} onChange={this.handleChange}>
              <option value={true}>Active</option>
              <option value={false}>Disable</option>
            </select><br />
            <div className='text-center'>
              <button type='submit' className='btn btn-warning mr-15'>
                <span className='fa fa-plus mr-5'></span>Save
              </button>
              <button type='button' className='btn btn-danger' onClick={() => this.props.closeForm()}>
                <span className='fa fa-close mr-5'></span>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editTask: state.editTask
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitForm: task => {
      dispatch(actions.submitForm(task))
    },
    closeForm: () => {
      dispatch(actions.closeForm())
    },
    clearForm: () => {
      dispatch(actions.clearForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
