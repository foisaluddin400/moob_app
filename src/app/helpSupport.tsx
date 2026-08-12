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
import CustomInput from '@/ui/CustomInput';


export default function HelpSupport() {
  const router = useRouter();
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const faqItems = [
    'How do I claim an offer?',
    'How do I save a business?',
    'Can I use SomSpot offline?',
    'How do I change my location?',
  ];

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
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Email Us Online</Text>

        {/* Email Us Online Box */}
        <View style={styles.emailBox}>
          <View style={styles.emailIconBox}>
            <Feather name="mail" size={20} color="#00a9b5" />
          </View>
          <View>
            <Text style={styles.emailBoxTitle}>Email Us</Text>
            <Text style={styles.onlineStatusText}>Online</Text>
          </View>
        </View>

        {/* Subject using CustomInput */}
        <CustomInput
          placeholder="Subject"
          iconName="mail"
          value={subject}
          onChangeText={setSubject}
        />

        {/* Description using CustomInput */}
        <CustomInput
          placeholder="Describe your issue in detail..."
          value={description}
          onChangeText={setDescription}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          style={styles.textArea}
        />

        {/* Send Message Button */}
        <TouchableOpacity style={styles.sendBtn} activeOpacity={0.85}>
          <Text style={styles.sendBtnText}>Send Message</Text>
        </TouchableOpacity>

        {/* Frequently Asked Section */}
        <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 12 }]}>
          Frequently Asked
        </Text>

        <View style={styles.faqCard}>
          {faqItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.faqRow,
                index < faqItems.length - 1 && styles.borderBottom,
              ]}
              activeOpacity={0.7}
            >
              <Text style={styles.faqText}>{item}</Text>
              <Feather name="chevron-right" size={18} color="#94a3b8" />
            </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 12,
    fontFamily: 'Montserrat_600SemiBold',
  },
  emailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  emailIconBox: {
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#00a9b5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emailBoxTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  onlineStatusText: {
    fontSize: 11,
    color: '#10B981',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  textArea: {
    height: 90,
    paddingTop: 10,
  },
  sendBtn: {
    backgroundColor: '#00a9b5',
    height: 46,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  sendBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  faqRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  faqText: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
});