import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import { useState, useEffect } from 'react';
import { height, width } from '../config/dimension'
import Svg, { Path } from "react-native-svg"
import { ScrollView } from 'react-native';
import { primary, secondary, misc, background } from '../config/color'
const Notification = ({ navigation }) => {
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
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'Column', alignItems: 'flexStart', justifyContent: 'space-between' }}>
                <Text style={styles.headText}>Today</Text>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>izabellarodrigues</Text>
                        <Text style={styles.lowerText}>Started following you. 4h </Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>annaclaramm</Text>
                        <Text style={styles.lowerText}>Mentioned you in a comment. </Text>
                        <Text style={styles.timeText}> 6h</Text>
                    </View>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.boxicon} />
                </View>
                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>izabellarodrigues</Text>
                        <Text style={styles.lowerText}>Started following you. 4h </Text>
                    </View>
                    <TouchableOpacity style={styles.followingbutton}>
                        <Text style={styles.followingbuttonText}>Following</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'Column', alignItems: 'flexStart', justifyContent: 'space-between', marginTop: '24px' }}>
                <Text style={styles.headText}>Store Updates</Text>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.storycicon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>R - Luxury Quality</Text>
                        <Text style={styles.headText}>Brand </Text>
                        <Text style={styles.lowerText}>Posted new collection 4h </Text>

                    </View>
                    <TouchableOpacity style={styles.storebutton}>
                        <Text style={styles.storebuttonText}>Visit Store</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>Styles by Neha </Text>
                        <Text style={styles.lowerText}>Sent a Product Link from store</Text>
                        <Text style={styles.lowerText}>1d</Text>
                    </View>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.boxicon} />
                </View>
                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>izabellarodrigues</Text>
                        <Text style={styles.lowerText}>Started following you. 4h </Text>
                    </View>
                    <TouchableOpacity style={styles.followingbutton}>
                        <Text style={styles.followingbuttonText}>Following</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'Column', alignItems: 'flexStart', justifyContent: 'space-between', marginTop: '24px' }}>
                <Text style={styles.headText}>Yesterday</Text>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.storycicon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>alessandroveronezi</Text>
                        <Text style={styles.lowerText}>Started following you id </Text>

                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>gabrielcantarin </Text>
                        <Text style={styles.lowerText}>Mentioned you in a comment</Text>
                        <Text style={styles.lowerText}>1d</Text>
                    </View>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.boxicon} />
                </View>
                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>izabellarodrigues</Text>
                        <Text style={styles.lowerText}>Started following you. 4h </Text>
                    </View>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.boxicon} />
                </View>
            </View>

            <View style={{ flexDirection: 'Column', alignItems: 'flexStart', justifyContent: 'space-between', marginTop: '24px' }}>
                <Text style={styles.headText}>December 22,2024</Text>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.storycicon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>carolineadies</Text>
                        <Text style={styles.lowerText}>Started following you 2d</Text>

                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>andrebiachi </Text>
                        <Text style={styles.lowerText}>Mentioned you in a comment</Text>
                        <Text style={styles.lowerText}>1d</Text>
                    </View>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.boxicon} />
                </View>
                <View style={styles.listelement}>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.commenticon} />
                    <View style={{ marginLeft: '20px' }} >
                        <Text style={styles.headText}>izabellarodrigues</Text>
                        <Text style={styles.lowerText}>Started following you. 4h </Text>
                    </View>
                    <Image source={'https://bootdey.com/img/Content/avatar/avatar4.png'} style={styles.boxicon} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 28,
        paddingLeft: 24,
        paddingRight: 24,
        minHeight: height,
        width: width,
        paddingBottom: 64,
    },
    headText: {
        fontFamily: 'UrbanistBold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 1.2 * 18,
        maxWidth: '100',
        wordWrap: 'break-word',
        // marginLeft: '20',
    },
    commenticon: {
        width: 60,
        height: 60,
        borderRadius: "4rem",
    },
    listelement: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width:'80%',
        paddingTop: 24,
        paddingBottom: 3,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        gap: 4,
        width: 73,
        height: 32,
        backgroundColor: '#EC303A',
        borderRadius: 100,
    },
    buttonText: {
        fontFamily: 'UrbanistSemiBold',
        color: '#fff',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    boxicon: {
        width: 60,
        height: 66,
        borderRadius: "8px",
    },
    followingbutton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        gap: 4,
        width: 92,
        height: 32,
        // backgroundColor: '#EC303A',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#EC303A',
    },
    followingbuttonText: {
        fontFamily: 'UrbanistSemiBold',
        color: '#EC303A',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,

    },
    storebutton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        gap: 4,
        backgroundColor: '#666666',
        borderRadius: 100,
        minheight: 32,
        width: 98,
        maxWidth: '177',
        wordWrap: 'break-word',
    },
    storebuttonText: {
        fontFamily: 'UrbanistRegular',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.2,
        color: '#FFFFFF',
    },
    lowerText: {
        fontFamily: 'UrbanistRegular',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 1.4 * 14,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: 0.2,
        color: '#616161',
        maxWidth: '177',
        // marginLeft: '20',
    },
    storycicon: {
        width: 60,
        height: 60,
        borderRadius: "4rem",
        borderWidth: 3,
        borderColor: '#EC303A',
    }
})