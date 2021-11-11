import React, { Component } from 'react'
import '../../App.css'
import pic from '../../assets/download.jpg'
import {Link} from 'react-router-dom'


export default class Result extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="conatiner">
                    <div className="card text-center bg">
                        <div className="card-body">
                            <img src={pic} className="pic" alt="..." />
                            <h5 className="card-title">Love Percent : {this.props.results.results}%</h5>
                            <p className="card-text">{this.props.results.firstName} & {this.props.results.secondName}</p>
                            <Link to="/"><button className="btn btn-danger" >Re-Calculate</button></Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                

                </div>
            </React.Fragment>

        )
    }
}

