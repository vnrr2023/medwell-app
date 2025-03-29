import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WebApp() {
  useEffect(() => {
    const hideNavBar = async () => {
      await NavigationBar.setVisibilityAsync('hidden'); // Hides the navigation bar
      await NavigationBar.setBehaviorAsync('inset-swipe'); // Prevents swipe hints
    };

    hideNavBar();
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <WebView source={{ uri: 'https://medwell2.vercel.app' }} style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'black', // Ensures safe area background is consistent
  },
  container: {
    flex: 1,
    backgroundColor: 'black', // Prevents flashing white background
  },
});
