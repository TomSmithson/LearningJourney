import React, {Component} from "react";
import "./nav.styles.css";

class Nav extends Component {
    render() {
        return (
            <div className="container-nav">
                <div className="nav">
                    <div className="nav-item">
                        <p>{this.props.date}</p>
                    </div>
                    <div className="nav-item">
                        <h2>Feynman Journey</h2>
                    </div>
                    <div className="nav-item">
                        <a href="/">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="/about">About</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;