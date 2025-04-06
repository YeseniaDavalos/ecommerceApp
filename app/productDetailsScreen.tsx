import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCart } from '@/app/context/cartContext';
import ScreenWithIconBar from '@/components/screenWithIconBar';
import ProductImage from '@/components/ProductImageImage';
import ProductInfo from '@/components/ProductInfoInfo';
import ColorSelector from '@/components/colorSelector';
import SizeSelector from '@/components/sizeSelector';
import Accordion from '@/components/accordion';
import RecommendedProducts from '@/components/recommendedProducts';
import TwoCustomButtons from '@/components/twoCustomButtons';

const products = [
  { id: '1', name: 'FLORAL DRESS', price: '$199', image: require('@/assets/images/Uno.png') },
  { id: '2', name: 'PRINTED MIDI DRESS', price: '$276', image: require('@/assets/images/Dos.png') },
  { id: '3', name: 'FAUX SUEDE JACKET', price: '$137', image: require('@/assets/images/Tres.png') },
  { id: '4', name: 'SHEARLING JACKET', price: '$458', image: require('@/assets/images/Cuatro.png') },
  { id: '5', name: 'MIDI DRESS', price: '$276', image: require('@/assets/images/Cinco.png') },
  { id: '6', name: 'LONG DRESS', price: '$276', image: require('@/assets/images/Seis.png') },
  { id: '7', name: 'ZW COLLECTION', price: '$639', image: require('@/assets/images/Siete.png'), fullWidth: true },
  { id: '8', name: 'PRINTED FUR JACKET', price: '$204', image: require('@/assets/images/Ocho.png') },
  { id: '9', name: 'LONG ZW DRESS', price: '$106', image: require('@/assets/images/Nueve.png') },
  { id: '10', name: 'ZW COLLECTION', price: '$576', image: require('@/assets/images/Diez.png'), fullWidth: true },
];

const accordionData = [
  {
    title: 'The Details',
    content:
      'Ivory stretch design with twist detailing and round neck. Design with mid-length dress and straight hem.',
  },
  { title: 'Size & Fit', content: 'Model wears size S. Regular fit.' },
  { title: 'Composition & Care', content: '95% Cotton, 5% Elastane. Machine wash.' },
  { title: 'Delivery & Return', content: 'Free delivery on orders over $100. 30-day return policy.' },
];

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { addToCart } = useCart();

  const selectedProduct = products.find((p) => p.id === id) || products[0];
  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);

  const handleAddToCart = () => {
    addToCart({
      ...selectedProduct,
      price: Number(selectedProduct.price.replace('$', '')),
      color,
      size,
      quantity: 1,
    });
    router.push('/shoppingBagScreen'); // ✅ Para Add to Bag
  };

  const handleBuyNow = () => {
    addToCart({
      ...selectedProduct,
      price: Number(selectedProduct.price.replace('$', '')),
      color,
      size,
      quantity: 1,
    });
    router.push('/buyNowScreen'); // ✅ Para Buy Now (ahora sí está bien)
  };

  return (
    <ScreenWithIconBar>
      <ScrollView contentContainerStyle={styles.container}>
        <ProductImage source={selectedProduct.image} />
        <ProductInfo name={selectedProduct.name} price={selectedProduct.price} />
        <ColorSelector onSelect={setColor} />
        <SizeSelector onSelect={setSize} />
        <Accordion data={accordionData} />
        <RecommendedProducts
          products={products}
          onSelect={(productId) => router.push(`/productDetailsScreen?id=${productId}`)}
        />
        <TwoCustomButtons onAddToBag={handleAddToCart} onBuyNow={handleBuyNow} />
      </ScrollView>
    </ScreenWithIconBar>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
});




