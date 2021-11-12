export const setEmailSuccess = (email) => ({type: 'SET_EMAIL_SUCCESS', email});
export const setEmailError = (data) => ({type: 'SET_EMAIL_ERROR', data});
export const setCodeError = (data) => ({type: 'SET_CODE_ERROR', data});
export const setTokenError = (data) => ({type: 'SET_TOKEN_ERROR', data});
export const setTokenSuccess= (data) => ({type: 'SET_TOKEN_SUCCESS', data});
export const setEmailLoaderTrue=()=>({type: 'SET_EMAIL_LOADER'});
export const setLoginLoaderTrue=()=>({type: 'SET_LOGIN_LOADER'});
export const setAuthVerificationLoader=()=>({type:'SET_AUTH_VERIFICATION_LOADER'})
export const setAuthVerificationError = (data) => ({type: 'SET_AUTH_VERIFICATION_ERROR', data});
export const setAuthVerificationSuccess= (data) => ({type: 'SET_AUTH_VERIFICATION_SUCCESS', data});
export const setCodeSuccess = (data) => {
    console.log('action ')
    console.log(data)
    return ({type: 'SET_CODE_SUCCESS', data})
}
export const setLoaderTrue = () => ({type: 'SET_LOADER_TRUE'});
