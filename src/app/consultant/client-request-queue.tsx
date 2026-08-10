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

export default function ClientRequestQueue() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather
            name="arrow-left"
            size={20}
            color="#00B2B7"
          />
        </TouchableOpacity>

        {/* Title Section */}
        <Text style={styles.title}>
          Request queue
        </Text>

        <Text style={styles.subtitle}>
          3 awaiting a decision
        </Text>

        {/* Client-first Intake Info Box */}
        <View style={styles.infoBanner}>
          <View style={styles.infoBannerHeader}>
            <Icon name="carve" />

            <Text style={styles.infoBannerTitle}>
              Client-first intake
            </Text>
          </View>

          <Text style={styles.infoBannerText}>
            Review the client’s profile and goals, adjust the
            category if needed, then create the case with a
            ready-to-use checklist.
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={18}
            color="#94a3b8"
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search requests"
            placeholderTextColor="#cbd5e1"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Card 1 */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <View style={styles.clientInfo}>
              <Text style={styles.clientName}>
                David Kim
              </Text>

              <Text style={styles.visaMeta}>
                Student Visa · REQ-159
              </Text>
            </View>

            <View
              style={[
                styles.badge,
                styles.newRequestBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  styles.newRequestText,
                ]}
              >
                New request
              </Text>
            </View>
          </View>

          <Text style={styles.description}>
            Relocate while continuing remote work for a
            Seoul-based employer.
          </Text>

          <View style={styles.cardFooter}>
            <View style={styles.timeRow}>
              <Feather
                name="clock"
                size={14}
                color="#94a3b8"
              />

              <Text style={styles.timeText}>
                Just now
              </Text>
            </View>

            <Feather
              name="chevron-right"
              size={18}
              color="#cbd5e1"
            />
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <View style={styles.clientInfo}>
              <Text style={styles.clientName}>
                Elena Rodriguez
              </Text>

              <Text style={styles.visaMeta}>
                Digital Nomad Visa · REQ-201
              </Text>
            </View>

            <View
              style={[
                styles.badge,
                styles.inReviewBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  styles.inReviewText,
                ]}
              >
                In review
              </Text>
            </View>
          </View>

          <Text style={styles.description}>
            Relocate while continuing remote work for a
            Seoul-based employer.
          </Text>

          <View style={styles.cardFooter}>
            <View style={styles.timeRow}>
              <Feather
                name="clock"
                size={14}
                color="#94a3b8"
              />

              <Text style={styles.timeText}>
                12 : 20 PM
              </Text>
            </View>

            <Feather
              name="chevron-right"
              size={18}
              color="#cbd5e1"
            />
          </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <View style={styles.clientInfo}>
              <Text style={styles.clientName}>
                David Kim
              </Text>

              <Text style={styles.visaMeta}>
                Digital Nomad Visa · REQ-201
              </Text>
            </View>

            <View
              style={[
                styles.badge,
                styles.inReviewBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  styles.inReviewText,
                ]}
              >
                In review
              </Text>
            </View>
          </View>

          <Text style={styles.description}>
            Relocate while continuing remote work for a
            Seoul-based employer.
          </Text>

          <View style={styles.cardFooter}>
            <View style={styles.timeRow}>
              <Feather
                name="clock"
                size={14}
                color="#94a3b8"
              />

              <Text style={styles.timeText}>
                Yesterday
              </Text>
            </View>

            <Feather
              name="chevron-right"
              size={18}
              color="#cbd5e1"
            />
          </View>
        </TouchableOpacity>
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

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#e6f7f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    color: 'black',
    marginBottom: 4,
    fontFamily: 'Montserrat_400Regular',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
    fontFamily: 'Montserrat_400Regular',
  },

  infoBanner: {
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#9FFDFF',
    borderRadius: 4,
    padding: 16,
    marginBottom: 20,
  },

  infoBannerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  infoBannerTitle: {
    fontSize: 16,
    marginLeft: 4,
    color: '#065357',
    fontFamily: 'Montserrat_500Medium',
  },

  infoBannerText: {
    fontSize: 13,
    color: '#007a87',
    lineHeight: 19,
    fontFamily: 'Montserrat_400Regular',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 20,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#334155',
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingVertical: 0,
    fontFamily: 'Montserrat_400Regular',

  

  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  clientInfo: {
    flex: 1,
    marginRight: 10,
  },

  clientName: {
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 2,
    fontFamily: 'Montserrat_600SemiBold',
  },

  visaMeta: {
    fontSize: 13,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 3,
  },

  badgeText: {
    fontSize: 12,
    fontFamily: 'Montserrat_500Medium',
  },

  newRequestBadge: {
    backgroundColor: '#e6f7f8',
  },

  newRequestText: {
    color: '#00a9b5',
  },

  inReviewBadge: {
    backgroundColor: '#fef6e6',
  },

  inReviewText: {
    color: '#d97706',
  },

  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 14,
    fontFamily: 'Montserrat_400Regular',
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  timeText: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
});