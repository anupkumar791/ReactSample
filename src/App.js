import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';

import EmployeeDetails from './components/EmployeeDetails';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Route path="/login" component={Login} />
        <Route path="/employee" component={EmployeeDetails} />
        <Footer />
      </div>
    </Router>
  );
}




export default BasicExample;
