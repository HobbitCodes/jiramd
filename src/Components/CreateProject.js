import React, {Component} from 'react';
import Title from "./Title";
import axios from 'axios';

const API_PATH = 'http://jiramdapp.strawberrystage.co.uk/api/jira/index.php';

class CreateProject extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);

        this.state = {
            md_files: ''
        };
    }

    handleFileUpload(event) {
        event.preventDefault();

        console.table(event.target.files);

        this.setState({
            md_files: event.target.files
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const key = event.target.project_key.value;
        const user = event.target.user.value;
        const password = event.target.password.value;
        const host = event.target.host.value;

        let formData = new FormData();
        formData.append('project_key', key);
        formData.append('project_user', user);
        formData.append('project_password', password);
        formData.append('project_host', host);

        this.state.md_files.map((file) => {
            // make diffent formData per each file and request.
            formData.append('myFile', file);
        });

        axios.post(`${API_PATH}`, formData)
            .then(response => {
                console.log(response);
            }).catch(error => (error.response));
    }

    render() {
        return (
            <div>
                <Title title={'Jira MD'}/>
                <div className="form">
                    <form className="box" onSubmit={this.handleSubmit}>
                        <input type="text" name="jira_host" placeholder="https://{COMPANY_NAME}.atlassian.net"/>
                        <input type="text" name="jira_user" placeholder="Username"/>
                        <input type="password" name="jira_password" placeholder="***********"/>
                        <input type="text" name="project_key" placeholder="HWBI"/>
                        <input type="file" name="files[]" id="file" multiple onChange={this.handleFileUpload}/>
                        <button>Create Project</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateProject;
