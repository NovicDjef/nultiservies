import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import api from '../../services/api';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // const response = await api.post('/auth/login', { email, password });
      // const { token, role } = response.data;

      // // Redirection en fonction du rôle
      // if (role === 'USER') {
      //   navigation.navigate('UserDashboard');
      // } else if (role === 'TECHNICIAN') {
      //   navigation.navigate('TechnicianDashboard');
      // }
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <Button
        title="Pas de compte ? S'inscrire"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default LoginScreen;