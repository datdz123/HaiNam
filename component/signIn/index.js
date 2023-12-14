import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constant/theme';

const SignInScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/shop.jpg')}
                style={{
                    flex: 1
                }}
                resizeMode= "cover"
            >
                <ScrollView>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={styles.subtitle}>Sign into continue</Text>
                    </View>
                    <View style={styles.customBorder}>
                    <View style={styles.dataContainer}>
                        <TextInput placeholder='Username' style={styles.textinput} placeholderTextColor={COLORS.blue} />
                        <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor={COLORS.blue} />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>SIGN IN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <Text style={styles.text}>Don't have an account? | Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignInScreen;