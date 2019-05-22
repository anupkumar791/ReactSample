import React, { Component } from 'react'
import http from 'axios'

class EmployeeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            EmployeeDetails: [],
            errorMsg: []

        }
    }
    componentDidMount() {
        http.get('http://localhost:3004/employee')
            .then(res => {
                console.log(res.data)
                this.setState({ EmployeeDetails: res.data })
            })
            .catch(err => {
                console.log(err)
                this.setState({ errorMsg: 'Error in Server' })
            }
            )
    }
    render() {
        const { EmployeeDetails, errorMsg } = this.state

        return (
          

            <div>
                <h2>Employee Details</h2>

                {
                    EmployeeDetails.length ? EmployeeDetails.map(emp =>   <table class="table">
                    
                    <tbody>
                      <tr>
                        <td>{emp.userId}</td>
                        <td>{emp.jobTitleName}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.phoneNumber}</td>
                      </tr>
                      </tbody></table>) : null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default EmployeeDetails
