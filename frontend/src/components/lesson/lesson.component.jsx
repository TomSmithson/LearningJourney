import React, {Component} from "react";
import "./lesson.styles.css";

class Lesson extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lesson">
                <div className="lesson-title">
                    <h5>Lesson Title</h5>
                </div>
                <div className="lesson-date">
                    <p>Lesson Date</p>
                </div>
                <div className="lesson-image">
                    <img src="ipad_stock.jpg" alt="This is what I have been learning about today"/>
                </div>
                <div className="lesson-description">
                    <p>This is me using the Feynman technique to explain to you (a 6 Grader) how to do xyz. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, assumenda. Iusto ipsam ullam quo ducimus, aut itaque velit natus, consectetur nemo, consequuntur dolorum? Reprehenderit illo possimus magni ex, commodi unde.</p>
                </div>
            </div>
        );
    }
}

export default Lesson;