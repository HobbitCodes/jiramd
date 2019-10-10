import React, {Component} from 'react'
import axios from 'axios';

class JiraForm extends Component {
    UPLOAD_ENDPOINT = 'http://jiramdapp.strawberrystage.co.uk/api/jira/index.php';

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('jira_host', e.target.jira_host.value);
        formData.append('jira_user', e.target.jira_user.value);
        formData.append('jira_password', e.target.jira_password.value);
        formData.append('project_key', e.target.project_key.value);

        for (const file of this.state.files) {
            formData.append(file.name, file)
        }

        let res = await this.createBoard(formData);
        console.log(res.data);
    }

    async createBoard(formData) {
        return await axios.post(this.UPLOAD_ENDPOINT, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }

    onChange(e) {
        this.setState({files: e.target.files});
    }

    render() {
        return (
            <form className="box" onSubmit={this.onSubmit}>
                <input type="text" name="jira_host" placeholder="https://{COMPANY_NAME}.atlassian.net"/>
                <input type="text" name="jira_user" placeholder="Username"/>
                <input type="password" name="jira_password" placeholder="***********"/>
                <input type="text" name="project_key" placeholder="HWBI"/>
                <input type="file" name="files[]" id="file" multiple onChange={this.onChange}/>
                <button>Create Project</button>
            </form>
        );
    }
}

export default JiraForm;