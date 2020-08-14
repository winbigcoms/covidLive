import SigninService from '../../services/SigininService'
import TokenService from '../../services/TokenService' 

// actions
const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT = 'LOGOUT'

function loginStart() {
  return {
    type : LOGIN_START
  }
}

function loginSuccess(token, nickName) {
  return {
    type : LOGIN_SUCCESS,
    token,
    nickName
  }
}

function loginFail(error) {
  return {
    type : LOGIN_FAIL,
    error
  }
}


export function logout() {
  return{
    type : LOGOUT
  }
}

// reducer

const initialState = {
  token: null,
  loding: false,
  error: null,
  nickName: null
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_START :
      return {
        token: null,
        loading: true,
        error: null,
        nickName: null,
      }
    case LOGIN_SUCCESS :
      return {
        token: action.token,
        loading: true,
        error: null,
        nickName: action.nickname,
      }
    case LOGIN_FAIL :
      return {
        token: null,
        loading: false,
        error: action.error,
        nickName: null,
      }
    case LOGOUT :
      return {
        token: null,
        loading: false,
        error: null,
        nickName: null,
      }
    default:
      return state;
  }
}
// thunk

export const loginThunk = (email, password, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const token = await SigninService.login(email, password);
      TokenService.save(token, email);
      dispatch(loginSuccess(token, email))
      history.push('/')
    } catch (error) {
      dispatch(loginFail(error))
    }
  }
}

export const logoutThunk = (history) => {
  return async (dispatch) => {
    try{
      const token = TokenService.tokenGet()
      SigninService.logout(token)
      TokenService.remove();
      dispatch(logout());
      history.push('/signin')
    } catch (error) {
      console.log(error)
    }
  }
}

// export default loginThunk;