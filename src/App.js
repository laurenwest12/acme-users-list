import React, { Component, Fragment } from "react";
import {Route, HashRouter} from "react-router-dom";
import Nav from "./Nav";
import Users from './Users';
import Home from './Home';
import Search from './Search';

export default class App extends Component {
    render () {
        return (
            <HashRouter>
                <Fragment>
                    <Route render = {({location}) => <Nav location = {location} />}/>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/users/:index?' component = {Users}/>
                    <Route exact path = '/users/search' component = {Search}/>
                </Fragment>
            </HashRouter>
  )}
}

