import { View, Text, Image} from 'react-native'
import { Tabs} from 'expo-router'
import React from 'react'

import {icons} from '../../constants'

const TabIcon = ({ icon, color, name, focused}) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 24, width: 60 }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 28,
            height: 28,
            tintColor: color,
            marginBottom: 4,
          }}
        />
        <Text
          style={{
            fontFamily: focused ? 'Poppins-SemiBold' : 'Poppins-Regular',
            fontSize: 10,
            color: color,
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    )
}

const TabsLayout = () => {
   return (
    <> 
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#7E57C2',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#161622',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 87,
                paddingBottom: 8,
            },
            }}>
            
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="create"
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="shop"
                options={{
                    title: 'Shop',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.shop} color={color} name="Shop" focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
   )
   

} 

export default TabsLayout