import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View>
  {/* Header */}        
      <View>
        <TouchableOpacity style={styles.back} onPress={() => router.push('/firstpage')}>
          <Image source={require('../assets/back_icon.png')} style={styles.backImage} />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>DR Detection</Text>
          <Text style={styles.headerSubtitle}>Diabetic Retinopathy Screening</Text>
        </View>
      </View>

      {/* Profile Icon */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar} />
      </View>

      {/* Welcome Text */}
      <View style={styles.welcometext}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to access your screening history</Text>
      </View>

      {/* Login Box */}
      <View style={styles.box}>
        <View style={styles.inputRow}>
            <Image source={require('../assets/people_icon.png')} style={styles.iconImage} />
            <TextInput placeholder="Username"/>
        </View>


        <View style={styles.inputRow}>
            <Image source={require('../assets/password_icon.png')} style={styles.iconImage} />

            <TextInput placeholder="Password" secureTextEntry={!showPassword} />
            
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={showPassword ? require('../assets/eye_open.png') : require('../assets/eye_closed.png')}style={styles.eyeIcon}/>
            </TouchableOpacity>
        </View>

        <View style={styles.forgetpassword}>
            <TouchableOpacity style={styles.checkbox} onPress={() => setRememberMe(!rememberMe)}>
                <Image source={rememberMe ?require('../assets/check_filled.png') :require('../assets/check_empty.png')} style={styles.checkboxIcon}/>
            </TouchableOpacity>

            <Text style={styles.remember}>Remember me</Text>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
      </View>


        <TouchableOpacity style={styles.button} onPress={() => router.push('/homepage')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      

      {/* Sign Up */}
      <View style={styles.signupRow}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/SignUp')}>
          <Text style={styles.signupLink}>  Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88C8FF",
    alignItems: "center",
  },
  back: {
    backgroundColor: "#88C8FF",
    paddingVertical: 15,
    borderRadius: 50,
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
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    alignItems: "center",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#555",
  },
  avatarWrapper: {
    marginTop: 30,
    alignItems: "center",
  },
  avatar: {
    width: 110,
    height: 110,
    backgroundColor: "#88C8FF",
    borderRadius: 60,
  },
  welcometext:{
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "700", //Bold
    marginTop: 20,
    color: "lightblue",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginBotton: 50,
  },
  box: {
    padding: 20,
    borderRadius: 12,
    marginLeft: 80,
    marginRight: 80,
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
  eyeIcon: {
    width: 25,
    height: 25,
    tintColor: "#555",
    marginLeft: "475",
    marginTop: "5",
  },
  forgotPasswordLink: {
    fontSize: 14,
    fontWeight: '600',
    color: '#88C8FF',
    paddingVertical: 1,
    marginLeft: 377,
  },
  forgetpassword: {
    flexDirection: "row",
    marginTop: 10,
  },

  checkboxIcon: {
    width: 20,
    height: 20,
    tintColor: "#555", // optional
  },
  remember: {
    fontSize: 14,
    color: "#555",
    marginLeft: 3,
  },
  button: {
    backgroundColor: "#88C8FF",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 300,
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
