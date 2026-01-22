import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const homepage = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        };
        loadUser();
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.profile} onPress={() => router.push('/firstpage')}>
                        <Image source={require('../assets/people_icon.png')} style={styles.profileImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.notification} onPress={() => router.push('/notificationscreen')}>
                        <Image source={require('../assets/notification_icon.png')} style={styles.notificationIcon} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.name}>Hey, {user ? user.username : ""}</Text>

                <View>
                    <TouchableOpacity style={styles.imageFrame} onPress={() => router.push('/')}>
                        <Image source={require('../assets/eye_open.png')} style={styles.retinoImage} />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/upload')}>
                        <Text style={styles.uploadimageText}>Upload Image</Text>
                        <Image />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => router.push('/history')}>
                        <Text style={styles.viewhistoryText}>View History</Text>
                        <Image />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.eyespecialistText}>Eye-Specialist</Text>
                        <Image />
                    </TouchableOpacity>
                </View>

                <View style={styles.recentText}>
                    <Text style={styles.recentuploadText}>Recent Upload</Text>

                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentScroll}> 
                        <TouchableOpacity style={styles.recentImage} onPress={() => router.push('/')}>
                            <Image source={require('../assets/eye_open.png')} style={styles.recentInformation} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.recentImage} onPress={() => router.push('/')}>
                            <Image source={require('../assets/eye_open.png')} style={styles.recentInformation} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.recentImage} onPress={() => router.push('/')}>
                            <Image source={require('../assets/eye_open.png')} style={styles.recentInformation} />
                        </TouchableOpacity>
                </ScrollView>

                <View>
                    <TouchableOpacity style={styles.signoutButton}>
                        <Image source={require('../assets/signout_icon.png')} style={styles.signoutImage} />
                        <Text style={styles.signoutText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
    }

export default homepage

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
    },
    header: {
        flexDirection: "row",
        marginTop: 70,
    },
    profile: {
        backgroundColor: "#aad5fcff",
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 20,
        marginLeft: 80,
        marginRight: 600,
        alignItems: "center"
        },
    profileImage: {
        width: 43,
        height: 30,
        marginRight: 10,
        resizeMode: 'contain',
        marginLeft: "8",
    },
    notification: {
        paddingVertical: 15,
        borderRadius: 100,
        marginRight: 20,
        marginTop: 10,
    },
    notificationIcon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 40,
        fontWeight: "700",
        color: "black",
        marginTop: 15,
        marginLeft: 80,     
    },
    imageFrame: {
        backgroundColor: "#88C8FF",
        paddingVertical: 150,
        borderRadius: 30,
        marginLeft: 230,
        marginRight: 230,
        marginTop: 20,
        alignItems: "center", 
    },
    retinoImage: {
        width: 50,
        height: 50,     
    },
    button: {
        backgroundColor: "#88C8FF",
        padding: 25,
        borderRadius: 12,
        marginLeft: 80,
        marginRight: 80,
        marginTop: 15,
    },
    uploadimageText: {
        color: "black",
        fontWeight: "700",
        fontSize: 20, 
    },
    viewhistoryText: {
        color: "black",
        fontWeight: "700",
        fontSize: 20, 
    },
    eyespecialistText: {
        color: "black",
        fontWeight: "700",
        fontSize: 20, 
    },
    recentText: {
        flexDirection: "row",
        marginTop: 20, 
    },
    recentuploadText: {
        fontSize: 25,
        fontWeight: "700",
        color: "black", 
        marginLeft: 80,
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '600',
        color: 'grey',
        paddingVertical: 1,
        marginLeft: 420,
        marginTop: 8,
    },
    recentScroll: {
        paddingHorizontal: 80,
    },
    recentImage: {
        backgroundColor: "#88C8FF",
        width: 400,
        height: 250,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginRight: 15,   // spacing between items
    },
    recentInformation: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    signoutButton: {
        paddingVertical: 18,
        borderRadius: 10,
        marginTop: 40,
        alignItems: "center",
        marginLeft: "200",
        marginRight: "200",
        flexDirection: "row",
    },
    signoutImage: {
        width: 20,
        height: 20,
        marginLeft: "160",        
    },
    signoutText: {
        color: "red",
        fontWeight: "700",
        fontSize: 16,
    },
})