import React, {Component} from "react";
import "./lesson.styles.css";

class Lesson extends Component {
    render() {
        return (
            <div className="lesson">
                <div className="lesson-title">
                    <h5>{this.props.lesson.title}</h5>
                </div>
                <div className="lesson-date">
                    <p>{this.props.lesson.date}</p>
                </div>
                <div className="lesson-image">
                    <img src={this.props.lesson.img} alt="This is what I have been learning about today, a screenshot from my notes."/>
                </div>
                <div className="lesson-description">
                    <p>{this.props.lesson.description}</p>
                </div>
            </div>
        );
    }
}

export default Lesson;