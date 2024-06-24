import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import UserHomePage from '../UserHomePage';
import AddStockPage from '../AddStockPage';
import EditStockPage from '../EditStockPage';

const AppStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="UserHome">
            <Stack.Screen name="UserHome" component={UserHomePage} />
            <Stack.Screen name="AddStock" component={AddStockPage} />
            <Stack.Screen name="EditStock" component={EditStockPage} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    app_txt: {
        textAlign: 'center'
    },
    home_page: {
        flex: 1
    }
})