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
import CustomSelect from '@/ui/CustomSelect';

// Custom Input with Icon placeholder according to screenshot design


export default function CreatePartner() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('');

  const roleOptions = [
    'Legal Assistant',
    'Senior Consultant',
    'Immigration Attorney',
    'Case Manager',
  ];

  const handleSendInvitation = () => {
    // Action logic here
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backCircle}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color="#00a9b5" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create partner</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Full Name */}
          <CustomInput
            label="Full name"
            placeholder="e.g. Marta Silva"
            iconName="user-plus"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* Email */}
          <CustomInput
            label="Email"
            placeholder="you@company.com"
            iconName="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Mobile Number / Location */}
          <CustomInput
            label="Mobile number"
            placeholder="City, country"
            iconName="map-pin"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

          {/* Role Dropdown */}
          <CustomSelect
            label="Role"
            placeholder="Select Role"
            options={roleOptions}
            selectedValue={role}
            onSelect={setRole}
          />

          {/* Send Invitation Button */}
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendInvitation}
            activeOpacity={0.85}
          >
            <Feather name="send" size={16} color="#ffffff" style={{ marginRight: 8 }} />
            <Text style={styles.sendButtonText}>Send invitation</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  backCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  /* Send Invitation Button */
  sendButton: {
    backgroundColor: '#00a9b5',
    height: 48,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});