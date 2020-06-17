import axios from 'axios';

// Using random name generater to simuiulate Employee roster
const url = 'https://randomuser.me/api/?results=15';

export default {

    getEmployees: function () {
        return axios.get(url);
    }


};