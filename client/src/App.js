import React, { Component } from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Result from './components/results/Result'
import Home from './components/home/Home'
import Main from './components/main/Main'

export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path ='/main' component={Main} />
        <Route path='/result' component={Result} />
      </Switch>
    )
  }
}