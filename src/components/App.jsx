import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <RegisterForm />
      <LoginForm />
    </>
  );
};
