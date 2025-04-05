import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import MainImage from '@/components/mainImage';
import Footer from '@/components/footer';
import ScreenWithIconBar from '@/components/screenWithIconBar';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScreenWithIconBar>
          <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <MainImage />
            <Footer />
          </ScrollView>
        </ScreenWithIconBar>
      </KeyboardAvoidingView>
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
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
});

export default HomeScreen;
