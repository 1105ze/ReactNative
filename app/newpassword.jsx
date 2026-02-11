import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const newpassword = () => {
    const router = useRouter();
        return (
            <ScrollView>
                <TouchableOpacity style={styles.back} onPress={() => router.back()}>
                    <Image
                        source={require("../assets/back_icon.png")}
                        style={styles.backImage}
                    />
                </TouchableOpacity>
            
                {/* Title */}
                <Text style={styles.headerTitle}>New Password</Text>

                <View>
                    <Text style={styles.passwordText}>Enter New Password</Text>
                </View>

                <View style={styles.inputRow}>
                    <Image source={require('../assets/password_icon.png')} style={styles.iconImage} />
                    <TextInput placeholder="Enter New Password" secureTextEntry />
                </View>

                <View>
                    <Text style={styles.ConfirmText}>Confirm Password</Text>
                </View>

                <View style={styles.inputRow}>
                    <Image source={require('../assets/password_icon.png')} style={styles.iconImage} />
                    <TextInput placeholder="Confirm Password" secureTextEntry />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </ScrollView>
        )
}

export default newpassword

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
        resizeMode: "contain",
    },

    /* Titles */
    headerTitle: {
        fontSize: 32,
        fontWeight: "700",
        color: "#88C8FF",
        textAlign: "center",
        marginTop: 40,
    },
    passwordText: {
        fontSize: 15,  
        color: "#0B0B0B",
        marginLeft: 40,
        marginTop: 60,
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
    ConfirmText: {
        fontSize: 15,  
        color: "#0B0B0B",
        marginLeft: 40,
        marginTop: 20,
    },
    button: {
        backgroundColor: "#88C8FF",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 50,
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