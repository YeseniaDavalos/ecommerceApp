import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MainImage: React.FC = () => {
  return (
    <View>
      <Image source={require('@/assets/images/Once.png')} style={styles.image} resizeMode="cover" />
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>EDITION COLLECTION</Text>
        <Text style={styles.text}>ALIXS EJERSEN</Text>
        <Text style={styles.text}>IN PARIS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    marginTop: 6,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'right',
    marginVertical: 8,
  },
});

export default MainImage;