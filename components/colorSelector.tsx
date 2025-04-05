import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const colors = ['#10786C', '#000', '#4DC7EA', '#B78AE1', '#C6CAC6'];

type Props = {
  onSelect: (color: string) => void;
};

const ColorSelector = ({ onSelect }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSelect = (color: string) => {
    setSelectedColor(color);
    onSelect(color);
  };

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.circle,
            { backgroundColor: color },
            selectedColor === color && styles.selectedCircle,
          ]}
          onPress={() => handleSelect(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 10 },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCircle: {
    borderColor: '#000', 
    borderWidth: 3,
  },
});

export default ColorSelector;


