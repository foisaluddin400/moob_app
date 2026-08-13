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

export interface RequestItem {
  id: string;
  reqNumber: string;
  type: string;
  description: string;
  location: string;
  date: string;
  status: string;
}

export const INITIAL_REQUESTS: RequestItem[] = [
  {
    id: '1',
    reqNumber: 'REQ-198',
    type: 'Work Visa',
    description: 'Take up a senior engineering role in Berlin.',
    location: 'Germany',
    date: 'Oct 20, 2026',
    status: 'Request submitted',
  },
  {
    id: '2',
    reqNumber: 'REQ-198',
    type: 'Student Visa',
    description: 'Take up a senior engineering role in Berlin.',
    location: 'Germany',
    date: 'Oct 20, 2026',
    status: 'Documents received',
  },
];

export default function RequestsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Submitted' | 'Waiting'>('Submitted');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Requests</Text>
            <Text style={styles.headerSubTitle}>
              {INITIAL_REQUESTS.length} immigration requests
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addFab}
            onPress={() => router.push('/client/createRequest')}
            activeOpacity={0.85}
          >
            <Feather name="plus" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Filter Bar */}
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('Submitted')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Submitted' && styles.activeTabText,
              ]}
            >
              Submitted
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab('Waiting')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Waiting' && styles.activeTabText,
              ]}
            >
              Waiting for a consultant
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Request Cards */}
          {INITIAL_REQUESTS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.7}
              onPress={() =>
                router.push({
                  pathname: '/client/requestDetails',
                  params: {
                    reqNumber: item.reqNumber,
                    type: item.type,
                    status: item.status,
                  },
                })
              }
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.type}</Text>
                <Feather name="chevron-right" size={18} color="#94a3b8" />
              </View>

              <Text style={styles.cardDescription}>{item.description}</Text>

              <View style={styles.cardMetaRow}>
                <View style={styles.metaItem}>
                  <Feather name="map-pin" size={12} color="#94a3b8" />
                  <Text style={styles.metaText}>{item.location}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Feather name="clock" size={12} color="#94a3b8" />
                  <Text style={styles.metaText}>{item.date}</Text>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.statusBadgeText}>{item.status}</Text>
                <Text style={styles.reqNumber}>{item.reqNumber}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  headerSubTitle: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 2,
  },
  addFab: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#00B2B7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  tabText: {
    fontSize: 15,
    color: '#adb9c9',
    fontFamily: 'Montserrat_500Medium',
  },
  activeTabText: {
    color: '#0f172a',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 12,
  },
  cardMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 14,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
  },
  statusBadgeText: {
    fontSize: 11,
    color: '#00B2B7',
    backgroundColor: '#b5f4f854',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  reqNumber: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
});