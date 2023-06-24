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
const ChatSecond = ({ navigation }) => {
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
            <View style={{ padding: '1rem' }}>
                <Text style={{
                    fontFamily: 'UrbanistMedium',
                    fontSize: 18,
                    fontWeight: '700',
                    lineHeight: 22,
                    letterSpacing: 0,
                    textAlign: 'left',
                }} >
                    DM Vendor
                </Text>
            </View>

            <View style={{
                borderBottomWidth: 0.5,
                borderBottomColor: 'rgba(102, 102, 102, 0.29)',
                flexDirection: 'row',
            }} >
                <View style={{ padding: '1rem' }}>

                    <Image
                        style={styles.imagebox}
                        source="https://picsum.photos/seed/696/3000/2000"
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                    <Svg
                        width={124}
                        height={32}
                        viewBox="0 0 124 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Rect width={118} height={32} rx={8} fill="#C4C4C4" />
                        <Path d="M85 0h31a8 8 0 018 8v16a8 8 0 01-8 8H85V0z" fill="#C4C4C4" />
                        <Path
                            d="M12.906 13.512a.754.754 0 00-.047-.274.517.517 0 00-.164-.226c-.08-.07-.194-.14-.34-.207a4.812 4.812 0 00-.566-.211 7.172 7.172 0 01-.734-.281 3.02 3.02 0 01-.61-.364 1.637 1.637 0 01-.414-.488 1.346 1.346 0 01-.148-.645c0-.237.052-.451.156-.644.104-.195.25-.362.438-.5.187-.14.408-.249.664-.324.257-.076.54-.114.847-.114.42 0 .785.076 1.098.227.312.151.555.358.726.621.175.263.262.564.262.902H12.91a.878.878 0 00-.105-.437.714.714 0 00-.313-.3 1.114 1.114 0 00-.523-.11c-.203 0-.373.031-.508.093a.678.678 0 00-.305.247.605.605 0 00-.101.343c0 .097.023.184.07.262a.79.79 0 00.219.219c.096.067.215.131.355.191.14.06.304.119.489.176.31.094.582.2.816.316.237.118.435.25.594.395.159.146.278.311.359.496.08.185.121.395.121.629 0 .247-.048.469-.144.664-.097.195-.236.36-.418.496-.183.136-.4.238-.653.309a3.16 3.16 0 01-.847.105c-.282 0-.559-.036-.832-.11a2.531 2.531 0 01-.746-.34 1.712 1.712 0 01-.532-.577 1.66 1.66 0 01-.199-.832h1.176c0 .177.027.327.082.449a.75.75 0 00.23.297c.102.075.222.13.36.164.14.034.294.05.46.05.204 0 .37-.028.5-.085a.618.618 0 00.391-.582zm5.785.574V15h-3.027v-.914h3.027zm-2.644-4.774V15h-1.172V9.312h1.172zm2.25 2.317v.89h-2.633v-.89h2.633zm.39-2.316v.917h-3.023v-.918h3.024zm4.344 4.773V15h-2.863v-.914h2.863zm-2.484-4.774V15h-1.172V9.312h1.172zm6.812 4.774V15h-2.863v-.914h2.863zm-2.484-4.774V15h-1.172V9.312h1.172zm6.973 4.774V15H28.82v-.914h3.028zm-2.645-4.774V15h-1.172V9.312h1.172zm2.25 2.317v.89H28.82v-.89h2.633zm.39-2.316v.917H28.82v-.918h3.024zm.688 0h2.121c.435 0 .809.065 1.121.195.316.13.558.323.727.578.17.255.254.569.254.941 0 .305-.052.567-.156.786a1.472 1.472 0 01-.434.542 2.25 2.25 0 01-.652.344l-.371.196h-1.844l-.008-.915h1.371c.206 0 .377-.036.512-.109a.717.717 0 00.305-.305.939.939 0 00.105-.453c0-.182-.034-.34-.102-.472a.685.685 0 00-.308-.305 1.14 1.14 0 00-.52-.106h-.949V15h-1.172V9.312zM35.711 15l-1.297-2.535 1.238-.008 1.313 2.488V15H35.71zm6.25-4.715L40.414 15h-1.246l2.113-5.688h.793l-.113.973zM43.246 15l-1.55-4.715-.126-.973h.801L44.496 15h-1.25zm-.07-2.117v.918h-3.004v-.918h3.004zm3.578.93l1.34-4.5h1.304L47.418 15h-.86l.196-1.188zm-1.234-4.5l1.335 4.5L47.06 15h-.868l-1.968-5.688h1.297zm6.425.972L50.398 15h-1.246l2.114-5.688h.793l-.114.973zM53.23 15l-1.55-4.715-.125-.973h.8L54.481 15h-1.25zm-.07-2.117v.918h-3.004v-.918h3.004zm3.094-3.57V15h-1.168V9.312h1.168zm4.754 4.773V15h-2.864v-.914h2.864zm-2.485-4.774V15h-1.171V9.312h1.171zm5.547.973L62.523 15h-1.246l2.114-5.688h.793l-.114.973zM65.356 15l-1.551-4.715-.125-.973h.8L66.607 15h-1.25zm-.07-2.117v.918H62.28v-.918h3.004zm4.073-.38H67.9l-.008-.804h1.226c.216 0 .393-.027.531-.082a.643.643 0 00.309-.246.722.722 0 00.106-.398.807.807 0 00-.102-.43.558.558 0 00-.309-.238 1.613 1.613 0 00-.535-.075h-.812V15h-1.172V9.312h1.984c.33 0 .626.032.887.094.263.063.486.158.668.285.182.128.322.29.418.485.096.192.144.422.144.687 0 .235-.053.45-.16.649-.104.198-.27.36-.496.484-.224.125-.517.194-.879.207l-.34.3zM69.31 15h-1.73l.456-.914h1.274c.205 0 .373-.033.504-.098a.67.67 0 00.289-.273.81.81 0 00.093-.395c0-.166-.028-.31-.086-.433a.58.58 0 00-.265-.282 1 1 0 00-.485-.101h-1.128l.007-.805h1.406l.27.317c.346-.006.625.056.836.183.213.125.368.288.465.489.099.2.148.415.148.644 0 .365-.08.672-.238.922a1.452 1.452 0 01-.7.559c-.304.124-.676.187-1.116.187zm6.59-.914V15h-2.864v-.914h2.863zm-2.485-4.774V15h-1.172V9.312h1.172zm6.973 4.774V15h-3.028v-.914h3.028zm-2.645-4.774V15H76.57V9.312h1.172zm2.25 2.317v.89H77.36v-.89h2.633zm.39-2.316v.917H77.36v-.918h3.024zm-52.616 9V24h-1.172v-5.688h1.172zm2.265 2.43v.913h-2.586v-.914h2.586zm.274-2.43v.918h-2.86v-.919h2.86zm5.351 2.71v.27c0 .432-.058.82-.175 1.164a2.56 2.56 0 01-.497.879c-.213.24-.468.423-.765.55a2.44 2.44 0 01-.98.192c-.357 0-.684-.064-.981-.191a2.196 2.196 0 01-.766-.551 2.572 2.572 0 01-.504-.879 3.595 3.595 0 01-.175-1.164v-.27c0-.434.058-.822.175-1.164.117-.343.283-.636.496-.879.216-.242.472-.427.766-.554.297-.128.624-.192.98-.192.36 0 .687.064.98.192.298.127.553.312.767.555.216.242.382.535.5.878.12.341.18.73.18 1.164zm-1.183.27v-.277c0-.302-.028-.568-.082-.797a1.728 1.728 0 00-.243-.578 1.045 1.045 0 00-.39-.352 1.116 1.116 0 00-.528-.121c-.197 0-.373.04-.527.121-.15.078-.28.195-.387.352a1.78 1.78 0 00-.238.578c-.055.229-.082.494-.082.797v.277c0 .3.027.565.082.797.055.229.136.423.242.582.107.156.237.275.39.355.155.081.33.121.528.121s.374-.04.528-.12c.153-.081.282-.2.386-.356.105-.159.184-.353.239-.582.054-.232.082-.498.082-.797zm2.027-2.98h2.121c.435 0 .809.065 1.121.195.315.13.558.323.727.578.169.255.254.569.254.941 0 .305-.052.567-.157.785a1.472 1.472 0 01-.433.543 2.249 2.249 0 01-.653.344l-.37.195h-1.844l-.008-.913h1.37c.207 0 .377-.037.513-.11a.717.717 0 00.304-.305.939.939 0 00.106-.453c0-.182-.034-.34-.102-.472a.685.685 0 00-.308-.305 1.14 1.14 0 00-.52-.105h-.95V24H36.5v-5.688zM39.68 24l-1.297-2.535 1.238-.008 1.313 2.488V24H39.68zm7.234-1.887h1.168a2.118 2.118 0 01-.316 1.02 1.885 1.885 0 01-.778.695c-.33.167-.729.25-1.195.25-.365 0-.691-.062-.98-.187a2.087 2.087 0 01-.743-.547 2.436 2.436 0 01-.465-.86 3.717 3.717 0 01-.16-1.129v-.394c0-.417.055-.793.164-1.129.112-.338.271-.626.477-.863.208-.237.457-.42.746-.547.29-.128.612-.192.969-.192.474 0 .873.086 1.199.258.328.172.582.41.762.711.182.302.291.646.328 1.031h-1.172a1.508 1.508 0 00-.137-.582.776.776 0 00-.355-.363c-.157-.083-.365-.125-.625-.125a1.13 1.13 0 00-.512.11.949.949 0 00-.367.332 1.638 1.638 0 00-.223.562 3.89 3.89 0 00-.07.79v.401c0 .295.022.554.066.778.045.221.112.409.203.562a.947.947 0 00.36.344c.148.076.327.113.535.113.245 0 .447-.039.605-.117a.81.81 0 00.364-.348c.086-.153.136-.345.152-.574zm5.73-1.484v.914h-2.968v-.914h2.968zm-2.62-2.317V24h-1.172v-5.688h1.171zm3.456 0V24h-1.167v-5.688h1.167zm3.403.973L55.336 24H54.09l2.113-5.688h.793l-.113.973zM58.168 24l-1.55-4.715-.126-.973h.801L59.418 24h-1.25zm-.07-2.117v.918h-3.004v-.918h3.004zm3.906-3.57V24h-1.168v-5.688h1.168zm1.75 0v.918h-4.64v-.919h4.64z"
                            fill="#fff"
                        />
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M97.823 17.02a.537.537 0 00.11.031 355.108 355.108 0 01.704 2.003c.419 1.201.84 2.44.934 2.795.116.438.238.736.37.94.07.104.149.196.242.266a.69.69 0 00.156.088.83.83 0 00.662.009 1.04 1.04 0 00.254-.15l.003-.003 2.356-1.762 2.72 2.502c.04.037.084.068.13.093.327.17.644.23.941.182.298-.05.533-.199.709-.368.172-.165.289-.35.361-.487a2.302 2.302 0 00.109-.24l.008-.023.003-.008.001-.004v-.002l.001-.001a.973.973 0 00.033-.133l2.483-15.025a.89.89 0 00.012-.146c0-.44-.138-.859-.463-1.112a1.083 1.083 0 00-.782-.209c-.211.02-.406.082-.537.132a2.55 2.55 0 00-.166.07l-.05.024-.009.005-13.928 6.556-.002.001a1.568 1.568 0 00-.14.069 2.027 2.027 0 00-.316.212c-.19.155-.624.581-.551 1.285.058.56.379.905.574 1.071.107.091.209.156.283.199.034.02.106.054.137.07l.008.003 2.64 1.067zm11.782-9.152h-.002a.68.68 0 01-.021.011l-13.945 6.565a.614.614 0 01-.022.01l-.008.003a.808.808 0 00-.076.04.666.666 0 00.072.043l2.619 1.058c.048.02.093.045.134.076l8.647-6.075.008-.005.024-.017.079-.051c.06-.037.156-.091.265-.131a.758.758 0 01.537-.014c.148.057.302.18.401.387a1 1 0 01.089.302c.034.15.029.297.002.424-.057.275-.218.489-.364.653-.125.14-1.747 2.016-3.346 3.868l-2.177 2.52-.387.45 4.893 4.502a.378.378 0 00.209.04.174.174 0 00.097-.052.506.506 0 00.087-.12l.001-.001 2.408-14.573a1.325 1.325 0 00-.2.075c-.011.005-.018.01-.023.011h-.001zm-7.051 12.394l-.976-.898-.237 1.805 1.213-.907zm-1.872-2.68l.971-1.125 2.177-2.522.811-.938-5.434 3.817.03.082a374.69 374.69 0 011.016 2.92l.236-1.8a.802.802 0 01.193-.435z"
                            fill="#fff"
                        />
                    </Svg>
                </View>
                <View style={{ padding: '1rem' }}>

                    <Image
                        style={styles.imagebox}
                        source="https://picsum.photos/seed/696/3000/2000"
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                    <Svg
                        width={124}
                        height={32}
                        viewBox="0 0 124 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Rect width={118} height={32} rx={8} fill="#C4C4C4" />
                        <Path d="M85 0h31a8 8 0 018 8v16a8 8 0 01-8 8H85V0z" fill="#C4C4C4" />
                        <Path
                            d="M12.906 13.512a.754.754 0 00-.047-.274.517.517 0 00-.164-.226c-.08-.07-.194-.14-.34-.207a4.812 4.812 0 00-.566-.211 7.172 7.172 0 01-.734-.281 3.02 3.02 0 01-.61-.364 1.637 1.637 0 01-.414-.488 1.346 1.346 0 01-.148-.645c0-.237.052-.451.156-.644.104-.195.25-.362.438-.5.187-.14.408-.249.664-.324.257-.076.54-.114.847-.114.42 0 .785.076 1.098.227.312.151.555.358.726.621.175.263.262.564.262.902H12.91a.878.878 0 00-.105-.437.714.714 0 00-.313-.3 1.114 1.114 0 00-.523-.11c-.203 0-.373.031-.508.093a.678.678 0 00-.305.247.605.605 0 00-.101.343c0 .097.023.184.07.262a.79.79 0 00.219.219c.096.067.215.131.355.191.14.06.304.119.489.176.31.094.582.2.816.316.237.118.435.25.594.395.159.146.278.311.359.496.08.185.121.395.121.629 0 .247-.048.469-.144.664-.097.195-.236.36-.418.496-.183.136-.4.238-.653.309a3.16 3.16 0 01-.847.105c-.282 0-.559-.036-.832-.11a2.531 2.531 0 01-.746-.34 1.712 1.712 0 01-.532-.577 1.66 1.66 0 01-.199-.832h1.176c0 .177.027.327.082.449a.75.75 0 00.23.297c.102.075.222.13.36.164.14.034.294.05.46.05.204 0 .37-.028.5-.085a.618.618 0 00.391-.582zm5.785.574V15h-3.027v-.914h3.027zm-2.644-4.774V15h-1.172V9.312h1.172zm2.25 2.317v.89h-2.633v-.89h2.633zm.39-2.316v.917h-3.023v-.918h3.024zm4.344 4.773V15h-2.863v-.914h2.863zm-2.484-4.774V15h-1.172V9.312h1.172zm6.812 4.774V15h-2.863v-.914h2.863zm-2.484-4.774V15h-1.172V9.312h1.172zm6.973 4.774V15H28.82v-.914h3.028zm-2.645-4.774V15h-1.172V9.312h1.172zm2.25 2.317v.89H28.82v-.89h2.633zm.39-2.316v.917H28.82v-.918h3.024zm.688 0h2.121c.435 0 .809.065 1.121.195.316.13.558.323.727.578.17.255.254.569.254.941 0 .305-.052.567-.156.786a1.472 1.472 0 01-.434.542 2.25 2.25 0 01-.652.344l-.371.196h-1.844l-.008-.915h1.371c.206 0 .377-.036.512-.109a.717.717 0 00.305-.305.939.939 0 00.105-.453c0-.182-.034-.34-.102-.472a.685.685 0 00-.308-.305 1.14 1.14 0 00-.52-.106h-.949V15h-1.172V9.312zM35.711 15l-1.297-2.535 1.238-.008 1.313 2.488V15H35.71zm6.25-4.715L40.414 15h-1.246l2.113-5.688h.793l-.113.973zM43.246 15l-1.55-4.715-.126-.973h.801L44.496 15h-1.25zm-.07-2.117v.918h-3.004v-.918h3.004zm3.578.93l1.34-4.5h1.304L47.418 15h-.86l.196-1.188zm-1.234-4.5l1.335 4.5L47.06 15h-.868l-1.968-5.688h1.297zm6.425.972L50.398 15h-1.246l2.114-5.688h.793l-.114.973zM53.23 15l-1.55-4.715-.125-.973h.8L54.481 15h-1.25zm-.07-2.117v.918h-3.004v-.918h3.004zm3.094-3.57V15h-1.168V9.312h1.168zm4.754 4.773V15h-2.864v-.914h2.864zm-2.485-4.774V15h-1.171V9.312h1.171zm5.547.973L62.523 15h-1.246l2.114-5.688h.793l-.114.973zM65.356 15l-1.551-4.715-.125-.973h.8L66.607 15h-1.25zm-.07-2.117v.918H62.28v-.918h3.004zm4.073-.38H67.9l-.008-.804h1.226c.216 0 .393-.027.531-.082a.643.643 0 00.309-.246.722.722 0 00.106-.398.807.807 0 00-.102-.43.558.558 0 00-.309-.238 1.613 1.613 0 00-.535-.075h-.812V15h-1.172V9.312h1.984c.33 0 .626.032.887.094.263.063.486.158.668.285.182.128.322.29.418.485.096.192.144.422.144.687 0 .235-.053.45-.16.649-.104.198-.27.36-.496.484-.224.125-.517.194-.879.207l-.34.3zM69.31 15h-1.73l.456-.914h1.274c.205 0 .373-.033.504-.098a.67.67 0 00.289-.273.81.81 0 00.093-.395c0-.166-.028-.31-.086-.433a.58.58 0 00-.265-.282 1 1 0 00-.485-.101h-1.128l.007-.805h1.406l.27.317c.346-.006.625.056.836.183.213.125.368.288.465.489.099.2.148.415.148.644 0 .365-.08.672-.238.922a1.452 1.452 0 01-.7.559c-.304.124-.676.187-1.116.187zm6.59-.914V15h-2.864v-.914h2.863zm-2.485-4.774V15h-1.172V9.312h1.172zm6.973 4.774V15h-3.028v-.914h3.028zm-2.645-4.774V15H76.57V9.312h1.172zm2.25 2.317v.89H77.36v-.89h2.633zm.39-2.316v.917H77.36v-.918h3.024zm-52.616 9V24h-1.172v-5.688h1.172zm2.265 2.43v.913h-2.586v-.914h2.586zm.274-2.43v.918h-2.86v-.919h2.86zm5.351 2.71v.27c0 .432-.058.82-.175 1.164a2.56 2.56 0 01-.497.879c-.213.24-.468.423-.765.55a2.44 2.44 0 01-.98.192c-.357 0-.684-.064-.981-.191a2.196 2.196 0 01-.766-.551 2.572 2.572 0 01-.504-.879 3.595 3.595 0 01-.175-1.164v-.27c0-.434.058-.822.175-1.164.117-.343.283-.636.496-.879.216-.242.472-.427.766-.554.297-.128.624-.192.98-.192.36 0 .687.064.98.192.298.127.553.312.767.555.216.242.382.535.5.878.12.341.18.73.18 1.164zm-1.183.27v-.277c0-.302-.028-.568-.082-.797a1.728 1.728 0 00-.243-.578 1.045 1.045 0 00-.39-.352 1.116 1.116 0 00-.528-.121c-.197 0-.373.04-.527.121-.15.078-.28.195-.387.352a1.78 1.78 0 00-.238.578c-.055.229-.082.494-.082.797v.277c0 .3.027.565.082.797.055.229.136.423.242.582.107.156.237.275.39.355.155.081.33.121.528.121s.374-.04.528-.12c.153-.081.282-.2.386-.356.105-.159.184-.353.239-.582.054-.232.082-.498.082-.797zm2.027-2.98h2.121c.435 0 .809.065 1.121.195.315.13.558.323.727.578.169.255.254.569.254.941 0 .305-.052.567-.157.785a1.472 1.472 0 01-.433.543 2.249 2.249 0 01-.653.344l-.37.195h-1.844l-.008-.913h1.37c.207 0 .377-.037.513-.11a.717.717 0 00.304-.305.939.939 0 00.106-.453c0-.182-.034-.34-.102-.472a.685.685 0 00-.308-.305 1.14 1.14 0 00-.52-.105h-.95V24H36.5v-5.688zM39.68 24l-1.297-2.535 1.238-.008 1.313 2.488V24H39.68zm7.234-1.887h1.168a2.118 2.118 0 01-.316 1.02 1.885 1.885 0 01-.778.695c-.33.167-.729.25-1.195.25-.365 0-.691-.062-.98-.187a2.087 2.087 0 01-.743-.547 2.436 2.436 0 01-.465-.86 3.717 3.717 0 01-.16-1.129v-.394c0-.417.055-.793.164-1.129.112-.338.271-.626.477-.863.208-.237.457-.42.746-.547.29-.128.612-.192.969-.192.474 0 .873.086 1.199.258.328.172.582.41.762.711.182.302.291.646.328 1.031h-1.172a1.508 1.508 0 00-.137-.582.776.776 0 00-.355-.363c-.157-.083-.365-.125-.625-.125a1.13 1.13 0 00-.512.11.949.949 0 00-.367.332 1.638 1.638 0 00-.223.562 3.89 3.89 0 00-.07.79v.401c0 .295.022.554.066.778.045.221.112.409.203.562a.947.947 0 00.36.344c.148.076.327.113.535.113.245 0 .447-.039.605-.117a.81.81 0 00.364-.348c.086-.153.136-.345.152-.574zm5.73-1.484v.914h-2.968v-.914h2.968zm-2.62-2.317V24h-1.172v-5.688h1.171zm3.456 0V24h-1.167v-5.688h1.167zm3.403.973L55.336 24H54.09l2.113-5.688h.793l-.113.973zM58.168 24l-1.55-4.715-.126-.973h.801L59.418 24h-1.25zm-.07-2.117v.918h-3.004v-.918h3.004zm3.906-3.57V24h-1.168v-5.688h1.168zm1.75 0v.918h-4.64v-.919h4.64z"
                            fill="#fff"
                        />
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M97.823 17.02a.537.537 0 00.11.031 355.108 355.108 0 01.704 2.003c.419 1.201.84 2.44.934 2.795.116.438.238.736.37.94.07.104.149.196.242.266a.69.69 0 00.156.088.83.83 0 00.662.009 1.04 1.04 0 00.254-.15l.003-.003 2.356-1.762 2.72 2.502c.04.037.084.068.13.093.327.17.644.23.941.182.298-.05.533-.199.709-.368.172-.165.289-.35.361-.487a2.302 2.302 0 00.109-.24l.008-.023.003-.008.001-.004v-.002l.001-.001a.973.973 0 00.033-.133l2.483-15.025a.89.89 0 00.012-.146c0-.44-.138-.859-.463-1.112a1.083 1.083 0 00-.782-.209c-.211.02-.406.082-.537.132a2.55 2.55 0 00-.166.07l-.05.024-.009.005-13.928 6.556-.002.001a1.568 1.568 0 00-.14.069 2.027 2.027 0 00-.316.212c-.19.155-.624.581-.551 1.285.058.56.379.905.574 1.071.107.091.209.156.283.199.034.02.106.054.137.07l.008.003 2.64 1.067zm11.782-9.152h-.002a.68.68 0 01-.021.011l-13.945 6.565a.614.614 0 01-.022.01l-.008.003a.808.808 0 00-.076.04.666.666 0 00.072.043l2.619 1.058c.048.02.093.045.134.076l8.647-6.075.008-.005.024-.017.079-.051c.06-.037.156-.091.265-.131a.758.758 0 01.537-.014c.148.057.302.18.401.387a1 1 0 01.089.302c.034.15.029.297.002.424-.057.275-.218.489-.364.653-.125.14-1.747 2.016-3.346 3.868l-2.177 2.52-.387.45 4.893 4.502a.378.378 0 00.209.04.174.174 0 00.097-.052.506.506 0 00.087-.12l.001-.001 2.408-14.573a1.325 1.325 0 00-.2.075c-.011.005-.018.01-.023.011h-.001zm-7.051 12.394l-.976-.898-.237 1.805 1.213-.907zm-1.872-2.68l.971-1.125 2.177-2.522.811-.938-5.434 3.817.03.082a374.69 374.69 0 011.016 2.92l.236-1.8a.802.802 0 01.193-.435z"
                            fill="#fff"
                        />
                    </Svg>
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
                                borderRadius: '50%',

                            }}> 1</Text>
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
                                borderRadius: '50%',

                            }}> 1</Text>
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
                                borderRadius: '50%',

                            }}> 1</Text>
                        </View>



                    </View>

                </View>
            </View>











        </View>







    )
}

export default ChatSecond

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
    imagebox: {
        width: 124,
        height: 94,
        marginBottom: '8px',
        marginHorizontal: '8px',
        borderRadius: 10,
    }


})