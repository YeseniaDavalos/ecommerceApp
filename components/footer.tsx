import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SocialLinks from '@/components/socialLinks';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.newsletter}>SIGN UP FOR OUR NEWSLETTER</Text>
      <SocialLinks />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginTop: 400,
  },
  newsletter: {
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Footer;