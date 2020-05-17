import axios from 'axios';
import Config from 'react-native-config';

export const axiosConfig = {
  init: () => {
    axios.defaults.baseURL = Config.API_URL;
  },
};
