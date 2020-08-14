import SigninService from '../../services/SigininService'
import TokenService from '../../services/TokenService' 

// actions
const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'

function loginStart() {
  return {
    type : LOGIN_START
  }
}

function loginSuccess(token) {
  return {
    type : LOGIN_SUCCESS,
    token
  }
}

function loginFail(error) {
  return {
    type : LOGIN_FAIL,
    error
  }
}

// reducer

const initialState = {
  token: null,
  loding: false,
  error: null,
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_START :
      return {
        token: null,
        loading: true,
        error: null,
      }
    case LOGIN_SUCCESS :
      return {
        token: action.token,
        loading: true,
        error: null,
      }
    case LOGIN_FAIL :
      return {
        token: null,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}
// saga

export const loginThunk = (email, password, history) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const token = await SigninService.login(email, password);
      TokenService.save(token);
      dispatch(loginSuccess(token))
      history.push('/')
    } catch (error) {
      dispatch(loginFail(error))
    }
  }

}