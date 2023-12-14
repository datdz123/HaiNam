import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

import * as Icon from "react-native-feather";

import { StyleSheet } from 'react-native';



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
        top: 30, // equivalent to top-10
        left: 8, // equivalent to left-2
        backgroundColor: '#333',
    },
});



export default class Detail extends React.Component {
    state = {
      quantity: 1,
    };
  
    addQuantity = () => {
      this.setState({ quantity: this.state.quantity + 1 });
    };
  
    subtractQuantity = () => {
      if (this.state.quantity > 1) {
        this.setState({ quantity: this.state.quantity - 1 });
      }
    };
  
    render() {
     
        return (

            <View style={{ backgroundColor: "#FFF" }}>
                <View style={styles.container}>
          <TouchableOpacity
           onPress={() =>this.props.navigation.navigate('Home')} style={styles.button}>
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
        </View>
                <ScrollView>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 40,
                        marginHorizontal: 20
                    }}>
                        <View style={{ width: "10%" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                {/* <Image
                                                       source={require('../assets/tool.png')}
                                /> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "80%", alignItems: "center" }}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                alignSelf: "center"
                            }}>

                            </View>
                        </View>
                        <View style={{ width: "10%" }}>
                            
                        </View>
                    </View>
                    <Image
                        source={require('../assets/tool2.jpg')}
                        style={{
                            height: 300,
                            width: 300,
                            alignSelf: "center"
                        }}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            alignSelf: "center",
                            alignItems: "center",
                            backgroundColor: "#f6f3fb",
                            paddingHorizontal: 20,
                            paddingVertical: 8,
                            borderRadius: 20
                        }}
                    >
                        <TouchableOpacity
                            onPress={this.addQuantity}
                        >
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>+</Text>
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            paddingHorizontal: 20
                        }}>
                            {this.state.quantity}
                        </Text>

                        <TouchableOpacity
                            onPress={this.subtractQuantity}
                        >
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 20,
                        marginTop: 30
                    }}>
                        <View>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 25
                            }}>Xẻng nông nghiệp </Text>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 15,
                                color: "#a4a4a9"
                            }}>
                                Xẻng đa dụng
                            </Text>
                        </View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 28,
                            marginLeft: 40
                        }}>$12.99</Text>
                    </View>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginTop: 30,
                        marginHorizontal: 20
                    }}>
                        Các sản phẩm liên quan
                    </Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 20, marginHorizontal: 20 }}
                    >
                        <View style={{
                            borderRadius: 15,
                            borderWidth: 0.1,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            marginRight: 10
                        }}>
                            <Image
                                source={require('../assets/tool3.jpg')}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>

                        <View style={{
                            borderRadius: 15,
                            borderWidth: 0.1,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            marginRight: 10
                        }}>
                            <Image
                                source={require('../assets/tool.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>

                        <View style={{
                            borderRadius: 15,
                            borderWidth: 0.1,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            marginRight: 10
                        }}>
                            <Image
                                source={require('../assets/tool.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>

                        <View style={{
                            borderRadius: 15,
                            borderWidth: 0.1,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            marginRight: 10
                        }}>
                            <Image
                                source={require('../assets/tool.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>

                        <View style={{
                            borderRadius: 15,
                            borderWidth: 0.1,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            marginRight: 10
                        }}>
                            <Image
                                source={require('../assets/tool.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>

                        <View style={{
                            borderRadius: 15,
                            borderWidth: 0.1,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            marginRight: 10
                        }}>
                            <Image
                                source={require('../assets/tool.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </View>
                    </ScrollView>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginTop: 30,
                        marginHorizontal: 20
                    }}>
                        Mô tả
                    </Text>
                    <Text style={{
                        color: "#a4a4a9",
                        fontWeight: "bold",
                        fontSize: 15,
                        marginTop: 10,
                        marginHorizontal: 20,
                        textAlign: "justify"
                    }}>
                        Xẻng có thể được sử dụng để tạo lỗ hoặc rãnh trên đất để trồng cây.
                    </Text>
                </ScrollView>
                <View style={{
                    position: "absolute",
                    backgroundColor: "#000",
                    height: 50,
                    width: 50,
                    bottom: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 25
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
                        <Icon.ShoppingCart stroke="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
