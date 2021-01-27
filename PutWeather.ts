export function putWeather(array: any){
    let AWS = require("aws-sdk");
    
    AWS.config.update({
        region: "us-east-1",
        endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    });


    // for (let i = 0; i < array.length; i++) {
    //     let documentClient = new AWS.DynamoDB.DocumentClient();

    //     let params = {
    //         TableName: "WeatherData",
    //         Item: {
    //             Timestamp: array[i].getTimestamp(),
    //             Location: array[i].getLocation(),
    //             MaxMeanTemp: array[i].getTmax(),
    //             MinMeanTemp: array[i].getTmin()
    //         }
    //     };

    //     documentClient.put(params, (err, data) => {
    //         if (err) {
    //             console.error("Unable to add item")
    //             console.error("Error JSON:", JSON.stringify(err))
    //         }
    //         else {
    //             console.log("Weather added to table:", params.Item)
    //         }
    //     })
    // }

    let documentClient = new AWS.DynamoDB.DocumentClient();

        let params = {
            TableName: "WeatherData",
            Item: {
                ObservationTime: 122323423, //array[0].getTimestamp(),
                Location: "London", //array[0].getLocation(),
                MaxMeanTemp: 23, //array[0].getTmax(),
                MinMeanTemp: -3//array[0].getTmin()
            }
        };

//documentClient.put(params).promise();

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

putWeather([]);
