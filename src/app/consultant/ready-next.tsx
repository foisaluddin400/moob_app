import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

import Icon from '@/icon/icon';

export default function ReadyNext() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.centerContent}>
          {/* Checkmark Icon Circle */}
          <View style={styles.iconCircle}>
            <Icon name="done"  />
          </View>

          {/* Heading */}
          <Text style={styles.title}>Ready for the next step</Text>

          {/* Subtitle / Description */}
          <Text style={styles.description}>
            YCAS-780 has been created with a personalized document checklist, workflow stages, and form preparation.
          </Text>
        </View>

        {/* Bottom Button */}
        <TouchableOpacity
          style={styles.openCaseButton}
          onPress={() => router.push('/consultant' as any)} // Adjust to destination screen
          activeOpacity={0.85}
        >
          <Text style={styles.openCaseText}>Open case</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 4,
    backgroundColor: '#eafdfd',
    borderWidth: 1,
    borderColor: '#cff8fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
  },
  description: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 12,
    fontFamily: 'Montserrat_400Regular',
  },
  openCaseButton: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openCaseText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});