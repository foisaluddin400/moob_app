import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConsultantUserTab() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => router.push('/consultant/account-settings')}>
        <Text style={styles.label}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress={() => router.push('/consultant/terms')}>
        <Text style={styles.label}>Terms & Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress={() => router.push('/consultant/privacy')}>
        <Text style={styles.label}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.row, styles.logout]} onPress={() => router.replace('/role-selection')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8fafc' },
  row: { backgroundColor: '#ffffff', padding: 16, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  label: { fontSize: 16, color: '#334155', fontWeight: '500' },
  logout: { marginTop: 20, borderColor: '#fca5a5', backgroundColor: '#fef2f2' },
  logoutText: { fontSize: 16, color: '#dc2626', fontWeight: '600', textAlign: 'center' },
});
