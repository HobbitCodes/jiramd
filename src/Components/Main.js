import React, {Component} from 'react';
import Title from './Title';
import Header from './Header';
import {Link, Route} from 'react-router-dom';
import JiraForm from "./JiraForm";
//import axios from 'axios';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/" render={() => (
                    <div className="page-content">
                        <Header/>
                        <section>
                            <div className="form">
                                <JiraForm/>
                            </div>
                        </section>
                    </div>
                )}/>
            </div>
        );
    }
}

export default Main;
