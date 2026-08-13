import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function VerifyOtpScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const userEmail = (params.email as string) || 'hasnainhomaeid@gmail.com';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(33);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const otpInputRefs = useRef<Array<TextInput | null>>([]);

  // Timer interval effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // Handle individual digit input and auto-focus next
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace navigation
  const handleOtpKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    // Navigate to next screen (e.g., Set New Password or Success)
    router.push('/new-password' as any);
  };

  const handleResend = () => {
    setTimer(33);
    setIsTimerActive(true);
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
          <Text style={styles.headerTitle}>Verification</Text>
          <View style={{ width: 36 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Check your inbox</Text>
          <Text style={styles.subtitle}>
            Enter the six-digit code sent to{'\n'}
            <Text style={styles.emailHighlight}>{userEmail}</Text>
          </Text>

          <Text style={styles.inputLabel}>Enter 6 Digit Code</Text>

          {/* OTP Box Inputs */}
          <View style={styles.otpRow}>
            {otp.map((digit, idx) => (
              <TextInput
                key={idx}
              ref={(el) => {
  otpInputRefs.current[idx] = el;
}}
                style={[
                  styles.otpBox,
                  digit ? styles.otpBoxActive : null,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(v) => handleOtpChange(v, idx)}
                onKeyPress={({ nativeEvent }) =>
                  handleOtpKeyPress(nativeEvent.key, idx)
                }
              />
            ))}
          </View>

          {/* Resend / Countdown */}
          <View style={styles.resendContainer}>
            {timer > 0 ? (
              <Text style={styles.resendText}>
                Resend code in{' '}
                <Text style={{ fontWeight: '600', color: '#0f172a' }}>
                  0:{timer < 10 ? `0${timer}` : timer}
                </Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendLinkText}>Resend code</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Expiry Banner */}
          <View style={styles.infoNoticeCard}>
            <Feather name="shield" size={16} color="#00B2B7" style={{ marginTop: 2 }} />
            <Text style={styles.infoNoticeText}>
              Codes expire after 10 minutes to protect your account.
            </Text>
          </View>

          {/* Action Button */}
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleVerify}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryBtnText}>Verify email</Text>
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
  emailHighlight: {
    fontWeight: '600',
    color: '#334155',
    fontFamily: 'Montserrat_600SemiBold',
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    marginBottom: 10,
    fontFamily: 'Montserrat_500Medium',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  otpBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    backgroundColor: '#f8fafc',
    fontFamily: 'Montserrat_600SemiBold',
  },
  otpBoxActive: {
    borderColor: '#00B2B7',
    backgroundColor: '#ffffff',
  },
  resendContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  resendText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  resendLinkText: {
    fontSize: 12,
    color: '#00B2B7',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
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