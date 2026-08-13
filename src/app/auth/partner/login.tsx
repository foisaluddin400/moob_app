import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomInput from '@/ui/CustomInput';
// Adjust import path

export default function PartnerLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepTrusted, setKeepTrusted] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../../../assets/images/app_logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to your{'\n'}workspace</Text>
      <Text style={styles.subtitle}>
        Sign in to continue your protected{'\n'}casework.
      </Text>

      {/* Reusable Input Component Usage */}
      <CustomInput
        label="Professional email"
        iconName="mail"
        placeholder="you@company.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <CustomInput
        label="Password"
        iconName="lock"
        isPassword
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />

      {/* Checkbox & Forgot Password */}
      <View style={styles.row}>
        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setKeepTrusted(!keepTrusted)}
        >
          <View style={[styles.checkbox, keepTrusted && styles.checked]}>
            {keepTrusted && <Feather name="check" size={12} color="#00B2B7" />}
          </View>
          <Text style={styles.checkboxLabel}>Keep this device trusted</Text>
        </Pressable>

        <TouchableOpacity  onPress={() => router.push('/forgotPass')} style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/partner/(tabs)')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Link */}
      <TouchableOpacity
        style={styles.linkBtn}
        onPress={() => router.push('/auth/partner/register')}
      >
        <Text style={styles.linkText}>
          New to WebImove?{' '}
          <Text style={styles.createProfileText}>Create your profile</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
  logo: {
    width: 170,
    height: 45,
    marginBottom: 28,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#00B2B7',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 22,
    marginBottom: 28,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#00B2B7',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#ffffff',
  },
  checked: {
    backgroundColor: '#ffffff',
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#64748b',
  },
  forgotBtn: {
    paddingVertical: 2,
  },
  forgotText: {
    color: '#00B2B7',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 17,
  },
  linkBtn: {
    marginTop: 24,
    alignItems: 'center',
  },
  linkText: {
    color: '#64748b',
    fontSize: 14,
  },
  createProfileText: {
    color: '#00B2B7',
    fontWeight: '500',
  },
});