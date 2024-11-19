import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import { sprites } from '../../constants'
import { CustomButton } from '../../components'
import React from 'react'

const Inventory = () => {
  const Items = [sprites.Jeans, sprites.BlackEyes, sprites.BlackEyebrows, sprites.RedShirt, sprites.Sneakers, sprites.Smile]
}

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentOffset={{ y: 15, x:0}}>
        <View className='w-full justify-center px-2 my-6'>   
          <Text className='text-2xl text-white text-semibold font-psemibold mt-4'>
            Inventory
          </Text>
          {/* Grid of 6 boxes bc including one for the skin tone felt weird */}
          <View className="flex-wrap flex-row gap-6 mt-5 px-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <View key={index} className="items-center mb-5">
                {/* Square box */}
                <View className="bg-white w-20 h-20 rounded-lg" >
                  {/* photo of avatar's items */}
                </View>
              </View>
            ))}

            <sprites.Body1 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: -115, left: 25}}/>
            <sprites.Body2 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: -115, left: 130}}/>
            <sprites.Body3 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: -115, left: 235}}/>
            <sprites.Body4 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: -115, left: 340}}/>
            <sprites.Body5 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: 7, left: 25}}/>
            <sprites.Body6 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: 7, left: 130}}/>
            <sprites.Body7 width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: 7, left: 235}}/>
            <sprites.RedShirt width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -135, left: 317}}/>
            <sprites.Jeans width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -60, left: 8}}/>
            <sprites.Sneakers width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -60, left: 110}}/>
            <sprites.ShortBrownHair width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: 30, left: 215}}/>
            <sprites.ShortBlackHair width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: 30, left: 320}}/>
            <sprites.LongBrownHair width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: 140, left: 8}}/>
            <sprites.BlueEyes width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: 140, left: 110}}/>
            <sprites.BlackEyes width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: 140, left: 215}}/>
            <sprites.BrownEyes width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: 140, left: 320}}/>
          </View>
          <Text className='text-2xl text-white text-semibold font-psemibold mt-4'>
            Settings
          </Text>
          <View className="flex-row justify-between">
            <Text className='text-white text-semibold font-psemibold mt-4'>
              Email
            </Text>
            <Text className='text-white font-psemibold mt-4'>
              testemail4@test.com
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className='text-white text-semibold font-psemibold mt-4'>
              Phone Number
            </Text>
            <Text className='text-white font-psemibold mt-4'>
              (111)-222-3333
            </Text>
          </View>
          <Text className='text-2xl text-white text-semibold font-psemibold mt-4'>
            Themes
          </Text>
          <CustomButton
            title="Default"
            containerStyles="mt-7"
          />
          <CustomButton
            title="Pink"
            containerStyles="mt-7 bg-pink-400"
            textStyles="text-pink-900"
          />
          <CustomButton
            title="Basic Light"
            containerStyles="mt-7 bg-white"
          />
          <CustomButton
            title="Basic Dark"
            containerStyles="mt-7 bg-gray-700"
            textStyles="text-white"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile