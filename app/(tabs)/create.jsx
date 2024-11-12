import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { db, auth } from '../../FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { CustomButton, FormField } from '../../components'
import { Link } from 'expo-router' 

const Create = () => {
  
  const userID = auth.currentUser.uid;

  const [form, setForm] = useState({
    Title: '',
    Description: '',
    Importance: '',
    Deadline: '',
    Recurring: ''
  })

  const OnCreate = () => {
    try{
      setDoc(doc(db,"Users", userID, "Tasks", form.Title), {
        Description: form.Description,
        Importance: form.Importance,
        Deadline: form.Deadline,
        Recurring: form.Recurring
      })
      setForm({ ...form, 
        Title: '',
        Description: '',
        Importance: '',
        Deadline: '',
        Recurring: ''})
      console.log("Task added");
    }
    catch{
      console.error("Error adding task: ")
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentOffset={{ y: 15, x:0}}>
        <View className='w-full justify-center min-h-[82vh] px-2 my-0'> 

        <FormField
          title="Task Title"
          value={form.Title}
          handleChangeText={(e) => setForm({ ...form, Title: e})}
          otherStyles="mt-7"
        />

        <FormField
          title="Task Description"
          value={form.Description}
          handleChangeText={(e) => setForm({ ...form, Description: e})}
          otherStyles="mt-7"
        />

        <FormField
          title="Importance (Low, Medium, High)"
          value={form.Importance}
          handleChangeText={(e) => setForm({ ...form, Importance: e})}
          otherStyles="mt-7"
        />  

        <FormField
          title="Deadline"
          value={form.Deadline}
          handleChangeText={(e) => setForm({ ...form, Deadline: e})}
          otherStyles="mt-7"
        />

        <FormField
          title="Recuring"
          value={form.Recurring}
          handleChangeText={(e) => setForm({ ...form, Recurring: e})}
          otherStyles="mt-7"
        />    

        <CustomButton
          title="Create Task"
          handlePress={OnCreate}
          containerStyles='mt-10' 
        />

        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Or 
          </Text>
          <Link href="sign-up" className="text-lg font-psemibold text-secondary-100">Choose From Deafults</Link>
        </View>
          

        
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create