// import {downloadFile} from './DownloadFiles'
import {processWeather} from './ProcessWeather'

// let urls: string[] = [
//     'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/armaghdata.txt',
//     'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/braemardata.txt',
//     'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/cambornedata.txt',
//     'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/durhamdata.txt',
//     'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/heathrowdata.txt'
// ]

// let paths: string[] = [
//     'sources/armaghdata.txt',
//     'sources/braemardata.txt',
//     'sources/cambornedata.txt',
//     'sources/durhamdata.txt',
//     'sources/heathrowdata.txt'
// ]

// for (let i: number = 0; i < urls.length; i++) {
//     downloadFile(urls[i], paths[i])
// }

let results = processWeather("sources/armaghdata.txt", "Armagh")