    import React, { Component } from 'react';
    import { Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';
    import Overview from './overview';
    class Dashboard extends Component {
        constructor (props) {
            super(props);
            
            this.state = {
                check: true,
                location: "Kishoreganj, Dhaka",
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
                console.log("Enter" + entry)
                this.getLocationData(entry, true)
            } else {
                this.getLocationData(entry, false);
            }
        }

        setWeatherData(data) {
            // console.log("Temp" + data["main"]["temp"])
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
            this.setState({searchBar: e.target.value});
        }

        getGeoLocation() {
            if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(this.showPosition);
                } else {
                console.log("Geolocation is not supported by this browser.");
                }
        }
          
          showPosition(position) {
              this.getLocationData(position["coords"]["latitude"] +","+position["coords"]["longitude"], true);
          }
          

        getLocationData(location, isCoord) {
            var API_URL = "";

            if (isCoord) {
                location = location.split(",");
                API_URL = "https://api.openweathermap.org/data/2.5/weather?lat=" + location[0].trim() +"&lon="+ location[1].trim() +"&appid=96990c5c335abd806ce9733346bb487c";
            } else {
                API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=96990c5c335abd806ce9733346bb487c';
            }
            
            fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                // Checking if area exists
                if (data["cod"] == 200)
                console.log(data);
                    this.setWeatherData(data);
            });
        }

        render() {
            if (this.state.check) {
                this.getLocationData(this.state.location);
                this.setState({check: false});
            }
            return (
                <Jumbotron style={{backgroundColor: '#9575cd'}}>
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
                        <div className="row">
                                <div className="col-12  d-flex justify-content-center">
                                    <Button
                                        onClick={this.getGeoLocation}
                                        style={{color: "#000",  
                                                backgroundColor: "#ffffff",
                                                border: "none",
                                                height: "54px",
                                                borderRadius: "30px"}}>
                                            <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Current Location
                                    </Button>
                                </div>
                            </div>
                    </div>
                 
                </Jumbotron>
                
            )
        }
    }

    export default Dashboard;