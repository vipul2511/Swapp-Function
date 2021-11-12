const initialState = {
    wording: null,
    loader: false,
    wordingError:null,
    usernameError:null,
    username:null,
    usernameLoader:false,
    secretSuccess:null,
    secretError:null
  };
  export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_WORDING_LOADER_TRUE':
            return {
                ...state,
                loader: true
            };
            case 'SET_WORDING_SUCCESS':
                return{
                  ...state,
                  wordingError:null,
                  wording:action.msg,
                  loader: false
                };
                case 'SET_WORDING_ERROR':
                  return{
                    ...state,
                    loader: false,
                    wordingError:action.msg
                  };
                  case 'ADD_USERNAME_LOADER':
            return {
                ...state,
                usernameLoader: true
            };
                   case 'ADD_USERNAME_SUCCESS':
             return{
               ...state,
               usernameError:null,
               username:action.data,
               usernameLoader: false
             };
             case 'ADD_USERNAME_ERROR':
               return{
                 ...state,
                 usernameLoader: false,
                 usernameError:action.data.msg
               };
               case 'ERASE_USERNAME_ERROR':
                return {
                    ...state,
                    usernameError: null,
                    username:null
                };
                case 'SEND_SECRET_LOADER':
                  console.log('send secret')
                  return{
                      ...state,
                      loader: true
                  }
              case 'SEND_SECRET_SUCCESS':
                console.log('send secret success',action);
                  return {
                      ...state,
                      secretError: null,
                      secretSuccess: action.data,
                      loader: false
                  };
                  case 'SEND_SECRET_ERROR':
                      console.log('reducer token error',action)
                  return {
                      ...state,
                      secretError: action.data.msg,
                      loader: false
                  };
            default:
                return state;
        }


  }