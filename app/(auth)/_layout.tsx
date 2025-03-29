import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar} from 'expo-status-bar'

const _layout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{headerShown: false}}
                /> 
                
            </Stack>

            <StatusBar backgroundColor='#162622' style="light"/>

        </>
    )
}

export default _layout