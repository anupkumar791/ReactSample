import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="Footer">
                <nav  class="navbar-inverse">
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
                </div>
            </React.Fragment>
        )
    }
}

export default Footer
