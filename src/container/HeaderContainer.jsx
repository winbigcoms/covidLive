// @flow
import  React, { useCallback } from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import TokenService from '../services/TokenService';
import { logoutThunk } from '../redux/modules/auth';
import { useHistory } from 'react-router-dom';

export function HeaderContainer() {
  const nickName = useSelector((state) => state.authReducer.nickName);
  const token = useSelector((state) => state.authReducer.nickName)
  const history = useHistory();
  console.log('컨테이너', token)
  console.log('컨테이너', nickName)
  const dispatch = useDispatch();
  const logout = useCallback(()=> {
   
    dispatch(logoutThunk(dispatch, token, history))
  },[dispatch, token, history])
  return (
    <HeaderComponent nickName={nickName} logout={logout}/>
  );
};