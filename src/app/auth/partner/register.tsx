import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomInput from '@/ui/CustomInput';

// ==========================================
// 1. STEP INDICATOR COMPONENT (3 STEPS)
// ==========================================
function StepProgressBar({ currentStep }: { currentStep: number }) {
  const stepTitles = [
    'Step 1 of 3 · Invitation',
    'Step 2 of 3 · Password',
    'Step 3 of 3 · Verify',
  ];

  return (
    <View style={styles.progressSection}>
      <View style={styles.progressTrack}>
        {[1, 2, 3].map((step) => (
          <View
            key={step}
            style={[
              styles.progressSegment,
              step <= currentStep && styles.activeSegment,
            ]}
          />
        ))}
      </View>
      <Text style={styles.stepIndicatorText}>{stepTitles[currentStep - 1]}</Text>
    </View>
  );
}

// ==========================================
// 2. STEP 1: INVITATION DETAILS
// ==========================================
function StepInvitation({ onNext, onSignIntoAccount }: { onNext: () => void; onSignIntoAccount: () => void }) {
  return (
    <View>
      <Text style={styles.title}>You’ve been invited</Text>
      <Text style={styles.subtitle}>
        Marta invited you to join their workspace.
      </Text>

      {/* Invitation Info Card */}
      <View style={styles.invitationCard}>
        <View style={styles.orgHeaderRow}>
          <View style={styles.orgIconBox}>
            <Feather name="briefcase" size={18} color="#00B2B7" />
          </View>
          <View>
            <Text style={styles.orgTitle}>Immigration Organization</Text>
            <Text style={styles.orgSubtitle}>United States</Text>
          </View>
        </View>

        <View style={styles.cardDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Invited as</Text>
          <Text style={styles.infoValue}>Hasnain</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>hasnainhomaeid@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Role</Text>
          <Text style={styles.infoValue}>Legal Assistant</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Invited on</Text>
          <Text style={styles.infoValue}>Jul 29, 2026</Text>
        </View>
      </View>

      {/* Access Callout */}
      <View style={styles.infoNoticeCard}>
        <Feather name="user" size={16} color="#00B2B7" style={{ marginTop: 2 }} />
        <Text style={styles.infoNoticeText}>
          Your account belongs to this organization only. You'll see the assignments shared with you inside their workspace.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Accept invitation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLink} onPress={onSignIntoAccount}>
        <Text style={styles.loginLinkText}>
          Already activated? <Text style={styles.loginLinkBold}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 3. STEP 2: CREATE PASSWORD
// ==========================================
function StepCreatePassword({ onNext }: { onNext: () => void }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View>
      <Text style={styles.title}>Create your password</Text>
      <Text style={styles.subtitle}>
        Choose credentials for your partner account.
      </Text>

      {/* Password Input */}
      <CustomInput
        label="New password"
        placeholder="Create a new password"
        isPassword={true}
        iconName="lock"
        value={password}
        onChangeText={setPassword}
      />

      {/* Password Strength Indicator */}
      <Text style={[styles.inputLabel, { fontSize: 11, color: '#94a3b8' }]}>Password strength</Text>
      <View style={styles.strengthBarRow}>
        <View style={styles.strengthBar} />
        <View style={styles.strengthBar} />
        <View style={styles.strengthBar} />
        <View style={styles.strengthBar} />
      </View>
      <Text style={styles.hintText}>Use 8+ characters with a number and symbol.</Text>

      {/* Confirm Password Input */}
      <CustomInput
        label="Confirm password"
        placeholder="Re-enter your password"
        isPassword={true}
        iconName="lock"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 4. STEP 3: VERIFY EMAIL (OTP)
// ==========================================
function StepVerifyEmail({ onVerify }: { onVerify: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View>
      <Text style={styles.title}>Verify your email</Text>
      <Text style={styles.subtitle}>
        Enter the six-digit code sent to{'\n'}
        <Text style={{ fontWeight: '500', color: '#334155' }}>hasnainhomaeid@gmail.com</Text>
      </Text>

      <Text style={[styles.inputLabel, { marginTop: 16 }]}>Enter 6 Digit Code</Text>
      <View style={styles.otpRow}>
        {otp.map((digit, idx) => (
          <CustomInput
            key={idx}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(v) => handleOtpChange(v, idx)}
          />
        ))}
      </View>

      <TouchableOpacity style={{ alignSelf: 'flex-start', marginVertical: 14 }}>
        <Text style={styles.resendText}>
          Didn't receive it? <Text style={{ fontWeight: '600', color: '#00B2B7' }}>Resend code</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 24 }]} onPress={onVerify}>
        <Text style={styles.primaryBtnText}>Verify and activate</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 5. SUCCESS SCREEN: WORKSPACE READY
// ==========================================
function StepSuccess({ onOpenDashboard }: { onOpenDashboard: () => void }) {
  return (
    <View style={{ alignItems: 'center', paddingTop: 20 }}>
      {/* Success Badge Icon */}
      <View style={styles.successIconCircle}>
        <Feather name="check" size={28} color="#00B2B7" />
      </View>

      <Text style={styles.successBadgeText}>Account activated</Text>
      <Text style={[styles.title, { textAlign: 'center', marginTop: 8 }]}>
        You’re part of the{'\n'}workspace
      </Text>
      <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 8, paddingHorizontal: 10 }]}>
        Your email is verified and your partner account is active. You can now see the assignments shared with you.
      </Text>

      {/* Access Information Box */}
      <View style={[styles.infoNoticeCard, { marginTop: 16, alignSelf: 'stretch' }]}>
        <Feather name="shield" size={16} color="#00B2B7" style={{ marginTop: 2 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#0f172a', marginBottom: 2 }}>
            Your access
          </Text>
          <Text style={styles.infoNoticeText}>
            You belong to one organization and only see work shared with you.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.primaryBtn, { width: '100%', marginTop: 32 }]} onPress={onOpenDashboard}>
        <Text style={styles.primaryBtnText}>Open dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// MAIN CONSULTANT REGISTER PARENT COMPONENT
// ==========================================
export default function ConsultantRegister() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    if (isSuccess) {
      setIsSuccess(false);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Navigation Header */}
        <View style={styles.header}>
          {!isSuccess ? (
            <>
              <TouchableOpacity style={styles.backCircle} onPress={handleBack}>
                <Feather name="arrow-left" size={20} color="#00B2B7" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Accept invitation</Text>
              <View style={{ width: 36 }} />
            </>
          ) : (
            <View style={styles.brandHeader}>
              <Text style={styles.brandLogoText}>WEB IMOVE</Text>
            </View>
          )}
        </View>

        {/* Display Step Progress Bar only during Steps 1 to 3 */}
        {!isSuccess && <StepProgressBar currentStep={currentStep} />}

        {/* Form View Body */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {!isSuccess ? (
            <>
              {currentStep === 1 && (
                <StepInvitation
                  onNext={handleNext}
                  onSignIntoAccount={() => router.back()}
                />
              )}
              {currentStep === 2 && <StepCreatePassword onNext={handleNext} />}
              {currentStep === 3 && <StepVerifyEmail onVerify={handleNext} />}
            </>
          ) : (
            <StepSuccess onOpenDashboard={() => router.replace('/partner/(tabs)')} />
          )}
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
    paddingBottom: 8,
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
  brandHeader: {
    paddingVertical: 10,
  },
  brandLogoText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -0.5,
    fontFamily: 'Montserrat_700Bold',
  },

  /* Progress Bar Track */
  progressSection: {
    paddingHorizontal: 20,
    marginTop: 4,
    marginBottom: 16,
  },
  progressTrack: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 8,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#e2e8f0',
  },
  activeSegment: {
    backgroundColor: '#00B2B7',
  },
  stepIndicatorText: {
    fontSize: 11,
    color: '#00B2B7',
    textAlign: 'right',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Scrollable Main Content Container */
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#00B2B7',
    marginBottom: 6,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 20,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Invitation Overview Card (Step 1) */
  invitationCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  orgHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  orgIconBox: {
    width: 36,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orgTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  orgSubtitle: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  infoLabel: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0f172a',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Custom Input Label */
  inputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    marginBottom: 6,
    fontFamily: 'Montserrat_500Medium',
  },

  /* Info/Notice Cards */
  infoNoticeCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#b2f5f8',
    borderRadius: 4,
    padding: 12,
    marginVertical: 16,
  },
  infoNoticeText: {
    flex: 1,
    fontSize: 11,
    color: '#00B2B7',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },

  /* OTP Elements */
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  otpBox: {
    width: 46,
    height: 48,
    textAlign: 'center',
  },
  resendText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Password Security Indicators */
  strengthBarRow: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 6,
  },
  strengthBar: {
    flex: 1,
    height: 3,
    backgroundColor: '#e2e8f0',
    borderRadius: 1.5,
  },
  hintText: {
    fontSize: 11,
    color: '#94a3b8',
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Success Screen Elements */
  successIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#b2f5f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  successBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#00B2B7',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Primary Button and Auth Links */
  primaryBtn: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  loginLink: {
    alignItems: 'center',
    marginTop: 18,
  },
  loginLinkText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  loginLinkBold: {
    color: '#00B2B7',
    fontWeight: '600',
  },
});