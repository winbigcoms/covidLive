// @flow
import  React, { useCallback } from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';
import TokenService from '../services/TokenService';

export function HeaderContainer() {
  const nickName = useSelector((state) => state.authReducer.nickName);
  const dispatch = useDispatch();
  const logout = useCallback(()=> {
    TokenService.remove()
    dispatch(logout())
  },[dispatch])
  return (
    <HeaderComponent nickName={nickName} logout={logout}/>
  );
};