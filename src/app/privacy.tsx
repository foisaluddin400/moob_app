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

export default function Privacy() {
  const router = useRouter();

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
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy Policy</Text>
          <Text style={styles.dateText}>Last updated: April 2026</Text>

          <Text style={styles.paragraph}>
            We respect your privacy. SomSpot collects only the data needed to help
            you discover nearby businesses and claim offers — your location,
            account details, and saved items.
          </Text>

          <Text style={styles.paragraph}>
            We never sell your personal information to third parties. You can request
            a copy of your data or delete your account at any time from Privacy &
            Security settings.
          </Text>

          <Text style={styles.paragraph}>
            We never sell your personal information to third parties. You can request
            a copy of your data or delete your account at any time from Privacy &
            Security settings.
          </Text>

          <Text style={styles.paragraph}>
            We never sell your personal information to third parties. You can request
            a copy of your data or delete your account at any time from Privacy &
            Security settings.
          </Text>

          <Text style={styles.paragraph}>
            For questions about how we handle data, email{' '}
            <Text style={styles.emailLink}>privacy@somspot.so</Text>
          </Text>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 2,
    fontFamily: 'Montserrat_700Bold',
  },
  dateText: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  paragraph: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  emailLink: {
    color: '#0f172a',
    fontWeight: '700',
    fontFamily: 'Montserrat_700Bold',
  },
});