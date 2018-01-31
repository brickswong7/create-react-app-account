import React, { Component } from 'react';


export default class RecordForm extends Component {
  constructor(props){
      super(props)
      this.state={
          date:"",
          title:'',
          amout:''
      }
  }
  valid(){
      return this.state.amount && this.state.title && this.state.date
  }
  handleChange(e){
      console.log(e.target)
      const {name, value} = e.target;
      this.setState({[name]: value})
  }
  render() {
    return (
        <form className='form-inline'>
            <div className='form-group' >
                <input type='text' className='form-control' onChange={this.handleChange.bind(this)} placeholder='Date'  name='date' value={this.state.date} />
            </div> 
            <div className='form-group' >
                <input type='text' className='form-control' onChange={this.handleChange.bind(this)} placeholder='Title'  name='title' value={this.state.title} />
            </div> 
            <div className='form-group' >
                <input type='text' className='form-control' onChange={this.handleChange.bind(this)} placeholder='Amount'  name='amount' value={this.state.amount} />
            </div> 
            <button className='btn btn-primary' type='submit' disabled={!this.valid()}> create record </button>  
        </form>
    );
  }
};
