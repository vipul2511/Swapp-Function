import {call, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import * as wording from '../Services/wording.service';
import {setWordingError,setWordingSuccess,sendSecretLoader,setUsernameLoader,sendSecretSuccess,sendSecretError,setUsernameSuccess,setUsernameError,setWordingLoaderTrue} from "../Actions/wording.actions";
function* sendwording(action) {
  try {
      yield put(setWordingLoaderTrue());
    console.log('------------------------');
    console.log(action.data);
    console.log('------------------------');
    let {data} = yield call(wording.sendwording, action.data);
    console.log('data from server2');
    console.log(data);
      yield put(setWordingSuccess(action.data.msg));
  } catch (error) {
    console.log('error',error);
    yield put(setWordingError(error.response.msg))
  }
}
function* addusername(action){
  try{
   yield put(setUsernameLoader());
   let {data}=yield call(wording.addusername,action.data);
   console.log('data of username',data);
   yield put(setUsernameSuccess(data.data));
  }catch(error){
    console.log('username error',error);
    yield put(setUsernameError(error.response.data));

  }
}
function* sendSecretHash(action) {
      try {
          console.log('send secret saga')
          yield put(sendSecretLoader());
          let {data} = yield call(wording.sendSecretHash, action.data);
          console.log(data)
          yield put(sendSecretSuccess(data.data));
          console.log('send secret hash success')
      } catch (error) {
          console.log('error send secret saga')
          yield put(sendSecretError(error));
          console.log(error)
      }
  }
export default function* watchwording() {
  yield takeLatest('SET_WORDING', sendwording);
      yield takeLatest("ADD_USERNAME", addusername);
      yield takeLatest("SEND_SECRET", sendSecretHash);
}
