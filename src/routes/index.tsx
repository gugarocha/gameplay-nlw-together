import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { Background } from '../components/Background';
import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';

export function Routes() {
  const { user } = useAuth();

  return (
    <Background>
      <NavigationContainer>
        { user.id ? <AppRoutes /> : <SignIn /> }
      </NavigationContainer>
    </Background>
  );
};