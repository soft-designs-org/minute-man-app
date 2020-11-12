//Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
//Includes
//Profile Picture Dimension: 512x512
import avatar from "../../assets/img/display-pics/user-avatar.png";

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

class UserProfile extends Component {
  userProfile = [
    {
      id: 1,
      name: "John Doe",
      category: "Massage Therapist",
      address: "1201 Prince Street, Wecost Lane Brooklyn, NY, USA",
      hours: "8:00AM to 6:00PM",
      days: "Monday to Friday",
      www: " www.massagetherapist.com",
      bio: "Bachelor of Arts, Degree in Therapy",
    },
  ];

  render() {
    if (this.props.isLogged) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="container-fluid content-wrapper userProfile">
        <div id="appointmentModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Book Appointment</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {/* Form: Start */}
                <form action="" method="">
                  <div className="form-group row">
                    {/* First Name */}
                    <div className="col-12">
                      <input
                        className="input form-control form-control-md"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    {/* Last Name */}
                    <div className="col-12 mt-2">
                      <input
                        className="input form-control form-control-md"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="col-12 mt-2">
                      <input
                        className="input form-control form-control-md"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    {/* Tel */}
                    <div className="col-12 mt-2">
                      <input
                        className="input form-control form-control-md"
                        id="tel"
                        name="tel"
                        type="tel"
                        placeholder="Telephone"
                        required
                      />
                    </div>
                    {/* Appointment Date */}
                    <div className="col-12 mt-4">
                      <label htmlFor="appointmentDate">Appointment Date</label>
                      <input
                        className="input form-control form-control-md"
                        id="appointmentDate"
                        name="appointmentDate"
                        type="date"
                        required
                      />
                    </div>
                  </div>

                  {/* Buttons: Book Appointment , Cancel */}

                  <div className="btn-group btn-block text-right">
                    {/* Book Appointment Button */}
                    <input
                      className="btn btn-primary ml-md-1 w-100"
                      type="submit"
                      value="Book Appointment"
                    />

                    {/* Cancel Button */}
                    <input
                      className="btn btn-danger ml-md-1 w-100"
                      type="button"
                      value="Cancel"
                      data-dismiss="modal"
                    />
                  </div>
                </form>
                {/* Form: End */}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="row">
            <div className="col-12 heading">
              <h1 className="text-center">Profile</h1>
              <hr />
            </div>
            <div className="col-12 service-category">
              <img
                className="img-fluid"
                src={avatar}
                alt="service-category"
              />
              <p>Massage Therapist</p>
            </div>

            <div className="row mx-auto">
              <div className="col-12 profile-details">
                {/* Web Address */}
                <div className="row mt-3">
                  <div className="col-12 web-address mt-3">
                    <div className="row flex-nowrap">
                      <div className="col-2">
                        <span className="fas fa-link mr-2"> </span>
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>
                            <a href="/" target="blank"> www.massagetherapist.com </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-2">
                        <span className="fas fa-edit mr-2"> </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                {/* Physical Address/Location */}
                <div className="row mt-1">
                  <div className="col-12 location">
                    <div className="row flex-nowrap">
                      <div className="col-2">
                        <span className="fas fa-search-location mr-2"> </span>
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>
                            1201 Prince Street, Wecost Lane Brooklyn, NY, USA
                          </li>
                        </ul>
                      </div>
                      <div className="col-2">
                        <span className="fas fa-edit mr-2"> </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                {/* Working Hours */}
                <div className="row mt-1">
                  <div className="col-12 schedule">
                    <div className="row flex-nowrap">
                      <div className="col-2">
                        <span className="fas fa-clock mr-2"> </span>
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>
                            <span className="font-weight-bold">Days: </span>
                            Monday to Friday
                          </li>
                          <li>
                            <span className="font-weight-bold">Hours: </span>8:
                            00 AM to 6: 00 PM
                          </li>
                        </ul>
                      </div>
                      <div className="col-2">
                        <span className="fas fa-edit mr-2"> </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                {/* Bio */}
                <div className="row mt-1">
                  <div className="col-12 bio">
                    <div className="row flex-nowrap">
                      <div className="col-2">
                        <span className="fas fa-info-circle mr-2"> </span>
                      </div>
                      <div className="col-8">
                        <ul className="list-unstyled">
                          <li>Bachelor of Arts</li>
                          <li>Degree in Therapy</li>
                        </ul>
                      </div>
                      <div className="col-2">
                        <span className="fas fa-edit mr-2"> </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                {/* Book Appointment */}
                <div className="row mt-1">
                  <div className="col-12">
                    <input
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                      value="Book An Appointment"
                      data-toggle="modal"
                      data-target="#appointmentModal"
                    />{" "}
                    <hr />
                  </div>
                </div>
                <div className="row mt-1 text-center mt-3">
                  <div className="col-12 mb-3">
                    <a href="tel:+1234567">
                      <span className="fas fa-phone-alt"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(UserProfile));
