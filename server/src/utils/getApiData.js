const axios = require('axios');
const DRIVERS_API = 'http://localhost:5000/drivers';

const getApiData = async () => {
  try {
    const { data } = await axios(`${DRIVERS_API}`);
    return data;
  } catch (error) {
    return ({ message: 'Error retriving data from the API'});
  }
};

module.exports = getApiData;