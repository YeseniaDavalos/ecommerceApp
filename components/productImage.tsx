import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface ProductImageProps {
  source: any;
}

const ProductImage: React.FC<ProductImageProps> = ({ source }) => {
  return <Image source={source} style={styles.image} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  image: { width: '100%', height: 400, borderRadius: 10 },
});

export default ProductImage;

