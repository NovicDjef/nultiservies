import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'
import { Stack } from 'expo-router';

const _layout = () => {

    return (
      <Stack>
        <Stack.Screen name="LoginScreen" options={{ title: 'LoginScreen' }} />
        {/* <Stack.Screen name="RegisterScreen" options={{ title: 'Home' }} /> */}
      </Stack>
    );
  }
  

export default _layout