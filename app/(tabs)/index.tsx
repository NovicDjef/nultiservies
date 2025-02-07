import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../redux/action/authActions';
// import api from '../../services/api';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [role, setRole] = useState(null); // Stocke le rôle sélectionné

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };
  const router = useRouter();
  // const handleLogin = async () => {
  //   try {
  //     const response = await dispatch(authenticateUser({ email, password }));
  //      const { token, role } = response.data;
  //     console.log("token, role : ", response.data);
  //     // Redirection en fonction du rôle
  //     if (role === 'USER') {
  //        router.push('/screens/UserDashboard');
  //     } else if (role === 'TECHNICIAN') {
  //        router.push('/screens/TechnicianDashboard');
  //     }
  //   } catch (error) {
  //     console.error('Erreur de connexion :', error);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const response = await dispatch(authenticateUser({ email, password, role }));
      const data = response.payload;
      console.log("Réponse reçue :", data);
  
      // Vérification de la structure
      // if (response && response.payload) {
        const token = data.token;
  
        console.log("Token :", token);
  
        if (role === 'CLIENT') {
          router.push('./screens/UserDashboard');
        } else if (role === 'PROVIDER') {
          router.push('./screens/TechnicianDashboard');
        } else {
          // console.warn("Rôle inconnu :", role);
        }
      // } else {
      //   console.error("Erreur : Impossible de récupérer les informations utilisateur.");
      // }
    } catch (error) {
      console.error("Erreur de connexion :", error);
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
      {/* Checkbox pour sélectionner le rôle */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, role === 'PROVIDER' && styles.selectedCheckbox]}
          onPress={() => handleRoleSelection('PROVIDER')}
        >
          <Text>✔</Text>
        </TouchableOpacity>
        <Text>Provider</Text>

        <TouchableOpacity
          style={[styles.checkbox, role === 'CLIENT' && styles.selectedCheckbox]}
          onPress={() => handleRoleSelection('CLIENT')}
        >
          <Text>✔</Text>
        </TouchableOpacity>
        <Text>Client</Text>
      </View>
      <Button title="Se connecter" onPress={handleLogin} />
      <Button title="Pas de compte ? S'inscrire" onPress={() => router.push('./screens/RegisterScreen')} />
      {/* <Link href="/sreens/RegisterScreen">s'inscrire</Link> */}
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedCheckbox: {
    backgroundColor: 'green',
  },
 
});

export default Home;