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
import CustomDatePicker from '@/ui/CustomDatePicker';
import CustomSelect from '@/ui/CustomSelect';

// Import Custom Controls

// ==========================================
// 1. STEP INDICATOR COMPONENT
// ==========================================
function StepProgressBar({ currentStep }: { currentStep: number }) {
  const stepTitles = [
    'Step 1 of 6 - Personal',
    'Step 2 of 6 - Personal',
    'Step 3 of 6 - Verification',
    'Step 4 of 6 - Create Password',
    'Step 5 of 6 - Plan',
    'Step 6 of 6 - Payment',
  ];

  return (
    <View style={styles.progressSection}>
      <View style={styles.progressTrack}>
        {[1, 2, 3, 4, 5, 6].map((step) => (
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
// 2. STEP 1: PERSONAL DETAILS
// ==========================================
function StepPersonal({ onNext, onLoginPress }: { onNext: () => void; onLoginPress: () => void }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  return (
    <View>
      <Text style={styles.title}>Tell us about yourself</Text>
      <Text style={styles.subtitle}>
        Your contact details stay private and are verified before access is enabled.
      </Text>

      {/* Profile Photo Option */}
      <TouchableOpacity style={styles.uploadPhotoBox} activeOpacity={0.7}>
        <Feather name="camera" size={20} color="#00C7CC" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.uploadPhotoTitle}>Add profile photo</Text>
          <Text style={styles.uploadPhotoSub}>Optional · JPG or PNG</Text>
        </View>
      </TouchableOpacity>

      {/* Full Name */}
      <CustomInput
        label="Full name"
        placeholder="e.g. Sarah Jenkins"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Professional Email */}
      <CustomInput
        label="Professional email"
        placeholder="you@company.com"
        iconName="mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Mobile Number */}
      <CustomInput
        label="Mobile number"
        placeholder="+1 555 014 204"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Date of Birth */}
      <CustomDatePicker
        label="Date of birth (optional)"
        placeholder="mm/dd/yyyy"
        value={dob}
        onChangeText={setDob}
      />

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLink} onPress={onLoginPress}>
        <Text style={styles.loginLinkText}>
          Already have an account? <Text style={styles.loginLinkBold}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 3. STEP 2: PROFESSIONAL CREDENTIALS
// ==========================================
function StepCredentials({ onNext }: { onNext: () => void }) {
  const [orgName, setOrgName] = useState('');
  const [businessType] = useState('Immigration Consultancy');
  const [country, setCountry] = useState('');

  const countryOptions = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Bangladesh',
  ];

  const [officeAddress, setOfficeAddress] = useState('');

  return (
    <View>
      <Text style={styles.title}>Your professional credentials</Text>
      <Text style={styles.subtitle}>Help us confirm how you contribute to the firm.</Text>

      {/* Organization Name */}
      <CustomInput
        label="Organization name"
        placeholder="e.g. WIM-10482"
        value={orgName}
        onChangeText={setOrgName}
      />

      {/* Business Type (Read Only) */}
      <CustomInput
        label="Business type"
        value={businessType}
        editable={false}
        iconName="lock"
      />

      {/* Country Selector */}
      <CustomSelect
        label="Country"
        placeholder="Select Country"
        options={countryOptions}
        selectedValue={country}
        onSelect={setCountry}
      />

      {/* Office Address */}
      <CustomInput
        label="Office address"
        placeholder="City, country"
        value={officeAddress}
        onChangeText={setOfficeAddress}
      />

      <View style={styles.infoNoticeCard}>
        <Feather name="shield" size={16} color="#00C7CC" style={{ marginTop: 2 }} />
        <Text style={styles.infoNoticeText}>
          You become the owner of this organization. Partners you invite and clients who choose you work only inside this workspace.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 4. STEP 3: OTP VERIFICATION
// ==========================================
function StepVerification({ onNext }: { onNext: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View>
      <Text style={styles.title}>Check your inbox</Text>
      <Text style={styles.subtitle}>
        Enter the six-digit code sent to{'\n'}
        <Text style={{ fontWeight: '500', color: '#0f172a' }}>2521113037@student.presidency.edu.bd</Text>
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

      <TouchableOpacity style={{ alignSelf: 'center', marginVertical: 14 }}>
        <Text style={styles.resendText}>
          Resend code in <Text style={{ fontWeight: '600', color: '#0f172a' }}>0:33</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.infoNoticeCard}>
        <Feather name="check-circle" size={16} color="#00C7CC" style={{ marginTop: 2 }} />
        <Text style={styles.infoNoticeText}>
          Codes expire after 10 minutes to protect your account.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Verify and submit profile</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 5. STEP 4: CREATE PASSWORD
// ==========================================
function StepCreatePassword({ onNext }: { onNext: () => void }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View>
      <Text style={styles.title}>Protect your workspace</Text>
      <Text style={styles.subtitle}>Create credentials designed for sensitive casework.</Text>

      {/* Password */}
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

      {/* Confirm Password */}
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
// 6. STEP 5: PLAN SELECTION
// ==========================================
function StepPlanSelection({ onNext }: { onNext: () => void }) {
  const [selectedPlan, setSelectedPlan] = useState('Professional');

  return (
    <View>
      <Text style={styles.title}>Activate Organization</Text>
      <Text style={styles.subtitle}>
        An active subscription unlocks your workspace, partner seats and client requests.
      </Text>

      {/* Starter Plan */}
      <TouchableOpacity
        style={[styles.planCard, selectedPlan === 'Starter' && styles.selectedPlanCard]}
        onPress={() => setSelectedPlan('Starter')}
        activeOpacity={0.9}
      >
        <View style={styles.planHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Feather name="credit-card" size={18} color="#00C7CC" />
            <Text style={styles.planTitle}>Starter</Text>
          </View>
          <Text style={styles.planPrice}>$49<Text style={styles.planUnit}>/month</Text></Text>
        </View>
        <Text style={styles.planSub}>For solo consultants building their practice</Text>
        {['1 organization workspace', '2 partner seats', 'Up to 25 active clients', 'Document requests & review', 'Email support'].map((item, i) => (
          <View key={i} style={styles.featureRow}>
            <Feather name="check" size={14} color="#00C7CC" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </TouchableOpacity>

      {/* Professional Plan */}
      <TouchableOpacity
        style={[styles.planCard, selectedPlan === 'Professional' && styles.selectedPlanCard]}
        onPress={() => setSelectedPlan('Professional')}
        activeOpacity={0.9}
      >
        <View style={styles.planHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Feather name="credit-card" size={18} color="#00C7CC" />
            <Text style={styles.planTitle}>Professional</Text>
            <View style={styles.popularBadge}>
              <Text style={styles.popularBadgeText}>Popular</Text>
            </View>
          </View>
          <Text style={styles.planPrice}>$129<Text style={styles.planUnit}>/month</Text></Text>
        </View>
        <Text style={styles.planSub}>For growing firms with a partner network</Text>
        {['Everything in Starter', '10 partner seats', 'Up to 150 active clients', 'AI document analysis', 'Case templates & automation', 'Priority support'].map((item, i) => (
          <View key={i} style={styles.featureRow}>
            <Feather name="check" size={14} color="#00C7CC" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </TouchableOpacity>

      {/* Enterprise Plan */}
      <TouchableOpacity
        style={[styles.planCard, selectedPlan === 'Enterprise' && styles.selectedPlanCard]}
        onPress={() => setSelectedPlan('Enterprise')}
        activeOpacity={0.9}
      >
        <View style={styles.planHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Feather name="credit-card" size={18} color="#00C7CC" />
            <Text style={styles.planTitle}>Enterprise</Text>
          </View>
          <Text style={styles.planPrice}>$349<Text style={styles.planUnit}>/month</Text></Text>
        </View>
        <Text style={styles.planSub}>For established firms operating at scale</Text>
        {['Everything in Professional', '50 partner seats', 'Unlimited active clients', 'Advanced compliance & audit logs', 'Custom onboarding & migration', 'Dedicated success manager'].map((item, i) => (
          <View key={i} style={styles.featureRow}>
            <Feather name="check" size={14} color="#00C7CC" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </TouchableOpacity>

      <View style={styles.infoNoticeCard}>
        <Feather name="lock" size={16} color="#00C7CC" style={{ marginTop: 2 }} />
        <Text style={styles.infoNoticeText}>
          Cancel or change your plan any time. Your organization stays inactive until the first payment is completed.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue to payment</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 7. STEP 6: PAYMENT
// ==========================================
function StepPayment({ onComplete }: { onComplete: () => void }) {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <View>
      <Text style={styles.title}>Confirm your subscription</Text>
      <Text style={styles.subtitle}>Completing payment activates Organization immediately.</Text>

      {/* Order Summary */}
      <View style={styles.summaryBox}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View>
            <Text style={styles.summaryTitle}>Professional</Text>
            <Text style={styles.summarySub}>For growing firms with a partner network</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.summaryPrice}>$129</Text>
            <Text style={styles.summaryUnit}>/month</Text>
          </View>
        </View>
        <View style={styles.summaryDivider} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.summaryLabel}>Billed today</Text>
          <Text style={styles.summaryValue}>$129.00 USD</Text>
        </View>
      </View>

      {/* Name on Card */}
      <CustomInput
        label="Name on card"
        placeholder="e.g. Sarah Jenkins"
        value={cardName}
        onChangeText={setCardName}
      />

      {/* Card Number */}
      <CustomInput
        label="Card number"
        placeholder="1234 5678 9101 1121"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      {/* Expiry & CVC */}
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <View style={{ flex: 1 }}>
          <CustomDatePicker
            label="Expiry Date"
            placeholder="mm/dd/yyyy"
            value={expiry}
            onChangeText={setExpiry}
          />
        </View>

        <View style={{ flex: 1 }}>
          <CustomInput
            label="CVC"
            placeholder="123"
            keyboardType="numeric"
            secureTextEntry
            value={cvc}
            onChangeText={setCvc}
          />
        </View>
      </View>

      <View style={styles.infoNoticeCard}>
        <Feather name="shield" size={16} color="#00C7CC" style={{ marginTop: 2 }} />
        <Text style={styles.infoNoticeText}>
          Payments are encrypted end-to-end. Card details are never stored on your device.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={onComplete}>
        <Text style={styles.primaryBtnText}>Continue to payment</Text>
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

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.replace('/consultant/(tabs)');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
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
          <TouchableOpacity style={styles.backCircle} onPress={handleBack}>
            <Feather name="arrow-left" size={20} color="#00C7CC" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {currentStep === 5 ? 'Choose your plan' : currentStep === 6 ? 'Payment' : 'Create profile'}
          </Text>
          <View style={{ width: 36 }} />
        </View>

        {/* Dynamic Progress Bar */}
        <StepProgressBar currentStep={currentStep} />

        {/* Dynamic Form Step Component Render */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {currentStep === 1 && <StepPersonal onNext={handleNext} onLoginPress={() => router.back()} />}
          {currentStep === 2 && <StepCredentials onNext={handleNext} />}
          {currentStep === 3 && <StepVerification onNext={handleNext} />}
          {currentStep === 4 && <StepCreatePassword onNext={handleNext} />}
          {currentStep === 5 && <StepPlanSelection onNext={handleNext} />}
          {currentStep === 6 && <StepPayment onComplete={handleNext} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFD',
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
    backgroundColor: '#e6f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },

  /* Progress Track */
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

  /* Scrollable Content Container */
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#00B2B7',
    textAlign: 'center',
    marginBottom: 6,
    fontFamily: 'Montserrat_500Medium',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Upload Photo Card */
  uploadPhotoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#9FFDFF',
    borderRadius: 4,
    padding: 14,
    marginBottom: 20,
  },
  uploadPhotoTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  uploadPhotoSub: {
    fontSize: 11,
    color: '#00B2B7',
    opacity: 0.8,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Common Input Controls */
  inputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    marginBottom: 6,
    fontFamily: 'Montserrat_500Medium',
  },

  /* Notice Callouts */
  infoNoticeCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#e6f9fa',
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

  /* OTP Custom Elements */
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

  /* Subscription Plan Cards */
  planCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    padding: 16,
    marginBottom: 14,
  },
  selectedPlanCard: {
    borderColor: '#00B2B7',
    borderWidth: 1.5,
    backgroundColor: '#fafefe',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  planPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00B2B7',
    fontFamily: 'Montserrat_700Bold',
  },
  planUnit: {
    fontSize: 11,
    fontWeight: '400',
    color: '#94a3b8',
  },
  popularBadge: {
    backgroundColor: '#00C7CC',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  popularBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  planSub: {
    fontSize: 11,
    color: '#64748b',
    marginVertical: 10,
    fontFamily: 'Montserrat_400Regular',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  featureText: {
    fontSize: 12,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Order Summary Card */
  summaryBox: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 4,
    padding: 16,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  summarySub: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 2,
    fontFamily: 'Montserrat_400Regular',
  },
  summaryPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00B2B7',
    fontFamily: 'Montserrat_700Bold',
  },
  summaryUnit: {
    fontSize: 11,
    color: '#94a3b8',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginVertical: 12,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  summaryValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },

  /* Buttons & Action Links */
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
    color: '#00C7CC',
    fontWeight: '600',
  },
});