import React, {Component} from 'react';
import Title from './Title';
import Header from './Header';
import {Link, Route} from 'react-router-dom';
import JiraForm from "./JiraForm";
//import axios from 'axios';

// url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

class Main extends Component {
    constructor() {
        //Same as parent();
        super();

        this.state = {
            screen: 'photos'
        };
    }

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
