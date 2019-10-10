import React, {Component} from 'react';
import Title from "./Title";
import JiraForm from "./JiraForm";

class CreateProject extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Title title={'Create Jira Board'}/>
                <div className="form">
                    <JiraForm/>
                </div>
            </div>
        );
    }
}

export default CreateProject;
