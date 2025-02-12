import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DetailHotel() {
    const { item } = useLocalSearchParams();  // Récupération des paramètres
    const hotel = JSON.parse(item);  // Convertir la chaîne en objet JSON

    return (
        <>
        <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back-outline" size={28} color="black" 
                    style={{ marginRight: 10, bottom: 5 }}
                    onPress={() => router.back()} />
                <Text style={styles.title}>{hotel.name}</Text>
                </View>
                <Image source={{ uri: hotel.images[0] }} style={styles.image} />
                <Text style={styles.location}>📍 {hotel.location}</Text>
                <Text style={styles.price}>À partir de {hotel.from} {hotel.currency} / nuit</Text>
                <Text style={styles.rating}>⭐ {hotel.rating} étoiles</Text>
                <Text style={styles.amenitiesTitle}>Équipements :</Text>
                {hotel.amenities.map((amenity, index) => (
                    <Text key={index} style={styles.amenity}>• {amenity}</Text>
                ))}
            </View></>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 10 },
    location: { fontSize: 16, color: "gray", marginBottom: 10 },
    price: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    rating: { fontSize: 16, color: "#FFD700", marginBottom: 10 },
    amenitiesTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
    amenity: { fontSize: 16, marginLeft: 10 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
