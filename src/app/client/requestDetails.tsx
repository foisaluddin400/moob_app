import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function RequestDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const title = (params.type as string) || 'Family Reunification';

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
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 38 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner with Progress Checklist */}
        <View style={styles.statusBanner}>
          <View style={styles.bannerHeader}>
            <View>
              <Text style={styles.bannerSubTitle}>Current status</Text>
              <Text style={styles.bannerTitle}>With your consultant</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Under Review</Text>
            </View>
          </View>

          {/* Stepper Steps */}
          <View style={styles.stepList}>
            <View style={styles.stepRow}>
              <Feather name="check-circle" size={16} color="#FFFFFF" />
              <Text style={styles.stepTextActive}>Request submitted</Text>
            </View>
            <View style={styles.stepRow}>
              <Feather name="check-circle" size={16} color="#FFFFFF" />
              <Text style={styles.stepTextActive}>Documents requested</Text>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepDotInactive} />
              <Text style={styles.stepTextInactive}>Documents reviewed</Text>
            </View>
            <View style={styles.stepRow}>
              <View style={styles.stepDotInactive} />
              <Text style={styles.stepTextInactive}>Consultation complete</Text>
            </View>
          </View>
        </View>

        {/* Request Details Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Feather name="file-text" size={16} color="#00a9b5" />
            <Text style={styles.sectionHeaderTitle}>Request details</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>PURPOSE</Text>
            <Text style={styles.detailValue}>Citizenship</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>DESTINATION</Text>
            <Text style={styles.detailValue}>Australia</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>PREFERRED APPOINTMENT</Text>
            <Text style={styles.detailValue}>Flexible</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ADDITIONAL INFORMATION</Text>
            <Text style={styles.detailValue}>4 Members</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>NOTES</Text>
            <Text style={styles.detailValue}>Null</Text>
          </View>

          {/* Supporting file box */}
          <View style={styles.fileBox}>
            <Feather name="paperclip" size={14} color="#94a3b8" />
            <Text style={styles.fileName}>Supporting file 1.pdf</Text>
            <Text style={styles.fileSize}>• 240 KB</Text>
          </View>
        </View>

        {/* Requested Documents Header */}
        <View style={styles.docHeaderRow}>
          <Text style={styles.docSectionTitle}>Requested Documents</Text>
          <Text style={styles.docApprovedCount}>1 of 3 approved</Text>
        </View>

        {/* Progress bar container */}
        <View style={styles.progressCard}>
          <View style={styles.docSummaryRow}>
            <Text style={styles.docSummaryText}>Required Documents</Text>
          </View>
          <View style={styles.statusPillsRow}>
            <Text style={[styles.pillText, { color: '#059669' }]}>✓ 1 Approved</Text>
            <Text style={[styles.pillText, { color: '#D97706' }]}>🕒 1 Under Review</Text>
            <Text style={[styles.pillText, { color: '#EF4444' }]}>⚠️ 1 Action Required</Text>
          </View>
          <View style={styles.progressBarTrack}>
            <View style={styles.progressBarFill} />
          </View>
        </View>

        {/* Document Items */}
        {/* 1. Passport */}
        <View style={styles.docCard}>
          <View style={styles.docTitleRow}>
            <View style={styles.docTitleLeft}>
              <Feather name="file-text" size={16} color="#00a9b5" />
              <Text style={styles.docName}>Passport</Text>
            </View>
            <Text style={[styles.badgeText, { color: '#059669' }]}>Approved</Text>
          </View>
          <Text style={styles.docDesc}>
            Your passport has been successfully reviewed and approved.
          </Text>
          <Text style={styles.docTime}>Approved 2 days ago</Text>
        </View>

        {/* 2. Employment Letter */}
        <View style={styles.docCard}>
          <View style={styles.docTitleRow}>
            <View style={styles.docTitleLeft}>
              <Feather name="file-text" size={16} color="#00a9b5" />
              <Text style={styles.docName}>Employment Letter</Text>
            </View>
            <Text style={[styles.badgeText, { color: '#D97706' }]}>Under Review</Text>
          </View>
          <Text style={styles.docDesc}>
            Your employment letter has been submitted and is currently being reviewed by your consultant.
          </Text>
          <Text style={styles.docTime}>Due: Nov 15, 2026</Text>
          <Text style={styles.docTime}>Submitted 4 hours ago</Text>
        </View>

        {/* 3. Bank Statement */}
        <View style={styles.docCard}>
          <View style={styles.docTitleRow}>
            <View style={styles.docTitleLeft}>
              <Feather name="file-text" size={16} color="#00a9b5" />
              <Text style={styles.docName}>Bank Statement</Text>
            </View>
            <Text style={[styles.badgeText, { color: '#EF4444' }]}>Action Required</Text>
          </View>
          <Text style={styles.docDesc}>
            Last three months, showing your name and balance.
          </Text>
          <Text style={[styles.docTime, { color: '#EF4444', marginBottom: 12 }]}>
            Due: Nov 15, 2026
          </Text>

          <TouchableOpacity style={styles.uploadNewBtn} activeOpacity={0.85}>
            <Feather name="refresh-cw" size={14} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.uploadNewBtnText}>Upload New Document</Text>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    marginBottom: 16,
  },
  backCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
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
  statusBanner: {
    backgroundColor: '#00B2B7',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  bannerSubTitle: {
    fontSize: 11,
    color: '#E0F2FE',
    fontFamily: 'Montserrat_400Regular',
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
  statusBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
  },
  statusBadgeText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontFamily: 'Montserrat_500Medium',
  },
  stepList: {
    gap: 10,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepTextActive: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  stepDotInactive: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#E0F2FE',
    marginRight: 2,
  },
  stepTextInactive: {
    fontSize: 12,
    color: '#E0F2FE',
    fontFamily: 'Montserrat_400Regular',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  sectionHeaderTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 10,
    color: '#64748b',
    fontFamily: 'Montserrat_500Medium',
  },
  detailValue: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  fileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F8FAFC',
    padding: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  fileName: {
    fontSize: 11,
    color: '#334155',
    fontFamily: 'Montserrat_500Medium',
  },
  fileSize: {
    fontSize: 10,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  docHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  docSectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  docApprovedCount: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12,
  },
  docSummaryRow: {
    marginBottom: 6,
  },
  docSummaryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  statusPillsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  pillText: {
    fontSize: 10,
    fontFamily: 'Montserrat_500Medium',
  },
  progressBarTrack: {
    height: 4,
    backgroundColor: '#F1F5F9',
    borderRadius: 2,
  },
  progressBarFill: {
    width: '45%',
    height: '100%',
    backgroundColor: '#00B2B7',
    borderRadius: 2,
  },
  docCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12,
  },
  docTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  docTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  docName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  docDesc: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 8,
  },
  docTime: {
    fontSize: 10,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  uploadNewBtn: {
    backgroundColor: '#EF4444',
    height: 38,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadNewBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});