import React, { useCallback } from 'react'
import SigninComponent from '../component/SigninComponent'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/modules/auth';

export default function SigninContainer() {
  const history = useHistory();
  const dispatch = useDispatch()
  const login = useCallback((email, password) => {
    dispatch(loginThunk(email, password, history))
  }, [dispatch, history])
  return (
    <div>
      <SigninComponent login={login}/>
    </div>
  )
}