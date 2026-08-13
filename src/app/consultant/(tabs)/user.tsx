import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather, Octicons } from '@expo/vector-icons';
import Icon from '@/icon/icon';

export default function ConsultantUserTab() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      {/* Profile Header Banner */}
      <TouchableOpacity 
        style={styles.profileBanner} 
        onPress={() => router.push('/editProfile')}
        activeOpacity={0.8}
      >
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Sarah Jenkins</Text>
          <Text style={styles.profileSubtitle}>View and edit profile</Text>
        </View>
        <Feather name="chevron-right" size={20} color="#00C7CC" />
      </TouchableOpacity>

      {/* Section: Workspace */}
      <Text style={styles.sectionHeader}>Workspace</Text>
      <View style={styles.groupCard}>
        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/consultant/clients')}>
          <View style={styles.iconContainer}>
            <Feather name="users" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Clients</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/consultant/case')}>
          <View style={styles.iconContainer}>
            <Feather name="file-text" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Cases</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/consultant/preview-request')}>
          <View style={styles.iconContainer}>
            <Feather name="file-text" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Documents</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/consultant/partner-tasks')}>
          <View style={styles.iconContainer}>
            <Icon name="hand" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Partner Tasks</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/consultant/partner-management')}>
          <View style={styles.iconContainer}>
            <Feather name="user-plus" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Partner Management</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/consultant/message-list')}>
          <View style={styles.iconContainer}>
            <Feather name="message-square" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Messages</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuRow, styles.lastRow]} onPress={() => router.push('/consultant/report')}>
          <View style={styles.iconContainer}>
            <Feather name="bar-chart-2" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Reporting</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Section: Account */}
      <Text style={styles.sectionHeader}>Account</Text>
      <View style={styles.groupCard}>
        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/notification')}>
          <View style={styles.iconContainer}>
            <Feather name="bell" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Notifications</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuRow, styles.lastRow]} onPress={() => router.push('/setting')}>
          <View style={styles.iconContainer}>
            <Feather name="settings" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Settings</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Section: Support & legal */}
      <Text style={styles.sectionHeader}>Support & legal</Text>
      <View style={styles.groupCard}>
        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/helpSupport')}>
          <View style={styles.iconContainer}>
            <Feather name="help-circle" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Help & Support</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} onPress={() => router.push('/privacy')}>
          <View style={styles.iconContainer}>
            <Octicons name="law" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Privacy Policy</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuRow, styles.lastRow]} onPress={() => router.push('/terms')}>
          <View style={styles.iconContainer}>
            <Feather name="info" size={18} color="#0f172a" />
          </View>
          <Text style={styles.rowLabel}>Terms & Conditions</Text>
          <Feather name="chevron-right" size={18} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        style={styles.logoutBtn} 
        onPress={() => router.replace('/role-selection')}
        activeOpacity={0.8}
      >
        <Feather name="log-out" size={18} color="#ff4d4f" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },

  /* Profile Banner */
  profileBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFDFD',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  profileSubtitle: {
    fontSize: 12,
    color: '#00B2B7',
    marginTop: 2,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Section Headers */
  sectionHeader: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
    marginBottom: 8,
    marginLeft: 4,
    fontFamily: 'Montserrat_500Medium',
  },

  /* Grouped Menu Cards */
  groupCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rowLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Log Out */
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 8,
    height: 48,
    marginTop: 4,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff4d4f',
    fontFamily: 'Montserrat_600SemiBold',
  },
});