import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconBar from '@/components/iconBar';

const ScreenWithIconBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <IconBar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ScreenWithIconBar;
