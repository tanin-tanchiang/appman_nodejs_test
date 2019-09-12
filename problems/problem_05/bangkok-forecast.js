const axios = require('axios');
const bangkokForecast = async () => {
  // put your code here !!
  let res
  let results = []
  await axios.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok&appid=e5446373eef6128679c7fa8a1951d788&units=metric&cnt=7')
  .then(response => {
    res = response.data.list;
  })
  .catch(error => {
    console.log(error);
  });
  for(let i = 0; i < res.length; i++){
    let result = {}
    result.date = new Date(res[i].dt * 1000);
    result.minTemp = res[i].temp.min;
    result.maxTemp = res[i].temp.max;
    console.log(result);
  }
  return [];
};

module.exports = { bangkokForecast };
