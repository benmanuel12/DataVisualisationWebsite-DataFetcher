"use strict";
// Example of how to export classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.processWeatherRefined = exports.processWeather = exports.WeatherResultRefined = exports.WeatherResult = void 0;
// import {DynamoDB} from './DynamoDB'
// export class exampleClass {
//     dynamoDB:DynamoDB;
//     constructor(){
//     }
//     sayHello(): void{
//         await this.dynamoDB.save(THE DAT)
//     }
// }
var WeatherResult = /** @class */ (function () {
    function WeatherResult(location, year, month, tmax, tmin, airfrost, rain, sun) {
        this.location = location;
        this.year = year;
        this.month = month;
        this.tmax = tmax;
        this.tmin = tmin;
        this.airfrost = airfrost;
        this.rain = rain;
        this.sun = sun;
    }
    WeatherResult.prototype.toString = function () {
        return "Location: " + this.location + " Year: " + this.year + " Month: " + this.month + " Mean Max Temp: " + this.tmax + " Mean Min Temp: " + this.tmin + " Days of Airfrost: " + this.airfrost + " Millimetres of rain: " + this.rain + " Hours of sun: " + this.sun;
    };
    return WeatherResult;
}());
exports.WeatherResult = WeatherResult;
var WeatherResultRefined = /** @class */ (function () {
    function WeatherResultRefined(location, timestamp, tmax, tmin) {
        this.location = location;
        this.timestamp = timestamp;
        this.tmax = tmax;
        this.tmin = tmin;
    }
    WeatherResultRefined.prototype.getLocation = function () {
        return this.location;
    };
    WeatherResultRefined.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    WeatherResultRefined.prototype.getTmax = function () {
        return this.tmax;
    };
    WeatherResultRefined.prototype.getTmin = function () {
        return this.tmin;
    };
    WeatherResultRefined.prototype.toString = function () {
        return "Location: " + this.location + " Timestamp: " + this.timestamp + " Mean Max Temp: " + this.tmax + " Mean Min Temp: " + this.tmin;
    };
    return WeatherResultRefined;
}());
exports.WeatherResultRefined = WeatherResultRefined;
function processWeather(filename, location) {
    var Results = [];
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });
    var lineno = 0;
    lineReader.on('line', function (line) {
        lineno++;
        if ((line.indexOf(" ") == 0) && ((line.includes("yyyy") == false) || (line.includes("days") == false))) {
            var year = line.slice(3, 7);
            var month = line.slice(9, 11).trim();
            var tmax = avoidTypeErrors(line.slice(15, 18));
            var tmin = avoidTypeErrors(line.slice(22, 26));
            var airfrost = avoidTypeErrors(line.slice(32, 34).trim());
            var rain = avoidTypeErrors(line.slice(37, 42).trim());
            var sun = avoidTypeErrors(line.slice(45).trim());
            var tempWeather = new WeatherResult(location, year, month, tmax, tmin, airfrost, rain, sun);
            console.log(tempWeather.toString());
            Results.push(tempWeather);
        }
    });
    return Results;
}
exports.processWeather = processWeather;
function processWeatherRefined(filename, location) {
    var Results = [];
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });
    var lineno = 0;
    lineReader.on('line', function (line) {
        lineno++;
        if ((line.indexOf(" ") == 0) && ((line.includes("yyyy") == false) || (line.includes("days") == false))) {
            var year = line.slice(3, 7);
            var month = line.slice(9, 11).trim();
            var tmax = avoidTypeErrors(line.slice(15, 18));
            var tmin = avoidTypeErrors(line.slice(22, 26));
            var timestring = year + "-" + month + "-1";
            var timestamp = new Date(timestring).valueOf();
            var tempWeather = new WeatherResultRefined(location, timestamp, tmax, tmin);
            console.log(tempWeather.toString());
            Results.push(tempWeather);
        }
    });
    return Results;
}
exports.processWeatherRefined = processWeatherRefined;
function avoidTypeErrors(input) {
    if (input == "---") {
        return null;
    }
    else {
        return input;
    }
}
