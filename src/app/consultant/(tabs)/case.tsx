import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Icon from '@/icon/icon';

type StatusType = 'New' | 'Waiting for client' | 'Documents received';

export default function ImmigrationRequests() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<StatusType>('New');
  const [searchQuery, setSearchQuery] = useState('');

  const requests = [
    {
      id: 'REQ-282',
      name: 'Elena Rodriguez',
      type: 'Citizenship',
      status: 'Request submitted',
      description: 'Relocate while continuing remote work for a Seoul-based employer.',
      location: 'Canada',
      time: 'Just now',
    },
    {
      id: 'REQ-283',
      name: 'Elena Rodriguez',
      type: 'Citizenship',
      status: 'Request submitted',
      description: 'Relocate while continuing remote work for a Seoul-based employer.',
      location: 'Canada',
      time: 'Just now',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <Text style={styles.title}>Immigration requests</Text>
        <Text style={styles.subtitle}>1 new · 2 to review</Text>

        {/* Info Banner */}
        <View style={styles.infoBanner}>
          <View style={styles.infoBannerHeader}>
            <Icon name="client" size={16} />
            <Text style={styles.infoBannerTitle}>Client-first intake</Text>
          </View>
          <Text style={styles.infoBannerText}>
            Read the request, then decide exactly which documents you need. No predefined process is assigned.
          </Text>
        </View>

        {/* Search Field */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#94a3b8" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search clients"
            placeholderTextColor="#cbd5e1"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Status Filter Buttons */}
        <View style={styles.tabRow}>
          {(['New', 'Waiting for client', 'Documents received'] as StatusType[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabButton, isActive ? styles.activeTabBtn : styles.inactiveTabBtn]}
                onPress={() => setActiveTab(tab)}
                activeOpacity={0.8}
              >
                <Text style={[styles.tabText, isActive ? styles.activeTabText : styles.inactiveTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Request Cards */}
        {requests.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push('/consultant/request-details' as any)}
            activeOpacity={0.75}
          >
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.clientName}>{item.name}</Text>
                <Text style={styles.clientMeta}>{`${item.type} · ${item.id}`}</Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <Text style={styles.cardDesc}>{item.description}</Text>

            <View style={styles.cardFooter}>
              <View style={styles.metaGroup}>
                <Feather name="map-pin" size={13} color="#94a3b8" />
                <Text style={styles.metaText}>{item.location}</Text>
                <Feather name="clock" size={13} color="#94a3b8" style={{ marginLeft: 12 }} />
                <Text style={styles.metaText}>{item.time}</Text>
              </View>
              <Feather name="chevron-right" size={18} color="#cbd5e1" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFD' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32 },
  title: { fontSize: 20, fontWeight: '600', color: '#0f172a', fontFamily: 'Montserrat_600SemiBold' },
  subtitle: { fontSize: 13, color: '#64748b', marginBottom: 16, marginTop: 2, fontFamily: 'Montserrat_400Regular' },
  infoBanner: {
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#9FFDFF',
    borderRadius: 4,
    padding: 14,
    marginBottom: 16,
  },
  infoBannerHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  infoBannerTitle: { fontSize: 15, fontWeight: '400', color: '#008b94', fontFamily: 'Montserrat_400Regular' },
  infoBannerText: { fontSize: 12, color: '#008b94', lineHeight: 18, fontFamily: 'Montserrat_400Regular' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 16,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#334155', fontFamily: 'Montserrat_400Regular' },
  tabRow: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  tabButton: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 4, borderWidth: 1 },
  activeTabBtn: { backgroundColor: '#00a9b5', borderColor: '#00a9b5' },
  inactiveTabBtn: { backgroundColor: '#ffffff', borderColor: '#e2e8f0' },
  tabText: { fontSize: 13, fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
  activeTabText: { color: '#ffffff' },
  inactiveTabText: { color: '#475569' },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 4,
    padding: 16,
    marginBottom: 14,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  clientName: { fontSize: 16, fontWeight: '500', color: '#00a9b5', fontFamily: 'Montserrat_500Medium' },
  clientMeta: { fontSize: 12, color: '#64748b', marginTop: 2, fontFamily: 'Montserrat_400Regular' },
  statusBadge: { backgroundColor: '#eafdfd', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 3 },
  statusText: { fontSize: 11, color: '#00a9b5', fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
  cardDesc: { fontSize: 13, color: '#475569', lineHeight: 18, marginVertical: 12, fontFamily: 'Montserrat_400Regular' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  metaGroup: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { fontSize: 12, color: '#94a3b8', fontFamily: 'Montserrat_400Regular' },
});