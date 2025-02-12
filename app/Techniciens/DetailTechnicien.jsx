import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from "react-native-calendars";

export default function DetailTechnicien() {
    
    const { item } = useLocalSearchParams();
    const technicien = JSON.parse(item);  
    console.log("technicien : ", technicien);

    const pik = "https://png.pngtree.com/thumb_back/fw800/background/20241217/pngtree-a-person-wearing-yellow-jacket-working-on-industrial-machinery-in-factory-image_16775130.jpg"
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
  
    const getDayKey = (date) => {
        if (!date) return null;
        const daysMap = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        return daysMap[new Date(date).getDay()];
    };

    const getAvailableTimes = (day) => {
        if (!day || !technicien.availability || !technicien.availability[day]) return [];
        if (technicien.availability[day] === "Fermé") return [];

        const [start, end] = technicien.availability[day].split(" - ");
        const startHour = parseInt(start.split(":")[0]);
        const endHour = parseInt(end.split(":")[0]);

        if (isNaN(startHour) || isNaN(endHour)) return [];

        let times = [];
        for (let i = startHour; i < endHour; i++) {
            times.push(`${i}:00`);
            times.push(`${i}:30`);
        }
        return times;
    };

    const handleDayPress = (day) => {
        setSelectedDay(day.dateString);
        setSelectedTime(null); // Reset le créneau sélectionné
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}> 
                <ImageBackground 
                    style={styles.backgroundImage}
                    source={{uri: pik}}>
                         <View style={styles.header}>
                        <Ionicons 
                            name="arrow-back-outline" 
                            size={28} 
                            color="black" 
                            style={{ marginRight: 10, bottom: 5 }} 
                            onPress={() => router.back()} 
                        />
                <Text style={styles.title}>{technicien.name}</Text>
            </View>
                </ImageBackground>
            </View>
           

            <Image source={{ uri: technicien.images[0] }} style={styles.image} />
            <Text style={styles.location}>📍 {technicien.location}</Text>
            <Text style={styles.price}> {technicien.name} {technicien.currency}</Text>
                <View style={styles.ratingcard}>
                    <Text style={styles.rating}>⭐ {technicien.rating} étoiles</Text>
                </View>
            <Text style={styles.amenitiesTitle}>Disponibilite du : {technicien.profession}</Text>

            <Calendar
                onDayPress={handleDayPress}
                markedDates={{ [selectedDay]: { selected: true, selectedColor: "#008CBA" } }}
            />

            {selectedDay && (
                <View style={styles.availabilityContainer}>
                    <Text style={styles.dayText}>Disponibilité pour le {selectedDay}</Text>
                    {selectedTime && (
                                <Text style={styles.selectedTime}>
                                    Vous avez sélectionné : {selectedTime}
                                </Text>
                            )}
                    {technicien.availability?.[getDayKey(selectedDay)] === "Fermé" ? (
                        <Text style={styles.closedText}>Le technicien est fermé ce jour-là.</Text>
                    ) : (
                        <>
                            <Text style={styles.availableHours}>
                                Horaires disponibles : {technicien.availability[getDayKey(selectedDay)]}
                            </Text>

                            <Picker
                                selectedValue={selectedTime}
                                onValueChange={(itemValue) => setSelectedTime(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Sélectionnez une plage horaire" value={""} />
                                {getAvailableTimes(getDayKey(selectedDay)).map((time) => (
                                    <Picker.Item key={time} label={time} value={time} />
                                ))}
                            </Picker>

                          
                        </>
                    )}
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
    image: { width: 100, height: 100, borderRadius: 50, marginTop: 40, position: "absolute", left: 10 },
    location: { fontSize: 16, color: "gray", marginBottom: 30,left: 225 },
    price: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    ratingcard: {
        position: "absolute",
        backgroundColor: "#185ab5",
        justifyContent: "center",
        alignItems: "center",
        width: 120,
        height: 35,
        left: 225, 
        top: 60,
        borderRadius: 12
    },
    rating: { color: "#FFD700", margin: 10,},
    amenitiesTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    availabilityContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    dayText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    availableHours: {
        fontSize: 14,
        color: "#333",
        marginBottom: 10,
    },
    picker: {
        width: "100%",
        height: 50,
    },
    selectedTime: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
    },
    closedText: {
        fontSize: 14,
        color: "red",
        fontWeight: "bold",
    },
    backgroundImage: {
        width: "100%",
        height: 110
    }
});

