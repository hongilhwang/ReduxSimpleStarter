import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import MyGoogleMap from '../components/google_map';
import _ from 'lodash';

class WeatherList extends Component{

    renderWeather(cityData){

        const name = cityData.city.name;
        const temps = _.map(cityData.list.map( weather => weather.main.temp ), (temp) => temp -  273.15  );
        const pressures = cityData.list.map( weather => weather.main.pressure );
        const humiditys = cityData.list.map( weather => weather.main.humidity );
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <MyGoogleMap isMarkerShown lng={lon} lat={lat} ></MyGoogleMap>
                </td>
                <td>
                    <Chart data={temps} color={"red"} units={"도"}></Chart>
                </td>
                <td>
                    <Chart data={pressures} color={"orange"} units={"hPa"}></Chart>
                </td>
                <td>
                    <Chart data={humiditys} color={"blue"} units={"%"}></Chart>
                </td>
            </tr>
        )
    }
    render(){

        return (
            <table className={"table table-hover"}>
                <thead>
                    <tr>
                        <th width="19%">City</th>
                        <th width="27%">Temperature (도)</th>
                        <th width="27%">Pressure (hPa)</th>
                        <th width="27%">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )

    }
}

function mapStatusToProps( {weather} ){
    return { weather }
}


export default connect( mapStatusToProps )(WeatherList);