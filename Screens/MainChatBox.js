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
const MainChatBox = ({ navigation }) => {
    const [text, setText] = useState("Search");
    const blurhash = "LPF~]]Mm?^w?inyARRadJ0R7o[S7"
    useEffect(() => {
        // console.log(text)
        // Header
        navigation.setOptions({
            title: "ChatBox",
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
                                fill="#656565"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
            )
        });
    }, [])
    return (
        <View style={styles.main}>
            <View style={styles.searchsection}>
                <Svg
                    style={styles.backicon}
                    width={13}
                    height={10}
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"

                >
                    <Path
                        d="M5.637 1.53a.723.723 0 000-1.06.822.822 0 00-1.12 0l-4.22 4a.728.728 0 00-.17.817.746.746 0 00.17.243l4.22 4a.822.822 0 001.12 0 .723.723 0 000-1.06l-2.87-2.72H12.99c.437 0 .791-.336.791-.75s-.354-.75-.791-.75H2.768l2.869-2.72z"
                        fill="#EC303A"
                    />
                </Svg>

                <Svg
                    style={styles.searchicon}
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"

                >
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.988 10.549c-2.209 1.862-5.442 1.715-7.49-.44-2.196-2.312-2.196-6.061 0-8.373 2.198-2.313 5.76-2.313 7.956 0 2.047 2.155 2.186 5.558.417 7.883l4.297 4.522a.683.683 0 010 .93.603.603 0 01-.884 0L9.988 10.55zm-6.605-1.37c-1.709-1.799-1.709-4.714 0-6.513C5.09.868 7.86.868 9.57 2.666c1.707 1.797 1.708 4.71.004 6.509a.47.47 0 00-.008.008c-1.709 1.794-4.476 1.793-6.183-.004z"
                        fill="#000"
                    />
                </Svg>
                <TextInput
                    style={styles.inputchat}
                    onChangeText={setText}
                    value={text}
                />



            </View>
            <View style={{ padding: '1rem', flexDirection: 'row' }} >
                <TouchableOpacity style={{
                    marginRight: '12px',
                    width: 'fit-content',
                    // height: '100%',
                    background: '#EC303A',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 20,
                    borderRadius: 22,
                    paddingVertical: '4px',
                    paddingHorizontal: '18px',
                    flexDirection: 'row',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <Text style={{
                        fontFamily: 'Mulish',
                        fontSize: 14,
                        // fontWeight: '600',
                        lineHeight: 16,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: '#fff',
                        // fontWeight: '100',
                    }} >General</Text>
                    <Text style={{
                        fontFamily: 'Mulish',
                        fontSize: 14,
                        // fontWeight: '600',
                        lineHeight: 16,
                        letterSpacing: 0,
                        textAlign: 'center',
                        marginLeft: '8px',
                        color: '#fff',
                    }} >33</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    // marginRight: '8px',
                    width: 'fit-content',
                    // height: '100%',
                    background: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 20,
                    borderRadius: 22,
                    paddingVertical: '4px',
                    paddingHorizontal: '18px',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <Text style={{
                        fontFamily: 'Mulish',
                        fontSize: 14,
                        // fontWeight: '600',
                        lineHeight: 16,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: '#b1b8bf',
                        // fontWeight: '100',
                    }} >Vendor</Text>
                    <Text style={{
                        fontFamily: 'Mulish',
                        fontSize: 14,
                        // fontWeight: '600',
                        lineHeight: 16,
                        letterSpacing: 0,
                        textAlign: 'center',
                        marginLeft: '8px',
                        color: '#fff',
                        backgroundColor: '#666666',
                        padding: '4px',
                        paddingHorizontal: '8px',
                        borderRadius: '50%',
                    }} >6</Text>

                </TouchableOpacity>
            </View>


            <View style={{
                borderBottomWidth: 0.5,
                borderBottomColor: 'rgba(102, 102, 102, 0.29)',
            }} >
                <View style={{ padding: '1rem', flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View style={{ marginLeft: '1rem', flexDirection: 'column', maxWidth: '50%' }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 17,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                // backgroundColor: '#F2F2F2',
                            }} >Gunther Beard</Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 22,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                maxWidth: '80%',
                                // backgroundColor: '#F2F2F2',
                            }} >Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}}>15 min </Text>
                            <Text style={{
                                fontFamily: 'Mulish',
                                fontSize: 14,
                                // fontWeight: '600',
                                lineHeight: 16,
                                letterSpacing: 0,
                                textAlign: 'center',
                                marginLeft: '8px',
                                color: '#fff',
                                backgroundColor: '#ec303a',
                                padding: '4px',
                                paddingHorizontal: '8px',
                                borderRadius: '4rem',

                            }}>1 </Text>
                        </View>



                    </View>

                </View>

                <View style={{ padding: '1rem', flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View style={{ marginLeft: '1rem', flexDirection: 'column', maxWidth: '50%' }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 17,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                // backgroundColor: '#F2F2F2',
                            }} >Gunther Beard</Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 22,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                maxWidth: '80%',
                                // backgroundColor: '#F2F2F2',
                            }} >Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}}>15 min </Text>
                            <Text style={{
                                fontFamily: 'Mulish',
                                fontSize: 14,
                                // fontWeight: '600',
                                lineHeight: 16,
                                letterSpacing: 0,
                                textAlign: 'center',
                                marginLeft: '8px',
                                color: '#fff',
                                backgroundColor: '#ec303a',
                                padding: '4px',
                                paddingHorizontal: '8px',
                                borderRadius: '4rem',

                            }}>1 </Text>
                        </View>



                    </View>

                </View>
                <View style={{ padding: '1rem', flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View style={{ marginLeft: '1rem', flexDirection: 'column', maxWidth: '50%' }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 17,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                // backgroundColor: '#F2F2F2',
                            }} >Gunther Beard</Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 22,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                maxWidth: '80%',
                                // backgroundColor: '#F2F2F2',
                            }} >Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}}>5 hour </Text>
                            <Text style={{


                            }}> </Text>
                        </View>



                    </View>

                </View>
                <View style={{ padding: '1rem', flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View style={{ marginLeft: '1rem', flexDirection: 'column', maxWidth: '50%' }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 17,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                // backgroundColor: '#F2F2F2',
                            }} >Gunther Beard</Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 22,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                maxWidth: '80%',
                                // backgroundColor: '#F2F2F2',
                            }} >Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}}>15 hour </Text>
                            <Text style={{
                                fontFamily: 'Mulish',
                                fontSize: 14,
                                // fontWeight: '600',
                                lineHeight: 16,
                                letterSpacing: 0,
                                textAlign: 'center',
                                marginLeft: '8px',
                                color: '#fff',
                                backgroundColor: '#ec303a',
                                padding: '4px',
                                paddingHorizontal: '8px',
                                borderRadius: '4rem',

                            }}>1 </Text>
                        </View>



                    </View>

                </View>

            </View>
            <View>
                <Text style={{
                    fontFamily: 'UrbanistMedium',
                    fontSize: 18,
                    fontWeight: '700',
                    lineHeight: 22,
                    letterSpacing: 0,
                    textAlign: 'center',
                    padding: '1rem',
                }}>
                    Aasabie Community
                </Text>
                <View style={{ padding: '1rem', flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View style={{ marginLeft: '1rem', flexDirection: 'column', maxWidth: '50%' }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 17,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                // backgroundColor: '#F2F2F2',
                            }} >Gunther Beard</Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 22,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                maxWidth: '80%',
                                // backgroundColor: '#F2F2F2',
                            }} >Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}}>Mon</Text>
                            <Text style={{


                            }}> </Text>
                        </View>



                    </View>

                </View>
                <View style={{ padding: '1rem', flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.image}
                            source="https://picsum.photos/seed/696/3000/2000"
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                        <View style={{ marginLeft: '1rem', flexDirection: 'column', maxWidth: '50%' }}>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                fontWeight: '400',
                                lineHeight: 17,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                // backgroundColor: '#F2F2F2',
                            }} >Gunther Beard</Text>
                            <Text style={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                fontWeight: '400',
                                lineHeight: 22,
                                letterSpacing: 1,
                                textAlign: 'left',
                                width: 'fit-content',
                                maxWidth: '80%',
                                // backgroundColor: '#F2F2F2',
                            }} >Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{}}>Mon</Text>
                            <Text style={{


                            }}> </Text>
                        </View>



                    </View>

                </View>
            </View>











        </View>







    )
}

export default MainChatBox

const styles = StyleSheet.create({
    main: {
        // display: 'flex',
        backgroundColor: '#fff',
        height: height,
        width: width,
    },
    searchsection: {
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
    },
    inputchat: {
        width: '84%',
        minHeight: '32px',
        background: '#FCFCFC',
        borderRadius: 30,
        borderLeftWidth: 0.5,
        borderLeftColor: 'rgba(102, 102, 102, 0.29)',
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(102, 102, 102, 0.29)',
        borderRightWidth: 0.5,
        borderRightColor: 'rgba(102, 102, 102, 0.29)',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(102, 102, 102, 0.29)',
        position: 'absolute',
        left: 40,
        paddingHorizontal: '3rem',
        paddingVertical: '0.4rem',
        borderWidth: 1,
        borderColor: '#6666664A',
        // color: '#2B2B2B',

    },
    searchicon: {
        position: 'absolute',
        left: 50,
    },
    backicon: {
        position: 'absolute',
        left: 12,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: "4rem"

    },


})