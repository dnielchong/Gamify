import { View, Text, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
//import { Link } from 'expo-router' 

import { images } from '../../constants'
import { CustomButton, FormField } from '../../components'
import { auth } from '../../FirebaseConfig'
import { createUserWithEmailAndPassword} from 'firebase/auth'
     
const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const OnCreateAccount=()=>{
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
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
            Sign Up For Gamify
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-7"
          />
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
            title="Sign Up"
            handlePress={OnCreateAccount}
            containerStyles='mt-10'
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp