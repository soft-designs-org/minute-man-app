
    // const filteredItems = serviceCat.filter(
    //   (a) =>
    //     a.name.charAt(0).toUpperCase() + this.state.value.slice(1) ===
    //     this.state.value
    // );

    //alert(this.state.value)

    if (error) {
        return (
          <div className="content-wrapper text-center mt-5">
            <p>
              <span className="font-weight-bold">Network Error: </span>Something
              went wrong. The operation could not be completed.
            </p>
          </div>
        );
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
            <div className="row">
              <div className="col-12 col-md-4">
                <select
                  className="form-control form-control-lg"
                  onChange={this.handleChange}
                  value={this.state.value}
                >
                  {/*To Do: Sort Service Categories */}
  
                  {serviceCat.map((item) => (
                    <option key={item.id}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </option>
                  ))}
                </select>
                <p>
                  Search results for "
                  <span className="font-weight-bold">{this.state.value}</span>":{" "}
                  {/* {filteredItems.length} */}
                </p>
              </div>
            </div>
  
            <div className="row text-center">
              {services.map((item) => (
                <div className="col-12 col-md-3">
                  {item.businessName.charAt(0).toUpperCase() +
                    this.state.value.slice(1) ===
                    this.state.value && (
                    <div className="card">
                      <div className="image-bg">
                        {item.photo !== null && (
                          <img src={item.photo} alt={item.name} width="75%" />
                        )}
                        {item.photo === null && (
                          <img src={avatar} alt={item.name} width="75%" />
                        )}
                      </div>
                      <div className="name mt-2">{item.name}</div>
                      <p className="title">{item.serviceName.toUpperCase()}</p>
  
                      <div className="text-justify profile-details mt-1">
                        <div className="row">
                          <div className="col-2 d-none d-md-block">
                            <span className="fas fa-link"></span>
                          </div>
                          <div className="col-10">
                            <a className="profile-details" href={item.webAddress}>
                              {item.webAddress}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="text-justify profile-details mt-1">
                        <div className="row">
                          <div className="col-2 d-none d-md-block">
                            <span className="fas fa-clock"></span>
                          </div>
                          <div className="col-10">
                            {item.openHours}hrs - {item.closeHours}hrs
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button className="my-btn">View Profile</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
  



      // componentDidMount() {
  //   //Fetch Service Categories
  //   fetch("http://localhost:3005/serviceCategories")
  //     .then((res) => res.json())
  //     .then(
  //       (results) => {
  //         this.setState({
  //           isLoading: false,
  //           serviceCat: results,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoading: false,
  //           error,
  //         });
  //         //Remove before production
  //         console.log(error);
  //       }
  //     );

  //   //Fetch Services Information

  //   fetch("http://157.230.213.226:1337/parse/classes/services", {
  //     method: "GET",
  //     headers: new Headers({
  //       Accept: "application/json",
  //       "X-Parse-Application-Id": "myAppId",
  //       "X-Parse-REST-API-Key": "",
  //       "Content-Type": "application/json",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           services: result.results,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoading: false,
  //           error,
  //         });
  //         console.log(error);
  //       }
  //     );
  // }











      // //Get Service Categories
    // const getServiceCategories = axios.get(servicesCategories, {
    //   headers: options,
    // });

    // //Combine Requests/Calls
    // axios.all([getServices, getServiceCategories]).then(
    //   axios.spread((...allData) => {
    //     const allServices = allData[0].data;
    //     const allServiceCategories = allData[1].data;

    //     //Change Initial Component States
    //     this.setState({
    //       isLoading: false,
    //       //Add Pulled Services To Array
    //       //services: allServices.results,
    //       //Add Pull Service Categories To Array
    //       serviceCat: allServiceCategories.results,
    //     });

    //     //Remove Before Production
    //     console.log(allServices);
    //     //console.log(allServiceCategories);
    //   })
    // );




    HOME PAGE
    {/* Main Content Wrapper: Start */}
    <div className="container-fluid main-content">
    <div className="row">
      <div className="col-12 mt-3">
        <h2 className="text-center">Featured Categories</h2>
        <div className="text-center">
          What are you interested in? Explore the categories of services we
          provide and see what best suits you
        </div>
      </div>
      <div className="col-md-2"></div>
      <div className="col-12 col-md-8">
        {/*Search Box: Start*/}
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-5">
          <i className="fas fa-search" aria-hidden="true"></i>
          <input
            className="form-control form-control-lg ml-3 w-75 mr-2"
            type="text"
            placeholder="Search Services..."
            aria-label="Search"
          />
        </form>
        {/*Search Box: End*/}
      </div>
      <div className="col-md-2"></div>
    </div>

    {!showPageTwo && (
      /* Page 1: Start */
      <div className="page1">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={plumber} alt="plumber" />
              <div>Plumber</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={barber} alt="barber" />
              <div>Barber</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={nailTechnician} alt="nail-technician" />
              <div>Nail Technician</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={hairdresser} alt="hairdresser" />
              <div>Hairdresser</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={yogaInstructor} alt="yoga-instructor" />
              <div>Yoga Instructor</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={personalTrainer} alt="personal-trainer" />
              <div>Personal Trainer</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={gardener} alt="gardener" />
              <div>Gardener</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={courier} alt="courier" />
              <div>Courier</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={seamstress} alt="seamstress" />
              <div>Seamstress</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={tailor} alt="tailor" />
              <div>Tailor</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={graphicsDesigner} alt="graphics-designer" />
              <div>Graphics Designer</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={webDesigner} alt="web-designer" />
              <div>Web Designer</div>
            </div>
          </div>
        </div>
        {/* Page Button: Next */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-3" onClick={toggle}>
            <span className="link-unstyled service-category-page-two">
              Next ... 2
            </span>{" "}
            <span className=" link-unstyled fas fa-angle-double-right"></span>
          </div>
        </div>
      </div>
      /* Page 1: End */
    )}
    {showPageTwo && (
      /* Page 2: Start */
      <div className="page2">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={architect} alt="architect" />
              <div>Architect</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={poolBoy} alt="pool-cleaner" />
              <div>Pool Cleaner</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={caterer} alt="caterer" />
              <div>Caterer</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={mechanic} alt="mechanic" />
              <div>Mechanic</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={interiorDesigner} alt="interior-designer" />
              <div>Interior Designer</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={exteriorDesigner} alt="exterior-design" />
              <div>Exterior Designer</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={pcRepairTechnician} alt="pc-repair" />
              <div>PC Repair Technician</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={photographer} alt="photographer" />
              <div>Photographer</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={painter} alt="painter" />
              <div>Painter</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={construction} alt="construction" />
              <div>Construction</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="content-block mt-3">
              <img className="fluid-img" src={electrician} alt="electrician" />
              <div>Electrician</div>
            </div>
          </div>
        </div>

        {/* Page Buttons: Prev */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-3" onClick={toggle}>
            <span className="link-unstyled service-category-page-two ">
              <span className=" link-unstyled fas fa-angle-double-left"></span>{" "}
              1 ... Prev
            </span>{" "}
          </div>
        </div>
      </div>
      /* Page 2: End */
    )}
    {/* Page Buttons: End */}
  </div>
  {/* Main Content Wrapper: End */}