import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { COLORS } from '../../constant/theme';


const SignUpScreen = ({ navigation }) => {
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
                        <Text style={styles.title}>Get Started</Text>
                        <Text style={styles.subtitle}>Sign up to continue</Text>
                    </View>
                    <View style={styles.customBorder}>
                    <View style={styles.dataContainer}>
                        <TextInput placeholder='Email' style={styles.textinput} placeholderTextColor={COLORS.blue} />
                        <TextInput placeholder='Password' style={styles.textinput} placeholderTextColor={COLORS.blue} />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                     
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                            <Text style={styles.text}>Already have an account? | Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen;