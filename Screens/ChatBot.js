import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { height, width } from '../config/dimension'
import Svg, { G, Path, Defs, ClipPath, Mask } from "react-native-svg"
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const ChatBot = ({ navigation }) => {
    useEffect(() => {
        // console.log(text)
        // Header
        navigation.setOptions({
            title: "Comment",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerStyle: {
                // backgroundColor: '#EC303A',
                height: 42,
            },
            headerTitle: () => (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "#EC303A", marginLeft: 110, fontSize: 18, fontFamily: "PoppinsBold" }} >Aasabie</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 24 }}
                    onPress={navigation.goBack}
                >
                    <Svg
                        width={16}
                        height={12}
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.914 5.75a.76.76 0 00-.77-.75H.77a.76.76 0 00-.77.75c0 .414.345.75.77.75h14.374a.76.76 0 00.77-.75zM15.914.75a.76.76 0 00-.77-.75H.77A.76.76 0 000 .75c0 .414.345.75.77.75h14.374a.76.76 0 00.77-.75zM15.914 10.75a.76.76 0 00-.77-.75H.77a.76.76 0 00-.77.75c0 .414.345.75.77.75h14.374a.76.76 0 00.77-.75z"
                            fill="#EC303A"
                        />
                    </Svg>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 70,
                    marginRight: 20,
                }} >
                    <TouchableOpacity style={{ backgroundColor: '#DFDFDF', padding: '8px', borderRadius: '24px' }} >
                        <Svg
                            width={17}
                            height={20}
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M8 20a2 2 0 01-2-2h4a2 2 0 01-2 2zm8-3H0v-2l2-1V8.5a8.065 8.065 0 01.924-4.06A4.654 4.654 0 016 2.18V0h3.646a4.5 4.5 0 004.3 7.4c.035.357.052.727.052 1.1V14l2 1v2H16zM13 6a3 3 0 11.01-6A3 3 0 0113 6z"
                                fill="#656565"
                            />
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#DFDFDF', padding: '8px', borderRadius: '24px' }}>
                        <Svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M13.91 0H4.09A4.096 4.096 0 000 4.09v6.546a4.098 4.098 0 003.273 4.01v2.536a.819.819 0 001.272.68l4.7-3.135h4.664A4.096 4.096 0 0018 10.637V4.09A4.096 4.096 0 0013.91 0zm-1.637 9.818H5.727a.818.818 0 010-1.636h6.546a.818.818 0 010 1.636zm1.636-3.273H4.091a.818.818 0 110-1.636h9.818a.818.818 0 110 1.636z"
                                fill="#737373"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
            )
        });
    }, [])
    return (
        <View>
            <View>
                
            </View>
            <Text>ChatBot</Text>
        </View>
    )
}

export default ChatBot

const styles = StyleSheet.create({})