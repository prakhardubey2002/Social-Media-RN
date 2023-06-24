import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { height, width } from '../config/dimension'
import Svg, { G, Path, Defs, ClipPath, Mask, Rect } from "react-native-svg"
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

const ChatBox = ({ navigation }) => {
    const blurhash = "LPF~]]Mm?^w?inyARRadJ0R7o[S7"
    const [text, setText] = useState("Messages....")
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
            {/* <View> */}

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
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>

                        <Text style={styles.ChatBotText}>Luxury Quality Brand
                        </Text>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontSize: 10,
                            fontWeight: '400',
                            lineHeight: 15,
                            letterSpacing: 0,
                            // textAlign: 'left',
                            color: '#1BBD01',
                        }}>9 Active on 12 </Text>
                    </View>
                </View>
            </View>
            {/* Message Screen */}
            <View style={styles.messagescreen} >
                {/* <ScrollView> */}
                <View>
                    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                        <View style={styles.mesageBox} >
                            <Text style={styles.chatbotmessage} >
                                Explore Collection of Luxury Quality Brand
                            </Text>
                            <Text style={{
                                fontFamily: 'Source Sans Pro',
                                fontSize: 10,
                                fontWeight: '400',
                                lineHeight: 20,
                                letterSpacing: 0,
                                textAlign: 'right',
                                
                                color: '#d0d0d0',
                            }}>
                                11:15 Pm
                            </Text>
                        </View>
                        <Image
                            style={styles.pimage}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                    </View>
                    {/* <View style={{ flex: 1, flexDirection: "row", paddingTop: "1rem", paddingBottom: "1rem" }} >
                        <Text style={styles.optionBox} >No</Text>
                        <Text style={styles.optionBox} >Yes</Text>
                    </View> */}
                </View>

                {/* </ScrollView> */}
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
                // position: 'fixed',
                // bottom: '0',
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
                paddingHorizontal: 10,
                width: "90%",
                height: "86px",
                marginLeft: "5%",
                marginRight: "5%",
                justifyContent: 'center',
            }}>
                <TextInput
                    style={styles.inputchat}
                    onChangeText={setText}
                    value={text}
                />
                {/* <TouchableOpacity style={styles.sendIcon}>
                    <Ionicons name="md-send" size={24} color="blue" />
                </TouchableOpacity> */}
                <View style={styles.sendIcon}>
                    <Svg style={styles.svgIcon}
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <G clipPath="url(#clip0_967_57385)">
                            <Path
                                d="M11.261 10.094a3.19 3.19 0 01-5.522 0m4.635 4.501a6.368 6.368 0 114.221-4.221l-4.221 4.221z"
                                stroke="#8B8B8B"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M6.11 7.969a.797.797 0 100-1.594.797.797 0 000 1.594zM10.89 7.969a.797.797 0 100-1.594.797.797 0 000 1.594z"
                                fill="#8B8B8B"
                            />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_967_57385">
                                <Path fill="#fff" d="M0 0H17V17H0z" />
                            </ClipPath>
                        </Defs>
                    </Svg>


                    <Svg
                        style={styles.svgIcon}
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Path
                            d="M4.073 8.5a.531.531 0 00-1.062 0v4.25c0 .685.555 1.24 1.24 1.24h8.5a1.24 1.24 0 001.239-1.24V8.5a.531.531 0 10-1.063 0v4.25c0 .098-.079.177-.177.177h-8.5a.177.177 0 01-.177-.177V8.5z"
                            fill="#8B8B8B"
                        />
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.825 10.273c0 .49.396.886.885.886h1.587a.885.885 0 00.886-.886V7.006l.156-.015.393-.038a.87.87 0 00.7-1.24 10.668 10.668 0 00-2.24-3.094l-.074-.07a.888.888 0 00-1.228 0l-.074.07a10.666 10.666 0 00-2.24 3.094.87.87 0 00.7 1.24l.393.038.156.015v3.267zm1.062-3.76a.531.531 0 00-.498-.53c-.206-.013-.412-.03-.617-.05l-.115-.01a9.603 9.603 0 011.847-2.49 9.605 9.605 0 011.846 2.49l-.114.01c-.206.02-.412.037-.618.05a.531.531 0 00-.498.53v3.583H7.887V6.513z"
                            fill="#8B8B8B"
                        />
                    </Svg>



                    <Svg
                        style={styles.svgIcon}
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"

                    >
                        <Rect x={0.769531} width={20} height={20} rx={5} fill="#EC303A" />
                        <Path
                            transform="rotate(90 7.185 10.385)"
                            fill="#EC303A"
                            d="M0 0H12.8V12.8H0z"
                        />
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.583 6.003c.636-.053.987.659.66 1.147l-.105.159a48.46 48.46 0 01-5.43 6.74c-.499.517-1.286.061-1.217-.584l.301-2.808a.644.644 0 00-.363-.658L6.924 8.863c-.605-.274-.548-1.177.104-1.357a45.875 45.875 0 018.37-1.488l.185-.015zm-.075.809l-.044.003c-2.707.226-5.39.696-8.018 1.407L9.76 9.27c.565.256.893.855.828 1.472l-.275 2.563a47.672 47.672 0 005.16-6.44l.035-.053z"
                            fill="#fff"
                        />
                    </Svg>
                </View>
            </View>

            {/* </View> */}
        </SafeAreaView >
    )
}

export default ChatBox

const styles = StyleSheet.create({
    ChatBotText: {
        fontFamily: 'PoppinsBold',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: 'left',
        // marginLeft: 10,
        
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: "4rem"
    },
    pimage: {
        width: 38,
        height: 38,
        borderRadius: "4rem",
        marginLeft: "12"
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
        // width: 250,
        // height: 44,
        // position: "absolute",
        padding: 15,
        marginRight: "1rem",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",

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
    messagescreen: {
        // height: "36.5rem",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        padding: "1rem",
        // position: "relative",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        // backgroundColor: "red",
    },
    inputchat: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#f4f4f4',
        backgroundColor: '#f4f4f4',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: "56px",
        width: "92%",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 13,
        position: "relative",
        // color: '#2B2B2B',

    },
    sendIcon: {
        position: 'absolute',
        right: 24,
        flexDirection: "row",

    },
    svgIcon: {
        marginLeft: 10,
    }

})