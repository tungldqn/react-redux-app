import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  handleChange(event){
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
  clearForm(){
    this.setState({
      id: '',
      name: '',
      status: false
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.clearForm();
  }
  componentWillMount(){
    if(this.props.taskEdit){
      this.setState({
        id: this.props.taskEdit.id,
        name: this.props.taskEdit.name,
        status: this.props.taskEdit.status
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if( nextProps.taskEdit ){
      this.setState({
        id: nextProps.taskEdit.id,
        name: nextProps.taskEdit.name,
        status: nextProps.taskEdit.status
      })
    } else if ( !nextProps.taskEdit ){
      this.setState({
        id: '',
        name: '',
        status: false
      })
    }
  }
  render() {
    return (
      <div className='panel panel-warning'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            Add Task
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
              <button type='button' className='btn btn-danger' onClick={this.props.closeTaskForm}>
                <span className='fa fa-close mr-5'></span>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
