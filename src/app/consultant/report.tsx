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

interface ProcessTypeItem {
  title: string;
  count: number;
  percentage: number;
}

export default function Report() {
  const router = useRouter();
  const [selectedRange, setSelectedRange] = useState<'30' | '90' | '12'>('90');

  // Process type analytics data with pre-calculated percentages for bars
  const processTypes: ProcessTypeItem[] = [
    { title: 'Work Visa', count: 52, percentage: 80 },
    { title: 'Family Reunification', count: 38, percentage: 58 },
    { title: 'Permanent Residence', count: 29, percentage: 44 },
    { title: 'Citizenship', count: 17, percentage: 26 },
    { title: 'Student Visa', count: 12, percentage: 18 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Back Circle Button */}
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={20} color="#00B2B7" />
        </TouchableOpacity>

        {/* Page Title & Subtitle */}
        <Text style={styles.pageTitle}>Reports</Text>
        <Text style={styles.pageSubTitle}>Performance & case analytics</Text>

        {/* Time Range Filter Tabs */}
        <View style={styles.rangeTabContainer}>
          <TouchableOpacity
            style={[
              styles.rangeTab,
              selectedRange === '30' && styles.selectedRangeTab,
            ]}
            onPress={() => setSelectedRange('30')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.rangeTabText,
                selectedRange === '30' && styles.selectedRangeTabText,
              ]}
            >
              30 days
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.rangeTab,
              selectedRange === '90' && styles.selectedRangeTab,
            ]}
            onPress={() => setSelectedRange('90')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.rangeTabText,
                selectedRange === '90' && styles.selectedRangeTabText,
              ]}
            >
              90 days
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.rangeTab,
              selectedRange === '12' && styles.selectedRangeTab,
            ]}
            onPress={() => setSelectedRange('12')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.rangeTabText,
                selectedRange === '12' && styles.selectedRangeTabText,
              ]}
            >
              12 months
            </Text>
          </TouchableOpacity>
        </View>

        {/* 2x2 Stats Grid */}
        <View style={styles.statsGrid}>
          {/* Card 1: Cases resolved */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Cases resolved</Text>
            <Text style={styles.statValue}>148</Text>
            <View style={styles.trendRow}>
              <Feather name="trending-up" size={14} color="#00B2B7" />
              <Text style={[styles.trendText, { color: '#00B2B7' }]}>+12%</Text>
            </View>
          </View>

          {/* Card 2: Avg. resolution */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Avg. resolution</Text>
            <Text style={styles.statValue}>19d</Text>
            <View style={styles.trendRow}>
              <Feather name="trending-up" size={14} color="#00B2B7" />
              <Text style={[styles.trendText, { color: '#00B2B7' }]}>-3d</Text>
            </View>
          </View>

          {/* Card 3: Approval rate */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Approval rate</Text>
            <Text style={styles.statValue}>91%</Text>
            <View style={styles.trendRow}>
              <Feather name="trending-up" size={14} color="#00B2B7" />
              <Text style={[styles.trendText, { color: '#00B2B7' }]}>+4%</Text>
            </View>
          </View>

          {/* Card 4: Overdue tasks */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Overdue tasks</Text>
            <Text style={styles.statValue}>7</Text>
            <View style={styles.trendRow}>
              <Feather name="trending-down" size={14} color="#ef4444" />
              <Text style={[styles.trendText, { color: '#ef4444' }]}>+2</Text>
            </View>
          </View>
        </View>

        {/* Cases by process type Card */}
        <View style={styles.processCard}>
          <Text style={styles.processCardTitle}>Cases by process type</Text>

          {processTypes.map((item, index) => (
            <View key={index} style={styles.processItemContainer}>
              <View style={styles.processHeaderRow}>
                <Text style={styles.processTitle}>{item.title}</Text>
                <Text style={styles.processCount}>{item.count}</Text>
              </View>
              <View style={styles.progressBarTrack}>
                <View
                  style={[
                    styles.progressBarFill,
                    { width: `${item.percentage}%` },
                  ]}
                />
              </View>
            </View>
          ))}
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
  backCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 4,
  },
  pageSubTitle: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 20,
  },
  rangeTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  rangeTab: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRangeTab: {
    backgroundColor: '#00B2B7',
    borderColor: '#00B2B7',
  },
  rangeTabText: {
    fontSize: 13,
    color: '#475569',
    fontFamily: 'Montserrat_500Medium',
  },
  selectedRangeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 6,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  processCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  processCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 20,
  },
  processItemContainer: {
    marginBottom: 16,
  },
  processHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  processTitle: {
    fontSize: 13,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
  },
  processCount: {
    fontSize: 13,
    color: '#0f172a',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00B2B7',
    borderRadius: 3,
  },
});