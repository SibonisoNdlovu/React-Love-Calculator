import React, { Component } from 'react'
import '../../App.css'
import axios from 'axios'
import Result from '../results/Result'

export default class Main extends Component {
  state = {
    firstName: '',
    secondName: '',
    results:0
  };

  handleFirstName = e => {
    this.setState({ firstName: e.target.value.toLowerCase() })
  };

  handleSecondName = e => {
    this.setState({ secondName: e.target.value.toLowerCase() })
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/calcLove',{ 
      data: JSON.stringify({
        firstName: this.state.firstName,
        secondName: this.state.secondName
      }) 
    }).then(res => {
      this.setState({
        results: res.data.data
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    if(this.state.results !==0){
     return( <Result results={this.state} /> )
        }
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <h1 className="heading">Love Calculator</h1>
            <form className="form-container" onSubmit={this.handleSubmit}>
              <div className="form-group ">
                <label>First Name</label>
                <input type="text" className="form-control" name='firstName' value={this.state.firstName} onChange={this.handleFirstName} required />
              </div>
              <div className="form-group ">
                <label>Second Name</label>
                <input type="text" className="form-control" name='secondName' value={this.state.secondName} onChange={this.handleSecondName} required />
                <br></br>
                <input type='submit' value="Calculate" className='btn btn-danger' />
              </div>
            </form>
          </div>



  </div>
        <div>

        </div>
      </React.Fragment >
    )
  }
}