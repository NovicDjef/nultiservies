import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchSomePhone, fetchSomeValidateOTP, getchSomeUser, updateSomePhone } from "../../services/routeApi";

// Action pour authentifier l'utilisateur et stocker le token
// export const authenticateUser = createAsyncThunk(
//   'auth/authenticateUser',
//   async ({ username, phone }, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await fetchSomePhone({ username, phone });
//       console.log('response Api :', response);

//       const userToken = username + phone; // Create a token
//       await AsyncStorage.setItem('userData', JSON.stringify(response.data));
//       await AsyncStorage.setItem('userToken', userToken);

//       console.debug("token :", userToken);

//       dispatch(setUserToken(userToken)); // Update Redux state
//       return response.data;
//     } catch (error) {
//       console.error('Authentication error:', error);
//       return rejectWithValue(error.message);
//     }
//   }
// )

export const authenticateUser = (
  async ({ username, phone }, { dispatch }) => {
    try {
      const response = await fetchSomePhone({ username, phone });
      console.log('response Api :', response);

      if (response.error) {
        return response.message;
      }

      const userToken = response.user.id;
      await AsyncStorage.setItem('userData', JSON.stringify(response.user));
      await AsyncStorage.setItem('userToken', userToken);

      dispatch(setUserToken(userToken));
      return response;
    } catch (error) {
      console.error('Authentication error:', error);
      return (error.message || "Une erreur s'est produite");
    }
  }
);


  
const initializeApp = async (dispatch) => {
  const userToken = await AsyncStorage.getItem('userToken');
  if (userToken) {
    dispatch(setUserToken(userToken));
  }
};
// Action pour vérifier l'OTP
export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ otpCode, phone }, { rejectWithValue }) => {
    try {
      const response = await fetchSomeValidateOTP(otpCode, phone);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Une erreur s\'est produite lors de la vérification de l\'OTP.' });
      }
    }
  }
);

// Action pour récupérer les données utilisateur à partir de AsyncStorage
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

// Action pour mettre à jour l'utilisateur
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ id, username, phone }, { dispatch, rejectWithValue }) => {
    try {
      const response = await updateSomePhone(id, { username, phone });
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Action pour définir le token de l'utilisateur dans Redux
export const setUserToken = (token) => ({
  type: 'SET_USER_TOKEN',
  payload: token,
});

// Action pour déconnecter l'utilisateur
export const logoutUser = () => async (dispatch) => {
  await AsyncStorage.removeItem('userData');
  await AsyncStorage.removeItem('userToken');
  dispatch({ type: 'LOGOUT_USER' });
};
