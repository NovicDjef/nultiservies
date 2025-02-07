import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../../components/Header';
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

  return (
    <View style={styles.container}>
      <Header />
      <Text>Techniciens disponibles :</Text>
      <FlatList
        data={technicians}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.bio}</Text>}
      />
      <Text>Services proposés :</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default UserDashboard;