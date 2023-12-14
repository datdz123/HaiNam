import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";

import Button from '../components/button';
import { COLORS } from '../constant/theme';


const Intro = ({ navigation }) => {

    return (
        <LinearGradient
      style={{ flex: 1 }}
      colors={['#00FF00', '#0000FF']}  // Mã màu xanh lá cây và xanh dương
    >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/treepot1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/phanbon1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/tool.png")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/treepot.png")}
                        style={{
                            height: 175,
                            width: 150,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 350,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 45,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Chào mừng đến với</Text>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Shop làm vườn</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 20,
                            color: COLORS.white,
                            marginVertical: 4,
                            fontWeight: 800
                        }}>Đồ làm vườn</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>Chào mừng bạn đến với Shop làm vườn - nơi dành cho những người yêu thích làm vườn! Chúng tôi là một cửa hàng đặc biệt chuyên cung cấp các sản phẩm và dịch vụ dành cho người yêu thích nghệ thuật làm vườn.</Text>
                    </View>

                    <Button
                        title="Bắt đầu mua sắm"
                        onPress={() => navigation.navigate("Signin")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        
                 

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Intro