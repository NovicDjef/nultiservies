import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
// import api from '../../services/api';

const RegisterScreen = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [roles, setRoles] = useState(['USER', 'TECHNICIAN']);
  const [role, setRole] = useState('USER'); // Par défaut, l'utilisateur s'inscrit en tant que USER
  const navigation = useNavigation();


  const router = useRouter();

  const handleRegister = async () => {
    try {
      //await api.post('/auth/register', { email, password, role });
      router.push('/');
    } catch (error) {
      console.error('Erreur d\'inscription :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Inscription</Text>
      <TextInput
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
        style={styles.input}
      />
     {/* Liste déroulante */}
     <TouchableOpacity 
        style={styles.dropdownButton} 
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.dropdownText}>{role}</Text>
      </TouchableOpacity>

      {/* Options affichées si le dropdown est ouvert */}
      {isDropdownOpen && (
        <View style={styles.dropdownList}>
          {roles.map((item) => (
            <TouchableOpacity 
              key={item} 
              style={styles.dropdownItem} 
              onPress={() => {
                setRole(item);
                setIsDropdownOpen(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Bouton d'inscription */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push(`./RegisterScreen?role=${role}`)}
      >
        <Text style={styles.buttonText}>Selectionner</Text>
      </TouchableOpacity>
   
  
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
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
      <Button title="S'inscrire" onPress={handleRegister} />
      <Button
        title="Déjà un compte ? Se connecter"
        onPress={() => router.push('/')}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 240, // Ajuste selon le design
    left: 16,
    right: 16,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;