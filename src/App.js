import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Userlayout from './containers/user/user'
import Login from './containers/login/Login';
import AdminLayout from './containers/admin/admin';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/user" component={Userlayout} />
        <Route path="/admin" component={AdminLayout} />
      </Router>   
    </div>
  );
}

export default App;

