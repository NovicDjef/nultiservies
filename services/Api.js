
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'


const apiService = axios.create({
      // baseURL: 'http://192.168.1.136:3000',  //bureau
  baseURL: 'http://192.168.40.115:3000', //maison 
//  baseURL: 'http://172.20.10.4:3000', // Iphone Xs
  // baseURL: "http://192.168.199.255:3000",   //joyce
  // baseURL: "http://192.168.43.96:3000", //emulateur 
  // baseURL: "http://192.168.1.198:3000", //espoir model MTN
  // baseURL:"https://0438-129-0-60-56.ngrok-free.app",
  timeout: 10000,

  headers: {
    'Content-Type': 'application/json', 
    
  },
  withCredentials: true,
});


export default apiService;