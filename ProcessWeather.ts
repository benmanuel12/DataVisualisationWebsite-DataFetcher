// Example of how to export classes

// import {DynamoDB} from './DynamoDB'

// export class exampleClass {
//     dynamoDB:DynamoDB;

//     constructor(){

//     }

//     sayHello(): void{
//         await this.dynamoDB.save(THE DAT)
//     }
// }

export class WeatherResultRefined {
    location: string;
    timestamp: number;
    tmax: number; // Mean daily max temperature (C)
    tmin: number; // Mean daily min temperature (C)

    constructor(location: string, timestamp: number, tmax: number, tmin: number){
        this.location = location
        this.timestamp = timestamp
        this.tmax = tmax
        this.tmin = tmin
    }

    getLocation(): string {
        return this.location
    }

    getTimestamp(): number {
        return this.timestamp
    }

    getTmax(): number {
        return this.tmax
    }

    getTmin(): number {
        return this.tmin
    }


    toString(): string {
        return "Location: " + this.location + " Timestamp: " + this.timestamp + " Mean Max Temp: " + this.tmax + " Mean Min Temp: " + this.tmin
    }


}

export function processWeatherRefined(filename: string, location: string): any{
    let Results: WeatherResultRefined[] = []
    let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });
    let lineno = 0
    lineReader.on('line', function (line: any) {
        lineno++
        if ((line.indexOf(" ") == 0) && ((line.includes("yyyy") == false) || (line.includes("days") == false))) {
            let year: number = line.slice(3, 7)
            let month: number = line.slice(9, 11).trim()

            let tmax: number = avoidTypeErrors(line.slice(15, 18))
            let tmin: number = avoidTypeErrors(line.slice(22, 26))
            
            let timestring: string = year + "-" + month + "-1"

            let timestamp: number = new Date(timestring).valueOf()

            let tempWeather = new WeatherResultRefined(location, timestamp, tmax, tmin)
            //console.log(tempWeather.toString())
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