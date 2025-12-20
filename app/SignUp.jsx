import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useState } from 'react';

const SignUp = () => {
  const router = useRouter();
    const [agreePolicy, setAgreePolicy] = useState(false);

return (
    <View>
        <View>
            <TouchableOpacity style={styles.back} onPress={() => router.push('/firstpage')}>
                <Image source={require('../assets/back_icon.png')} style={styles.backImage} />
            </TouchableOpacity>
        </View>

        <View style={styles.header}>
            <Text style={styles.headerTitle}>Create Account</Text>
            <Text style={styles.headerSubtitle}>Start Screening For Diabetic Retinopathy</Text>
        </View>

        <View style={styles.box}>
            <View style={styles.inputRow}>
                <Image source={require('../assets/people_icon.png')} style={styles.iconImage} />
                <TextInput placeholder="Enter Username" />
            </View>

            <View style={styles.inputRow}>
                <Image source={require('../assets/email_icon.png')} style={styles.iconImage} />
                <TextInput placeholder="Enter Email" />
            </View>

            <View style={styles.inputRow}>
                <Image source={require('../assets/password_icon.png')} style={styles.iconImage} />
                <TextInput placeholder="Enter Password" secureTextEntry />
            </View>

            <View style={styles.inputRow}>
                <Image source={require('../assets/password_icon.png')} style={styles.iconImage} />
                <TextInput placeholder="Confirm Password" secureTextEntry />
            </View>

            <View style={styles.agree}>
                <TouchableOpacity style={styles.checkbox} onPress={() => setAgreePolicy(!agreePolicy)}>
                    <Image source={agreePolicy ?require('../assets/check_filled.png') :require('../assets/check_empty.png')} style={styles.checkboxIcon}/>
                </TouchableOpacity>

                <Text style={styles.agreeText}>I agree to the Privacy Policy</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signupRow}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={styles.signupLink}>  Sign In</Text>
            </TouchableOpacity>
        </View>
    </View>
)
}

export default SignUp

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#88C8FF",
    paddingVertical: 15,
    borderRadius: 100,
    marginTop: 80,
    marginLeft: 50,
    marginRight: 720,
    alignItems: "center",
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
  headerSubtitle: {
    fontSize: 16,
    color: "#555",
  },
  box: {
    padding: 20,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 40, 
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#97d8f7b9",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    height: 50,
  },
  iconImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  checkboxIcon: {
    width: 20,
    height: 20,
    tintColor: "#555", // optional
  },
  agree: {
    flexDirection: "row",
    marginTop: 10,
  },
  agreeText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 3,
  },
  button: {
    backgroundColor: "#88C8FF",
    paddingVertical: 18,
    borderRadius: 10,
    marginTop: 150,
    alignItems: "center",
    marginLeft: 100,
    marginRight: 100,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16, 
  },
  signupRow: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: 'center',
  },
  signupLink: {
    color: "#88C8FF",
    fontWeight: "700",
  },
})