import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "./Styles/ArStyles";
import { useState, useEffect } from 'react';
const ArSlider = ({ navigation }) => {
    useEffect(() => {
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
            <Text style={styles.chooseYourBody}>CHOOSE YOUR BODY SHAPE</Text>
            <Text style={[styles.step2, styles.skipTypo]}>Step 2</Text>
            <Text style={[styles.skip, styles.skipTypo]}>SKIP</Text>
            <View style={[styles.continueWrapper, styles.textFlexBox]}>
                <Text style={[styles.continue, styles.buyNowTypo]}>CONTINUE</Text>
            </View>
            <Image
                style={styles.outlineinterfacearrowLeftIcon}
                resizeMode="cover"
                source={require("../assets/outlineinterfacearrow-left@3x.png")}
            />
            <Image
                style={[styles.group7Icon, styles.group7IconLayout]}
                resizeMode="cover"
                source={require("../assets/-group--7@3x.png")}
            />
            <Image
                style={[styles.arrowIcon, styles.arrowLayout]}
                resizeMode="cover"
                source={require("../assets/arrow1@3x.png")}
            />
            <Pressable
                style={[styles.arrow, styles.arrowLayout]}
                onPress={() => navigation.navigate("AR1")}
            >
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/arrow2@3x.png")}
                />
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create({
    skipTypo: {
        fontSize: FontSize.size_lg,
        textAlign: "left",
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    textFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    buyNowTypo: {
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
    },
    group7IconLayout: {
        width: 182,
        position: "absolute",
    },
    arrowLayout: {
        height: 35,
        width: 35,
        top: "50%",
        position: "absolute",
    },
    topbarLayout: {
        display: "none",
        width: 390,
    },
    childPosition: {
        backgroundColor: Color.white,
        borderTopLeftRadius: Border.br_xl,
        left: 0,
    },
    buyChildLayout: {
        width: 195,
        top: 0,
        height: 68,
        position: "absolute",
    },
    buyNowPosition: {
        top: 21,
        fontSize: FontSize.size_lg,
        textAlign: "left",
        position: "absolute",
    },
    frmPosition: {
        height: 44,
        top: 0,
        left: 0,
        position: "absolute",
    },
    lefLayout: {
        width: 100,
        height: 28,
        position: "absolute",
    },
    frm2Layout: {
        width: 54,
        position: "absolute",
    },
    chooseYourBody: {
        marginTop: -320,
        marginLeft: -173,
        fontSize: FontSize.size_3xl,
        color: Color.indigo,
        textAlign: "left",
    

        width: 308,
        height: 33,
        position: 'absolute',
        left: '50%',
        marginLeft: -154 - 19,
        top: '50%',
        marginTop: -16.5 - 303.5,

        fontFamily: 'PoppinsBold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 33,
        color: '#560375',
    },
    step2: {
        marginTop: -379,
        marginLeft: 119,
        color: Color.mediumorchid,
    },
    skip: {
        marginTop: 272,
        marginLeft: -170,
        color: "#b6b2b8",
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
    },
    continue: {
        fontSize: FontSize.size_base,
        color: "#fff",
        textAlign: "center",
    },
    continueWrapper: {
        top: 677,
        left: 185,
        borderRadius: Border.br_5xs,
        flexDirection: "row",
        paddingHorizontal: Padding.p_112xl,
        paddingVertical: Padding.p_mid,
        width: 182,
        position: "absolute",
        backgroundColor: Color.darkorchid,
        padding: 17,
        borderRadius: 5,
    },
    outlineinterfacearrowLeftIcon: {
        top: 43,
        left: 14,
        width: 32,
        height: 32,
        position: "absolute",
    },
    group7Icon: {
        marginTop: -191,
        marginLeft: -91,
        height: 355,
        left: "50%",
        top: "50%",
        width: 182,
    },
    arrowIcon: {
        left: 327,
        marginTop: -30,
    },
    icon: {
        height: "100%",
        marginTop: -30,
        width: "100%",
    },
    arrow: {
        left: 27,
    },
    bottomnavrChild: {
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowRadius: 5,
        elevation: 5,
        shadowOpacity: 1,
        borderTopRightRadius: Border.br_xl,
        top: 0,
        height: 68,
        position: "absolute",
        width: 390,
    },
    addToCartChild: {
        borderStyle: "solid",
        borderColor: "#a8a8a8",
        borderWidth: 1,
        backgroundColor: Color.white,
        borderTopLeftRadius: Border.br_xl,
        left: 0,
    },
    addToCart1: {
        left: 38,
        fontWeight: "500",
        fontFamily: FontFamily.poppinsMedium,
        color: Color.crimson,
    },
    addToCart: {
        left: 0,
    },
    buyChild: {
        backgroundColor: Color.crimson,
        borderTopRightRadius: Border.br_xl,
        left: 0,
    },
    buyNow: {
        left: 54,
        color: Color.white,
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
    },
    buy: {
        left: 195,
    },
    bottomnavr: {
        top: 775,
        height: 68,
        position: "absolute",
        left: 0,
    },
    frm: {
        width: 375,
    },
    frm1: {
        height: 28,
        top: 0,
        left: 0,
    },
    frm2: {
        height: 28,
        top: 0,
        left: 0,
    },
    text: {
        top: 7,
        fontSize: FontSize.size_sm,
        fontWeight: "900",
        fontFamily: FontFamily.poppinsBlack,
        color: Color.black,
        display: "flex",
        height: 16,
        left: 0,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    barstatusRestime: {
        left: 21,
        height: 28,
        top: 0,
        overflow: "hidden",
    },
    lef: {
        height: 28,
        top: 9,
        width: 100,
        left: 0,
    },
    barstatusResinfoIcon: {
        right: 0,
        height: 28,
        top: 9,
        width: 100,
    },
    barstatuslit: {
        width: 390,
        backgroundColor: Color.darkorchid,
    },
    topbar: {
        display: "none",
        width: 390,
    },
    ar: {
        backgroundColor: Color.ghostwhite_100,
        flex: 1,
        height: 844,
        overflow: "hidden",
        width: "100%",
    },
});

export default ArSlider;
