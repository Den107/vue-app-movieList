import axios from 'axios';
function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    apikey: process.env.VUE_APP_API_KEY,
    plot: 'full',
  });
  return config;
}

function retutnData(res) {
  console.log(res);
  return res.data;
}

export default function () {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(retutnData);
}