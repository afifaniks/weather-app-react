    import React, { Component } from 'react';
    import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';
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
                searchBar: ""
            }

            this.search = this.search.bind(this);
            this.onInputChange = this.onInputChange.bind(this);
        }

        search(event) {
            console.log("Pushed")
            this.getLocationData(this.state.searchBar);
        }

        setWeatherData(data) {
            console.log("Temp" + data["main"]["temp"])
            this.setState({temperature: parseInt(data["main"]["temp"]) - 273})
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
            console.log(e.target.value)
        }

        getLocationData(location) {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=96990c5c335abd806ce9733346bb487c')
            .then(response => response.json())
            .then(data => {
                // Checking if area exists
                if (data["cod"] == 200)
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
                                placeholder="Search Area"
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
                    </div>
                 
                </Jumbotron>
                
            )
        }
    }

    export default Dashboard;