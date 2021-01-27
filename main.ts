import {processWeatherRefined} from './ProcessWeather'
import {putWeather} from './PutWeather'

putWeather([]);
/*
This code is used to download the files from the internet
Its not needed everytime the code is run unless the file is likely to have changed

let urls: string[] = [
    'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/armaghdata.txt',
    'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/braemardata.txt',
    'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambornedata.txt',
    'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/durhamdata.txt',
    'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/heathrowdata.txt'
]

let paths: string[] = [
    'sources/armaghdata.txt',
    'sources/braemardata.txt',
    'sources/cambornedata.txt',
    'sources/durhamdata.txt',
    'sources/heathrowdata.txt'
]

for (let i: number = 0; i < urls.length; i++) {
    downloadFile(urls[i], paths[i])
}
*/

let armaghresults = processWeatherRefined("sources/armaghdata.txt", "Armagh")
// let braemarresults = processWeatherRefined("sources/braemardata.txt", "Braemar")
// let camborneresults = processWeatherRefined("sources/cambornedata.txt", "Camborne")
// let durhamresults = processWeatherRefined("sources/durhamdata.txt", "Durham")
// let heathrowresults = processWeatherRefined("sources/heathrowdata.txt", "Heathrow")

putWeather(armaghresults)