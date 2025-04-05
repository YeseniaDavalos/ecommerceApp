import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

const IconBar: React.FC = () => {
  const router = useRouter(); 

  return (
    <View style={styles.iconsContainer}>
      
      <TouchableOpacity onPress={() => router.push('/menu')}> 
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.rightContainer}>
      <TouchableOpacity onPress={() => router.back()}> 
      <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
    
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default IconBar;