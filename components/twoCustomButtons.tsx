import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onAddToBag: () => void;
  onBuyNow: () => void;
};

const TwoCustomButtons: React.FC<Props> = ({ onAddToBag, onBuyNow }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.accept]} onPress={onAddToBag}>
        <Text style={[styles.text, styles.addToBagText]}>Add to Bag</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onBuyNow}>
        <Text style={styles.text}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginVertical: 20 },
  button: { paddingVertical: 10, paddingHorizontal: 50, borderRadius: 20 },
  accept: { backgroundColor: '#C6CAC6' },
  cancel: { backgroundColor: '#009963' },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  addToBagText: { color: '#1C170D', fontWeight: 'bold' },
});

export default TwoCustomButtons;
