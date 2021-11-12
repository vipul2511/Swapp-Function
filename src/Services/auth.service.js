import axios from 'axios';
const URL = 'https://data-stage.hubioid.com';
import DeviceInfo from 'react-native-device-info';
import EncryptedStorage from 'react-native-encrypted-storage';
export function sendEmail(data) {
    console.log('service')
    console.log(data)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/verification/code/register`,
        data
    });
}

export function LoginEmail(data) {
    console.log('service of login')
    console.log(data)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/verification/code/auth`,
        data
    });
}

export function sendCode(data) {
    return axios.request({
        method: 'post',
        headers: {
            Authorization: `Bearer ${DeviceInfo.getUniqueId()}`,
            'Content-Type': 'application/json'
        },
        url: `${URL}/api/v1/mobile/user/verification/code/check`,
        data
    });
}

export function getToken(data) {
    console.log('service get Token')
    console.log(data)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/auth`,
        headers: {
            Authorization: `Bearer ${DeviceInfo.getUniqueId()}`,
            'Content-Type': 'application/json'
        },
        data
    });
}

// export function addusername(data){
//   console.log('set username',data);
//   return axios.request({
//     method: 'post',
//     url: `${URL}/api/v1/mobile/user/name/set`,
//     data
// });
// }
export function authVerification(data) {
    console.log('set device id', DeviceInfo.getUniqueId());
    return axios.request({
        method: 'post',
        headers: {
            Authorization: `Bearer ${DeviceInfo.getUniqueId()}`,
            'Content-Type': 'application/json'
        },
        url: `${URL}/api/v1/mobile/user/verification/auth`,
        data
    });
}

export function sendWalletAddress(data) {
    console.log('service send address')
    console.log(data)
    let token = EncryptedStorage.getItem('token');
    console.log('toknen in service')
    console.log(token)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/wallet/save`,
        headers: { Authorization: 'Bearer ' + token },
        data
    });
}
