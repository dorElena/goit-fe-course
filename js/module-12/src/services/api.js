import axios from 'axios';
const KEY = 'loglevel:webpack-dev-server';

export const fetchImages = ({ query, count, page }) => {
  const url = `http://localhost:9011/?key=${KEY}`;

  return axios
    .get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log('axios err : ', err));
};