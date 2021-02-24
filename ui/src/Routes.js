import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

import About from "./About/About";
import Home from "./Home/Home";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    {/* <Route path="/Home" component={Home} /> */}
                    {/* <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}