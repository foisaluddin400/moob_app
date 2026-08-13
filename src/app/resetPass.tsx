import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomInput from '@/ui/CustomInput';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    if (!email.trim()) return;

    // Navigate to verification screen with email parameter
    router.push({
      pathname: '/verify-otp' as any,
      params: { email },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backCircle}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color="#00B2B7" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reset password</Text>
          <View style={{ width: 36 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Reset your password</Text>
          <Text style={styles.subtitle}>
            Enter the email connected to your account. We’ll send a one-time verification code.
          </Text>

          {/* Email Input */}
          <View style={styles.inputSpacing}>
            <CustomInput
              label="Professional email"
              placeholder="you@company.com"
              iconName="mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Security Banner */}
          <View style={styles.infoNoticeCard}>
            <Feather name="shield" size={16} color="#00B2B7" style={{ marginTop: 2 }} />
            <Text style={styles.infoNoticeText}>
              Recovery activity is secured and recorded for your protection.
            </Text>
          </View>

          {/* Send Code Button */}
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleSendCode}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryBtnText}>Send verification code</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#00B2B7',
    marginBottom: 8,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 24,
    fontFamily: 'Montserrat_400Regular',
  },
  inputSpacing: {
    marginBottom: 16,
  },
  infoNoticeCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#b2f5f8',
    borderRadius: 4,
    padding: 12,
    marginTop: 8,
    marginBottom: 24,
  },
  infoNoticeText: {
    flex: 1,
    fontSize: 11,
    color: '#00B2B7',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  primaryBtn: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});