import { View, Text, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants';
import { sprites } from '../../constants'
import React from 'react'
import * as Progress from 'react-native-progress';


const Item = ({name}) => {
  return(
    <View style={styles.item}>
      <Text style={{color: 'white'}}>{name}</Text>
    </View>
  );
}

const Home = () => {

  const DailyTasks = [
    {
      id: '1',
      name: 'Task: Make My Bed\nDeadline: 7:30 AM, 11/19/24',
    },
    {
      id: '2',
      name: 'Task: Eat Breakfast\nDeadline: 8:00 AM, 11/19/24',
    },
    {
      id: '3',
      name: 'Task: Brush Teeth\nDeadline: 7:00 PM, 11/19/24',
    },
  ];

  const WeekTasks = [
    {
      id: '1',
      name: 'Task: Calc 3 Homework\nDeadline: 10:00 AM, 11/20/24',
    },
    {
      id: '2',
      name: 'Task: Complete 3311 Powerpoint\nDeadline: 8:00 AM, 11/19/24',
    },
    {
      id: '3',
      name: 'Task: Get Groceries \nDeadline: 7:00 PM, 11/22/24',
    },
  ];

  const MonthTasks = [
    {
      id: '1',
      name: 'Task: Pay Off Credit Card\nDeadline: 10:00 PM, 11/30/24',
    },
  ];

  const renderItem = ({item}) => (
    <Item name={item.name} />
  );

  return (
    <SafeAreaView className="bg-primary h-full">
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Text className='text-2xl text-white text-semibold mt-7 font-psemibold' style={{ position: 'absolute', top: 250, left: 73}}>
            Tres
          </Text>
          <sprites.Body6 width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.ShortBrownHair width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.Jeans width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.BlackEyes width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.BlackEyebrows width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.RedShirt width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.Sneakers width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>
          <sprites.Smile width="416" height="960" viewBox="0 0 100 100" style={{ position: 'absolute', top: 0, left: 45}}/>


          <Text className='text-m text-white text-semibold mt-7 font-psemibold' style={{ position: 'absolute', top: 500, left: 40}}>
            Experience Level
          </Text>
          <Progress.Bar progress={0.7} height={10} width={170} color="green" borderColor="green" style={{ position: 'absolute', top: 550, left: 10 }} />

          <Text className='text-m text-white text-semibold mt-7 font-psemibold' style={{ position: 'absolute', top: 550, left: 65}}>
            Happiness
          </Text>
          <Progress.Bar progress={0.95} height={10} width={170} color="yellow" borderColor="yellow" style={{ position: 'absolute', top: 600, left: 10 }} />
          <Text className='text-m text-white text-semibold mt-7 font-psemibold' style={{ position: 'absolute', top: 600, left: 45}}>
            Coins:         1050
          </Text>
          <Image source ={icons.coin} style={{position: 'absolute', top: 629, left: 100, width: 17, height:17}} />
        </View>

        <View style={styles.rightViewr}>
          <Text className='text-2xl text-white text-semibold mt-7 font-psemibold' style={{ top: 0, left: 55}}>
            DAILY TASKS
          </Text>
          <FlatList
            data={DailyTasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Text className='text-2xl text-white text-semibold mt-7 font-psemibold' style={{ top: 0, left: 55}}>
            THIS WEEK
          </Text>
          <FlatList
            data={WeekTasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <Text className='text-2xl text-white text-semibold mt-7 font-psemibold' style={{ top: 0, left: 55}}>
            THIS MONTH
          </Text>
          <FlatList
            data={MonthTasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        
        
    </View>
          
      
          
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  leftView: {
    height: '100%',
    width: '40%',
    //backgroundColor: 'lightblue',
  },
  rightView: {
    height: '100%',
    width: '60%',
    marginTop: 10,
    padding: 10,
    //backgroundColor: 'lightgreen',
  },
  item: {
    backgroundColor: '#ff914d',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});

export default Home