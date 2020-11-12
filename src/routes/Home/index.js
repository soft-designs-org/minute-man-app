//Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/actions/";
import Loading from "../../components/LoadingComponent";
import Carousel from "../../components/Carousel/Carousel";
import * as mmApiCall from "mmApi/mmApi";
//Includes

const arrayOfArrays = [];

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (serviceCategoryId) => {
    dispatch(selectCategory(serviceCategoryId));
  },
});

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      serviceCat: [],
      serviceCategoryId: "",
      page1: true,
      page2: false,
    };
    this.spiltArray  = this.spiltArray.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  componentDidMount() {
    //Reset Service Category ID On Page Load/Reload
    this.setState({
      serviceCategoryId: "",
    });
    //Then Fetch Data
    this.fetchServiceCategories();
  }

  togglePage = () => {
    this.setState({
      page1: !this.state.page1,
      page2: !this.state.page2
    })
    this.fetchServiceCategories();
  }

  spiltArray = (serviceCatArr) => {
    while (serviceCatArr.length > 0) {
      let arrElement = serviceCatArr.splice(0, 12);
      arrayOfArrays.push(arrElement);
    }
    return arrayOfArrays;
  };


  handleClick = (event) => {
    this.setState(
      {
        //Grab The Id Of The Selected Element & Update The Following State Variable
        serviceCategoryId: event.target.getAttribute("id"),
      },
      () => {
        this.props.selectCategory(this.state.serviceCategoryId);
        //After Updating Redux State, Redirect The User To The Services Page
        this.props.history.push("/services");
      }
    );
  };

  handleChange = (event) => {
    this.setState(
      {
        serviceCategoryId: event.target.value,
      },
      () => {
        this.props.selectCategory(this.state.serviceCategoryId);
        this.props.history.push("/services");
      }
    );
  };


  render() {
    const { isLoading, error, serviceCat } = this.state;

    // In The Event Of An Error, Display The Following Message
    if (error) {
      return (
        <div className="content-wrapper text-center mt-5">
          <p>
            <span className="font-weight-bold"> Network Error: </span>Something
            went wrong.The operation could not be completed.{" "}
          </p>{" "}
        </div>
      );
      // Show Loading Icon Until All The Data Has Been Fetched
    } else if (isLoading) {
      return (
        <div className="content-wrapper">
          <div className="vertical-center">
            <Loading />
          </div>{" "}
        </div>
      );
    } else {
      return (
        <div className="main-content">
          {" "}
          {/*Included Carousel Component*/} <Carousel />
          <div className="row">
            <div className="col-12 mt-5">
              <h2 className="text-center"> Featured Categories </h2>{" "}
              <div className="text-center mb-3">
                What are you interested in ? Explore the categories of services
                we provide and see what best suits you{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* Selection Option: Start */}{" "}
          <div className="row m-1">
            <div className="col-12 col-md-3"> </div>{" "}
            <div className="col-12 col-md-6">
              <select
                className="form-control form-control-lg"
                onChange={this.handleChange}
              >
                <option defaultValue  hidden>
                  Select Category{" "}
                </option>{" "}
                {serviceCat.map((item) => (
                  <option key={item.id} value={item.id}>
                    {" "}
                    {item.name.charAt(0).toUpperCase() +
                      item.name.slice(1)}{" "}
                  </option>
                ))}{" "}
              </select>{" "}
            </div>{" "}
            <div className="col-12 col-md-3"> </div>{" "}
          </div>
          {this.state.page1 && (
            <div className="row mt-5 mb-5 page1">
              {this.spiltArray(serviceCat)[0].map((item) => (
                <div className="col-6 col-md-3" key={item.id}>
                  <div className="content-block mt-3">
                    <img
                      className="fluid-img"
                      src={item.image}
                      alt={item.name}
                      id={item.id}
                      onClick={this.handleClick}
                    />{" "}
                    <div>
                      {" "}
                      {item.name.charAt(0).toUpperCase() +
                        item.name.slice(1)}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
              <div className="col-12">
                <div className="text-center mb-3 service-category-page" onClick={this.togglePage}>
                  Page 2 <span className="fas fa-chevron-right"></span>{" "}
                </div>
              </div>
            </div>
          )}
          {!this.state.page1 && (
            <div className="row mt-5 mb-5 page2">
              {this.spiltArray(serviceCat)[1].map((item) => (
                <div className="col-6 col-md-3" key={item.id}>
                  <div className="content-block mt-3">
                    <img
                      className="fluid-img"
                      src={item.image}
                      alt={item.name}
                      id={item.id}
                      onClick={this.handleClick}
                    />{" "}
                    <div>
                      {" "}
                      {item.name.charAt(0).toUpperCase() +
                        item.name.slice(1)}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}
              <div className="col-12">
                <div className="text-center mb-3 service-category-page" onClick={this.togglePage}>
                  <span className="fas fa-chevron-left"></span> Page 1
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(HomeComponent);
