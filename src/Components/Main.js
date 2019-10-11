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
                        <section>
                            <Title title={'What is Jira MD?'}/>
                            <div className="intro-section">
                                <div className="intro-section__copy">
                                    <p>
                                        Jira MD is a tool that used markdown files to create your Jira board.
                                    </p>
                                    <p>
                                        It does this by targeting specific markdown syntax within the functional document.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Title title={'Known Issues'}/>
                            <div className="intro-section">
                                <ul>
                                    <li>Add Drag and Drop functionality</li>
                                    <li>Add progress animations</li>
                                    <li>Finish styling of site</li>
                                    <li>Need to check if epic already exists</li>
                                    <li>Need to check if issue already exists under epic</li>
                                    <li>Buy Domain</li>
                                    <li>Launch</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                )}/>
            </div>
        );
    }
}

export default Main;
