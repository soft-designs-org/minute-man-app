// const Parse = require('parse');
import { Parse } from './parse.js';


Parse.initialize('myAppId');
Parse.serverURL = 'http://157.230.213.226:1337/parse'


const getServices = function() {
    const services = function(id, name, addressLine1, addressLine2, contact, description, webPagelink, serviceCategoryObjectId) {
        this.id = id;
        this.name = name;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.contact = contact;
        this.description = description;
        this.webPagelink = webPagelink;
        this.serviceCategoryObjectId = serviceCategoryObjectId;
    }

    const servicesArr = [];
    const Services = Parse.Object.extend("services");
    const q = new Parse.Query(Services);
    q.find().then(function(results) {
        for (let i = 0; i < results.length; i++) {
            var object = results[i];
            servicesArr.push(new services(
                object.id,
                object.attributes.businessName,
                object.attributes.addressLine1,
                object.attributes.addressLine2,
                object.attributes.contact,
                object.attributes.description,
                object.attributes.webPagelink,
                object.attributes.serviceCategoryObjectId,
            ));
        }

    })

    return servicesArr;

}

const getServicesbyCategoryId = function(value) {
    const services = function(id, name, addressLine1, addressLine2, contact, description, webPagelink, serviceCategoryObjectId) {
        this.id = id;
        this.name = name;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.contact = contact;
        this.description = description;
        this.webPagelink = webPagelink;
        this.serviceCategoryObjectId = serviceCategoryObjectId;
    }
    const servicesArr = [];
    const Services = Parse.Object.extend("services");
    const q = new Parse.Query(Services);
    q.equalTo("serviceCategoryObjectId", value);
    q.find().then(function(results) {
        for (let i = 0; i < results.length; i++) {
            var object = results[i];
            servicesArr.push(new services(
                object.id,
                object.attributes.businessName,
                object.attributes.addressLine1,
                object.attributes.addressLine2,
                object.attributes.contact,
                object.attributes.description,
                object.attributes.webPagelink,
                object.attributes.serviceCategoryObjectId,
            ));
        }

    })


    return servicesArr;
}


const getAppointmentsByServiceId = function(value) {
    const appointment = function(id, firstName, lastName, email, date, telephone, status) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.telephone = telephone;
        this.status = status;
    }
    const appointmentArr = [];
    const Appoitnment = Parse.Object.extend("appointments");
    const q = new Parse.Query(Appoitnment);
    q.equalTo("serviceObjectId", value);
    q.find().then(function(results) {
        for (let i = 0; i < results.length; i++) {
            var object = results[i];
            appointmentArr.push(new appointment(
                object.id,
                object.attributes.firstName,
                object.attributes.lastName,
                object.attributes.email,
                object.attributes.date,
                object.attributes.telephone,
                object.attributes.status,

            ));
        }

    })

    return appointmentArr;

}


const getServiceCategory = function() {
    const dataClass = function(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
    const dataArr = [];
    const Data = Parse.Object.extend("serviceCategory");
    const q = new Parse.Query(Data);
    q.find().then(function(results) {
        for (let i = 0; i < results.length; i++) {
            var object = results[i];
            dataArr.push(new dataClass(
                object.id,
                object.attributes.name,
                object.attributes.image._url,

            ));
        }

    })

    return dataArr;

}

export { getServices, getServicesbyCategoryId, getAppointmentsByServiceId, getServiceCategory };