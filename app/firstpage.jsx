import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const firstpage = () => {
  const router = useRouter();

  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
    

    {/* Sign Up */}
        <TouchableOpacity style={styles.signup} onPress={() => router.push('/SignUp')}>
            <Text style={styles.signupLink}>Create an account</Text>
        </TouchableOpacity>
    </View>
  )
}

export default firstpage

const styles = StyleSheet.create({
    button: {
    backgroundColor: "#88C8FF",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 600,
    alignItems: "center",
    marginLeft: 100,
    marginRight: 100,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16, 
  },
  signup: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: 'center',
  },
  signupLink: {
    color: "#88C8FF",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 500,
  },
})