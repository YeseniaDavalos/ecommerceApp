import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '@/app/context/cartContext';
import ScreenWithIconBar from '@/components/screenWithIconBar';
import { useRouter } from 'expo-router';

export default function ShoppingBagScreen() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ScreenWithIconBar>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Bag</Text>

        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Your shopping bag is empty.</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDetails}>Size {item.size} · ${item.price}</Text>
                  <Text style={styles.productDescription}>{item.color}</Text>

                  
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>

                
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>-</Text>
                    </View>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>+</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}

        {cart.length > 0 && (
          <View style={styles.footer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Shipping</Text>
              <Text style={styles.summaryText}>$0</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>${subtotal.toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={styles.buyNowButton} onPress={() => router.push('/buyNowScreen')}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScreenWithIconBar>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16 },

  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  infoContainer: { flex: 1 },
  productName: { fontSize: 18 },
  productDetails: { fontSize: 14, color: '#A1824A', marginVertical: 2 },
  productDescription: { fontSize: 14, color: '#A1824A' },
  removeText: { fontSize: 14, color: '#D9534F', marginTop: 6 }, // Botón de eliminar

  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  button: {
    width: 30, height: 30, borderRadius: 15, backgroundColor: '#F5EEE6',
    alignItems: 'center', justifyContent: 'center'
  },
  buttonText: { fontSize: 18, color: '#333' },
  quantity: { fontSize: 18, marginHorizontal: 10 },

  footer: { borderTopWidth: 1, borderColor: '#ddd', paddingVertical: 20 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  summaryText: { fontSize: 16, color: '#555' },
  totalText: { fontSize: 18, fontWeight: 'bold' },

  buyNowButton: {
    marginTop: 20, backgroundColor: '#008f4c', paddingVertical: 12, borderRadius: 30, alignItems: 'center'
  },
  buyNowText: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});
