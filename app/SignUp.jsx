import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'


const SignUp = () => {
  const router = useRouter();
    const [agreePolicy, setAgreePolicy] = useState(false);
    const [role, setRole] = useState(null)
    const [showRoleList, setShowRoleList] = useState(false)
    const [specialization, setSpecialization] = useState('')
    const [licenseImage, setLicenseImage] = useState(null)
    const pickLicenseImage = async () => {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (permission.status !== 'granted') {
        alert('Permission is required to upload license image')
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      })

      if (!result.canceled) {
        setLicenseImage(result.assets[0].uri)
      }
    }

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

{/* role */}
            <View>
              <TouchableOpacity
                style={styles.inputRow}
                onPress={() => setShowRoleList(!showRoleList)}
              >
                <Image
                  source={require('../assets/people_icon.png')}
                  style={styles.iconImage}
                />
                <Text style={{ color: role ? '#000' : '#999', 
                  flex: 1,
                }}>
                  {role || 'Select Role'}
                </Text>

                <Image
                  source={require('../assets/dropdown_arrow.png')}
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>

              {showRoleList && (
                <View style={styles.dropdown}>
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      setRole('Patient')
                      setShowRoleList(false)
                    }}
                  >
                    <Text>Patient</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      setRole('Doctor')
                      setShowRoleList(false)
                    }}
                  >
                    <Text>Doctor</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* Doctor-only fields */}
            {role === 'Doctor' && (
              <>
                {/* Specialization */}
                <View style={styles.inputRow}>
                  <Image
                    source={require('../assets/people_icon.png')}
                    style={styles.iconImage}
                  />
                  <TextInput
                    placeholder="Enter Specialization"
                    value={specialization}
                    onChangeText={setSpecialization}
                  />
                </View>

                {/* License upload */}
                <TouchableOpacity
                  style={styles.uploadBox}
                  onPress={pickLicenseImage}
                >
                  <Text style={{ color: '#555' }}>
                    {licenseImage ? 'License Uploaded' : 'Upload Medical License'}
                  </Text>
                </TouchableOpacity>

                {licenseImage && (
                  <View style={styles.licenseContainer}>
                    <Text style={styles.licenseText}>
                      License image selected
                    </Text>

                    <Image
                      source={{ uri: licenseImage }}
                      style={styles.licensePreview}
                    />
                  </View>
                )}
              </>
            )}

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

        <TouchableOpacity
          style={[
            styles.button,
            (!agreePolicy ||
              !role ||
              (role === 'Doctor' && (!specialization || !licenseImage))) && {
              opacity: 0.5,
            },
          ]}
          disabled={
            !agreePolicy ||
            !role ||
            (role === 'Doctor' && (!specialization || !licenseImage))
          }
        >
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
dropdown: {
  backgroundColor: '#fff',
  borderRadius: 8,
  marginTop: 4,
  marginHorizontal: 10,
  borderWidth: 1,
  borderColor: '#ccc',
},

dropdownItem: {
  paddingVertical: 12,
  paddingHorizontal: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},
arrowIcon: {
  width: 14,
  height: 14,
  tintColor: '#555',
},
uploadBox: {
  height: 50,
  borderRadius: 8,
  backgroundColor: '#97d8f7b9',
  marginVertical: 8,
  justifyContent: 'center',
  alignItems: 'center',
},
licenseContainer: {
  alignItems: 'center',
  marginTop: 8,
},

licenseText: {
  fontSize: 12,
  color: '#555',
  marginBottom: 6,
  textAlign: 'center',
},

licensePreview: {
  width: 120,
  height: 120,
  borderRadius: 8,
},


})