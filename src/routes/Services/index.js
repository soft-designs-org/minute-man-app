//Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../components/LoadingComponent";
import * as mmApiCall from "mmApi/mmApi";
//Includes
//Profile Picture Dimension: 512x512
import avatar from "../../assets/img/display-pics/user-avatar.png";

const mapStateToProps = (state) =>{
  switch(state.selectCategory.state){
    case undefined:
      return {serviceCategoryId: undefined};
      default:
        return{
          serviceCategoryId: state.selectCategory.state 
        }
  }
}

class ServiceListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      services: [],
      serviceCat: [],
      value: "",
      searchResult: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
  }

  //Fetch Service Categories
  async fetchServiceCategories() {
    try {
      const data = await mmApiCall.getServiceCategory();
      setTimeout(() => {
        this.setState({
          isLoading: false,
          serviceCat: data,
        });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  //Fetch Services By Service Category ID
  async fetchServicesByCatId() {
    try {
      const data = await mmApiCall.getServicesbyCategoryId(
        `${this.state.value}`
      );
      setTimeout(() => {
        this.setState({
          isLoading: false,
          services: data,
        });
        console.log(this.state.services);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  handleOnLoad = () => {
    //If A Service Category ID Was Passed To This Component
    if (this.props.serviceCategoryId !== undefined) {
      this.setState(
        {
          value: this.props.serviceCategoryId,
          searchResult: true,
        },
        () => {
          //Then Fetch Services With That Cat. ID
          this.fetchServicesByCatId();
        }
      );
    }
  };

  componentDidMount() {
    //Reset Service Category ID On Page Load/Reload
    this.setState({
      serviceCategoryId: "",
    });

    //Fetch Services Categories First To Populate Dropdown Menu
    this.fetchServiceCategories();

    //Then Call The Following Function
    this.handleOnLoad();
  }

  //Handle Select Option
  handleChange = (event) => {
    //Change The Following State Values Upon Category Selection
    this.setState(
      {
        value: event.target.value,
        searchResult: true,
        //Then Perform A Fetch Operation As A Callback
      },
      () => {
        this.fetchServicesByCatId();
      }
    );
  };

  render() {
    const {
      error,
      isLoading,
      services,
      serviceCat,
      searchResult,
      value,
    } = this.state;

    // Create A New Array Based On The Selected Service Category
    const filteredItems = services.filter(
      (a) => a.serviceCategoryObjectId === value
    );

    // In The Event Of An Error, Display The Following Message
    if (error) {
      return (
        <div className="content-wrapper text-center mt-5">
          <p>
            <span className="font-weight-bold">Network Error: </span>Something
            went wrong. The operation could not be completed.
          </p>
        </div>
      );
      // Show Loading Icon Until All The Data Has Been Fetched
    } else if (isLoading) {
      return (
        <div className="content-wrapper">
          <div className="vertical-center">
            <Loading />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid content-wrapper mt-5 mb-5">
          {/* Selection Option: Start */}
          <div className="row">
            <div className="col-12 col-md-4">
              <select
                className="form-control form-control-lg"
                onChange={this.handleChange}
              >
                <option defaultValue hidden>
                  Select Category
                </option>
                {serviceCat.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </option>
                ))}
              </select>

              {/* Show Search Result Until A Category Has Been Selected */}
              {searchResult && (
                <p className="mt-2">
                  Search results:{" "}
                  <span className="font-weight-bold">
                    {" "}
                    {filteredItems.length}
                  </span>
                </p>
              )}
            </div>
          </div>
          {/* Selection Option: End */}

          {/* Profile Card: Start */}
          <div className="row text-center">
            {services.map((item) => (
              <div className="col-12 col-md-3 mt-3" key={item.id}>
                <div className="card">
                  <div className="image-bg">
                    <img src={avatar} alt="" width="75%" />
                  </div>
                  <div className="name mt-2">{item.name}</div>
                  {/* <p className="title">{item.serviceName.toUpperCase()}</p> */}
                  <p className="title">Service Name</p>
                  <div className="text-justify profile-details mt-1">
                    <div className="row">
                      <div className="col-2 d-none d-md-block">
                        <span className="fas fa-link"></span>
                      </div>
                      <div className="col-10">
                        <a className="profile-details" href={item.webPagelink}>
                          {item.webPagelink}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-justify profile-details mt-1">
                    <div className="row">
                      <div className="col-2 d-none d-md-block">
                        <span className="fas fa-phone-alt"></span>
                      </div>
                      <div className="col-10">{item.contact}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="my-btn">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Profile Card: End */}
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, null)(ServiceListing);
