
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View,  Image, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";

export default function LoveDetail() {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
     <TouchableOpacity
         onPress={() =>navigation.goBack()} style={styles.button}>
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
    <Text style={styles.title}>Danh sách Sản Phẩm yêu thích</Text>
   
   
        <View style={styles.favoriteItem}>
          <Image   source={require('../assets/tool2.jpg')} style={styles.thumbnail} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>Đồ làm vườn</Text>
            <Text>Mô tả ngắn </Text>
         
            <Text>Giá: 30vnđ</Text>
        
            
          </View>
        </View>
        <View style={styles.favoriteItem}>
          <Image   source={require('../assets/tool1.jpg')} style={styles.thumbnail} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>Đồ làm vườn</Text>
            <Text>Mô tả ngắn </Text>
         
            <Text>Giá: 30vnđ</Text>
        
            
          </View>
        </View>
        <View style={styles.favoriteItem}>
          <Image   source={require('../assets/tool3.jpg')} style={styles.thumbnail} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>Đồ làm vườn</Text>
            <Text>Mô tả ngắn </Text>
         
            <Text>Giá: 30vnđ</Text>
        
            
          </View>
        </View>
        <View style={styles.favoriteItem}>
          <Image   source={require('../assets/tool2.jpg')} style={styles.thumbnail} />
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>Đồ làm vườn</Text>
            <Text>Mô tả ngắn </Text>
         
            <Text>Giá: 30vnđ</Text>
        
            
          </View>
        </View>
       
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      padding: 20,
    },
    title: {
        textAlign: 'center',
        marginTop: 50,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    favoriteItem: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    thumbnail: {
      width: 80,
      height: 80,
      marginRight: 10,
      borderRadius: 5,
    },
    detailsContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    button: {
        position: 'absolute',
        zIndex: 10,
        borderRadius: 9999, // or use a large value to get a circle
        padding: 4, // equivalent to p-1
        top: 30, // equivalent to top-10
        left: 8, // equivalent to left-2
        backgroundColor: '#333',
    },
  });