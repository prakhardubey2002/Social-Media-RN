import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useState, useEffect } from 'react';
// import { FontFamily, Color, Border, FontSize, Padding,Border } from "./Styles/ArStyles";
import { FontSize, FontFamily, Padding, Color, Border } from "./Styles/ArStyles";
import { AntDesign } from '@expo/vector-icons';
import { height, width } from "../config/dimension";
import { TextInput } from "react-native";
const ARDatainput = ({ navigation }) => {
    const [text, setText] = useState('Feet');
    const [inch, setInch] = useState('Inch');
    const [kg, setKg] = useState('Kg');
    const[AA,setAA]=useState('AA+')
    useEffect(() => {
        // console.log(text)
        // Header
        navigation.setOptions({
            title: "Comment",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerStyle: {
                height: 0,
            },
        });
    }, [])
    return (
        <View style={styles.ar}>
            <Text style={styles.measureYourBody}>MEASURE YOUR BODY</Text>
            <Text style={[styles.step1, styles.step1Typo]}>Step 1</Text>
            <View style={[styles.arChild, styles.step1Position]} />
            <Text style={styles.continue}>CONTINUE</Text>
            <View style={[styles.frameParent, styles.parentFramePosition]}>

                <View style={[styles.feetParent, styles.inchGroupPosition]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setText}
                        value={text}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
                <Text style={[styles.height, styles.heightTypo]}>Height</Text>
                <View style={[styles.inchParent, styles.parentPosition]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setInch}
                        value={inch}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
            </View>
            <View style={[styles.frameGroup, styles.parentFramePosition]}>
                <View style={[styles.inchGroup, styles.inchGroupPosition]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setText}
                        value={text}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
                <Text style={[styles.height, styles.heightTypo]}>Bust</Text>
                <View style={[styles.aaParent, styles.parentPosition]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setAA}
                        value={AA}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
            </View>
            <View style={[styles.weightParent, styles.parentFramePosition]}>
                <Text style={styles.heightTypo}>Weight</Text>
                <View style={[styles.kgParent, styles.kgParentShadowBox]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setKg}
                        value={kg}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
            </View>
            <View style={styles.waistParent}>
                <Text style={styles.heightTypo}>Waist</Text>
                <View style={[styles.inchContainer, styles.kgParentShadowBox]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setInch}
                        value={inch}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
            </View>
            <View style={[styles.hipParent, styles.parentFramePosition]}>
                <Text style={styles.heightTypo}>Hip</Text>
                <View style={[styles.frameView, styles.kgParentShadowBox]}>
                    <TextInput
                        style={styles.texrinput}
                        onChangeText={setText}
                        value={text}
                        underlineColorAndroid="transparent"

                    />
                    <Image
                        style={styles.solidinterfacecaretIconLayout}
                        resizeMode="cover"
                        source={require("../assets/solidinterfacecaret-down@3x.png")}
                    />
                </View>
            </View>
            <Image
                style={styles.outlineinterfacearrowLeftIcon}
                resizeMode="cover"
                source={require("../assets/outlineinterfacearrow-left@3x.png")}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    step1Typo: {
        fontSize: FontSize.h6Bold_size,
        textAlign: "left",
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
    },
    step1Position: {
        left: "50%",
        position: "absolute",
    },
    parentFramePosition: {
        height: 74,
        left: 23,
        position: "absolute",
    },
    inchGroupPosition: {
        alignItems: "center",
        paddingBottom: Padding.p_3xs,
        paddingRight: 12,
        paddingTop: Padding.p_3xs,
        paddingLeft: 89,
        flexDirection: "row",
        elevation: 4,
        shadowRadius: 4,
        backgroundColor: Color.white,
        borderRadius: Border.br_3xs,
        top: 32,
        justifyContent: "space-between",
        width: 163,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        left: 0,
        position: "absolute",
        minheight: 42,
    },
    feetTypo: {
        color: Color.darkgray,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_sm,
    },
    heightTypo: {
        color: Color.gray_100,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_base,
        textAlign: "left",
    },
    parentPosition: {
        left: 181,
        alignItems: "center",
        paddingBottom: Padding.p_3xs,
        paddingRight: 12,
        paddingTop: Padding.p_3xs,
        flexDirection: "row",
        width: 163,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        backgroundColor: Color.white,
        borderRadius: Border.br_3xs,
        top: 32,
        position: "absolute",
    },
    solidinterfacecaretIconLayout: {
        height: 24,
        width: 24,
    },
    kgParentShadowBox: {
        marginTop: 8,
        alignItems: "center",
        paddingBottom: Padding.p_3xs,
        paddingRight: 12,
        paddingTop: Padding.p_3xs,
        flexDirection: "row",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        backgroundColor: Color.white,
        borderRadius: Border.br_3xs,
    },
    bottomnavrLayout: {
        height: 68,
        width: 390,
        position: "absolute",
    },
    addToCartPosition: {
        borderTopLeftRadius: Border.br_xl,
        backgroundColor: Color.white,
        left: 0,
    },
    buyFlexBox: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: 0,
        width: 195,
        height: 68,
        top: 0,
        position: "absolute",
    },
    measureYourBody: {
        marginTop: -280,
        fontSize: 22,
        color: "#560375",
        textAlign: "left",
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        left: "50%",
        top: "50%",
        marginLeft: -173,
        position: "absolute",
    },
    step1: {
        marginTop: -379,
        marginLeft: 119,
        color: "#c345db",
        left: "50%",
        position: "absolute",
        top: "50%",
        fontSize: FontSize.h6Bold_size,
    },
    arChild: {
        top: 717,
        borderRadius: 8,
        backgroundColor: Color.darkorchid,
        width: 345,
        height: 59,
        left: "50%",
        marginLeft: -173,
    },
    continue: {
        marginTop: 313,
        marginLeft: -42,
        color: Color.ghostwhite_100,
        textAlign: "center",
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    feet: {
        textAlign: "left",
    },
    feetParent: {
        justifyContent: "Flex-end",
        minheight: 42,
    },
    height: {
        top: 0,
        left: 0,
        position: "absolute",
    },
    inch: {
        textAlign: "right",
    },
    inchParent: {
        paddingLeft: 93,
        justifyContent: "space-between",
    },
    frameParent: {
        top: 202,
        width: 344,
        height: 74,
    },
    inchGroup: {
        justifyContent: "space-between",
    },
    solidinterfacecaretDownIcon3: {
        marginLeft: 45,
    },
    aaParent: {
        paddingLeft: 53,
        height: 42,
        justifyContent: "space-between",
    },
    frameGroup: {
        top: 398,
        width: 344,
        height: 74,
    },
    kgParent: {
        paddingLeft: 89,
        justifyContent: "space-between",
        width: 163,
    },
    weightParent: {
        top: 300,
        width: 163,
    },
    solidinterfacecaretDownIcon5: {
        marginLeft: 3,
    },
    inchContainer: {
        alignSelf: "stretch",
        height: 42,
        paddingLeft: 93,
    },
    waistParent: {
        top: 496,
        width: 163,
        left: 23,
        position: "absolute",
    },
    frameView: {
        height: 42,
        paddingLeft: 93,
        width: 163,
    },
    hipParent: {
        top: 594,
        width: 163,
    },
    outlineinterfacearrowLeftIcon: {
        top: 43,
        left: 14,
        width: 32,
        height: 32,
        position: "absolute",
    },

    ar: {
        backgroundColor: "#fdf9ff",
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
    },
    texrinput: {
        width: 40,
        placeholderTextColor: "#d6d5d5",
        outline: "None",
        borderWidth: 0,
        height: 42,
        borderWidth: 0,
        fontFamily: "Poppins",
        placeholderTextColor: "#d6d5d5",
    }
});

export default ARDatainput;
