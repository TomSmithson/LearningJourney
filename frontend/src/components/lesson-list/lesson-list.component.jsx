import React, {Component} from "react";
import "./lesson-list.styles.css";

import Lesson from "../lesson/lesson.component";

class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
        };
    }

    componentDidMount = () => {
        // Get Lesson Data from database using Axios here
        const lesson = {
            title: "Lesson 1",
            date: "25th July 2020",
            img: "ipad_stock.jpg",
            description: "Lesson 1 Description"
        };
        this.state.lessons.push(lesson);
    }

    lessonList() {
        return this.state.lessons.map((lesson, key) => {
            return <Lesson lesson={lesson} key={key}/>
        });
    }

    render() {
        return (
            <div className="lesson-list">
                {this.lessonList()}
            </div>
        );
    }
}

export default LessonList;