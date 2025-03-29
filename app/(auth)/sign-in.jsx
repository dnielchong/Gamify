import { View, Text, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router' 
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FirebaseConfig'
import { images } from '../../constants'
import { CustomButton, FormField } from '../../components'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const OnSignIn = () => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        router.replace('/home')
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
      });
  }
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center min-h-[82vh] px-2 my-6'>  
          <Image 
          source={images.GamifyLogo2} 
          //resizeMode='contain'
          className='w-[200px] h-[80px]' />

          <Text className='text-2xl text-white text-semibold mt-7 font-psemibold'>
            Log in to Gamify
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Log In"
            handlePress={OnSignIn}
            //handlePress={() => {router.replace('/home')}}
            containerStyles='mt-10'
            
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Dont have account? 
            </Text>
            <Link href="sign-up" className="text-lg font-psemibold text-secondary-100">Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn