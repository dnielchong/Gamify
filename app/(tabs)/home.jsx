import { View, Text, ScrollView, Button, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { sprites } from '../../constants'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View>
          <Text className='text-2xl justify-center text-white text-semibold mt-7 font-psemibold'>
           HOME
          </Text>
          <View style={{position: 'relative'}}>
            <sprites.Body6 width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
            <sprites.Jeans width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
            <sprites.BlackEyes width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
            <sprites.BlackEyebrows width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
            <sprites.RedShirt width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
            <sprites.Sneakers width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
            <sprites.Smile width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 0}}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home