import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HotelList from '../Hotels/HotelList';
import RestaurantList from '../Restaurants/RestaurantList';
import TechnicienList from '../Techniciens/TechnicienList';
import SearchBar from '../../components/SeacheBar';
// import api from '../../services/api';

const UserDashboard = () => {
  const [technicians, setTechnicians] = useState([]);
  const [services, setServices] = useState([]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const techniciansResponse = await api.get('/technicians');
        // const servicesResponse = await api.get('/services');
        // setTechnicians(techniciansResponse.data);
        // setServices(servicesResponse.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    fetchData();
  }, []);

// const hotels = [
//   { id: 1, name: 'Hotel 1', bio: 'Description du Hotel 1' },
//   { id: 2, name: 'Hotel 2', bio: 'Description du Hotel 2' },
//   { id: 3, name: 'Hotel 3', bio: 'Description du Hotel 3' },
// ];

  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Section styless href={{ pathname: `/repas/PlatsList`,}} label={"Hotel Disponibles"}/>
      <HotelList />
     
      <Section styless href={{ pathname: `/repas/PlatsList`,}} label={"Restaurants Disponibles"}/>
       <RestaurantList />
      <Section styless href={{ pathname: `/repas/PlatsList`,}} label={"Techniciens Disponibles"}/>
       <TechnicienList />
    </ScrollView>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   containers: {
//   width: 200,  // Fixer la largeur pour un défilement horizontal
//   height: 120,
//   borderRadius: 25,
//   marginRight: -5,  // Ajouter un petit espace entre les éléments
//   marginHorizontal: 10
// }});
const styles = StyleSheet.create({

  containerHotel: {
    backgroundColor: "#999",
    padding: 4,
  },
  card: {
    backgroundColor: "#fff",
    padding: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    margin: 3
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 8,
    
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 0,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  address: {
    fontSize: 14,
    color: "gray",
    margin: 5,
  },
 

  heart: {
    top: 10,
    // right: 10,
    marginTop: 5,
  },

  imageContainer: {
    position: "relative",
  },

  overlay: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    paddingVertical: 5,
  },
  rating: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 16,
  },
  nameOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    borderRadius: 5,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default UserDashboard;