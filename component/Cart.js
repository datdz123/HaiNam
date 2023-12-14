import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  container: {
      position: 'relative',
      paddingVertical: 16, // equivalent to py-4
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
  },
  button: {
      position: 'absolute',
      zIndex: 10,
      borderRadius: 9999, // or use a large value to get a circle
      padding: 4, // equivalent to p-1
      top: 20, // equivalent to top-10
      left: 8, // equivalent to left-2
      backgroundColor: '#333',
  },
});
export default function Cart()  {
  const navigation=useNavigation();
  return (

    <LinearGradient
    style={{ flex: 1 }}
    colors={['#00FF00', '#0000FF']}  
  >
      <View style={{ padding: 16 ,marginTop:100 }}>
      <View style={styles.container}>
          <TouchableOpacity   onPress={() =>navigation.goBack()} style={styles.button}>
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
        </View>
        <Text style={{textAlign:'center',fontSize:30 ,marginBottom:20,color:'#fff'}}>Giỏ hàng của tôi</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ }}>
          <View
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              shadowOpacity: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 16,
              backgroundColor: '#ffffff',
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}> </Text>
  
            <Image
              source={require('../assets/tool.png')}
              style={{ height: 56, width: 56, borderRadius: 28 }}
            />
  
            <Text style={{ flex: 1, marginLeft: 16, fontSize: 16 }}>Xẻng nông nghiệp</Text>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 28,
                backgroundColor: 'themeColors.bgColor(1)',
              }}
            >
              <Icon.Minus stroke="red" height={20} width={20} strokeWidth={2} />
            </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 8 }}>1</Text>
            <TouchableOpacity
              style={{
                padding: 12,
                borderRadius: 28,
                backgroundColor: 'themeColors.bgColor(1)',
              }}
            >
              <Icon.Plus stroke="red" height={20} width={20} strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ backgroundColor: 'themeColors.bgColor(0.2)', padding: 16, borderRadius: 20,marginTop:100 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: '#333', fontSize: 16 ,color:'#fff'}}>Tiền sản phẩm</Text>
            <Text style={{ color: '#333', fontSize: 16 ,color:'#fff' }}>120.000 VND</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: '#333', fontSize: 16,color:'#fff' }}>Phí giao hàng</Text>
            <Text style={{ color: '#333', fontSize: 16,color:'#fff' }}>20.000 VND</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 18,color:'#fff' }}>Tổng tiền</Text>
            <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 18 ,color:'#fff'}}>140.000 VND</Text>
          </View>
          <View style={{marginTop:100}}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('OrderScreen')}
              style={{
                backgroundColor: 'themeColors.bgColor(1)',
                marginTop: 12,
                padding: 12,
                borderRadius: 20,
                borderColor: '#ffffff',
                borderWidth: 1,
              }}
            >
              <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>
                Mua hàng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </LinearGradient>
  );
}

