import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function GdprScreen() {
  const router = useRouter();
  const [isConsentActive, setIsConsentActive] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={20} color="#00a9b5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Consent</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content Card */}
        <View style={styles.card}>
          {/* Header Row: Shield Icon + Title */}
          <View style={styles.cardHeader}>
            <View style={styles.shieldBox}>
              <Feather name="shield" size={22} color="#00a9b5" />
            </View>
            <Text style={styles.titleText}>Data Processing Consent</Text>
          </View>

          {/* Body Paragraph */}
          <Text style={styles.descriptionText}>
            To process your immigration case, WebImove needs your consent to collect,
            store, and process your personal documents in accordance with GDPR. Your
            data is encrypted and only accessible to your assigned consultant.
          </Text>

          {/* List Items */}
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Feather name="file-text" size={18} color="#94a3b8" style={styles.listIcon} />
              <Text style={styles.listText}>
                Collection and storage of identity documents
              </Text>
            </View>

            <View style={styles.listItem}>
              <Feather name="file-text" size={18} color="#94a3b8" style={styles.listIcon} />
              <Text style={styles.listText}>
                Sharing data with relevant government authorities
              </Text>
            </View>

            <View style={styles.listItem}>
              <Feather name="file-text" size={18} color="#94a3b8" style={styles.listIcon} />
              <Text style={styles.listText}>
                Processing sensitive data for your immigration case
              </Text>
            </View>
          </View>

          {/* Consent Provided Status Box */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setIsConsentActive(!isConsentActive)}
            style={[
              styles.statusBanner,
              isConsentActive ? styles.statusActiveBanner : styles.statusInactiveBanner,
            ]}
          >
            <View style={styles.statusLeft}>
              <Feather
                name={isConsentActive ? "check-circle" : "clock"}
                size={20}
                color={isConsentActive ? "#16a34a" : "#64748b"}
              />
              <View style={styles.statusTextCol}>
                <Text
                  style={[
                    styles.statusTitle,
                    { color: isConsentActive ? '#15803d' : '#334155' },
                  ]}
                >
                  {isConsentActive ? 'Consent Provided' : 'Consent Pending'}
                </Text>
                <Text
                  style={[
                    styles.statusSubText,
                    { color: isConsentActive ? '#16a34a' : '#64748b' },
                  ]}
                >
                  {isConsentActive
                    ? 'You have granted data processing consent.'
                    : 'Tap to grant data processing consent.'}
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.badgeTag,
                { color: isConsentActive ? '#16a34a' : '#64748b' },
              ]}
            >
              {isConsentActive ? 'Active' : 'Pending'}
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 16,
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
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    // Soft shadow effect matching image design
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  shieldBox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    fontFamily: 'Montserrat_700Bold',
    flex: 1,
  },
  descriptionText: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 20,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 24,
  },
  listContainer: {
    gap: 16,
    marginBottom: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  listIcon: {
    marginTop: 2,
  },
  listText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
    fontFamily: 'Montserrat_400Regular',
    flex: 1,
  },
  statusBanner: {
    borderRadius: 4,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  statusActiveBanner: {
    backgroundColor: '#F0FDF4',
    borderColor: '#DCFCE7',
  },
  statusInactiveBanner: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    flex: 1,
    paddingRight: 8,
  },
  statusTextCol: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 2,
  },
  statusSubText: {
    fontSize: 11,
    lineHeight: 15,
    fontFamily: 'Montserrat_400Regular',
  },
  badgeTag: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
});