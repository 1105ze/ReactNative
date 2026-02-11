import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router"

const forgetpassword = () => {
    const router = useRouter();

        return (
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                        <Image source={require('../assets/back_icon.png')} style={styles.backImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Forget Password</Text>
                </View>

                <View>
                    <Text style={styles.emailText}>Enter Email Address</Text>
                </View>

                <View style={styles.inputRow}>
                    <Image source={require('../assets/email_icon.png')} style={styles.iconImage} />
                    <TextInput placeholder="Enter Email" />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/verificationcode')}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </ScrollView>
        )
}

export default forgetpassword

const styles = StyleSheet.create({
    back: {
        backgroundColor: "#88C8FF",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginLeft: 30,
    },
    backImage: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: 'contain',
        marginLeft: "5",
    },
    header: {
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 30, 
    },
    headerTitle: {
        fontSize: 40,
        fontWeight: "700",
        alignItems: "center",
        color: "#88C8FF",
    },
    emailText: {
        fontSize: 15,  
        color: "#0B0B0B",
        marginLeft: 40,
        marginTop: 80,
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#a6e1fdb9",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
        height: 50,
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10, 
    },
    iconImage: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: "#88C8FF",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 90,
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30,
    },
    buttonText: {
        color: "black",
        fontWeight: "700",
        fontSize: 16, 
    },
})