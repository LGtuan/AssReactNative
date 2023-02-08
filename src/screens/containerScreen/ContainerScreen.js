import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../mainScreens/MainScreen'
import SignUpScreen from '../signUpScreen/SignUpScreen'
import LoginInScreen from '../loginScreens/LoginInScreen'
import { StatusBar } from 'expo-status-bar'
import styles from '../loginScreens/styles'
import CreatePostsScreen from '../createPostsScreen/CreatePostsScreen'
import IntroduceScreen from '../introduceScreen/IntroduceScreen'
import EditProfileScreen from '../EditProfileScreen'
import EditProfileDetails from '../EditProfileDetails'

const Stack = createNativeStackNavigator();

const FormScreen = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style='auto' />
                <Stack.Navigator initialRouteName='Introduce'>
                    <Stack.Screen name='Introduce' component={IntroduceScreen}  options={{headerShown: false}}/>
                    <Stack.Screen name='LogIn' component={LoginInScreen}  options={{headerShown: false}}/>
                    <Stack.Screen name='SignUp' component={SignUpScreen}  options={{headerShown: false}}/>
                    <Stack.Screen name='Main' component={MainScreen} options={{headerShown: false}}/>
                    <Stack.Screen name='CreatePost' component={CreatePostsScreen} options={{headerShown: false}}/>
                    <Stack.Screen name='EditProfile' component={EditProfileScreen}/>
                    <Stack.Screen name='EditProfileDetails' component={EditProfileDetails}/>
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

export default FormScreen