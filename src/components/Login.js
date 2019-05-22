import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submitLogin(e) {
        let fields = this.state.fields;
        e.preventDefault();
        if (this.validateForm()) {
            if ((fields.emailid === 'anup@demo.com' && fields.password === 'Anup@1234')) {
                console.log("1111111", fields)

                this.props.history.push("/employee");
            }
            else {
                this.props.history.push("/login");
            }

        }


    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;



        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }


        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }


    render() {
        return (
            <React.Fragment>
                <Container><Row><h3>Login page</h3>
                    <form method="post" name="userLogin" onSubmit={this.submitLogin} >
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.emailid}</div>
                        </div>
                        <div class="form-group">
                            <label for="email">Password</label>
                            <input type="password" class="form-control" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                            <div className="errorMsg">{this.state.errors.password}</div>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form></Row></Container>

            </React.Fragment>


        );
    }


}

export default Login
