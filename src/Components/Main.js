import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import CreateProject from './CreateProject';
import {Link, Route} from 'react-router-dom';

// url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;

class Main extends Component {
    constructor() {
        //Same as parent();
        super();
        // Adding it to the state means when it updates, it will
        // re trigger the render function
        this.state = {
            posts: [
                {
                    id: 0,
                    description: "beautiful landscape",
                    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                        "3919321_1443393332_n.jpg"
                },
                {
                    id: 1,
                    description: "Aliens???",
                    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                        "3919321_1443393332_n.jpg"
                },
                {
                    id: 2,
                    description: "On a vacation!",
                    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }
            ],
            screen: 'photos'
        };

        // Where remove photo is a function it loses access to this
        // So by doing this we bind it to it
        this.removePhoto = this.removePhoto.bind(this);
    }

    // Update state by removing photo selected
    removePhoto(postRemoved) {
        // Get current state, return only the posts that !== the postRemoved
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }));
    }

    // Envoked immediately after component added to DOM - Use for API calls
    componentDidMount() {
        //const posts = SimulateFetchFromDatabase();

        // If there is no current state no need to fetch it
        //this.setState({
        //  posts: posts
        //})
    }

    render() {
        console.table(this.state.posts);
        return (
            <section>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={'Jira MD'}/>
                        <div>
                            <Link className="addIcon" to="/CreateProject"></Link>
                        </div>
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
