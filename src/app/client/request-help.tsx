import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RequestHelp() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>This is Request Help Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' },
  text: { fontSize: 18, fontWeight: '600', color: '#334155' },
});
