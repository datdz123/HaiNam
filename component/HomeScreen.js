import React from 'react'
import { View, Image, Picker, Text } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/Product'


export default class Home extends React.Component {
    state = {
        city: "Los Angeles"
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: "#FFF" }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 40,
                    marginHorizontal: 20
                }}>
                    <View style={{ width: "10%" }}>

                    </View>
                    <View style={{
                        width: "80%",
                        alignItems: "center"
                    }}>

                    </View>

                </View>


                <View style={{
                    paddingHorizontal: 20,
                    marginTop: 50
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold"
                    }}>Đồ làm vườn bạn cần</Text>

                </View>


                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 40 }}
                >
                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#f9dd7a",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/tool2.jpg')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Xẻng
                        </Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#e5e4eb",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/tool.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Cuốc
                        </Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#e5e4eb",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/tool.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Chậu cây
                        </Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#e5e4eb",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/phanbon.jpg')}
                            style={{ height: 60, width: 60 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Chất hữu cơ
                        </Text>
                    </View>
                </ScrollView>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={{ alignItems: "center", flexDirection: "row", marginTop: 40 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Sản phẩm mới</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Icon name="dots-three-horizontal" size={25} color="#848385" />
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Product
            image={require('../assets/tool2.jpg')}
            title="Xẻng nông nghiệp"
            price="12.99"
            onPress={() => this.props.navigation.navigate('Detail')}
          />
          <Product
            image={require('../assets/tool3.jpg')}
            title="Cuốc nhỏ"
            price="10.99"
            style={{ marginLeft: 15 }}
            onPress={() => this.props.navigation.navigate('Detail')}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Product
            image={require('../assets/treepot3.jpg')}
            title="Chậu cây cảnh"
            price="11.99"
          />
          <Product
            image={require('../assets/deco.jpg')}
            title="Đồ trang trí vườn"
            price="10.99"
            style={{ marginLeft: 15 }}
          />
        </View>
      </ScrollView>
    </View>
            </ScrollView>
        )
    }
}