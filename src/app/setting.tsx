import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomInput from '@/ui/CustomInput';


export default function Setting() {
  const router = useRouter();

  const [selectedLang, setSelectedLang] = useState('English');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const languages = ['English', 'Português', 'Español'];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={20} color="#00B2B7" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Workspace Language Section */}
        <View style={styles.sectionHeaderRow}>
          <Feather name="globe" size={16} color="#64748b" style={{ marginRight: 6 }} />
          <Text style={styles.sectionTitle}>Workspace language</Text>
        </View>

        <View style={styles.langContainer}>
          {languages.map((lang, index) => (
            <TouchableOpacity
              key={lang}
              style={[
                styles.langRow,
                index < languages.length - 1 && styles.borderBottom,
              ]}
              onPress={() => setSelectedLang(lang)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.langText,
                  selectedLang === lang && styles.selectedLangText,
                ]}
              >
                {lang}
              </Text>
              {selectedLang === lang && (
                <Feather name="check" size={18} color="#00B2B7" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.tealButton} activeOpacity={0.85}>
          <Text style={styles.tealButtonText}>Save language</Text>
        </TouchableOpacity>

        {/* Change Password Section */}
        <View style={[styles.sectionHeaderRow, { marginTop: 20 }]}>
          <Feather name="shield" size={16} color="#64748b" style={{ marginRight: 6 }} />
          <Text style={styles.sectionTitle}>Change password</Text>
        </View>

        {/* Current Password using CustomInput */}
        <CustomInput
          label="Current password"
          placeholder="Enter your current password"
          iconName="lock"
          isPassword={true}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        {/* New Password using CustomInput */}
        <CustomInput
          label="New password"
          placeholder="Create a new password"
          iconName="lock"
          isPassword={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        {/* Password Strength Indicator */}
        <Text style={styles.strengthText}>Password strength</Text>
        <View style={styles.strengthBarRow}>
          <View style={styles.barSegment} />
          <View style={styles.barSegment} />
          <View style={styles.barSegment} />
          <View style={styles.barSegment} />
        </View>
        <Text style={styles.helperText}>Use 8+ characters with a number and symbol.</Text>

        {/* Confirm Password using CustomInput */}
        <CustomInput
          label="Confirm password"
          placeholder="Re-enter your password"
          iconName="lock"
          isPassword={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Audit Log Warning Banner */}
        <View style={styles.auditBanner}>
          <Feather name="info" size={16} color="#00B2B7" style={{ marginRight: 8, marginTop: 1 }} />
          <Text style={styles.auditText}>
            Password changes are recorded in your account audit log.
          </Text>
        </View>

        {/* Save Password Button */}
        <TouchableOpacity style={styles.tealButton} activeOpacity={0.85}>
          <Feather name="shield" size={16} color="#ffffff" style={{ marginRight: 8 }} />
          <Text style={styles.tealButtonText}>Save new password</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingBottom: 16,
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
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    fontFamily: 'Montserrat_600SemiBold',
  },
  langContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    borderRadius: 4,
    marginBottom: 14,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  langText: {
    fontSize: 14,
    color: '#334155',
    fontFamily: 'Montserrat_400Regular',
  },
  selectedLangText: {
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  tealButton: {
    backgroundColor: '#00B2B7',
    height: 46,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  tealButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  strengthText: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: -6,
    marginBottom: 6,
    fontFamily: 'Montserrat_400Regular',
  },
  strengthBarRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 6,
  },
  barSegment: {
    flex: 1,
    height: 3,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
  },
  helperText: {
    fontSize: 11,
    color: '#94a3b8',
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  auditBanner: {
    backgroundColor: '#EAFDFD',
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 16,
  },
  auditText: {
    flex: 1,
    fontSize: 12,
    color: '#00B2B7',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },
});