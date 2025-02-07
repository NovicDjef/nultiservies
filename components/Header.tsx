import { View, Image, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '@/constants/theme';


export default function Header() {
  // const UserData = useSelector(state => state.Auth.user)
  // const { UserData, token, isAuthenticated, isLoading, error } = useSelector(state => state.user.auth);
  const router = useRouter();
// const notification = useSelector((state) => state.notification.data);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData'); // Récupère la chaîne JSON de `userData`
        
        if (userDataString) {
          const userData = JSON.parse(userDataString); // Convertit la chaîne JSON en objet
          setUser(userData); // Met à jour l'état `user` avec l'objet JSON
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };
    // console.log("User :", user)
    fetchUserData();  
  }, []);
  const navigateToFavorites = () => {
    // Naviguer vers la page qui contient le composant Favorite
    // router.push('/components/Historique');
  };
  const navigateToNotifications = () => {
    // router.push("/components/Notifications")
  }
  return (
    <><StatusBar style='dark' /><View style={styles.container}>

      <View style={styles.UserData}>
        {user !== undefined ? (
          <Image
            style={styles.userImage}
            source={require('../assets/avatar/39.jpg')} />
            // source={require(`../../assets/avatar/${user.image}.avif`)} />
        ) : (
          <Image
            style={styles.userImage}
            source={require('../assets/avatar/39.jpg')} />
        )}
        <View style={{ gap: 3, left: 2 }}>
          <Text style={styles.welcomText}>Bienvenue !</Text>
          <Text style={styles.userName}>Hello, {user == undefined ? "Votre nom" : "Novic" }
          </Text>
        </View>
      </View>
      <View style={[styles.icons]}>
        <TouchableOpacity onPress={navigateToNotifications}>
          <View style={styles.Notifications}>
            <Text style={{ color: COLORS.white }}>2</Text>
          </View>
          <Ionicons name='notifications-outline' size={28} />
        </TouchableOpacity>
        
      </View>
    </View></>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  UserData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomText: {
    fontSize: 12,
    color: COLORS.black,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black
  },
  Notifications: {
    width: Platform.OS === 'ios' ? 20 : 18,
    height: Platform.OS === 'ios' ? 20 : 18,
    borderRadius: 10,
    backgroundColor: COLORS.red,
    position: 'absolute', 
    top: Platform.OS === 'ios' ? -10 : -9, 
    right: -3,  
    alignItems: 'center',
    justifyContent: 'center',}
})