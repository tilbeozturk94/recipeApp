import React, {Component} from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        const {title, linkList} = this.props;
        return (
            <header>
                <h2><a>{title}</a></h2>
                <nav>
                    {linkList.map((link, index) => (<li><a>{link}</a></li>))}
                </nav>
            </header>
        );
    }
}

export default Navbar;