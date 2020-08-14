// @flow
import  React from 'react';
import { HeaderComponent } from '../component/HeaderComponent';
import { useSelector } from 'react-redux';
export function HeaderContainer() {
  // const nickName = useSelector((state) => state.auth.nickName).split('@')[0]
  return (
    <HeaderComponent nickName={''}/>
  );
};