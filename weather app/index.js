
var city = 'london'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
    headers: { 'X-Api-Key': 'cTmdctVKgIuCNAON6am+Aw==u2sQPruEW0rpx61U'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});















// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {city: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': '024163da75msh51486b97591d80fp175257jsn940b9bc9eae1',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

















// const url =
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "cTmdctVKgIuCNAON6am+Aw==u2sQPruEW0rpx61U",
//     "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//   },
// };
// fetch(
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     cloud_pct = response.cloud_pct;
//     temp = response.temp;
//     feels_like = response.feels_like;
//     humidity = response.humidity;
//     min_temp = response.min_temp;
//     max_temp = response.max_temp;
//     wind_speed = response.wind_speed;
//     wind_degrees = response.wind_degrees;
//     sunrise = response.sunrise;
//     sunset = response.sunset;
//   })
//   .catch((err) => console.log(response));
// // try {
// // 	const response = await fetch(url, options);
// // 	const result = await response.text();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }
