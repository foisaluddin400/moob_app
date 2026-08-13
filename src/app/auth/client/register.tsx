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
  Switch,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import CustomInput from '@/ui/CustomInput';

// ==========================================
// 1. STEP PROGRESS BAR (7 STEPS)
// ==========================================
function StepProgressBar({ currentStep }: { currentStep: number }) {
  const stepTitles = [
    'Step 1 of 7 · Account',
    'Step 2 of 7 · Verification',
    'Step 3 of 7 · Create Password',
    'Step 4 of 7 · Immigration',
    'Step 5 of 7 · Consultant',
    'Step 6 of 7 · Confirm',
    'Step 7 of 7 · Agreements',
  ];

  return (
    <View style={styles.progressSection}>
      <View style={styles.progressTrack}>
        {[1, 2, 3, 4, 5, 6, 7].map((step) => (
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
// 2. STEP 1: ACCOUNT DETAILS
// ==========================================
function StepAccount({ onNext, onLogin }: { onNext: () => void; onLogin: () => void }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <View>
      <Text style={styles.title}>Create account</Text>
      <Text style={styles.subtitle}>
        Create an account to start your immigration journey.
      </Text>

      {/* Profile Photo Upload Box */}
      <TouchableOpacity style={styles.uploadPhotoBox}>
        <Feather name="camera" size={20} color="#00B2B7" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.uploadTitle}>Add profile photo</Text>
          <Text style={styles.uploadSubtitle}>Optional · JPG or PNG</Text>
        </View>
      </TouchableOpacity>

      <CustomInput label="Full name" placeholder="e.g. Sarah Jenkins" iconName="user" />
      <CustomInput label="Email address" placeholder="you@company.com" iconName="mail" keyboardType="email-address" />
      <CustomInput label="Mobile number" placeholder="+1 555 014 204" iconName="phone" keyboardType="phone-pad" />
      <CustomInput label="Date of birth (optional)" placeholder="mm/dd/yyyy" iconName="calendar" />

      {/* Terms Checkbox */}
      <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgreed(!agreed)}>
        <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
          {agreed && <Feather name="check" size={12} color="#fff" />}
        </View>
        <Text style={styles.checkboxLabel}>
          I agree to the WebImove Terms of Service and Privacy Policy, including GDPR data processing.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryBtn} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLink} onPress={onLogin}>
        <Text style={styles.loginLinkText}>
          Already have an account? <Text style={styles.loginLinkBold}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 3. STEP 2: VERIFICATION (OTP)
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
      <Text style={styles.title}>Verify your email</Text>
      <Text style={styles.subtitle}>
        Enter the six-digit code sent to{'\n'}
        <Text style={{ color: '#334155', fontWeight: '500' }}>hasnainhomaeid@gmail.com</Text>.
      </Text>

      <Text style={styles.inputLabel}>Enter 6 Digit Code</Text>
      <View style={styles.otpRow}>
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(v) => handleOtpChange(v, idx)}
          />
        ))}
      </View>

      <TouchableOpacity style={{ alignSelf: 'flex-start', marginVertical: 14 }}>
        <Text style={styles.resendText}>
          Didn't receive it? <Text style={{ color: '#00B2B7', fontWeight: '600' }}>Resend code</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 30 }]} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Verify and activate</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 4. STEP 3: CREATE PASSWORD
// ==========================================
function StepPassword({ onNext }: { onNext: () => void }) {
  return (
    <View>
      <Text style={styles.title}>Secure your account</Text>
      <Text style={styles.subtitle}>
        A few final details and you’ll be ready for verification.
      </Text>

      <CustomInput label="New password" placeholder="Create a new password" isPassword iconName="lock" />

      <Text style={[styles.inputLabel, { fontSize: 11, color: '#94a3b8' }]}>Password strength</Text>
      <View style={styles.strengthBarRow}>
        <View style={styles.strengthBar} />
        <View style={styles.strengthBar} />
        <View style={styles.strengthBar} />
        <View style={styles.strengthBar} />
      </View>
      <Text style={styles.hintText}>Use 8+ characters with a number and symbol.</Text>

      <CustomInput label="Confirm password" placeholder="Re-enter your password" isPassword iconName="lock" />

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 20 }]} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 5. STEP 4: IMMIGRATION PROFILE
// ==========================================
function StepImmigration({ onNext }: { onNext: () => void }) {
  return (
    <View>
      <Text style={styles.title}>Your immigration profile</Text>
      <Text style={styles.subtitle}>
        These details help your consultant advise you accurately.
      </Text>

      <CustomInput label="Passport number" placeholder="e.g. Certified legal translations" iconName="shield" />
      <CustomInput label="Nationality" placeholder="Select Country" iconName="globe" />
      <CustomInput label="Destination country" placeholder="Where you want to move" iconName="map-pin" />
      <CustomInput label="Preferred immigration type" placeholder="Select type" iconName="grid" />

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 30 }]} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 6. STEP 5: CONSULTANT SELECTION
// ==========================================
function StepConsultant({ onNext }: { onNext: () => void }) {
  const [selectedId, setSelectedId] = useState(1);

  const consultants = [
    { id: 1, name: 'Northgate Immigration Group', agent: 'Daniel Reyes', country: 'United Kingdom', tags: ['Student Visa', 'Work Visa', 'Citizenship'], code: 'Code NLG-LDN' },
    { id: 2, name: 'Northgate Immigration Group', agent: 'Daniel Reyes', country: 'United Kingdom', tags: ['Student Visa', 'Work Visa', 'Citizenship'], code: 'Code NLG-LDN' },
    { id: 3, name: 'Northgate Immigration Group', agent: 'Daniel Reyes', country: 'United Kingdom', tags: ['Student Visa', 'Work Visa', 'Citizenship'], code: 'Code NLG-LDN' },
  ];

  return (
    <View>
      <Text style={styles.title}>Choose who will help you</Text>
      <Text style={styles.subtitle}>
        Pick the consultant or organization you want to work with.
      </Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather name="search" size={16} color="#94a3b8" />
        <TextInput style={styles.searchInput} placeholder="Search clients" placeholderTextColor="#94a3b8" />
      </View>

      {/* Consultant List */}
      {consultants.map((item) => {
        const isSelected = selectedId === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.consultantCard, isSelected && styles.consultantCardSelected]}
            onPress={() => setSelectedId(item.id)}
          >
            <View style={styles.consultantHeader}>
              <View style={styles.cardBuildingIcon}>
                <Feather name="briefcase" size={16} color="#64748b" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.consultantName}>{item.name}</Text>
                <Text style={styles.consultantSub}>{item.agent} · {item.country}</Text>
              </View>
              <Ionicons
                name={isSelected ? "checkmark-circle" : "ellipse-outline"}
                size={20}
                color={isSelected ? "#00B2B7" : "#cbd5e1"}
              />
            </View>

            <View style={styles.tagRow}>
              {item.tags.map((tag, idx) => (
                <View key={idx} style={styles.tagChip}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.consultantCode}>{item.code}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 20 }]} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 7. STEP 6: CONFIRM & SUBMIT
// ==========================================
function StepConfirm({ onNext }: { onNext: () => void }) {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  return (
    <View>
      <Text style={styles.title}>Confirm and submit</Text>
      <Text style={styles.subtitle}>
        We’ll send your request straight to them for review.
      </Text>

      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.orgHeaderRow}>
          <View style={styles.orgIconBox}>
            <Feather name="briefcase" size={18} color="#00B2B7" />
          </View>
          <View>
            <Text style={styles.orgTitle}>Atlas Mobility Advisors</Text>
            <Text style={styles.orgSubtitle}>Priya Raman · Portugal</Text>
          </View>
        </View>

        <View style={styles.cardDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Immigration type</Text>
          <Text style={styles.infoValue}>Student Visa</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nationality</Text>
          <Text style={styles.infoValue}>Spanish</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Current country</Text>
          <Text style={styles.infoValue}>USA</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Passport</Text>
          <Text style={styles.infoValue}>569+569+8659+96</Text>
        </View>
      </View>

      {/* Notice Card */}
      <View style={styles.infoNoticeCard}>
        <Feather name="shield" size={16} color="#00B2B7" style={{ marginTop: 2 }} />
        <Text style={styles.infoNoticeText}>
          Submitting creates your account, links you to Atlas Mobility Advisors, and sends a new immigration request for review.
        </Text>
      </View>

      {/* Checkboxes */}
      <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgree1(!agree1)}>
        <View style={[styles.checkbox, agree1 && styles.checkboxChecked]}>
          {agree1 && <Feather name="check" size={12} color="#fff" />}
        </View>
        <Text style={styles.checkboxLabel}>
          I consent to WebImove and Atlas Mobility Advisors processing my personal data under GDPR for immigration advice.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.checkboxRow} onPress={() => setAgree2(!agree2)}>
        <View style={[styles.checkbox, agree2 && styles.checkboxChecked]}>
          {agree2 && <Feather name="check" size={12} color="#fff" />}
        </View>
        <Text style={styles.checkboxLabel}>
          I accept the WebImove Terms & Conditions.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 24 }]} onPress={onNext}>
        <Text style={styles.primaryBtnText}>Submit registration</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 8. STEP 7: AGREEMENTS & CONSENTS
// ==========================================
function StepAgreements({ onFinish }: { onFinish: () => void }) {
  const [agreements, setAgreements] = useState([
    { id: 1, name: 'Terms & Conditions', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'file-text', active: true },
    { id: 2, name: 'Privacy Policy', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'shield', active: true },
    { id: 3, name: 'GDPR Data Processing', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'lock', active: true },
    { id: 4, name: 'Immigration Case', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'briefcase', active: false },
    { id: 5, name: 'Sensitive Data Processing', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'cpu', active: false },
    { id: 6, name: 'WhatsApp Notifications', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'message-circle', active: false },
    { id: 7, name: 'Email Notifications', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'mail', active: false },
    { id: 8, name: 'AI OCR Processing', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'maximize', active: false },
    { id: 9, name: 'AI Legal Assistant', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'box', active: false },
    { id: 10, name: 'Partner Data Sharing', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'share-2', active: false },
    { id: 11, name: 'Marketing Messages', version: 'Version v3.2 · Updated Oct 1, 2026', icon: 'volume-2', active: false },
  ]);

  const toggleSwitch = (id: number) => {
    setAgreements((prev) =>
      prev.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    );
  };

  return (
    <View>
      <Text style={styles.title}>Your consent, your control</Text>
      <Text style={styles.subtitle}>
        Before we open your immigration case, review and accept the agreements below. Required agreements are necessary to continue; optional ones can be changed anytime in Settings.
      </Text>

      <Text style={styles.sectionHeaderTitle}>Required</Text>

      <View style={styles.agreementsList}>
        {agreements.map((item) => (
          <View key={item.id} style={styles.agreementCard}>
            <View style={styles.agreementIconBox}>
              <Feather name={item.icon as any} size={16} color="#64748b" />
            </View>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.agreementName}>{item.name}</Text>
              <Text style={styles.agreementVersion}>{item.version}</Text>
            </View>
            <Switch
              value={item.active}
              onValueChange={() => toggleSwitch(item.id)}
              trackColor={{ false: '#e2e8f0', true: '#00B2B7' }}
              thumbColor="#ffffff"
            />
          </View>
        ))}
      </View>

      <TouchableOpacity style={[styles.primaryBtn, { marginTop: 24 }]} onPress={onFinish}>
        <Text style={styles.primaryBtnText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// 9. FINAL SUCCESS SCREEN
// ==========================================
function StepSuccess({ onDashboard }: { onDashboard: () => void }) {
  return (
    <View style={{ alignItems: 'center', paddingTop: 20 }}>
      <View style={styles.successIconCircle}>
        <Feather name="check" size={28} color="#00B2B7" />
      </View>

      <Text style={styles.successBadgeText}>Request sent</Text>
      <Text style={[styles.title, { textAlign: 'center', marginTop: 8 }]}>
        Your request is with your consultant
      </Text>
      <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 8 }]}>
        Your account is created and linked to Atlas Mobility Advisors. Priya Raman has received your immigration request.
      </Text>

      <View style={[styles.infoNoticeCard, { marginTop: 16, alignSelf: 'stretch' }]}>
        
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#0f172a', fontFamily: 'Montserrat_600SemiBold' }}>
            Waiting for review · REQ-699
          </Text>
          <Text style={styles.infoNoticeText}>
            Consultant review → document requests → case created
          </Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.primaryBtn, { width: '100%', marginTop: 32 }]} onPress={onDashboard}>
        <Text style={styles.primaryBtnText}>Go to my dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

// ==========================================
// MAIN COMPONENT: CLIENT REGISTER
// ==========================================
export default function ClientRegister() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < 7) {
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
              <Text style={styles.headerTitle}>
                {currentStep === 6 ? 'Accept invitation' : currentStep === 7 ? 'Create profile' : 'Create account'}
              </Text>
              <View style={{ width: 36 }} />
            </>
          ) : (
            <View style={styles.brandHeader}>
              <Text style={styles.brandLogoText}>WEB IMOVE</Text>
            </View>
          )}
        </View>

        {/* Display Step Bar for Steps 1-7 */}
        {!isSuccess && <StepProgressBar currentStep={currentStep} />}

        {/* Scrollable Form Body */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {!isSuccess ? (
            <>
              {currentStep === 1 && <StepAccount onNext={handleNext} onLogin={() => router.back()} />}
              {currentStep === 2 && <StepVerification onNext={handleNext} />}
              {currentStep === 3 && <StepPassword onNext={handleNext} />}
              {currentStep === 4 && <StepImmigration onNext={handleNext} />}
              {currentStep === 5 && <StepConsultant onNext={handleNext} />}
              {currentStep === 6 && <StepConfirm onNext={handleNext} />}
              {currentStep === 7 && <StepAgreements onFinish={handleNext} />}
            </>
          ) : (
            <StepSuccess onDashboard={() => router.replace('/client/(tabs)')} />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ==========================================
// STYLES (MONTSERRAT TYPOGRAPHY ONLY)
// ==========================================
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
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  brandHeader: {
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },
  brandLogoText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -0.5,
    fontFamily: 'Montserrat_700Bold',
  },

  /* Progress Tracker Bar */
  progressSection: {
    paddingHorizontal: 20,
    marginTop: 4,
    marginBottom: 16,
  },
  progressTrack: {
    flexDirection: 'row',
    gap: 4,
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

  /* Form Scroll Body */
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

  /* Step 1 Elements */
  uploadPhotoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#b2f5f8',
    borderRadius: 6,
    padding: 14,
    marginBottom: 16,
  },
  uploadTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  uploadSubtitle: {
    fontSize: 11,
    color: '#00B2B7',
    opacity: 0.8,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Step 2 Elements (OTP) */
  inputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
    marginBottom: 8,
    fontFamily: 'Montserrat_500Medium',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  otpInput: {
    width: 44,
    height: 48,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  resendText: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Password Strength Indicators */
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

  /* Step 5 Elements (Consultant Search) */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
    color: '#0f172a',
    fontFamily: 'Montserrat_400Regular',
  },
  consultantCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 6,
    padding: 14,
    marginBottom: 12,
  },
  consultantCardSelected: {
    borderColor: '#00B2B7',
    backgroundColor: '#EAFDFD',
  },
  consultantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardBuildingIcon: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  consultantName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  consultantSub: {
    fontSize: 11,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  tagRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 10,
  },
  tagChip: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 10,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  consultantCode: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 8,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Step 6 Elements (Confirm Details) */
  summaryCard: {
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

  /* Step 7 Elements (Agreements) */
  sectionHeaderTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00B2B7',
    marginBottom: 12,
    fontFamily: 'Montserrat_600SemiBold',
  },
  agreementsList: {
    gap: 8,
  },
  agreementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 6,
    padding: 12,
  },
  agreementIconBox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  agreementName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  agreementVersion: {
    fontSize: 10,
    color: '#94a3b8',
    marginTop: 2,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Info / Alert Notice Cards */
  infoNoticeCard: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#b2f5f8',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  infoNoticeText: {
    flex: 1,
    fontSize: 11,
    color: '#00B2B7',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Checkboxes */
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#00B2B7',
    borderColor: '#00B2B7',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 11,
    color: '#64748b',
    lineHeight: 16,
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

  /* Action Buttons & Links */
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