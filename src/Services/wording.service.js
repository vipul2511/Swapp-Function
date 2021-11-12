import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
const URL = 'https://data-stage.hubioid.com';

export function sendwording(data) {
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/wording/set`,
        headers: { Authorization: 'Bearer ' + data.token },
        data: data.data
    });
}
export function addusername(data) {
    console.log('set username', data);
    return axios.request({
        method: 'post',
        headers: {
            Authorization: `Bearer ${DeviceInfo.getUniqueId()}`,
            'Content-Type': 'application/json'
        },
        url: `${URL}/api/v1/mobile/user/name/set`,
        data
    });
}

export function sendSecretHash(data) {
    console.log('scert', data);
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/secret/set`,
        headers: {
            Authorization: `Bearer ${DeviceInfo.getUniqueId()}`,
            'Content-Type': 'application/json'
        },
        data
    });
}

