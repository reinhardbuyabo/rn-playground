## AppStack
```
import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'

import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'

export default function AppNav() {
    // We need our context here
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        // Wrapper View => flex of 1, justifyContent center and alignItems center
        <View>
            {/* Loader of Activity Indicator,, size is gonna be large */}
            <ActivityIndicator />
        </View>
    }

    return (
        <NavigationContainer>
            {/* Check if user token has been set ... display AppStack */}
            {userToken !== null ? <AppStack /> : <AuthStack />}
            <AppStack />
        </NavigationContainer>
    )
}
```

- JWT Authentication ... 
- Already Logged In
- Authentication Flow
- 