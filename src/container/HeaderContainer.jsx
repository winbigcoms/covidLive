// @flow
import  React, { useCallback } from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import TokenService from '../services/TokenService';
import { logOut } from '../redux/modules/auth';

export function HeaderContainer() {
  const nickName = useSelector((state) => state.authReducer.nickName);
  const dispatch = useDispatch();
  const logout = useCallback(()=> {
    TokenService.remove()
    dispatch(logOut())
  },[dispatch])
  return (
    <HeaderComponent nickName={nickName} logout={logout}/>
  );
};