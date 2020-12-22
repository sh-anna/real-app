import React from 'react';
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Signin extends Form {

  state = { 
    data: { email: "", password: "" },
    errors: {}
  }

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  }
    doSubmit = async () => {

        const { email, password } = this.state.data;

            try {

                await userService.login(email, password);
                window.location = '/';

            } catch(ex){

            if( ex.response && ex.response.status === 400 ){

                this.setState({ errors: { email: ex.response.data } })
    
            }
    
        }
        // toast.success('You logged in successfully!', {
        //   position: 'top-center',
        //   autoClose: 2000
        // });
  
        // setTimeout(() => {
        //   window.location = '/';
        // }, 2000);
  

    }

  render() { 

    if( userService.getCurrentUser() ) return <Redirect to="/" />
    
    return ( 
      <div className="container">
        <PageHeader titleText="Signin Page" />
      <div className="row">
        <div className="col-12">
          <p>Here you can signin with your account!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
            { this.renderInput("email", "Email", "email") }
            { this.renderInput("password", "Password", "password") }
            { this.renderButton("Signin") }
          </form>
        </div>
      </div>
    </div>
     );
  }
}
 
export default Signin;