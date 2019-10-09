import React, {Component} from 'react';
import Title from "./Title";

class CreateProject extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if (description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
            <div>
                <Title title={'Jira MD'}/>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="project_key" placeholder="HWBI"/>
                        <input type="text" name="project_directory" placeholder="/Users/user/Sites/docs/."/>
                        <button>Create Project</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateProject;
