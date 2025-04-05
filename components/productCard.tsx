import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: any;
    fullWidth?: boolean;
  };
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, product.fullWidth ? styles.fullWidthCard : styles.halfWidthCard]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={product.image}
        style={[styles.image, product.fullWidth ? styles.fullWidthImage : styles.halfWidthImage]}
      />
      <View style={styles.textContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{product.name}</Text>
          <TouchableOpacity onPress={() => console.log('Bookmark pressed')}>
            <FontAwesome name="bookmark-o" size={14} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  halfWidthCard: {
    width: '48%',
  },
  fullWidthCard: {
    width: '100%',
  },
  image: {
    borderRadius: 10,
    width: '100%',
  },
  halfWidthImage: {
    height: 150,
  },
  fullWidthImage: {
    height: 250,
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ProductCard;
