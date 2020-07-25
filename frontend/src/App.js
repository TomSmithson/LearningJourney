import React, {Component} from 'react';
import "./app.styles.css";

import Nav from "./components/nav/nav.component";
import Header from "./components/header/header.component";
import LessonList from "./components/lesson-list/lesson-list.component";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            date: "",
        };
    }

    componentDidMount = () => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZoneName: "short",
        };
        const date = new Date().toLocaleDateString("en-GB", options);
        this.setState({date: date});
    }

    render() {
        return (
            <div className="container">
                <Nav date={this.state.date}/>
                <Header/>
                <LessonList/>
            </div>
        );
    }
}