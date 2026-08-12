import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ClientDetailsScreen({ navigation }: any) {
const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
       <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
                        <Feather name="arrow-left" size={18} color="#00a9b5" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Client Profile</Text>
                    <View style={{ width: 36 }} />
                </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Main Profile Card */}
          <View style={styles.profileCard}>
            <View style={styles.profileHeaderBox}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' }}
                style={styles.profileImage}
              />
              <View style={styles.profileTitleSection}>
                <Text style={styles.profileName}>Elena Rodriguez</Text>
                <View style={styles.activeTag}>
                  <Text style={styles.activeTagText}>Active</Text>
                </View>
              </View>
            </View>

            {/* Contact Details */}
            <View style={styles.contactList}>
              <View style={styles.contactRow}>
                <Feather name="mail" size={16} color="#94a3b8" />
                <Text style={styles.contactText}>elena@gmail.com</Text>
              </View>
              <View style={styles.contactRow}>
                <Feather name="phone" size={16} color="#94a3b8" />
                <Text style={styles.contactText}>+34 612 555 014</Text>
              </View>
              <View style={styles.contactRow}>
                <Feather name="map-pin" size={16} color="#94a3b8" />
                <Text style={styles.contactText}>Spain</Text>
              </View>
            </View>

            {/* Message Action Button */}
            <TouchableOpacity
              style={styles.messageBtn}
              activeOpacity={0.8}
              onPress={() => router.push('/consultant/client-message')}
            >
              <Text style={styles.messageBtnText}>Message</Text>
            </TouchableOpacity>
          </View>

          {/* GDPR Consent Card */}
          <View style={styles.card}>
            <View style={styles.gdprTitleRow}>
              <Feather name="shield" size={18} color="#1e293b" />
              <Text style={styles.cardTitle}>GDPR Consent</Text>
            </View>
            <View style={styles.consentBadge}>
              <Text style={styles.consentBadgeText}>Consent recorded</Text>
            </View>
          </View>

          {/* Section Header */}
          <Text style={styles.sectionHeader}>Immigration Cases</Text>

          {/* Immigration Case 1 */}
          <View style={styles.caseCard}>
            <View style={styles.caseRowHeader}>
              <Text style={styles.caseName}>Elena Rodriguez</Text>
              <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
            </View>
            <View style={styles.caseFooter}>
              <View style={[styles.statusBadge, { backgroundColor: '#e0f2fe' }]}>
                <Text style={[styles.statusBadgeText, { color: '#0284c7' }]}>Under Review</Text>
              </View>
              <Text style={styles.caseType}>Work Visa</Text>
            </View>
          </View>

          {/* Immigration Case 2 */}
          <View style={styles.caseCard}>
            <View style={styles.caseRowHeader}>
              <Text style={styles.caseName}>Elena Rodriguez</Text>
              <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
            </View>
            <View style={styles.caseFooter}>
              <View style={[styles.statusBadge, { backgroundColor: '#fef3c7' }]}>
                <Text style={[styles.statusBadgeText, { color: '#d97706' }]}>Waiting for documents</Text>
              </View>
              <Text style={styles.caseType}>Student Visa</Text>
            </View>
          </View>

          {/* Note Box */}
          <View style={styles.noteBox}>
            <Text style={styles.noteText}>
              New immigration cases are created after the client submits a request and a consultant approves the recommended process.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#f8fafc',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: '#1e293b',
    fontFamily: 'Montserrat_400Regular',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 14,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  profileHeaderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFDFD',
    padding: 16,
    borderRadius: 8,
    gap: 14,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  profileTitleSection: { flex: 1 },
  profileName: {
    fontSize: 18,
    color: '#0f172a',
    marginBottom: 4,
    fontFamily: 'Montserrat_400Regular',
  },
  activeTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#c5c5b333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  activeTagText: {
    fontSize: 11,
    color: '#15803d',
    fontFamily: 'Montserrat_400Regular',
  },
  contactList: {
    marginVertical: 16,
    gap: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
  },
  messageBtn: {
    backgroundColor: '#00B2B7',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
  },
  messageBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  gdprTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 15,
    color: '#1e293b',
    fontFamily: 'Montserrat_400Regular',
  },
  consentBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  consentBadgeText: {
    fontSize: 12,
    color: '#16a34a',
    fontFamily: 'Montserrat_400Regular',
  },
  sectionHeader: {
    fontSize: 16,
    color: '#1e293b',
    marginTop: 6,
    fontFamily: 'Montserrat_400Regular',
  },
  caseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  caseRowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  caseName: {
    fontSize: 15,
    color: '#1e293b',
    fontFamily: 'Montserrat_400Regular',
  },
  caseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusBadgeText: {
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
  },
  caseType: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  noteBox: {
    backgroundColor: '#e6f7f7',
    borderRadius: 8,
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccf0f0',
  },
  noteText: {
    fontSize: 12,
    color: '#008080',
    lineHeight: 17,
    fontFamily: 'Montserrat_400Regular',
  },
});