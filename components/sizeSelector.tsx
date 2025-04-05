import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

type Props = {
  onSelect: (size: string) => void;
};

const SizeSelector = ({ onSelect }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSelect = (size: string) => {
    setSelectedSize(size);
    onSelect(size);
  };

  return (
    <View style={styles.container}>
      {sizes.map((size) => (
        <TouchableOpacity
          key={size}
          style={[
            styles.button,
            selectedSize === size && styles.selectedButton,
          ]}
          onPress={() => handleSelect(size)}
        >
          <Text style={selectedSize === size ? styles.selectedText : styles.text}>
            {size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20 },
  button: {
    borderWidth: 1,
    borderColor: '#E8DECF',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  selectedButton: {
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#E8DECF',
  },
  text: {
    color: '#000',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SizeSelector;


