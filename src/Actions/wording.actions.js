export const setWordingError = (data) => ({type: 'SET_WORDING_ERROR', data});
export const setWordingSuccess = () => ({type: 'SET_WORDING_SUCCESS'});
export const setWordingLoaderTrue = () => ({type: 'SET_WORDING_LOADER_TRUE'});
export const setUsernameLoader=()=>({type: 'ADD_USERNAME_LOADER'});
export const setUsernameError = (data) => ({type: 'ADD_USERNAME_ERROR', data});
export const setUsernameSuccess= (data) => ({type: 'ADD_USERNAME_SUCCESS', data});
export const sendSecretSuccess= (data) => ({type: 'SEND_SECRET_SUCCESS', data});
export const sendSecretLoader= () => ({type: 'SEND_SECRET_LOADER'});
export const sendSecretError= (data) => ({type: 'SEND_SECRET_ERROR', data});