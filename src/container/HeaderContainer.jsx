// @flow
import  React from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector } from 'react-redux';
export function HeaderContainer() {
  const nickName = useSelector((state) => state.authReducer.nickName);
  return (
    <HeaderComponent nickName={nickName}/>
  );
};