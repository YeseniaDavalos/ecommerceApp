import React from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import ProductGrid from '@/components/productGrid';
import ScreenWithIconBar from '@/components/screenWithIconBar';

const products = [
    { id: '1', name: 'PRINTED MIDI DRESS', price: '$257', image: require('@/assets/images/Uno.png') },
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

const ProductViewScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenWithIconBar>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={styles.title}>VIEW ALL</Text>
          <ProductGrid products={products} />
        </KeyboardAvoidingView>
      </ScreenWithIconBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
});

export default ProductViewScreen;


