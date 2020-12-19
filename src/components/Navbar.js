import React, { Component } from 'react'
import Logo from "../images/logo.svg"
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default class navbar extends Component {
    state = {
        isOpen:false
    }

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="navbar-header">
                        <Link to="/">
                            <img src={Logo} alt="Étoile des neiges"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Chambres</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
