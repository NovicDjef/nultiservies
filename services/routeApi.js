import apiService from './Api';


// Requetes GET

export const getchSomeUser = () => {
  return apiService.get('/users')
}
  export const getchSomeRestaurant = () => {
    return apiService.get('/restaurants')
  }
  export const getchSomeMenu = () => {
    return apiService.get('/menus')
  };
  export const getchSomeRepas = () => {
    return apiService.get('/plats');
  };

  export const getchSomeslide = () => {
    return apiService.get('/slides');
  };
  export const getchSomeGeolocation = () => {
    return apiService.get("/geolocalisations")
  }
  export const getchSomecategorie = () => {
    return apiService.get('/categories')
  };
  // export const getSomeCommande = (userId) => {
  //   return apiService.get(`/commandes/${userId}`)
  
  // };
  export const getSomeCommande = () => {
    return apiService.get("/commandes")
  };
  export const getchSomeLivraisons = () => {
    return apiService.get("/livraisons")
  };
  export const getchSomeVille = () => {
    return apiService.get("/villes")
  }
  
  // resquete POST :
  
  
  export const fetchSomeGeolocation = (geolocationData) => {
    return apiService.post('/geolocalisation', { geolocationData: geolocationData })
  };

  // const commande = cart.map(item => ({
  //   quantity: item.quantity,
  //   userId: userId, /* ID de l'utilisateur, à remplacer par la valeur réelle */
  //   platsId: item.id, 
    
  // }));
  
  export const addSomePayement = (paymentData) => {
    console.debug("paymentDatafffff :", paymentData)
      return apiService.post('/payement', {paymentData: paymentData})
  }

  export const addSomeCommande = (commandeData) => {
    return apiService.post("/commande", {commandeData: commandeData})
  }

  export const fetchSomeAdressLivraison = (adresse) => {
    console.debug("Adresse de livraion: ", adresse);
    return apiService.post('/livraison', {adresse: adresse})
  }

  // export const fetchSomeUser = () => {
  //   return apiService.get('/users')
  // }

  export const fetchSomePhone = ( {username, phone} ) => {
    console.log("username, phone : ", phone, username)
      return apiService.post('/register', { username, phone });
     
  };

  export const fetchSomeUser = ({ email, password, role }) => {
    console.log("email, password, role : ", email, password, role)
    return apiService.post('/login', { email, password, role });
  }
  
  // export const fetchSomePhone = async ({ username, phone }) => {
  //   try {
  //     const response = await apiService.post('/register', { username, phone });
      
  //     // Vérifiez le statut HTTP de la réponse
  //     if (response.status >= 400) {
  //       const errorData = await response.json();
  //       console.error('Erreur dans fetchSomePhone:', errorData.message);
  //       throw new Error(errorData.message || 'Une erreur s\'est produite');
  //     }
  
  //     // Retourner les données si tout va bien
  //     return response.data;
  //   } catch (error) {
  //     console.error('Erreur dans fetchSomePhone:', error);
  //     throw error; // Propagation de l'erreur pour qu'elle soit traitée dans le Redux action
  //   }
  // };
  

  export const fetchSomeValidateOTP = (otpCode, phone) => {
    return apiService.post('/verify-otp', { code: otpCode, phone })
  }
  
  export const fetchSomeGame = ({lotId, userId, selectedNumbers, isWinner}) => {
    return apiService.post('./games', {lotId, userId, selectedNumbers, isWinner})
  }

  // Request UPDATE

  export const updateSomePhone = (id, { username, phone }) => {
    return apiService.patch(`/update-user/${id}`, { username, phone });
  };
  

