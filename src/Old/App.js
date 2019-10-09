import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

const API_PATH = 'http://jiramdapp.strawberrystage.co.uk/api/jira/index.php';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project_key: '',
            project_directory: ''
        }
    }

    render() {
        return (
            <div className="App">
                <form action="#">
                    <label>Project Key</label>
                    <input type="text" name="project_key" placeholder="HWBI" value={this.state.project_key}
                           onChange={e => this.setState({project_key: e.target.value})}/>
                    <label>Last Name</label>
                    <input type="text" name="project_directory" placeholder="/Users/user/Sites/docs/.."
                           value={this.state.project_directory}
                           onChange={e => this.setState({project_directory: e.target.value})}/>

                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"/>

                    <div>
                        {this.state.mailSent &&
                        <div>All Jira issues created successfully.</div>
                        }
                    </div>
                </form>
            </div>
        );
    }

    handleFormSubmit = e => {
        e.preventDefault();

        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({error: error.message}));
    };
}

export default App;
