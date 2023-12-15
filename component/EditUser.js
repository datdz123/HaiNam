import React, { useState,useEffect  } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const EditUserInfoScreen = ({ route, navigation }) => {


  const handleSaveChanges = () => {
   
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Edit User',
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveChanges}>
          <Text style={{ color: 'white', marginRight: 10 }}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSaveChanges]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân</Text>
      <View>
        <Text style={styles.txtinput}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên"     
        />
      </View>
 
      <View>
        <Text style={styles.txtinput}>Mật khẩu cũ</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu cũ"
          secureTextEntry
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Mật khẩu mới</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu mới"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Lưu lại</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  txtinput: {
    marginBottom: 10,
    fontSize: 20
  },
  input: {

    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 15,
    fontSize: 20
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditUserInfoScreen;
