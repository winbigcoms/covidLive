// @flow
import  React, { useCallback } from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector, useDispatch } from 'react-redux';

import { logoutThunk } from '../redux/modules/auth';
import { useHistory } from 'react-router-dom';

export function HeaderContainer() {
  const nickName = useSelector((state) => state.authReducer.nickName);
  const history = useHistory();

  const dispatch = useDispatch();

  const logout = useCallback(()=> {
    dispatch(logoutThunk(history))
  },[dispatch, history])

  return (
    <HeaderComponent nickName={nickName} logout={logout}/>
  );
};