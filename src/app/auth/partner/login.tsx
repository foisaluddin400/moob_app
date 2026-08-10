import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function PartnerLogin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partner Login</Text>
      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/partner/(tabs)')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#ffffff' },
  title: { fontSize: 26, fontWeight: '700', color: '#0f172a', marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#cbd5e1', padding: 14, borderRadius: 8, marginBottom: 12, fontSize: 16 },
  forgotBtn: { alignSelf: 'flex-end', marginBottom: 20 },
  forgotText: { color: '#0284c7', fontSize: 14 },
  button: { backgroundColor: '#0284c7', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#ffffff', fontWeight: '600', fontSize: 16 },
});
