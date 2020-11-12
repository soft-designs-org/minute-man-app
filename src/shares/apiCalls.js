import axios from "axios";


//Fetch Service Categories
export const getServiceCategories = (apiKey) => {
    const options = {
        Accept: "application/json",
        "X-Parse-Application-Id": "myAppId",
        "X-Parse-REST-API-Key": apiKey,
        "Content-Type": "application/json",
    };

    return axios
        .get("http://157.230.213.226:1337/parse/classes/serviceCategory", {
            headers: options,
        })

}

//Fetch Services By Service Category ID
export const getServiceByCategoryId = (apiKey) => {
    const options = {
        Accept: "application/json",
        "X-Parse-Application-Id": "myAppId",
        "X-Parse-REST-API-Key": apiKey,
        "Content-Type": "application/json",
    };

    return axios
        .get("http://157.230.213.226:1337/parse/classes/serviceCategory", {
            headers: options,
        })

}