//Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";
import { PostData } from "../../services/PostData";
import { connect } from "react-redux";
import { loginSuccess } from "../../redux/actions/";
//Includes

/*Test API
"email": "eve.holt@reqres.in",
"password": "cityslicka"*/

//Validation Functions
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = (val) => val && val.length;

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: () => {
    dispatch(loginSuccess());
  },
  loginReset: () => {
    dispatch(actions.reset("login"));
  },
});

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //Bind Handler Functions
    this.handleLogin = this.handleLogin.bind(this);
  }

  //Handle Login
  handleLogin(values) {
    PostData("login", values).then((result) => {
      let responseJSON = result;
      console.log(responseJSON);
      //Remove the following line
      alert(JSON.stringify(values));

      //Call successful login reducer
      this.props.loginSuccess();
      //Then reset login form fields after successful login
      this.props.loginReset();
    });
  }

  render() {
    return (
      /*Main Content Wrapper: Start*/
      <div className="container-fluid content-wrapper login">
        <div className="vertical-center">
          {/* Form: Start */}
          <Form
            model="login"
            onSubmit={this.handleLogin}
            className="mx-auto form"
          >
            <div className="form-group row text-center">
              <div className="col-12">
                <h1 className="text-center">Login</h1>
                <hr />
              </div>
            </div>
            <div className="form-group row">
              {/* Email */}
              <div className="col-12">
                <Control.text
                  model=".email"
                  className="input form-control form-control-lg"
                  id="email"
                  name="email"
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
              </div>
            </div>
            <div className="form-group row mt-3">
              <div className="col-12">
                {/* Password */}
                <Control.text
                  model=".password"
                  type="password"
                  className="input form-control form-control-lg"
                  id="password"
                  name="password"
                  placeholder="Password"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".password"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Password is required
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <div className="col-12">
                <div className="form-check">
                  <Control.checkbox
                    model=".remember"
                    className="form-check-input"
                    name="remember"
                    id="remember"
                    validators={{}}
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            {/* Buttons: Login , Cancel */}
            <div className="form-group-row mt-3">
              {/* Login Button */}
              <input
                className="btn btn-primary bg-primary btn-block btn-lg mt-3"
                type="submit"
                value="Login"
              />
              {/* Cancel Button */}
              <Link
                to="/home"
                className="btn btn-danger btn-block btn-lg mt-3"
                type="button"
              >
                Cancel
              </Link>
            </div>

            <div className="form-group-row">
              <div className="mt-3">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                    fontSize: "100%",
                  }}
                >
                  Signup here
                </a>
              </div>
            </div>
            <div className="text-center mt-3 mb-3">
              <a
                href="/login"
                className="text-muted"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  fontSize: "100%",
                }}
              >
                Forget Password
              </a>
            </div>
          </Form>
          {/* Form: End */}
        </div>
      </div>
      /*Main Content Wrapper: End*/
    );
  }
}
export default connect(null, mapDispatchToProps)(LoginComponent);
