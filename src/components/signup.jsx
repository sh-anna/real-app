import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";
import { toast } from 'react-toastify';

class Signup extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email").min(6),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };


doSubmit = async () => {

  const data = { ...this.state.data };
  data.biz = false;

  try {

    await http.post(`${ apiUrl }/users`, data); //resolves the button bug by typing an existing email
    toast.success(`${data.name}, You registered successfully!`, {
      position: 'top-center',
      autoClose: 5000
    });

    this.props.history.replace('/signin');

  } catch( ex ){

    if( ex.response && ex.response.status === 400 ){
      this.setState({errors: {email: ex.response.data
      }}); // 'Email is Taken'
    }

  }

}

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Signup for Real App" />
        <div className="row">
          <div className="col-12">
            <p>You can open new account for free!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
