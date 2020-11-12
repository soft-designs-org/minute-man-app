//Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Control, Form, Errors, actions } from "react-redux-form";
import { withRouter, Redirect } from "react-router-dom";
import { registerSuccess } from "../../redux/actions/";
//Includes
import displayImg from "../../assets/img/display-pics/dp-img.png";

//Validation Functions
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const required = (val) => val && val.length;

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  registerSuccess: () => {
    dispatch(registerSuccess());
  },
  registerReset: () => {
    dispatch(actions.reset("register"));
  },
});

class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Bind Handler Functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Handles Form Submission
  handleSubmit(event) {
    alert("Current State is: " + JSON.stringify(this.state));
    //Call successful register reducer
    this.props.registerSuccess();
    //Then reset registration form fields after successful registration
    this.props.registerReset();
  }

  render() {
    if (this.props.isLogged) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container-fluid content-wrapper register">
        <div className="">
          {/* Form: Start */}
          <Form
            model="register"
            onSubmit={this.handleSubmit}
            className="mx-auto"
          >
            <div className="form-group row text-center">
              <div className="col-12">
                <h1 className="text-center">Register</h1>
                <hr />
              </div>
            </div>

            {/* Upload Display Image */}
            <div className="form-group row text-center">
              <div className="col-12">
                <label for="dpImg">
                  <div className="img-upload">
                    <img src={displayImg} alt="dp-img" />
                  </div>
                  <span className="img-upload">Upload Image</span>
                </label>
                <Control.file
                  model=".dpImg"
                  id="dpImg"
                  name="dpImg"
                  accept="image/*"
                  hidden
                />
              </div>
            </div>

            <div className="form-group row">
              {/*First Name*/}
              <div className="col-12 col-md-6">
                <Control.text
                  model=".firstname"
                  className="input form-control form-control-md"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger text-center"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        First name is required
                      </div>
                    ),
                  }}
                />
              </div>
              {/*Last Name*/}
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <Control.text
                  model=".lastname"
                  className="input form-control form-control-md"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger text-center"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Last name is required
                      </div>
                    ),
                  }}
                />
              </div>
            </div>

            <div className="form-group row">
              {/*Date of Birth*/}
              <div className="col-12 col-md-6">
                <Control.text
                  model=".dob"
                  className="input form-control form-control-md"
                  id="dob"
                  name="dob"
                  placeholder="Date of Birth"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger text-center"
                  model=".dob"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        DoB is required
                      </div>
                    ),
                  }}
                />
              </div>
              {/*Social Security Number*/}
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <Control.text
                  model=".ssn"
                  className="input form-control form-control-md"
                  id="ssn"
                  name="ssn"
                  placeholder="Social Security Number"
                />
              </div>
            </div>

            <div className="form-group row mt-4">
              {/*Email*/}
              <div className="col-12 col-md-6">
                <Control
                  type="email"
                  model=".email"
                  className="input form-control form-control-md"
                  id="email"
                  name="email"
                  placeholder="Email"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger text-center"
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
              {/*Telephone*/}
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <Control
                  model=".tel"
                  className="input form-control form-control-md"
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Telephone"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger text-center"
                  model=".tel"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Telephone number is required
                      </div>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="form-group row mt-4">
              <div className="col-12 col-md-6">
                <div className="row">
                  {/* Address Line & City */}
                  <div className="col-md-6">
                    {/*Address Line*/}
                    <Control.text
                      model=".addressline"
                      className="input form-control form-control-md"
                      id="addressline"
                      name="addressline"
                      placeholder="Address Line"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger text-center"
                      model=".addressline"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            Address line is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    {/*City*/}
                    <Control.text
                      model=".city"
                      className="input form-control form-control-md mt-3 mt-md-0"
                      id="city"
                      name="city"
                      placeholder="City"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger text-center"
                      model=".city"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            City is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
              {/*Zip & State*/}
              <div className="col-12 col-md-6 mt-3 mt-md-0">
                <div className="row">
                  <div className="col-md-6">
                    {/*Zip Code*/}
                    <Control.text
                      model=".zipcode"
                      className="input form-control form-control-md"
                      id="zipcode"
                      name="zipcode"
                      placeholder="Zip Code"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger text-center"
                      model=".zipcode"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            Zip code is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    {/*State*/}
                    <Control.text
                      model=".state"
                      className="input form-control form-control-md mt-3 mt-md-0"
                      id="state"
                      name="state"
                      placeholder="State"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger text-center"
                      model=".state"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            State is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group row row-5 mt-4">
              <div className="col-12 col-md-6">
                {/*Country*/}
                <Control.text
                  model=".country"
                  className="input form-control form-control-md mt-0"
                  id="country"
                  name="country"
                  placeholder="Country"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger text-center"
                  model=".country"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Country is required
                      </div>
                    ),
                  }}
                />
              </div>
              <div className="col-md-6">
                {/*Service Cateogry*/}
                <Control.select
                  model=".servicecategory"
                  className="input custom-select form-control form-control-md"
                  id="servicecategory"
                  validators={{
                    required,
                  }}
                >
                  <option value="" selected disabled hidden>
                    Service Category
                  </option>
                  <option value="Massage">Massge</option>
                  <option value=""></option>
                </Control.select>
                <Errors
                  className="text-danger text-center"
                  model=".servicecategory"
                  show="touched"
                  messages={{
                    required: (
                      <div>
                        <span className="fas fa-exclamation-triangle"></span>{" "}
                        Service cateogry is required
                      </div>
                    ),
                  }}
                />
              </div>
            </div>

            <div className="form-group row row-5 mt-4">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <Control.select
                      model=".firstday"
                      className="input custom-select form-control form-control-md"
                      validators={{
                        required,
                      }}
                    >
                      <option value="" selected disabled hidden>
                        First Day
                      </option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </Control.select>
                    <Errors
                      className="text-danger text-center"
                      model=".firstday"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            First working day is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Control.select
                      model=".lastday"
                      className="input custom-select form-control form-control-md"
                      validators={{
                        required,
                      }}
                    >
                      <option value="" selected disabled hidden>
                        Last Day
                      </option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </Control.select>
                    <Errors
                      className="text-danger text-center"
                      model=".lastday"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            Last working day is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/*Working Hours*/}
                <div className="row">
                  <div className="col-12 col-md-6">
                    {/* Opening Hours */}
                    <Control
                      type="time"
                      model=".openingtime"
                      className="input form-control form-control-md mt-0"
                      id="openingtime"
                      name="openingtime"
                      placeholder="Opening Time"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger text-center"
                      model=".openingtime"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            Opening time is required
                          </div>
                        ),
                      }}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    {/* Closing Hour */}
                    <Control
                      type="time"
                      model=".closingtime"
                      className="input form-control form-control-md mt-0"
                      id="closingtime"
                      name="closingtime"
                      placeholder="Closing Time"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger text-center"
                      model=".closingtime"
                      show="touched"
                      messages={{
                        required: (
                          <div>
                            <span className="fas fa-exclamation-triangle"></span>{" "}
                            Closing time is required
                          </div>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-group btn-block text-right mt-4">
              {/* Register Button */}
              <input
                className="btn btn-primary  btn-lg bg-primary ml-md-1"
                type="submit"
                value="Register"
              />

              {/* Cancel Button */}
              <Link
                to="/home"
                className="btn btn-danger btn-lg ml-md-1"
                type="button"
              >
                Cancel
              </Link>
            </div>
          </Form>
          {/* Form: End */}
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)
);
