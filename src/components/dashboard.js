    import React, { Component } from 'react';
    import { Jumbotron, Form, FormGroup, Input, Button } from 'reactstrap';
    import Overview from './overview';
    class Dashboard extends Component {
        constructor () {
            super();
            this.state = {
                check: true,
                location: "Dhaka, BD",
                coordinates: "--",
                temperature: "--",
                wind: "--",
                humidity: "--",
                sunrise: "--",
                sunset:"--",
                description: "--",
                icon: "unknown.png",
            }
        }

        setWeatherData(data) {
            console.log("Temp" + data["main"]["temp"])
            this.setState({temperature: parseFloat(data["main"]["temp"]) - 273.15})
            this.setState({location: data["name"]})
            this.setState({coordinates: data["coord"]["lat"] + "° latitude, " + data["coord"]["lon"] + "° longitude"})
            this.setState({wind: data["wind"]["deg"] + "°, " + data["wind"]["speed"] + " mps"})
            this.setState({humidity: data["main"]["humidity"] + "%"})
            this.setState({sunrise: data["sys"]["sunrise"]})
            this.setState({sunset: data["sys"]["sunset"]})
            this.setState({description: data["weather"][0]["description"]})
            this.setState({icon: data["weather"][0]["icon"]})
        }
        searchbar() {
            return (
                <Form>
                    <div className="col-12 col-md-6 offset-md-3 mt-4">
                        <div className="row">
                            <FormGroup className="col-9">
                                <Input type="text" 
                                placeholder="Enter Area Name or Geolocation" />
                            </FormGroup>
                            <Button type="submit" 
                            value="submit" 
                            className="col-3 search-btn" 
                            style={{color: "#000", 
                                    backgroundColor: "#ffffff",
                                    border: "none",
                                    height: "54px",
                                    borderRadius: "0px 30px 30px 0px"}}>
                                Search
                            </Button>
                        </div>
                    </div>
                </Form>    
            );
        }

        getLocationData() {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka, BD&appid=96990c5c335abd806ce9733346bb487c')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setWeatherData(data);
            });
        }

        render() {
            if (this.state.check) {
                this.getLocationData();
                this.setState({check: false});
            }
            return (
                <Jumbotron style={{backgroundColor: '#9575cd'}}>
                    <Overview data={{
                        temp: this.state.temperature,
                        location: this.state.location,
                        humidity: this.state.humidity,
                        coordinates: this.state.coordinates,
                        sunrise: this.state.sunrise,
                        sunset: this.state.sunset,
                        wind: this.state.wind,
                        description: this.state.description,
                        icon: this.state.icon                       
                    }}/> 
                    <this.searchbar />
                </Jumbotron>
                
            )
        }
    }

    export default Dashboard;