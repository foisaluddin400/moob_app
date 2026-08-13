import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function RequestSubmittedScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const reqNumber = (params.reqNumber as string) || 'REQ-657';
  const type = (params.type as string) || 'Family Reunification';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
       <View style={styles.header}>
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => router.back()}
                  activeOpacity={0.7}
                >
                  <Feather name="arrow-left" size={18} color="#00B2B7" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Request submitted</Text>
                <View style={{ width: 36 }} />
              </View>

        <View style={styles.centerContent}>
          {/* Check Circle Icon Box */}
          <View style={styles.successCircle}>
            <Feather name="check" size={28} color="#00B2B7" />
          </View>

          <Text style={styles.title}>Request submitted</Text>
          <Text style={styles.subtitle}>
            {reqNumber} is with the immigration team. A consultant will review it and tell you exactly which documents to prepare.
          </Text>

          {/* Info Card */}
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>What happens next</Text>
            <Text style={styles.infoDesc}>
              You'll get a notification the moment your consultant requests documents. Nothing to do until then.
            </Text>
          </View>
        </View>

        {/* Buttons Bottom */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.viewRequestBtn}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: '/client/requestDetails',
                params: { reqNumber, type },
              })
            }
          >
            <Text style={styles.viewRequestBtnText}>View my request</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backHomeBtn}
            onPress={() => router.replace('/client/requests')}
            activeOpacity={0.7}
          >
            <Text style={styles.backHomeText}>Back to home</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e6f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
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
  centerContent: {
    alignItems: 'center',
    marginTop: 40,
  },
  successCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#00B2B7',
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: 'Montserrat_400Regular',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#EAFDFD',
    borderRadius: 4,
    padding: 16,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 4,
  },
  infoDesc: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },
  bottomSection: {
    width: '100%',
  },
  viewRequestBtn: {
    backgroundColor: '#00B2B7',
    height: 46,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  viewRequestBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  backHomeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  backHomeText: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: 'Montserrat_500Medium',
  },
});