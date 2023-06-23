import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { height, width } from '../config/dimension'
import Svg, { G, Path, Defs, ClipPath, Mask } from "react-native-svg"
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

const ChatBot = ({ navigation }) => {
    const blurhash = "LPF~]]Mm?^w?inyARRadJ0R7o[S7"
    useEffect(() => {
        // console.log(text)
        // Header
        navigation.setOptions({
            title: "ChatBot",
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
                                fill="#ce2a33"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
            )
        });
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} >
            <StatusBar style='light' />
            <View>

                {/* UpperBar */}
                <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }} >

                    <View>
                        <Ionicons name="arrow-back" size={24} color="#EC303A" />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <Text style={styles.ChatBotText}>ChatBot</Text>
                    </View>
                </View>
                {/* Message Screen */}
                <View style={{ flex: 1, backgroundColor: "white", padding: "1rem", position: "relative" }} >
                    {/* <ScrollView> */}
                    <View>
                        <View>
                            <View style={styles.mesageBox} >
                                <Text style={styles.chatbotmessage} >
                                    Hi there! Welcome to our chat. Are you looking for negotiation on this
                                    product?
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row",paddingTop:"1rem",paddingBottom:"1rem" }} >
                            <Text style={styles.optionBox} >No</Text>
                            <Text style={styles.optionBox} >Yes</Text>
                        </View>
                    </View>
                    {/* </ScrollView> */}
                </View>


            </View>
        </SafeAreaView >
    )
}

export default ChatBot

const styles = StyleSheet.create({
    ChatBotText: {
        fontFamily: 'PoppinsBold',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        marginLeft: 10,
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: "4rem"
    },
    chatbotmessage: {
        width: 192,
        color: "#2b2b2b",
        fontFamily: "Poppins_medium",
        fontWeight: "500",
        textAlign: "left",
        fontSize: 12,

    },
    mesageBox: {
        // top: 625,
        // left: 97,
        borderRadius: 15,
        backgroundColor: "#eee",
        width: 224,
        // height: 83,
        // position: "absolute",
        padding: 15,
    },
    optionBox: {
        borderRadius: 15,
        // padding: 15,
        backgroundColor: "#eee",
        fontFamily: 'Poppins',
        fontSize: 10,
        fontWeight: '500',
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: 'center',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 23,
        paddingRight: 23,
        marginRight: 10,
        // flex: 1,
        // justifyContent: "center",
        // alignItems:"center",
    },
})