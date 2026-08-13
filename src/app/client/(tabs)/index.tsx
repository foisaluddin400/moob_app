import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Feather,
  Ionicons,
} from '@expo/vector-icons';

export default function ClientHome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Row */}
        <View style={styles.headerRow}>
          <View>
            <Image
              source={require('../../../../assets/images/app_logo.png')} // Adjust path if needed
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.roleText}>Client</Text>
          </View>

          <View style={styles.headerRight}>
            {/* Notification Bell Badge */}
            <TouchableOpacity onPress={() => router.push('/notification')} style={styles.bellBtn} activeOpacity={0.7}>
              <Ionicons name="notifications-outline" size={20} color="#0f172a" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </TouchableOpacity>

            {/* Profile Avatar */}
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=32' }}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Your immigration journey</Text>
          <Text style={styles.welcomeName}>Nadia 👋</Text>
        </View>

        {/* Teal Callout Card - Main Request Status */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerTopRow}>
            <Text style={styles.reqCode}>REQ-198</Text>
            <View style={styles.reviewBadge}>
              <Text style={styles.reviewBadgeText}>Under Review</Text>
            </View>
          </View>

          <Text style={styles.bannerTitle}>Work Permit</Text>

          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Overall progress</Text>
            <Text style={styles.progressPercent}>45%</Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '45%' }]} />
          </View>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/consultant/request-details')}
            activeOpacity={0.8}
          >
            <Text style={styles.actionBtnText}>View request</Text>
            <Feather name="arrow-right" size={16} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Outlined Button - Need Help */}
        <TouchableOpacity style={styles.outlineCardButton} activeOpacity={0.8}>
          <View style={styles.outlineBtnLeft}>
            <Feather name="plus-square" size={20} color="#00a8a8" style={styles.outlineBtnIcon} />
            <Text style={styles.outlineBtnText}>Need help with another move?</Text>
          </View>
          <Feather name="arrow-right" size={18} color="#00a8a8" />
        </TouchableOpacity>

        {/* Action Button - Upload Document */}
        <TouchableOpacity style={styles.uploadCardButton} activeOpacity={0.8}>
          <View style={styles.uploadBtnContent}>
            <Feather name="upload" size={22} color="#ffffff" style={styles.uploadIcon} />
            <View>
              <Text style={styles.uploadSubtext}>Your next step</Text>
              <Text style={styles.uploadTitle}>Upload 5 requested document</Text>
            </View>
          </View>
          <Feather name="chevron-right" size={20} color="#ffffff" />
        </TouchableOpacity>

        {/* My Requests Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My requests</Text>
          <TouchableOpacity onPress={() => router.push('/consultant/client-request-queue')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Request Item 1 */}
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={styles.cardHeader}>
            <Text style={styles.requestTitle}>Work Visa</Text>
            <Feather name="chevron-right" size={18} color="#94a3b8" />
          </View>
          <View style={styles.cardFooter}>
            <View style={[styles.statusBadge, { backgroundColor: '#fef3c7' }]}>
              <Text style={[styles.statusText, { color: '#d97706' }]}>
                Waiting for documents
              </Text>
            </View>
            <Text style={styles.reqIdText}>REQ-198</Text>
          </View>
        </TouchableOpacity>

        {/* Request Item 2 */}
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={styles.cardHeader}>
            <Text style={styles.requestTitle}>Student Visa</Text>
            <Feather name="chevron-right" size={18} color="#94a3b8" />
          </View>
          <View style={styles.cardFooter}>
            <View style={[styles.statusBadge, { backgroundColor: '#e0f2fe' }]}>
              <Text style={[styles.statusText, { color: '#0284c7' }]}>
                Documents received
              </Text>
            </View>
            <Text style={styles.reqIdText}>REQ-198</Text>
          </View>
        </TouchableOpacity>

        {/* Recent Activity Section */}
        <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 14 }]}>
          Recent Activity
        </Text>

        <View style={styles.activityCardContainer}>
          {/* Activity Item 1 */}
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>
              Your consent and authorization have been recorded.
            </Text>
            <Text style={styles.timeText}>Just now</Text>
          </View>

          <View style={styles.divider} />

          {/* Activity Item 2 */}
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>
              Your profile is ready. You can now start an immigration request.
            </Text>
            <Text style={styles.timeText}>Yesterday</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },

  /* Header */
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 32,
    alignSelf: 'flex-start',
  },
  roleText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
    fontWeight: '400',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bellBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#e6f7f8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#00B2B7',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  /* Welcome Section */
  welcomeSection: {
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 22,
    color: '#334155',
    fontFamily: 'Montserrat_500Medium',
  },
  welcomeName: {
    fontSize: 26,
    color: '#00B2B7',
    marginTop: 2,
    fontFamily: 'Montserrat_500Medium',
  },

  /* Teal Main Banner Card */
  bannerCard: {
    backgroundColor: '#00B2B7',
    borderRadius: 4,
    padding: 18,
    marginBottom: 14,
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reqCode: {
    color: '#ffffff',
    fontSize: 13,
    opacity: 0.9,
    fontFamily: 'Montserrat_400Regular',
  },
  reviewBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  reviewBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },
  bannerTitle: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    color: '#ffffff',
    fontSize: 13,
    opacity: 0.9,
  },
  progressPercent: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 3,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },

  /* Need Help Outlined Card */
  outlineCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#00B2B7',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 14,
    marginBottom: 14,
  },
  outlineBtnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlineBtnIcon: {
    marginRight: 10,
  },
  outlineBtnText: {
    color: '#00B2B7',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Upload Action Card */
  uploadCardButton: {
    backgroundColor: '#00B2B7',
    borderRadius: 4,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  uploadBtnContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadIcon: {
    marginRight: 12,
  },
  uploadSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },
  uploadTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 2,
    fontFamily: 'Montserrat_500Medium',
  },

  /* Section Titles */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#334155',
    fontFamily: 'Montserrat_500Medium',
  },
  seeAllText: {
    fontSize: 14,
    color: '#00B2B7',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Standard Card Style */
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  requestTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#334155',
    fontFamily: 'Montserrat_500Medium',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Montserrat_400Regular',
  },
  reqIdText: {
    fontSize: 13,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Recent Activity Container Card */
  activityCardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  activityItem: {
    padding: 16,
  },
  activityText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 6,
  },
  timeText: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
  },
});