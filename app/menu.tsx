import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import ScreenWithIconBar from '@/components/screenWithIconBar';

export default function MenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenWithIconBar>
        <KeyboardAvoidingView
          style={styles.keyboardAvoiding}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
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
            <TouchableOpacity><Text style={styles.item}>LINEN</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.item}>BLAZERS</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.item}>POLO</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.item}>SHOES</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.item}>BAGS</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.item}>ACCESSORIES</Text></TouchableOpacity>

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
        </KeyboardAvoidingView>
      </ScreenWithIconBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoiding: {
    flex: 1,
  },
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
    marginTop: 300,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
  },
});

