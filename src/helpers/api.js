import axios from 'axios';
import jsonData from './data.json';

const API_URL = 'https://static.usabilla.com/recruitment/apidemo.json';

var config = {
    headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'crossDomain':true
    }
};
// Name:fetchItemsFromApi
// Params:none
// Desc:returns items in a promise from an url.
export const fetchItemsFromAPI = () => {

    return axios
            .get(API_URL, config)
            .then(response => {
                console.log(response);
            })
            .catch((e)=>{
                console.log(e);
            });
}
// Name:fetchItemsLocally
// Params:none
// Desc: returns items in a promise from local environment.

export const fetchItemsLocally = ()=>{
    let itemsPromise = new Promise((resolve, reject)=>{
        resolve(jsonData.items);
    });
    
    return itemsPromise.then((response)=>{
        return response;
    });
}