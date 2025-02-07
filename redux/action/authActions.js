import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchSomePhone, fetchSomeValidateOTP, getchSomeUser, updateSomePhone, fetchSomeUser } from "../../services/routeApi";

// export const authenticateUser = createAsyncThunk(
//   'auth/authenticateUser',
//   async ({email, password}, { rejectWithValue }) => {
//     try {
//       const response = await fetchSomeUser({ email, password });
//       await AsyncStorage.setItem('userData', JSON.stringify(response.data));
//       console.log("response : ", response.data)
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const response = await fetchSomeUser({ email, password, role });

      // Stockage des données utilisateur
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
      
      console.log("Réponse complète :", response.data);

      return response.data;
    } catch (error) {
      console.error("Erreur de connexion :", error);
      return rejectWithValue(error.response?.data || "Erreur inconnue");
    }
  }
);



// export const fetchUsers = createAsyncThunk(
//   'auth/fetchUsers',
//    async ({ email, password }, { rejectWithValue   }) => {
//   try {
//     const response = await fetchSomeUser({ email, password });
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// }
// );













export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (otpCode, { rejectWithValue }) => {
    try {
      // Faites votre logique de vérification OTP ici
      const response = await fetchSomeValidateOTP(otpCode);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        // Gérer d'autres types d'erreurs ici si nécessaire
        return rejectWithValue({ message: 'Une erreur s\'est produite lors de la vérification de l\'OTP.' });
      }
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return JSON.parse(userData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Ajout de l'action pour modifier un utilisateur
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ id, username, phone }, { rejectWithValue }) => {
    try {
      const response = await updateSomePhone(id, { username, phone });
      await AsyncStorage.setItem('userData', JSON.stringify(response.data)); // Mettez à jour les données utilisateur dans AsyncStorage
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
