const accessKey = "9d577cedcdaee4af"

export const lookupRestaurants = (streetAddress, radius) => 
    fetch(`https://eatstreet.com/publicapi/v1/restaurant/search`, {
        method: "GET",
        body: {
            "street-address": streetAddress,
            "pickup-radius": radius
        },
        headers: {
            "X-Access-Token": accessKey,
            "content-type":"application/json"
        }
    })
        .then(response => response.json())