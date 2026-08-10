import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ClientHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello, Client</Text>
        <Text style={styles.subtitle}>Track your application status and updates.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Need help with another move?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/client/request-help')}
        >
          <Text style={styles.buttonText}>Request Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8fafc' },
  header: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '700', color: '#0f172a' },
  subtitle: { color: '#64748b', marginTop: 4 },
  card: { backgroundColor: '#ffffff', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#334155', marginBottom: 12 },
  button: { backgroundColor: '#0284c7', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#ffffff', fontWeight: '600' },
});
