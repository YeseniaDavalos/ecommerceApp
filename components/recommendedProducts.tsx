import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

type RecommendedProductsProps = {
  products: { id: string; name: string; price: string; image: any }[];
  onSelect?: (id: string) => void; 
};

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ products, onSelect }) => {
  return (
    <View>
      <Text style={styles.title}>Recommended Products</Text>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelect?.(item.id)}> 
            <View style={styles.product}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  product: { 
    marginRight: 10, 
    alignItems: 'flex-start', 
    width: 250, 
  },
  image: { width: 250, height: 250, borderRadius: 10 },
  name: { 
    fontSize: 14, 
    fontWeight: 'bold',
    textAlign: 'left', 
    width: '100%', 
  },
  price: { 
    fontSize: 12, 
    color: '#A1824A',
    textAlign: 'left', 
    width: '100%',
  },
});

export default RecommendedProducts;

