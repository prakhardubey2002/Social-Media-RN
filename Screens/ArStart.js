import * as React from "react";
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "./Styles/ArStyles";
import { height, width } from "../config/dimension";
const ArStart = ({ navigation }) => {

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
            <Image
                style={[styles.backgroundIcon, styles.backgroundIconLayout]}
                resizeMode="cover"
                source={require("../assets/background@3x.png")}
            />
            <Image
                style={[styles.backgroundIcon1, styles.backgroundIconLayout]}
                resizeMode="cover"
                source={require("../assets/background1@3x.png")}
            />
            <Image
                style={styles.ai1Icon}
                contentFit="cover"
                source={require("../assets/20870407ai-1_3x-removebg-preview.png")}
            />
            <View style={styles.snapMeasureTryParent}>
                <View style={styles.frameChildx} />
                <Text
                    style={[styles.snapMeasure, styles.buyNowTypo1]}
                >{`SNAP, MEASURE & TRY`}</Text>
                <View style={styles.frameChild} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    backgroundIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        left: "0%",
        right: "0%",
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        textAlign: "center",
    },
    buyNowTypo1: {
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
    },
    addToCartPosition: {
        backgroundColor: Color.white,
        borderTopLeftRadius: Border.br_xl,
        left: 0,
    },
    buyFlexBox: {
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: 0,
        width: 195,
        top: 0,
        height: 68,
        position: "absolute",
    },
    buyNowTypo: {
        textAlign: "left",
        fontSize: FontSize.h6Bold_size,
    },
    backgroundIcon: {
        height: "55.17%",
        top: "0%",
        bottom: "44.83%",
    },
    backgroundIcon1: {
        height: "45.94%",
        top: "50.18%",
        bottom: "3.89%",
    },
    ai1Icon: {
        top: 44,
        width: width - 44,
        height: height-300,
        left: 0,
        position: "absolute",
        overflow: "hidden",
        marginLeft: 22,
        marginRight: 22,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 25,
        //     height: 25,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 20,
        borderRadius: 15,
        // elevation: 5,
    },
    snapMeasure: {
        color: "#fcf6ff",
        textAlign: "center",
        fontSize: 18,
        fontFamily: 'PoppinsBold',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 20,
        textAlign: 'center',
        color: '#FCF6FF',
    },
    frameChild: {
        borderColor: "rgba(255, 255, 255, 0.7)",
        borderTopWidth: 1,
        width: 40,
        height: 1,
        marginLeft: 12,
        // marginRight: 12,
        borderStyle: "solid",
    },
    frameChildx: {
        borderColor: "rgba(255, 255, 255, 0.7)",
        borderTopWidth: 1,
        width: 40,
        height: 1,
        // marginLeft: 12,
        marginRight: 12,
        borderStyle: "solid",
    },

    snapMeasureTryParent: {
        bottom: 10,
        height: 59,
        flexDirection: "row",
        paddingHorizontal: Padding.p_lg,
        paddingTop: Padding.p_lg,
        paddingBottom: 14,
        alignItems: "center",
        justifyContent: "flex-end",
        width: width,
        left: 0,
        position: "absolute",
        backgroundColor: Color.darkorchid,
        // display:flex,
        flexDirection: "row",
        justifyContent: "center",
    },
    ar: {
        flex: 1,
        height: 844,
        overflow: "hidden",
        width: "100%",
        backgroundColor: Color.darkorchid,
    },
});

export default ArStart;
