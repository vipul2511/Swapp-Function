const initialState = {
  email: null,
  phone:null,
  isAuth: false,
  loader: false,
  emailError: null,
  username:null,
  usernameError:null,
  emailLoader:false,
  usernameLoader:false,
  authLoader:false,
  authVerificationData:null,
  authVerificationError:null,
  secretSuccess:null,
  secretError:null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_EMAIL_LOADER':
            return {
                ...state,
                emailLoader: true
            };
            // case 'SET_USERNAME_LOADER':
            // return {
            //     ...state,
            //     usernameLoader: true
            // };
            case 'SET_LOADER_TRUE':
            return {
                ...state,
                loader: true
            };
        case 'SET_EMAIL_SUCCESS':
            return {
                ...state,
                email: action.email,
                phone:action.phone,
                emailError: null,
                emailLoader: false
            };
            case 'ERASE_EMAIL_DATA':
                return{
                    ...state,
                    email:null,
                    loader:false,
                    emailError:null

                }
        case 'ERASE_EMAIL_ERROR':
            return {
                ...state,
                emailError: null,
            };
        case 'SET_EMAIL_ERROR':
            return {
                ...state,
                emailError: action.data.msg,
                emailLoader: false
            };
        case 'SET_CODE_SUCCESS':
            return {
                ...state,
                codeError: null,
                isAuth: action.data,
                loader: false
            };
        case 'ERASE_CODE_ERROR':
            return {
                ...state,
                codeError: null,
            };
            case 'ERASE_CODE_DATA':
                return{
                    ...state,
                    isAuth:null,
                    codeError:null,
                    loader:false

                }

        case 'SET_CODE_ERROR':
            return {
                ...state,
                codeError: action.data.msg,
                loader: false
            };
            case 'SET_TOKEN_SUCCESS':
            return {
                ...state,
                tokenError: null,
                isAuth: action.data,
                loader: false
            };
            case 'SET_TOKEN_ERROR':
                console.log('reducer token error')
            return {
                ...state,
                tokenError: action.data.msg,
                loader: false
            };
             case 'SEND_SECRET_LOADER':
                 return{
                     ...state,
                     loader: true
                 }
             case 'SEND_SECRET_SUCCESS':
                 return {
                     ...state,
                     secretError: null,
                     isAuth: action.data,
                     loader: false
                 };
                 case 'SEND_SECRET_ERROR':
                     console.log('reducer token error')
                 return {
                     ...state,
                     secretError: action.data.msg,
                     loader: false
                 };
                case 'SET_AUTH_VERIFICATION_LOADER':
                    return {
                        ...state,
                        authLoader: true
                    };
                    case 'SET_AUTH_VERIFICATION_SUCCESS':
                        return{
                          ...state,
                          authVerificationError:null,
                          authVerificationData:action.data,
                          authLoader: false
                        };
                        case 'SET_AUTH_VERIFICATION_ERROR':
                            console.log('auth error',action);
                          return{
                            ...state,
                            authLoader: false,
                            authVerificationError:action.data.msg
                          };


        default:
            return state;
    }
}
