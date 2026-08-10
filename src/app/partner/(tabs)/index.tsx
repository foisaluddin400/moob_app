import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PartnerHome() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Partner Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' },
  text: { fontSize: 20, fontWeight: '700', color: '#0f172a' },
});
