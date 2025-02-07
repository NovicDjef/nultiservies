import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchSomePhone } from '../../services/routeApi';

// Authentification de l'utilisateur
export const authenticateUser = ({ username, phone }) => {
  
  dispatch(fetchSomePhone({ username, phone }));

    const userToken = username + phone;
  console.log("les dddddd :", userToken)
    // Stockage des données utilisateur et du token
     AsyncStorage.setItem('userData', JSON.stringify(user));
     AsyncStorage.setItem('userToken', userToken);

    // Dispatch des données utilisateur dans le state Redux
    dispatch({
      type: 'SET_USER',
      payload: user
    });

    dispatch({
      type: 'SET_USER_TOKEN',
      payload: userToken
    });

    return { success: true, user };
 
};

// Vérification de l'authentification de l'utilisateur
export const checkUserAuth = () => async (dispatch) => {
  try {
    const userDataString = await AsyncStorage.getItem('userData');
    const userToken = await AsyncStorage.getItem('userToken');

    if (userDataString && userToken) {
      const userData = JSON.parse(userDataString);
      
      dispatch({
        type: 'SET_USER',
        payload: userData
      });

      dispatch({
        type: 'SET_USER_TOKEN',
        payload: userToken
      });

      return { success: true, user: userData };
    }

    return { success: false };
  } catch (error) {
    console.error('Error checking user auth:', error);
    return { success: false, error: error.message };
  }
};

// Déconnexion de l'utilisateur
export const logoutUser = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('userToken');

    dispatch({ type: 'CLEAR_USER' });
    dispatch({ type: 'CLEAR_USER_TOKEN' });

    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
};
