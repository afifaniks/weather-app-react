import React, { Component } from 'react';
import { Media } from 'reactstrap';
class Overview extends Component {
    timestampConverter(time) {
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ' : ' + minutes.substr(-2) + ' : ' + seconds.substr(-2);

        return formattedTime;
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-4">
                        <div  className="row">
                            <div className="col-12">
                                <div className="col-6 offset-3 d-flex justify-content-center">
                                        <Media
                                        object src={"assets/images/" + this.props.data.icon + ".png"}
                                        style={{height: "128px", width: "128px"}}
                                        />
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <h1 className="capitalize">{this.props.data.temp} °C, {this.props.data.description}</h1>
                            </div>
                            <div className="col-12 text-center">
                                <h3>{this.props.data.location}, {this.props.data.country}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-4">
                        <div className="col-12">
                            <dl className="row">
                                    <dt className="col-6 text-left"><i className="fa fa-globe"></i> Area</dt>
                                    <dd className="col-6 text-right">{this.props.data.location}</dd>
                                    <dt className="col-6 text-left"><i className="fa fa-compass"></i> Coords.</dt>
                                    <dd className="col-6 text-right">{this.props.data.coordinates}</dd>
                                    <dt className="col-6 text-left"><i className="fas fa-thermometer-half"></i> Temp.</dt>
                                    <dd className="col-6 text-right">{this.props.data.temp} °C / {(this.props.data.temp * 1.8 + 32).toFixed(1)} °F</dd>
                                    <dt className="col-6 text-left"><i className="fas fa-wind"></i> Wind</dt>
                                    <dd className="col-6 text-right">{this.props.data.wind}</dd>
                                    <dt className="col-6 text-left"><i className="fas fa-tint"></i> Humidity</dt>
                                    <dd className="col-6 text-right">{this.props.data.humidity}</dd>
                                    <dt className="col-6 text-left"><i className="fas fa-sun"></i> Sunrise</dt>
                                    <dd className="col-6 text-right">{this.timestampConverter(this.props.data.sunrise)}</dd>
                                    <dt className="col-6 text-left"><i className="fas fa-moon"></i> Sunset</dt>
                                    <dd className="col-6 text-right">{this.timestampConverter(this.props.data.sunset)}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;