import axios from 'axios';

import Constants from '../../etc/config.json';

let suffix;

if (process.env.NODE_ENV === 'production') {
	suffix = 'production';
} else {
	suffix = 'developer';
}

export default {
    getListModel() {
      	return axios.get(`${Constants[suffix].apiGetList}`);
    },
}
