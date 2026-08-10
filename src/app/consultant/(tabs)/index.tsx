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
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import Icon from '@/icon/icon';

export default function ConsultantHome() {
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
            <Text style={styles.roleText}>Consultant</Text>
          </View>

          <View style={styles.headerRight}>
            {/* Notification Bell Badge */}
            <TouchableOpacity style={styles.bellBtn} activeOpacity={0.7}>
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
          <Text style={styles.welcomeTitle}>Welcome back,</Text>
          <Text style={styles.welcomeName}>Sarah Smith</Text>
        </View>

        {/* 3 Metric Cards Row */}
        <View style={styles.metricsRow}>
          <View style={styles.metricCard}>
            <View style={[styles.iconBox, { backgroundColor: '#e6f7f8' }]}>
              <Icon name="clipboard" />
            </View>
            <Text style={styles.metricNumber}>4</Text>
            <Text style={styles.metricLabel}>Today's</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={[styles.iconBox, { backgroundColor: '#fef6e6' }]}>
              <Icon name="document" />
            </View>
            <Text style={styles.metricNumber}>2</Text>
            <Text style={styles.metricLabel}>To review</Text>
          </View>

          <View style={styles.metricCard}>
            <View style={[styles.iconBox, { backgroundColor: '#e6f7f8' }]}>
              <Feather name="clock" size={20} color="#00a9b5" />
            </View>
            <Text style={styles.metricNumber}>1</Text>
            <Text style={styles.metricLabel}>Waiting</Text>
          </View>
        </View>

        {/* Teal Callout Card */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerHeader}>
            <Octicons name="tasklist" size={22} color="#ffffff" style={styles.bannerIcon} />
            <Text style={styles.bannerTitle}>Client request queue</Text>
          </View>
          <Text style={styles.bannerSubtext}>
            2 client-submitted requests ready for review.
          </Text>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push('/consultant/client-request-queue')}
            activeOpacity={0.8}
          >
            <Text style={styles.actionBtnText}>Review requests</Text>
            <Feather name="chevron-right" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Open Requests Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Open requests</Text>
          <TouchableOpacity onPress={() => router.push('/consultant/client-request-queue')}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Request Item 1 */}
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={styles.cardHeader}>
            <Text style={styles.clientName}>Elena Rodriguez</Text>
            <Feather name="chevron-right" size={18} color="#cbd5e1" />
          </View>
          <View style={styles.cardFooter}>
            <View style={[styles.statusBadge, { backgroundColor: '#e6f7f8' }]}>
              <Text style={[styles.statusText, { color: '#00a9b5' }]}>
                Under Review
              </Text>
            </View>
            <Text style={styles.visaType}>Work Visa</Text>
          </View>
        </TouchableOpacity>

        {/* Request Item 2 */}
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View style={styles.cardHeader}>
            <Text style={styles.clientName}>Sarah Smith</Text>
            <Feather name="chevron-right" size={18} color="#cbd5e1" />
          </View>
          <View style={styles.cardFooter}>
            <View style={[styles.statusBadge, { backgroundColor: '#fef6e6' }]}>
              <Text style={[styles.statusText, { color: '#d97706' }]}>
                Waiting for documents
              </Text>
            </View>
            <Text style={styles.visaType}>Student Visa</Text>
          </View>
        </TouchableOpacity>

        {/* Recent Activity Section */}
        <Text style={[styles.sectionTitle, { marginTop: 28, marginBottom: 14 }]}>
          Recent activity
        </Text>

        {/* Activity Item 1 */}
        <View style={styles.card}>
          <Text style={styles.activityText}>
            <Text style={styles.activityBold}>Elena Rodriguez</Text> uploaded
            Employment Contract.pdf
          </Text>
          <Text style={styles.timeText}>4 hours ago</Text>
        </View>

        {/* Activity Item 2 */}
        <View style={styles.card}>
          <Text style={styles.activityText}>
            <Text style={styles.activityBold}>Sarah Jenkins</Text> uploaded
            Employment Contract.pdf
          </Text>
          <Text style={styles.timeText}>Yesterday</Text>
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
    backgroundColor: '#00a9b5',
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
    color: '#00a9b5',
   
    marginTop: 2,
    fontFamily: 'Montserrat_500Medium',
  },

  /* Metrics Grid */
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 20,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 14,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  metricLabel: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 2,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Banner Card */
  bannerCard: {
    backgroundColor: '#00B2B7',
    borderRadius: 4,
    padding: 18,
    marginBottom: 24,
  },
  bannerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    fontFamily: 'Montserrat_400Regular',
  },
  bannerIcon: {
    marginRight: 8,
  },
  bannerTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Montserrat_400Regular',
  },
  bannerSubtext: {
    fontSize: 14,
    color: '#e0f7fa',
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  actionBtnText: {
    color: '#ffffff',
   
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
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
    color: '#00a9b5',
    fontWeight: '500',
    fontFamily: 'Montserrat_400Regular',
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
  clientName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
    fontFamily: 'Montserrat_400Regular',
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
    fontFamily: 'Montserrat_400Regular',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Montserrat_400Regular',
  },
  visaType: {
    fontSize: 13,
    color: '#94a3b8',
  },

  /* Recent Activity Styles */
  activityText: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    marginBottom: 8,
    fontFamily: 'Montserrat_400Regular',
  },
  activityBold: {
    fontWeight: '600',
    fontFamily: 'Montserrat_400Regular',
  },
  timeText: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
});