import React, {Component} from "react";
import "./header.styles.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="image">
                    <img src="Feynman.jpg" alt="Richard Feynman"/>
                </div>
                <div className="description">
                    <p>Richard Feynman was an American Physicist, he is known for developing the <a href="https://fs.blog/2012/04/feynman-technique/">"Feynman Technique"</a>. This technique is a learning method that has the student try to teach others what they have just learnt. By doing this the student becomes more confident and allows the knowledge to be more deeply <a href="https://en.wikipedia.org/wiki/Chunking_(psychology">"chunked"</a> into the students mind.</p>
                </div>
            </div>
        );
    }
}

export default Header;