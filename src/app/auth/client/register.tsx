import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ClientRegister() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Client Registration</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/client/(tabs)')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkBtn} onPress={() => router.back()}>
        <Text style={styles.linkText}>Already have an account? <Text style={styles.bold}>Login</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, justifyContent: 'center', backgroundColor: '#ffffff' },
  title: { fontSize: 26, fontWeight: '700', color: '#0f172a', marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#cbd5e1', padding: 14, borderRadius: 8, marginBottom: 12, fontSize: 16 },
  button: { backgroundColor: '#0284c7', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 12 },
  buttonText: { color: '#ffffff', fontWeight: '600', fontSize: 16 },
  linkBtn: { marginTop: 20, alignItems: 'center' },
  linkText: { color: '#64748b', fontSize: 14 },
  bold: { color: '#0284c7', fontWeight: '600' },
});
