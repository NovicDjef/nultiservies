import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
// import api from '../../services/api';
// import AvailabilityForm from '../components/AvailabilityForm';
// import ServiceForm from '../components/ServiceForm';

const TechnicianDashboard = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [services, setServices] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const availabilitiesResponse = await api.get('/availability');
        // const servicesResponse = await api.get('/services');
        // const messagesResponse = await api.get('/messages');
        // setAvailabilities(availabilitiesResponse.data);
        // setServices(servicesResponse.data);
        // setMessages(messagesResponse.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Panel Technicien</Text>
      {/* <AvailabilityForm /> */}
      {/* <ServiceForm /> */}
      <Text>Messages :</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.content}</Text>}
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

export default TechnicianDashboard;