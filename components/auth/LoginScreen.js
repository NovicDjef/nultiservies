import React, { useState, useEffect } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native'
  import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../constants';
import { fetchSomePhone } from '../../services/routeApi';
import apiService from '../../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({navigation}) => {
    const {t} = useTranslation();
    
    const dispatch = useDispatch();    
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({
      username: '',
      phone: '',
    });
  
    
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
      // Validation du nom d'utilisateur
      if (username.length < 4) {
        newErrors.username = 'Le nom d\'utilisateur doit contenir au moins 4 caractères.';
        isValid = false;
      } else {
        newErrors.username = '';
      }
  
      // Validation du numéro de téléphone
      if (!/^\d{9}$/.test(phone)) {
        newErrors.phone = 'Le numéro de téléphone doit contenir exactement 9 chiffres.';
        isValid = false;
      } else {
        newErrors.phone = '';
      }
  
      setErrors(newErrors);
  
      return isValid;
    };
    // const handleSubmit = async () => {
    //   const isValid = validateForm();
    //   if (isValid) {
    //     setLoading(true);
    //     try {
    //       await dispatch(authenticateUser({ username, phone }));
    //     navigation.navigate('TabMenu',); 
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    // };
    

    // const handleSubmit = async () => {
    //   const isValid = validateForm();
    //   if (isValid) {
    //     setLoading(true);
    //     try {
    //       await dispatch(authenticateUser({ username, phone }));
        
    //         navigation.navigate('TabMenu');
    //         Alert.alert("Erreur",);
          
    //     } catch (error) {
    //       console.error(error);
    //       Alert.alert("Erreur", "Une erreur inattendue s'est produite");
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    // };

    // const handleSubmit = async () => {
    //   const isValid = validateForm();
    //   if (isValid) {
    //     setLoading(true);
    //     try {
    //       console.debug("Avant appel API");
    //       const response = await apiService.post('/register', { username, phone });
    //       console.debug("Après appel API, response:", response);
          
    //       if (response.data.success) {
    //         console.log("Authentication success", response.data.message);
    //         const userToken = username + phone + Date.now().toString();
    //         // Stockez le token et les informations de l'utilisateur
    //         await AsyncStorage.setItem('userToken', userToken);
    //         await AsyncStorage.setItem('userData', JSON.stringify({ username, phone }));
    //         console.log('Usertoken :', userToken)
    //         Alert.alert("Succès", response.data.message);
    //         navigation.navigate('TabMenu');
    //       } else {
    //         console.log("Authentication failed", response.data.message);
    //         Alert.alert("Erreur", response.data.message);
    //       }
    //     } catch (error) {
    //       console.error("Erreur API:", error.response?.data || error.message);
    //       Alert.alert("Erreur", error.response?.data?.message || "Une erreur inattendue s'est produite");
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    // };
    
    const handleSubmit = async () => {
      const isValid = validateForm();
      if (isValid) {
        setLoading(true);
        try {
          console.debug("Avant appel API");
          const response = await apiService.post('/register', { username, phone });
          console.debug("Après appel API, response:", response);
          
          if (response.data.success) {
            console.log("Authentication success", response.data.message);
            
            // Générer un token unique (utilisez une méthode plus sécurisée en production)
            const userToken = username + phone + Date.now().toString();
            
            // Sauvegarder le token et les informations de l'utilisateur
            await AsyncStorage.setItem('userToken', userToken);
            await AsyncStorage.setItem('userData', JSON.stringify({ username, phone }));
            
            console.log('UserToken :', userToken);
            Alert.alert("Succès", response.data.message);
            
            if (route.params?.onLoginSuccess) {
              route.params.onLoginSuccess();
            } else {
              navigation.navigate('TabMenu');
            }
          } else {
            console.log("Authentication failed", response.data.message);
            Alert.alert("Erreur", response.data.message);
          }
        } catch (error) {
          console.error("Erreur API:", error.response?.data || error.message);
          Alert.alert("Erreur", error.response?.data?.message || "Une erreur inattendue s'est produite");
        } finally {
          setLoading(false);
        }
      }
    };
    
    console.log('données User :', username, phone)

    const renderMainView = () => {
      return(
        <>
          <View
                  style={{
                    width: '100%',
                    height: '10%',
                    alignItems: 'center',
                    paddingTop: 70,
                  }}>
                    <LottieView
                      style={styles.lottie}
                      source={require("../../../assets/json/animation_lljmrq2l.json")}
                      autoPlay
                      loop />
          </View>
            <Animatable.Text style={[styles.titleText, {top: 22}]} animation='fadeInUp' delay={1200} > {t("WELCOME")} </Animatable.Text> 
          <Animatable.View
            animation="fadeInUpBig"
            style={styles.bottomView}
          >
              <Text style={styles.loginText}>{t("NAME_PSUDO")}</Text> 
        <View style={styles.inputView}> 
        <FontAwesome 
            name="user-o"
            color={COLORS.primary}
            size={30}
            style={styles.inputIcon}
        />
        <TextInput 
        style={styles.input} 
        value={username} 
        onChangeText={setUsername}
        placeholder='Username' 
        autoCapitalize='none' 
        textContentType='username'
        />
        </View> 
        {errors.username && <Text style={styles.ErrorText}>{errors.username}</Text>}
            <Text style={styles.loginText}>{t("PHONE_NUMBER")}</Text> 
        <View style={styles.inputView}> 
        <FontAwesome
          name="phone"
          color={COLORS.primary}
          size={30}
          style={styles.inputIcon} />
          <Text style={{fontSize: 20}}>+237 :</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Téléphone' 
          autoCapitalize='none' 
          keyboardType='numeric' 
          value={phone} 
          onChangeText={setPhone}
        />
        </View> 
        {errors.phone && <Text style={styles.ErrorText}>{errors.phone}</Text>}
        <TouchableOpacity
                style={{display: 'flex', alignSelf: 'flex-end', justifyContent:'flex-end', margin: 12 }}
                onPress={() => handleSubmit()}
              >
                        
              <LinearGradient
                colors={['#08d4c4', '#08d4c4']}
                style={[styles.signIn, {flexDirection: "row", width: 140,}]}
              >
                {loading ? (
                        <View style={{flexDirection: "row", justifyContent:"center"}}>
                          <ActivityIndicator size="small" color="#fff" />
                          <Text style={{color: "white", marginLeft: 12}}>Chargement...</Text>
                        </View>
                    ) : (
                <Text style={[styles.textSign, { color: '#fff', marginRight: 8 }]}> Continuer </Text>   
              )}
                <FontAwesome
                    name="angle-right"
                    color={COLORS.white}
                    size={30}
                    style={{marginRight: 8 }}
                  /> 
              </LinearGradient>
            
                    </TouchableOpacity>
        
          </Animatable.View>
        </>
      )
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
          <StatusBar backgroundColor='#42C6A5' barStyle="light-content"/>
          {renderMainView()}
      </View>
    </TouchableWithoutFeedback>

  )
}
const styles = StyleSheet.create({
  titleText: { 
    position: 'absolute', 
    top: Dimensions.get('screen').height * 0.1, 
    alignSelf: 'center', 
    color: '#fff', 
    fontFamily: 'SourceSansProBold', 
    fontSize: 34, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.44, 
    shadowRadius: 10.32, 
    elevation: 16, 
  }, 
  ErrorText : {
  color: "red",
  marginTop: 4
  },
  bottomView: { 
    backgroundColor: '#fff', 
    opacity: 0.95, 
    position: 'absolute', 
    bottom: 0, left: 0, right: 0, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    paddingTop: 10, 
    paddingBottom: 20, 
    paddingHorizontal: 20, 
  }, 
  loginText: { 
    fontFamily: 'SourceSansProBold', 
    fontSize: 18, 
    marginTop: 12, 
    marginBottom: 4, 
  }, 
  inputView: { 
    height: 50, 
    borderRadius: 10, 
    backgroundColor: '#f1f3f6', 
    marginTop: 10, 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
  }, 
  inputIcon: { 
    paddingHorizontal: 8, 
  }, 
  input: { 
    height: 40, 
    flex: 1, 
    fontFamily: 'SourceSansProRegular', 
    fontSize: 19, 
    color: '#333', 
  }, 
  container: {
    flex: 1, 
  backgroundColor: '#42C6A5',

  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  lottie: {
    width: 248,
    height: 208,
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 10
  },
  signIn: {
      width: '100%',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});

export default LoginScreen;
