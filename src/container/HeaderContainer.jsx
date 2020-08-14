// @flow
import  React, { useCallback } from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import TokenService from '../services/TokenService';
import { logoutThunk } from '../redux/modules/auth';
import { useHistory } from 'react-router-dom';

export function HeaderContainer() {
  const nickName = useSelector((state) => state.authReducer.nickname);
  const token = useSelector((state) => state.authReducer.token)
  const history = useHistory();
  console.log('컨테이너 토큰', token)
  console.log('컨테이너 닉네임', nickName)
  const dispatch = useDispatch();
  const logout = useCallback(()=> {
   
    dispatch(logoutThunk(dispatch, history))
  },[dispatch, history])
  return (
    <HeaderComponent nickName={nickName} logout={logout}/>
  );
};