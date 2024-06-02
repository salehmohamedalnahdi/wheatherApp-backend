const axios = require('axios');

async function getWeather(city) {
  url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbc230fc223067e9a0b72ea9f509f0db&units=metric`
  const response = await axios.get(url);
  const data= response.data
    return data;  
}

async function getForecast(city) {
  url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cbc230fc223067e9a0b72ea9f509f0db&units=metric`
  const response = await axios.get(url);
  const data= response.data
    return data;  
}
module.exports = {
  getWeather,getForecast
  
};

