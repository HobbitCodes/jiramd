import React, {Component} from 'react';
import Title from "./Title";
import JiraForm from "./JiraForm";
import axios from 'axios';

const API_PATH = 'http://jiramdapp.strawberrystage.co.uk/api/jira/index.php';

class CreateProject extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Title title={'Jira MD'}/>
                <div className="form">
                    <JiraForm/>
                </div>
            </div>
        );
    }
}

export default CreateProject;
