import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
// import { useDispatch } from 'react-redux'
import { COLORS } from '@/constants'


type Props = {} 
export default function SeacheBar(props: Props) {
  // const dispatch = useDispatch();

  // const handleSearch = (text) => {
  //   dispatch(setSearchQuery(text));
  // };
  return (
    <View style={styles.container}>
      <View style={styles.SearchBar}>
        <Ionicons name="search-outline" size={20} color={COLORS.black} />
        <TextInput 
            placeholder="Rechercher....." 
            placeholderTextColor={COLORS.black} 
            style={styles.searchTXT}
            autoCapitalize='none'
            // onChangeText={handleSearch}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 12,
  },
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "#eaf4ff",
    gap: 10,  
    height: Platform.OS === 'ios' ? 45 : 40
  },
  searchTXT: {
    fontSize: 14,
    flex: 1,
    color: COLORS.black
  }
})