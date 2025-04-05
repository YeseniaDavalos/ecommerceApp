import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from '@/components/productCard';
import { useRouter } from 'expo-router';

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
  fullWidth?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

const formatData = (data: Product[], numColumns: number): Product[][] => {
  const formattedData: Product[][] = [];
  let row: Product[] = [];

  data.forEach(item => {
    if (item.fullWidth) {
      if (row.length > 0) {
        formattedData.push([...row]);
        row = [];
      }
      formattedData.push([item]);
    } else {
      row.push(item);
      if (row.length === numColumns) {
        formattedData.push([...row]);
        row = [];
      }
    }
  });

  if (row.length > 0) {
    formattedData.push([...row]);
  }

  return formattedData;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const formattedProducts = formatData(products, 2);
  const router = useRouter();

  const handlePress = (product: Product) => {
    router.push({
      pathname: '/productDetailsScreen',
      params: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image.uri ? product.image.uri : product.image, 
      },
    });
  };

  return (
    <FlatList
      data={formattedProducts}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.row}>
          {item.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => handlePress(product)}
            />
          ))}
        </View>
      )}
      contentContainerStyle={{ paddingBottom: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductGrid;

