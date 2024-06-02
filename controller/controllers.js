const { param } = require('../routes/route');
const service = require('../services/services');
//https://api.openweathermap.org/data/2.5/forecast?q=aden&appid=cbc230fc223067e9a0b72ea9f509f0db&units=metric


async function showWeather(req, res) {
  const city=req.params.city
  try {
    const data = await service.getWeather(city);
    res.json(data);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: 'Failed to display Data.' });
  }
}

async function showForecast(req, res) {
  const city=req.params.city
  try {
    const data = await service.getForecast(city);
    res.json(data);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: 'Failed to display Data.' });
  }
}


module.exports = {
  showWeather,
  showForecast
};

