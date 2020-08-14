// @flow
import React from 'react';
import SigninContainer from '../container/SigninContainer';
import { useSelector }from 'react-redux'
import { Redirect } from 'react-router-dom'

export function SigninPage() {
  const token = useSelector((str) => str.authReducer.token);
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>SignIn</h1>
      <SigninContainer />
    </div>
  );
};