import React from 'react';
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

export default function PartnerManagement() {
  const router = useRouter();

  // Mock partners data as shown in screenshot
  const partners = [
    {
      id: '1',
      name: 'Elena Rodriguez',
      role: 'Legal Assistant',
      email: 'hasnainhomaeid@gmail.com',
      date: 'Jul 29, 2026',
      status: 'Invited',
    },
    {
      id: '2',
      name: 'Elena Rodriguez',
      role: 'Legal Assistant',
      email: 'hasnainhomaeid@gmail.com',
      date: 'Jul 29, 2026',
      status: 'Invited',
    },
  ];

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
        <Text style={styles.headerTitle}>Partner management</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Create Partner Banner Action */}
        <TouchableOpacity
          style={styles.createBanner}
          onPress={() => router.push('/consultant/create-partner' as any)}
          activeOpacity={0.9}
        >
          <View style={styles.bannerIconBox}>
            <Feather name="user-plus" size={24} color="#ffffff" />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Create partner</Text>
            <Text style={styles.bannerSubtitle}>
              Send an email invitation to join your workspace
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>

        {/* Partner Cards List */}
        {partners.map((partner) => (
          <View key={partner.id} style={styles.partnerCard}>
            <View style={styles.cardHeaderRow}>
              {/* Avatar Placeholder */}
              <View style={styles.avatarBox}>
                <Feather name="user" size={32} color="#00a9b5" />
              </View>

              {/* Info Section */}
              <View style={styles.infoBox}>
                <View style={styles.nameRow}>
                  <Text style={styles.partnerName}>{partner.name}</Text>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{partner.status}</Text>
                  </View>
                </View>

                <Text style={styles.partnerRole}>{partner.role}</Text>
                <Text style={styles.partnerEmail}>{partner.email}</Text>
                <Text style={styles.partnerDate}>
                  Invitation sent {partner.date}
                </Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.resendBtn} activeOpacity={0.8}>
                <Text style={styles.resendBtnText}>Resend invite</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.revokeBtn} activeOpacity={0.8}>
                <Text style={styles.revokeBtnText}>Revoke</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  /* Create Partner Teal Banner */
  createBanner: {
    backgroundColor: '#00B2B7',
    borderRadius: 2,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bannerIconBox: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bannerTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
    fontFamily: 'Montserrat_600SemiBold',
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#E0F7FA',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Partner Cards */
  partnerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    padding: 16,
    marginBottom: 16,
    // subtle box shadow/border
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatarBox: {
    width: 72,
    height: 72,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  infoBox: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  partnerName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 2,
  },
  statusBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 2,
  },
  statusText: {
    fontSize: 12,
    color: '#d97706',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  partnerRole: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 4,
    fontFamily: 'Montserrat_400Regular',
  },
  partnerEmail: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 2,
    fontFamily: 'Montserrat_400Regular',
  },
  partnerDate: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Action Buttons */
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  resendBtn: {
    flex: 1,
    height: 38,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  resendBtnText: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  revokeBtn: {
    flex: 1,
    height: 38,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  revokeBtnText: {
    fontSize: 13,
    color: '#dc2626',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
});