import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SocialLinks: React.FC = () => {
  return (
    <>
      <View style={styles.socialLinks}>
        <Text style={styles.link}>TIKTOK</Text>
        <Text style={styles.link}>INSTAGRAM</Text>
        <Text style={styles.link}>FACEBOOK</Text>
        <Text style={styles.link}>X</Text>
        <Text style={styles.link}>PINTEREST</Text>
      </View>
      <View style={styles.socialLinks}>
        <Text style={styles.link}>YOUTUBE</Text>
        <Text style={styles.link}>SPOTIFY</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 5,
  },
  link: {
    fontSize: 12,
  },
});

export default SocialLinks;