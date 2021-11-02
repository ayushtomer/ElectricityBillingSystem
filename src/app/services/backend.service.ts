import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }


  //USER TYPE -----------------------------------------------------------------------

// userType = "customer"
  userType = "admin"
  // userType = "anonymous"

  getUserType(){
    return this.userType
  }



  // ScheduledFLight Array-------------------------------------------------------------------- 

  scheduledFlights = [
    {
      id: "",
      flight: {
        company: "Air India",
        capacity: 230,
        type: "Airbus",
        number: "A320neo"
      },

      departureTime: "05.30",
      reachTime: "07.30",

      source:{
        name: "Chennai International Airport",
        code: "MAA",
        city: "Chennai",
        state: "Tamil Nadu"
      },

      destination: {
        name: "Chhatrapati Shivaji International Airport",
        code: "BOM",
        city: "Mumbai",
        state: "Maharastra"
      },

      seats: 0,
      price: "7000$"

    },

    {
      id: "",
      flight: {
        company: "Air India",
        capacity: 230,
        type: "Airbus",
        number: "A320neo"
      },

      departureTime: "05.30",
      reachTime: "07.30",

      source:{
        name: "Chennai International Airport",
        code: "MAA",
        city: "Chennai",
        state: "Tamil Nadu"
      },

      destination: {
        name: "Chhatrapati Shivaji International Airport",
        code: "BOM",
        city: "Mumbai",
        state: "Maharastra"
      },

      seats: 0,
      price: "7000$"

    },

    {
      id: "",
      flight: {
        company: "Air India",
        capacity: 230,
        type: "Airbus",
        number: "A320neo"
      },

      departureTime: "05.30",
      reachTime: "07.30",

      source:{
        name: "Chennai International Airport",
        code: "MAA",
        city: "Chennai",
        state: "Tamil Nadu"
      },

      destination: {
        name: "Chhatrapati Shivaji International Airport",
        code: "BOM",
        city: "Mumbai",
        state: "Maharastra"
      },

      seats: 0,
      price: "7000$"

    },

    {
      id: "",
      flight: {
        company: "Air India",
        capacity: 230,
        type: "Airbus",
        number: "A320neo"
      },

      departureTime: "05.30",
      reachTime: "07.30",

      source:{
        name: "Chennai International Airport",
        code: "MAA",
        city: "Chennai",
        state: "Tamil Nadu"
      },

      destination: {
        name: "Chhatrapati Shivaji International Airport",
        code: "BOM",
        city: "Mumbai",
        state: "Maharastra"
      },

      seats: 0,
      price: "7000$"

    },

    {
      id: "",
      flight: {
        company: "Air India",
        capacity: 230,
        type: "Airbus",
        number: "A320neo"
      },

      departureTime: "05.30",
      reachTime: "07.30",

      source:{
        name: "Chennai International Airport",
        code: "MAA",
        city: "Chennai",
        state: "Tamil Nadu"
      },

      destination: {
        name: "Chhatrapati Shivaji International Airport",
        code: "BOM",
        city: "Mumbai",
        state: "Maharastra"
      },

      seats: 0,
      price: "7000$"

    }, 

  ]
  
  getScheduledFlights(){
    return this.scheduledFlights
  }

  addscheduledFlight(scheduledFlight){
    alert(JSON.stringify(scheduledFlight))
    this.scheduledFlights.push(scheduledFlight)
  }

// Report Type----------------------------------------------------------------

  reportType: string

  getReportType(){
    return this.reportType
  }

  setReportType(type: string){
    this.reportType = type
  }

//  Airports ------------------------------------------------

  airports = [
    {
      name: "Indira Gandhi International Airport",
      code: "DEl",
      city: "New Delhi",
      state: "New Delhi"
    },
    {
      name: "Rajiv Gandhi International Airport",
      code: "HYD",
      city: "Hyderabad",
      state: "Telangana"
    },
    {
      name: "Chhatrapati Shivaji International Airport",
      code: "BOM",
      city: "Mumbai",
      state: "Maharastra"
    },
    {
      name: "Kempegowda International Airport",
      code: "BLR",
      city: "Bangaluru",
      state: "Karnataka"
    },
    {
      name: "Chennai International Airport",
      code: "MAA",
      city: "Chennai",
      state: "Tamil Nadu"
    },
    {
      name: "Netaji Subhas Chandra Bose International Airport",
      code: "CCU",
      city: "Dum Dum",
      state: "West Bengal"
    },
    {
      name: "Cochin International Airport",
      code: "COK",
      city: "Kochi",
      state: "Kerala"
    }
  ]

  getAirports(){
    return this.airports
  }

  addAirport(airport){
    this.airports.push(airport)
    console.log(this.airports)
  }

  // FLIGHTS -------------------------------------------------------------------
  flights = [

    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    },
    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    },
    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    },
    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    },
    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    },
    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    },
    {
      company: "Air India",
      capacity: 230,
      type: "Airbus",
      number: "A320neo"
    }
  ]

  getFlights(){
    return this.flights
  }

  addFlight( flight){
    this.flights.push(flight)
  }

}