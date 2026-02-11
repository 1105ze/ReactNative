import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";

const verificationcode = () => {
  const router = useRouter();

  // Store OTP digits
  const [code, setCode] = useState(["", "", "", ""]);

  // Input refs (for auto focus)
  const inputs = useRef([]);

  // Handle input change
  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <Image
          source={require("../assets/back_icon.png")}
          style={styles.backImage}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>Enter Verification Code</Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {code.map((item, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[
              styles.otpInput,
              item ? styles.activeInput : null,
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={item}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      {/* Resend */}
      <View style={styles.resendRow}>
        <Text style={styles.resendText}>
          If you didn’t receive a code.
        </Text>

        <TouchableOpacity>
          <Text style={styles.resendBtn}> Resend</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmBtn} onPress={() => router.push('/newpassword')}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default verificationcode;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: "#fff",
  },

  /* Back Button */
  back: {
    backgroundColor: "#88C8FF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
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
  /* OTP */
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 10,
  },

  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
  },

  activeInput: {
    borderColor: "#2F80ED",
  },

  /* Resend */
  resendRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  resendText: {
    color: "#777",
    fontSize: 14,
  },

  resendBtn: {
    color: "red",
    fontWeight: "600",
  },

  /* Confirm */
  confirmBtn: {
    backgroundColor: "#88C8FF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
  },

  confirmText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

});
