//Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";
import { signupSuccess } from "../../redux/actions/";
//Includes

const unchecked = (val) => val === true;
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  signupSuccess: () => {
    dispatch(signupSuccess());
  },
  signupReset: () => {
    dispatch(actions.reset("signup"));
  },
});

class SignupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Bind Handler Functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(){
  //Handles Form Submission
  handleSubmit(values) {
    //alert("Current State is: " + JSON.stringify(values));

    //Call successful signup reducer
    this.props.signupSuccess();
    //Then reset signup form fields after successful submission
    this.props.signupReset();
  }
  // }

  render() {
    if (this.props.isLogged) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container-fluid content-wrapper signup h-100">
        <div className="vertical-center">
          {/* Form: Start */}{" "}
          <Form model="signup" onSubmit={this.handleSubmit}>
            <div className="form-group row text-center">
              <div className="col-12">
                <h1 className="text-center"> Signup </h1>
                <hr />
              </div>
            </div>{" "}
            <div className="form-group row">
              <div className="col-12">
                {/* Email */}
                <Control.text
                  model=".email"
                  className="input form-control form-control-lg"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Email is required
                      </div>
                    ),
                    validEmail: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Invalid email
                      </div>
                    ),
                  }}
                />
              </div>{" "}
            </div>{" "}
            <div className="form-group row mt-3">
              <div className="col-12">
                {/* Password */}
                <Control.text
                  model=".password"
                  className="input form-control form-control-lg"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  validators={{
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: (
                      <span className="fas fa-exclamation-triangle"></span>
                    ),
                    minLength: " Password must be greater than 6 characters",
                    maxLength: " Password must be 15 characters or less",
                  }}
                />
              </div>{" "}
            </div>{" "}
            <div className="form-group row mt-3">
              <div className="col-12">
                <div className="form-check">
                  <Control.checkbox
                    model=".agree"
                    className="form-check-input"
                    name="agree"
                    id="agree"
                    validators={{
                      unchecked,
                    }}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I agree with the terms & conditions{" "}
                  </label>
                </div>
                <Errors
                  className="text-danger"
                  model=".agree"
                  show="touched"
                  messages={{
                    unchecked: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        You must agree to the terms & conditions
                      </div>
                    ),
                  }}
                />
              </div>
            </div>{" "}
            {/* Form Buttons */}{" "}
            <div className="form-group-row">
              {" "}
              {/* Signup */}{" "}
              <input
                className="btn btn-primary bg-primary btn-block btn-lg mt-3"
                type="submit"
                value="Signup"
              />{" "}
              {/* Cancel Button */}{" "}
              <Link to="/home" className="btn btn-danger btn-block btn-lg mt-3">
                Cancel
              </Link>
            </div>{" "}
            <div className="form-group-row">
              <div className="mt-3">
                Already have an account ?{" "}
                <a
                  href="/login"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                    fontSize: "100%",
                  }}
                >
                  Login here{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </Form>{" "}
          {/* Form: End */}
        </div>{" "}
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupComponent)
);
