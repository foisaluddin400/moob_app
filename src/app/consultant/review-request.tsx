import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Icon from '@/icon/icon';
import ConfirmationModal from '@/components/confirmationModal';



export default function ReviewRequest() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirmApproval = () => {
    // Navigate to ready-next screen
    router.push('/consultant/ready-next' as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={18} color="#00a9b5" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Review request</Text>
          <View style={{ width: 36 }} />
        </View>

        {/* REQ Banner */}
        <View style={styles.reqBanner}>
          <View style={styles.reqBannerHeader}>
            <Text style={styles.reqCode}>REQ-159</Text>
            <View style={styles.inReviewBadge}>
              <Text style={styles.inReviewText}>In review</Text>
            </View>
          </View>
          <Text style={styles.reqTitle}>Student Visa</Text>
        </View>

        {/* Client profile Card */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Feather name="user" size={16} color="#00a9b5" />
            <Text style={styles.cardTitle}>Client profile</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="mail" size={14} color="#94a3b8" style={styles.infoIcon} />
            <Text style={styles.infoText}>elena@gmail.com</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="phone" size={14} color="#94a3b8" style={styles.infoIcon} />
            <Text style={styles.infoText}>+34 612 555 014</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="globe" size={14} color="#94a3b8" style={styles.infoIcon} />
            <Text style={styles.infoText}>Spanish · Spanish</Text>
          </View>

          <View style={styles.infoRow}>
            <Feather name="map-pin" size={14} color="#94a3b8" style={styles.infoIcon} />
            <Text style={styles.infoText}>Spain → Germany</Text>
          </View>
        </View>

        {/* Client context Card */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Feather name="file-text" size={16} color="#00a9b5" />
            <Text style={styles.cardTitle}>Client context</Text>
          </View>

          <Text style={styles.fieldLabel}>PREFERRED TIMELINE</Text>
          <Text style={styles.fieldValue}>Within 6 months</Text>

          <Text style={[styles.fieldLabel, { marginTop: 12 }]}>SUPPORTING INFORMATION</Text>
          <Text style={styles.fieldValue}>Not provided</Text>
        </View>

        {/* Recommended process Card */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Icon name="recommend" />
            <Text style={styles.cardTitle}>Recommended process</Text>
          </View>

          <Text style={styles.cardDescription}>
            Confirm the client's selection or choose a more suitable category. This drives the checklist, workflow, and form set.
          </Text>

          {/* Select Process Dropdown */}
          <TouchableOpacity style={styles.selectDropdown} activeOpacity={0.8}>
            <Text style={styles.selectText}>Select Process</Text>
            <Feather name="chevron-down" size={18} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        {/* Approve Button */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.85}
        >
          <Text style={styles.primaryButtonText}>Approve & create case</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Confirmation Modal Component Call */}
      <ConfirmationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmApproval}
        title="Create immigration case"
        subtitle="This creates the case, workflow timeline, required tasks, checklist and draft government forms."
        bannerTitle="Student Visa"
        bannerText="will be applied for Elena Rodriguez . The client receives an immediate document-request notification."
        confirmText="Confirm approval"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eafdfd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  reqBanner: {
    backgroundColor: '#EAFDFD',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#9FFDFF',
  },
  reqBannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reqCode: {
    fontSize: 13,
    color: '#00a9b5',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  inReviewBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
  },
  inReviewText: {
    fontSize: 11,
    color: '#d97706',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  reqTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 4,
    padding: 16,
    marginBottom: 14,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00a9b5',
    fontFamily: 'Montserrat_400Regular',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    width: 22,
  },
  infoText: {
    fontSize: 13,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
  },
  fieldLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94a3b8',
    letterSpacing: 0.5,
    marginBottom: 4,
    fontFamily: 'Montserrat_600SemiBold',
  },
  fieldValue: {
    fontSize: 13,
    color: '#334155',
    fontFamily: 'Montserrat_400Regular',
  },
  cardDescription: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 14,
    fontFamily: 'Montserrat_400Regular',
  },
  selectDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 44,
  },
  selectText: {
    fontSize: 13,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  primaryButton: {
    backgroundColor: '#00a9b5',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});