import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class=" navbar-inverse">
                    <div class="container-fluid">
                      
                        <ul class="nav navbar-nav">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/employee">Employee</Link>
                        </li>

                        </ul>
                      
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header
