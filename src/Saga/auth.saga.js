import {call, put, takeEvery, takeLatest} from "@redux-saga/core/effects";
import * as auth from "../Services/auth.service";
import {setCodeError,setLoginLoaderTrue, setCodeSuccess,setUsernameSuccess,setEmailLoaderTrue,setAuthVerificationLoader,setUsernameLoader, setUsernameError,setEmailError,setSecretError,setEmailSuccess,setAuthVerificationSuccess,setAuthVerificationError, setLoaderTrue,setSecretLoader,setSecretSuccess, setTokenError, setTokenSuccess} from "../Actions/auth.actions";


function* sendEmail(action) {
    try {
        yield put(setEmailLoaderTrue());
        console.log(action.data)
        let {data} = yield call(auth.sendEmail, action.data);
        console.log('data from server')
        console.log(data) 
        if(action.data.email) yield put(setEmailSuccess(action.data.email));
        else yield put(setEmailSuccess(action.data.phone));
    } catch (error) {
        console.log('error')
        console.log(error.response.data)
        yield put(setEmailError(error.response.data));
    }
}
function* LoginEmail(action) {
    try {
        yield put(setEmailLoaderTrue());
        console.log('server',action);
        console.log(action.data)
        let {data} = yield call(auth.LoginEmail, action.data);
        console.log('data from server')
        console.log(data) 
        if(action.data.email) yield put(setEmailSuccess(action.data.email));
        else yield put(setEmailSuccess(action.data.phone));
    } catch (error) {
        console.log('login error')
        console.log(error.response.data)
        yield put(setEmailError(error.response.data));
    }
}

function* sendCode(action) {
    try {
        yield put(setLoaderTrue());
        let {data} = yield call(auth.sendCode, action.data);
        yield put(setCodeSuccess(data.data));
    } catch (error) {
        yield put(setCodeError(error.response.data));
    }
}



function* getToken(action) {
    try {
        yield put(setLoaderTrue());
        let {data} = yield call(auth.getToken, action.data);
        console.log('token',data);
        yield put(setTokenSuccess(data.data));
    } catch (error) {
        yield put(setTokenError(error.response.data));
    }
}



function* authVerification(action){
    console.log('calling auth verification',action.data)
    try{
     yield put(setAuthVerificationLoader());
     let {data}=yield call(auth.authVerification,action.data);
     console.log('data of auth',data);
     yield put(setAuthVerificationSuccess(data.data));
    }catch(error){
        console.log('error',error);
      yield put(setAuthVerificationError(error.response.data));
  
    }
  }

function* sendWalletAddress(action) {
    try {
        yield put(setLoaderTrue());
        let {data} = yield call(auth.sendWalletAddress, action.data);
        console.log('send address success')
        console.log(data)
        //yield put(setTokenSuccess(data.data));
    } catch (error) {
        console.log('send address error')
        console.log(error)
        //yield put(setTokenError(error.response.data));
    }
}

export default function* watchLogin() { 
    yield takeLatest("SEND_EMAIL", sendEmail);
    yield takeLatest("GET_TOKEN", getToken);
    yield takeLatest("SEND_CODE", sendCode);
    yield takeLatest("SEND_WALLET_ADDRESS", sendWalletAddress);
    yield takeLatest("SET_AUTH_VERIFICATION",authVerification)
    yield takeLatest("SEND_LOGIN",LoginEmail);
}
