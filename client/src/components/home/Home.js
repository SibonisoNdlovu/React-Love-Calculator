import React, { Component } from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="conatiner">
                    <div className="card text-center bg">
                        <div className="card-body">
                            <h5 className="card-title">Do you want to find about the truth about you and your partner??</h5>
                            <p className="card-text">Click below to calculate your love compatibility with your partner!</p>
                            <Link to="/main"><button className="btn btn-danger" >Check</button></Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

