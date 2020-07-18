import React, { Component } from 'react';
import { Table } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

async function callAPIAsync(location) {
    const API_KEY = "96990c5c335abd806ce9733346bb487c";
    const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + 
                    location +
                    "&appid=" + API_KEY;

    let response = await fetch(API_URL);
    let data = await response.json()
    return data;
}

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location,
            data: "",
            reload: true
        };

        this.getForecast = this.getForecast.bind(this);
        this.tableRow = this.tableRow.bind(this);
        // this.getForecast();
    }

    getForecast() {
        callAPIAsync(this.props.location).then(data => {
            // Checking if area exists
            console.log(this.props.location)
            if (data["cod"] == 200) {
                console.log(data);
               this.setState({data: data["list"]});
            }
        });
        
    }

    timestampConverter(time) {
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ' : ' + minutes.substr(-2) + ' : ' + seconds.substr(-2);

        return formattedTime;
    }

    tableRow() {
        if (this.state.data !== "") {
            // console.log(Array.from(this.state.data))
            return this.state.data.map((row) => {
                const date = row["dt_txt"].split(" ")[0];
                const time = row["dt_txt"].split(" ")[1];
                const temp = parseFloat(row["main"]["temp"] - 273).toFixed(2);
                const  feelsLike = parseFloat(row["main"]["feels_like"] - 273).toFixed(2);
                const wind = row["wind"]["deg"] + "°, " + row["wind"]["speed"];
                const humidity = row["main"]["humidity"];
                const maxTemp = parseFloat(row["main"]["temp_max"] - 273).toFixed(2);
                const minTemp = parseFloat(row["main"]["temp_min"] - 273).toFixed(2);
                const desc = row["weather"][0]["description"];
                // const sunRise = row[]
                return (
                    <tr>
                        <td>{date}</td>
                        <td>{time}</td>
                        <td>{temp}</td>
                        <td>{feelsLike}</td>
                        <td>{maxTemp}</td>
                        <td>{minTemp}</td>
                        <td>{wind}</td>
                        <td>{humidity}</td>
                        <td className="capitalize">{desc}</td>
                    </tr>
                );
            });
        }
        

    }

    render() {
        if (this.props.location !== this.state.location) {
            this.setState({location: this.props.location, reload: true});
        }
        if (this.state.reload) {
            this.getForecast();
            this.setState({reload: false});
        }
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h2 className="col-12 text-center mb-2 mt-4">5 Day Forecasts (Per 3 hours)</h2>
                    </div>
                </div>
                <div className="container">
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="weather-data"
                        filename="weather"
                        sheet="weather"
                        buttonText="Export Data"/>
                    <Table responsive hover id="weather-data">
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Temp (&deg;C)</th>
                            <th>Feels Like (&deg;C)</th>
                            <th>Max Temp (&deg;C)</th>
                            <th>Min Temp (&deg;C)</th>
                            <th>Wind</th>
                            <th>Humidity</th>
                            <th>Weather</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tableRow()}
                        </tbody>
                    </Table>
                </div>
            </>
            );
    }
}

export default Forecast;