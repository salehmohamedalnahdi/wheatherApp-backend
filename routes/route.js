const express= require('express')
const router = express.Router();
const controller=require('../controller/controllers.js')

router.get("/weather/:city",controller.showWeather)
router.get("/forecast/:city",controller.showForecast)


module.exports = router;

