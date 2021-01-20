// import {DynamoDB} from './DynamoDB'

// export class exampleClass {
//     dynamoDB:DynamoDB;

//     constructor(){

//     }

//     sayHello(): void{
//         await this.dynamoDB.save(THE DAT)
//     }
// }

const fs = require('fs');
const readline = require('readline');

export class WeatherResult {
    location: string;
    year: number;
    month: number;
    tmax: number; // Mean daily max temperature (C)
    tmin: number; // Mean daily min temperature (C)
    airfrost: number; // Days of airfrost
    rain: number; // Total over the month (mm)
    sun: number; // Total over the month (hrs)

    constructor(location: string, year: number, month: number, tmax: number, tmin: number, airfrost: number, rain: number, sun: number){
        this.location = location
        this.year = year
        this.month = month
        this.tmax = tmax
        this.tmin = tmin
        this.airfrost = airfrost
        this.rain = rain
        this.sun = sun;
    }

    toString(): string {
        return "Location: " + this.location + " Year: " + this.year + " Month: " + this.month + " Mean Max Temp: " + this.tmax + " Mean Min Temp: " + this.tmin + " Days of Airfrost: " + this.airfrost + " Millimetres of rain: " + this.rain + " Hours of sun: " + this.sun
    }


}

export function processWeather(filename: string, location: string): any{
    let Results: WeatherResult[] = []
    let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });
    let lineno = 0
    lineReader.on('line', function (line: any) {
        lineno++
        if ((line.indexOf(" ") == 0) && (line.includes("yyyy") == false)) {
            let year: number = line.slice(3, 7)
            let month: number = line.slice(9, 11).trim()
            let tmax: number = avoidTypeErrors(line.slice(15, 18))
            let tmin: number = avoidTypeErrors(line.slice(22, 26))
            let airfrost: number = avoidTypeErrors(line.slice(32, 34).trim())
            let rain: number = avoidTypeErrors(line.slice(37, 42).trim())
            let sun: number = avoidTypeErrors(line.slice(45).trim())

            let tempWeather = new WeatherResult(location, year, month, tmax, tmin, airfrost, rain, sun)
            console.log(tempWeather.toString())
            Results.push(tempWeather)
        }        
    });

    return Results
}

function avoidTypeErrors(input: number | string): any{
    if (input == "---"){
        return null
    } else {
        return input
    }
}