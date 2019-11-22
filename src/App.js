import React, {Component} from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LoadContract} from "./views/loadcontract";
import {OpContract} from "./views/opcontract";
import {NavBar, Icon, Flex} from 'antd-mobile';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {link: "/load"}
    }

    handleLink() {
        if (this.state.link === "/load") {
            this.setState({link: "/op"})
        } else {
            this.setState({link: "/load"})
        }
    }

    render() {
        return (
            <Router>
                <div style={{float: 'right', paddingRight: '15px'}}>
                    <Link onClick={this.handleLink.bind(this)} key="op" to={this.state.link}>
                        <Icon type="right"/>
                    </Link>
                </div>
                <Switch>
                    <Route exact path="/" component={LoadContract}/>
                    <Route exact path="/op" component={OpContract}/>
                    <Route exact path="/load" component={LoadContract}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
