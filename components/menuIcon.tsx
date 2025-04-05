import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { useRouter } from 'expo-router';

export default function MenuScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>WOMAN        MAN        KIDS        BEAUTY</Text>
      <TouchableOpacity><Text style={styles.item}>EDITION</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>THE NEW</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/productViewScreen')}>
        <Text style={styles.item}>VIEW ALL</Text>
      </TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>JACKETS</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>COATS | TRENCHES</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>SWEATERS | CARDIGANS</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>PANTS</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>JEANS</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.item}>SHIRTS</Text></TouchableOpacity>
      
      {/* Footer */}
      <Text style={styles.footerTitle}>SIGN UP FOR OUR NEWSLETTER</Text>
      <View style={styles.socialLinks}>
        <Text style={styles.item}>TIKTOK</Text>
        <Text style={styles.item}>INSTAGRAM</Text>
        <Text style={styles.item}>FACEBOOK</Text>
        <Text style={styles.item}>X</Text>
        <Text style={styles.item}>PINTEREST</Text>
        <Text style={styles.item}>YOUTUBE</Text>
        <Text style={styles.item}>SPOTIFY</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
  footerTitle: {
    marginTop: 40,
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialLinks: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});