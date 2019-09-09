// web URL for refrence https://serverless-stack.com/chapters/create-a-login-page.html
import React, { Component } from "react";
import axios from 'axios';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const reqData = {
      username: this.state.username,
      password: this.state.password
    }
    event.preventDefault();
      axios.post('http://localhost:3001/login', reqData)
        .then(res => {
          const user = res.data.userType;
          console.log(user)
          if(user==="admin"){
            this.props.history.push("/admin");
          }
          else if (user==="user") { 
            this.props.history.push("/user");
          }
          else {
            this.props.history.push("/login");
          }       
        })
        .catch(error=>{
          console.log('Error occured while tryingto login', error)
        })
  }

  render() {
    return (
      <div className="Login">
        <form>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick= {this.handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}