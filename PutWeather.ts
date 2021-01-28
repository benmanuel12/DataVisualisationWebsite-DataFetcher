import {WeatherResultRefined} from './ProcessWeather'

export function putWeather(dataArray: WeatherResultRefined[]){
    let AWS = require("aws-sdk");
    
    AWS.config.update({
        region: "us-east-1",
        endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    });

    for (let i = 0; i < 1; i++) {
        let documentClient = new AWS.DynamoDB.DocumentClient();

        console.log("Type: " + typeof(dataArray[i]))
        console.log("Value: " + dataArray[i])

        let params = {
            TableName: "WeatherData",
            Item: {
                Location: dataArray[i].getLocation(),
                ObservationTime: dataArray[i].getTimestamp(),
                MaxMeanTemp: dataArray[i].getTmax(),
                MinMeanTemp: dataArray[i].getTmin()
            }
        };

        // let result: any = await documentClient.put(params).promise()
        // console.log(result)

        documentClient.put(params, (err: any, data: any) => {
            if (err) {
                console.error("Unable to add item")
                console.error("Error JSON:", JSON.stringify(err))
            }
            else {
                console.log("Weather added to table:", params.Item)
            }
        })
    }
    
}