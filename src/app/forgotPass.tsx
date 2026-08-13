import React, { useState, useRef, useEffect } from "react";
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
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import CustomInput from "@/ui/CustomInput";

export default function ForgotPasswordScreen() {
  const router = useRouter();

  // Step state: 1 = Reset email input, 2 = OTP Verification, 3 = New Password
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form States
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Timer State for Step 2
  const [timer, setTimer] = useState(33);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // OTP Input Refs
  const otpInputRefs = useRef<Array<TextInput | null>>([]);

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

  // Back Button Navigation
  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    } else {
      router.back();
    }
  };

  // Step 1 Submit
  const handleSendCode = () => {
    if (email.trim().length > 0) {
      setStep(2);
      setTimer(33);
      setIsTimerActive(true);
    }
  };

  // Step 2 OTP Change
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Step 2 Submit
  const handleVerifyEmail = () => {
    setStep(3);
  };

  // Step 3 Submit
  const handleUpdatePassword = () => {
    // Action after password reset success
    router.replace("/auth/client/login" as any);
  };

  // Header Title Dynamic Generator
  const getHeaderTitle = () => {
    switch (step) {
      case 1:
        return "Reset password";
      case 2:
        return "Verification";
      case 3:
        return "New password";
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backCircle}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color="#00B2B7" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{getHeaderTitle()}</Text>
          <View style={{ width: 36 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* STEP 1: Enter Email */}
          {step === 1 && (
            <View>
              <Text style={styles.title}>Reset your password</Text>
              <Text style={styles.subtitle}>
                Enter the email connected to your account. We’ll send a one-time
                verification code.
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

              {/* Info Notice Banner */}
              <View style={styles.infoNoticeCard}>
                <Feather
                  name="shield"
                  size={16}
                  color="#00B2B7"
                  style={{ marginTop: 2 }}
                />
                <Text style={styles.infoNoticeText}>
                  Recovery activity is secured and recorded for your protection.
                </Text>
              </View>

              {/* Action Button */}
              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={handleSendCode}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryBtnText}>
                  Send verification code
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* STEP 2: OTP Verification */}
          {step === 2 && (
            <View>
              <Text style={styles.title}>Check your inbox</Text>
              <Text style={styles.subtitle}>
                Enter the six-digit code sent to{"\n"}
                <Text style={styles.emailHighlight}>
                  {email || "2521113037@student.presidency.edu.bd"}
                </Text>
              </Text>

              <Text style={styles.inputLabel}>Enter 6 Digit Code</Text>

              {/* OTP Row */}
              <View style={styles.otpRow}>
                {otp.map((digit, idx) => (
                  <TextInput
                    key={idx}
                    ref={(el) => {
                      otpInputRefs.current[idx] = el;
                    }}
                    style={[styles.otpBox, digit ? styles.otpBoxActive : null]}
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

              {/* Resend Code / Timer */}
              <View style={styles.resendContainer}>
                {timer > 0 ? (
                  <Text style={styles.resendText}>
                    Resend code in{" "}
                    <Text style={{ fontWeight: "600", color: "#0f172a" }}>
                      0:{timer < 10 ? `0${timer}` : timer}
                    </Text>
                  </Text>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setTimer(33);
                      setIsTimerActive(true);
                    }}
                  >
                    <Text style={styles.resendLinkText}>Resend code</Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* Expiry Banner */}
              <View style={styles.infoNoticeCard}>
                <Feather
                  name="shield"
                  size={16}
                  color="#00B2B7"
                  style={{ marginTop: 2 }}
                />
                <Text style={styles.infoNoticeText}>
                  Codes expire after 10 minutes to protect your account.
                </Text>
              </View>

              {/* Action Button */}
              <TouchableOpacity
                style={styles.primaryBtn}
                onPress={handleVerifyEmail}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryBtnText}>Verify email</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* STEP 3: Set New Password */}
          {step === 3 && (
            <View>
              <Text style={styles.title}>Set a strong password</Text>
              <Text style={styles.subtitle}>
                Use at least eight characters, including a number and a symbol.
              </Text>

              {/* New Password */}
              <View style={styles.inputSpacing}>
                <CustomInput
                  label="New password"
                  placeholder="Create a new password"
                  isPassword={true}
                  iconName="lock"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              {/* Password Strength Indicator */}
              <Text style={styles.strengthLabel}>Password strength</Text>
              <View style={styles.strengthBarRow}>
                <View
                  style={[
                    styles.strengthBar,
                    password.length > 0 && styles.strengthActive,
                  ]}
                />
                <View
                  style={[
                    styles.strengthBar,
                    password.length > 3 && styles.strengthActive,
                  ]}
                />
                <View
                  style={[
                    styles.strengthBar,
                    password.length > 6 && styles.strengthActive,
                  ]}
                />
                <View
                  style={[
                    styles.strengthBar,
                    password.length >= 8 && styles.strengthActive,
                  ]}
                />
              </View>

              {/* Confirm Password */}
              <View style={styles.inputSpacing}>
                <CustomInput
                  label="Confirm password"
                  placeholder="Re-enter your password"
                  isPassword={true}
                  iconName="lock"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>

              {/* Action Button */}
              <TouchableOpacity
                style={[styles.primaryBtn, { marginTop: 24 }]}
                onPress={handleUpdatePassword}
                activeOpacity={0.85}
              >
                <Text style={styles.primaryBtnText}>Update password</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EAFDFD",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
    fontFamily: "Montserrat_600SemiBold",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#00B2B7",
    marginBottom: 8,
    fontFamily: "Montserrat_600SemiBold",
  },
  subtitle: {
    fontSize: 13,
    color: "#64748b",
    lineHeight: 20,
    marginBottom: 24,
    fontFamily: "Montserrat_400Regular",
  },
  emailHighlight: {
    fontWeight: "600",
    color: "#334155",
    fontFamily: "Montserrat_600SemiBold",
  },
  inputSpacing: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#334155",
    marginBottom: 10,
    fontFamily: "Montserrat_500Medium",
  },

  /* OTP Elements */
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  otpBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    backgroundColor: "#f8fafc",
    fontFamily: "Montserrat_600SemiBold",
  },
  otpBoxActive: {
    borderColor: "#00B2B7",
    backgroundColor: "#ffffff",
  },
  resendContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  resendText: {
    fontSize: 12,
    color: "#64748b",
    fontFamily: "Montserrat_400Regular",
  },
  resendLinkText: {
    fontSize: 12,
    color: "#00B2B7",
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },

  /* Info Notice Card */
  infoNoticeCard: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#EAFDFD",
    borderWidth: 1,
    borderColor: "#b2f5f8",
    borderRadius: 4,
    padding: 12,
    marginTop: 8,
    marginBottom: 24,
  },
  infoNoticeText: {
    flex: 1,
    fontSize: 11,
    color: "#00B2B7",
    lineHeight: 16,
    fontFamily: "Montserrat_400Regular",
  },

  /* Password Security Indicators */
  strengthLabel: {
    fontSize: 11,
    color: "#94a3b8",
    marginBottom: 6,
    fontFamily: "Montserrat_400Regular",
  },
  strengthBarRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 20,
  },
  strengthBar: {
    flex: 1,
    height: 3,
    backgroundColor: "#e2e8f0",
    borderRadius: 1.5,
  },
  strengthActive: {
    backgroundColor: "#00B2B7",
  },

  /* Primary Button */
  primaryBtn: {
    backgroundColor: "#00B2B7",
    height: 48,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBtnText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
});
