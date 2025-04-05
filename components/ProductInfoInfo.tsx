import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProductInfoProps {
  name: string;
  description?: string; 
  price: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, description, price }) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  description: { fontSize: 14, color: '#555', marginVertical: 5 },
  price: { fontSize: 16, fontWeight: '600', marginVertical: 10 },
});

export default ProductInfo;

