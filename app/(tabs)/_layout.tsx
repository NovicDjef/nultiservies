import React from 'react'
import TabBar from '../../components/TabBar'
import { Provider } from 'react-redux';
import { Stack } from 'expo-router';
import store from '../../redux/store';

const _layout = () => {

    return (
      <Provider store={store}>
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name="index" />
          <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" />
          <Stack.Screen options={{ headerShown: false }} name="LoginScreen" />
          <Stack.Screen options={{ headerShown: false }} name="DetailHotel" />
        </Stack>
      </Provider>
    );
  }
  

export default _layout