    import React, { Component } from 'react';
    import { Jumbotron, FormGroup, Input, Button } from 'reactstrap';
    import Overview from './overview';
import Forecast from './forecast';
    class Dashboard extends Component {
        constructor (props) {
            super(props);
            
            this.state = {
                check: true,
                location: "Dhaka,BD",
                country: "Bangladesh",
                coordinates: "--",
                temperature: "--",
                wind: "--",
                humidity: "--",
                sunrise: "--",
                sunset:"--",
                description: "--",
                icon: "unknown",
                searchBar: "",
                currentLocation: "Get Current Location",
                locatingCurrent: false
            }

            this.search = this.search.bind(this);
            this.onInputChange = this.onInputChange.bind(this);
            this.getGeoLocation = this.getGeoLocation.bind(this);
            this.showPosition = this.showPosition.bind(this);
            this.getLocationData = this.getLocationData.bind(this);
        }

        search(event) {
            // regex for coordinates
            const reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}");
            const entry = this.state.searchBar;

            if (reg.exec(entry)) {
                this.getLocationData(entry, true)
            } else {
                this.getLocationData(entry, false);
            }
        }

        setWeatherData(data) {
            // Setting Current Location Switch Value
            if (this.state.locatingCurrent) {
                this.setState({locatingCurrent: false, currentLocation: data["name"] + ", " + data["sys"]["country"]});
            } else {
                this.setState({currentLocation: "Get Current Location"});
            }
            this.setState({temperature: (parseFloat(data["main"]["temp"]) - 273.15).toFixed(1)})
            this.setState({location: data["name"]})
            this.setState({country: data["sys"]["country"]})
            this.setState({coordinates: data["coord"]["lat"] + "°, " + data["coord"]["lon"] + "°"})
            this.setState({wind: data["wind"]["deg"] + "°, " + data["wind"]["speed"] + " mps"})
            this.setState({humidity: data["main"]["humidity"] + "%"})
            this.setState({sunrise: data["sys"]["sunrise"]})
            this.setState({sunset: data["sys"]["sunset"]})
            this.setState({description: data["weather"][0]["description"]})
            this.setState({icon: data["weather"][0]["icon"]})
        }

        onInputChange (e) {
            // Change state value on each keystroke
            this.setState({searchBar: e.target.value});
        }

        getGeoLocation() {
            // Get latitude and longitude
            if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                    // Changing Current Location Status
                    this.setState({locatingCurrent: true});
                } else {
                    console.log("Geolocation is not supported by this browser.");
                }
        }
          
          showPosition(position) {
            // Extract data by coordinates   
            this.getLocationData(position["coords"]["latitude"] +","+position["coords"]["longitude"], true);
          }
          

        getLocationData(location, isCoord) {
            var API_URL = "";
            const API_KEY = "96990c5c335abd806ce9733346bb487c";
            if (isCoord) {
                location = location.split(",");
                API_URL = "https://api.openweathermap.org/data/2.5/weather?lat=" + location[0].trim() +"&lon="+ location[1].trim() +"&appid=" + API_KEY;
            } else {
                API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + API_KEY;
            }
            
            // Using fetch API to retrieve data
            fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                // Checking if area exists
                if (data["cod"] == 200)
                    this.setWeatherData(data);
            });
        }

        render() {
            // Checking state value so that it can only
            // execute once
            if (this.state.check) {
                this.getLocationData(this.state.location);
                this.setState({check: false});
            }
            return (
                <>
                    <Jumbotron>
                        <Overview data={{
                            temp: this.state.temperature,
                            location: this.state.location,
                            country: this.state.country,
                            humidity: this.state.humidity,
                            coordinates: this.state.coordinates,
                            sunrise: this.state.sunrise,
                            sunset: this.state.sunset,
                            wind: this.state.wind,
                            description: this.state.description,
                            icon: this.state.icon                       
                        }}/> 
                        
                        <div className="col-12 col-md-6 offset-md-3 mt-4">
                            <div className="row">
                                <FormGroup className="col-9">
                                    <Input type="text"
                                        id="location"
                                        name="location" 
                                        placeholder="Input area name or coordinates"
                                        value={this.state.searchBar}
                                        onChange={this.onInputChange} />                            
                                </FormGroup>
                                <Button
                                    className="col-3 search-btn" 
                                    onClick={this.search}
                                    style={{color: "#000",                                       
                                            backgroundColor: "#ffffff",
                                            border: "none",
                                            height: "54px",
                                            borderRadius: "0px 30px 30px 0px"}}>
                                        Search
                                </Button>                          
                            </div>
                            <div className="row mt-4">
                                    <div className="col-12  d-flex justify-content-center">
                                        <Button
                                            onClick={this.getGeoLocation}
                                            style={{color: "#000",  
                                                    backgroundColor: "#ffffff",
                                                    border: "none",
                                                    height: "54px",
                                                    borderRadius: "30px"}}>
                                                <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;{this.state.currentLocation}
                                        </Button>
                                    </div>
                                </div>
                        </div>
                    </Jumbotron>
                    <Forecast location={this.state.location} />
                </>
            )
        }
    }

    export default Dashboard;