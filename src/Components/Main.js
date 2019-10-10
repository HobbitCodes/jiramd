import React, {Component} from 'react';
import Title from './Title';
import CreateProject from './CreateProject';
import {Link, Route} from 'react-router-dom';
//import axios from 'axios';

// url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

class Main extends Component {
    constructor() {
        //Same as parent();
        super();
        // Adding it to the state means when it updates, it will
        // re trigger the render function
        // axios.get('https://api.github.com/repos/HobbitCodes/jiramd/issues/?client_id=Iv1.591334f2fdada2a4&client_secret=448cfb4b95778b26fed90fb3f646748322ac7f08')
        //     .then(resp => {
        //         console.table(resp.data);
        //     });

        this.state = {
            screen: 'photos'
        };
    }

    render() {
        return (
            <section className="container">
                <Route exact path="/" render={() => (
                    <div className="page-content">
                        <section>
                            <Title title={'Jira MD'}/>
                            <div className="intro-section">
                                <div className="intro-section__copy">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et enim eleifend,
                                        eleifend nulla et, ullamcorper arcu. Aenean massa orci, lobortis non nunc vel,
                                        facilisis congue risus. In condimentum porta felis sit amet laoreet. Nunc sodales
                                        sapien vel euismod viverra. Nullam felis dolor, semper ut maximus quis, vehicula sit
                                        amet massa.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et enim eleifend,
                                        eleifend nulla et, ullamcorper arcu. Aenean massa orci, lobortis non nunc vel,
                                        facilisis congue risus. In condimentum porta felis sit amet laoreet. Nunc sodales
                                        sapien vel euismod viverra. Nullam felis dolor, semper ut maximus quis, vehicula sit
                                        amet massa.
                                    </p>
                                </div>
                                <Link className="button" to="/CreateProject">Get Started</Link>
                            </div>
                        </section>
                        <section>
                            <Title title={'Known Issues'}/>
                            <div className="intro-section">
                                <a className="button" href="https://github.com/HobbitCodes" target="_blank" rel="noopener noreferrer">View repo</a>
                            </div>
                        </section>
                    </div>
                )}/>

                <Route path="/CreateProject" render={({history}) => (
                    <CreateProject onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost);
                        history.push('/');
                    }}/>
                )}/>
            </section>
        );
    }
}

export default Main;
