import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { icons } from '../../constants';
import { sprites } from '../../constants'

const Shop = () => {
  const values = [100, 100, 100, 200, 200, 300, 500, 500, 1000];

  const purchase = index => {

  };


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className='w-full justify-center min-h-[82vh] px-2 my-6'>
          <Text className='text-2xl text-white text-semibold font-psemibold absolute top-0 left-4 mt-4'>
            SHOP
          </Text>
          <Text className='text-2xl text-white text-semibold font-psemibold mt-2'>
            COINS: 1050
          </Text>
          <View className="border-b border-white mt-2" />
          <Text className="text-white text-sm mt-2 px-4">
            Here are some items available for purchase. Spend your coins wisely!
          </Text>
          
          {/* Grid of 9 boxes */}
          <View className="flex-wrap flex-row justify-between mt-5 px-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <View key={index} className="items-center mb-5">
                {/* Square box */}
                <View className="bg-white w-20 h-20 rounded-lg" />
                {/* Smaller rectangle */}
                <TouchableOpacity
                  onPress={() => purchase(index)}
                >
                  <View className="bg-secondary-100 w-16 h-6 mt-2 rounded-md flex-row items-center justify-start px-2">
                    <Image source ={icons.coin} style={{width: 17, height:17}} />
                    <Text className="text-white m1-2">{values[index]}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
                <sprites.GreenShirt width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -260, left: 8}}/>
                <sprites.BlueShirt width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -260, left: 113}}/>
                <sprites.PurpleShirt width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -260, left: 220}}/>
                <sprites.Jorts width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -290, left: 325}}/>
                <sprites.CargoShorts width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -160, left: 8}}/>
                <sprites.PinkShoes width="312" height="720" viewBox="0 0 100 100" style={{ position: 'absolute', top: -200, left: 113}}/>
                <sprites.BlueSkin width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: 15, left: 240}}/>
                <sprites.PinkSkin width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: 15, left: 345}}/>
                <sprites.NinjaOutfit width="156" height="360" viewBox="0 0 100 100" style={{ position: 'absolute', top: 150, left: 30}}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;