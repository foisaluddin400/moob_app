import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function RequestDocument() {
  const router = useRouter();
  const [customText, setCustomText] = useState('');
  const [tags, setTags] = useState([
    'Passport',
    'National ID',
    'Certificate',
    'Birth Certificate',
    'Employment Letter',
  ]);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const addCustomDoc = () => {
    if (customText.trim()) {
      setTags([...tags, customText.trim()]);
      setCustomText('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
            <Feather name="arrow-left" size={18} color="#00B2B7" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Request documents</Text>
          <View style={{ width: 36 }} />
        </View>

        <View style={styles.mainCard}>
          {/* Selected Checked Items */}
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <View key={idx} style={styles.checkedBox}>
              <View style={styles.checkSquare}>
                <Feather name="check" size={16} color="#ffffff" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.docTitle}>Passport</Text>
                <Text style={styles.docSub}>Identity</Text>
              </View>
              <View style={styles.reqBadge}>
                <Feather name="sliders" size={12} color="#00B2B7" />
                <Text style={styles.reqBadgeText}>{idx < 2 ? 'Req' : 'Opt'}</Text>
              </View>
            </View>
          ))}

          {/* Unchecked Items */}
          {[1, 2, 3].map((_, idx) => (
            <View key={idx} style={styles.uncheckedBox}>
              <View style={styles.emptySquare} />
              <View>
                <Text style={styles.docTitle}>Birth Certificate</Text>
                <Text style={styles.docSub}>Civil</Text>
              </View>
            </View>
          ))}

          {/* Add Custom Document Form */}
          <View style={styles.addInputRow}>
            <TextInput
              style={styles.customInput}
              placeholder="Add a custom document"
              placeholderTextColor="#cbd5e1"
              value={customText}
              onChangeText={setCustomText}
            />
            <TouchableOpacity style={styles.addBtn} onPress={addCustomDoc}>
              <Feather name="plus" size={20} color="#334155" />
            </TouchableOpacity>
          </View>

          {/* Dynamic Chip Tags */}
          <View style={styles.chipContainer}>
            {tags.map((tag, idx) => (
              <TouchableOpacity key={idx} style={styles.chip} onPress={() => removeTag(tag)}>
                <Text style={styles.chipText}>{tag}</Text>
                <Feather name="x" size={12} color="#00B2B7" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Info Card inside Sheet */}
          <View style={styles.noticeBox}>
            <Text style={styles.noticeText}>
              The client instantly receives a push notification, an email and an in-app alert. The request moves to "Waiting for client documents".
            </Text>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => router.push('/consultant/preview-request' as any)}
          activeOpacity={0.85}
        >
          <Feather name="send" size={16} color="#ffffff" style={{ marginRight: 8 }} />
          <Text style={styles.sendBtnText}>Send 5 document requests</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  scrollContent: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 32 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#eafdfd', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#0f172a', fontFamily: 'Montserrat_600SemiBold' },
  mainCard: { backgroundColor: '#ffffff', borderRadius: 4, borderWidth: 1, borderColor: '#f1f5f9', padding: 14, marginBottom: 20 },
  checkedBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EAFDFD', borderWidth: 1, borderColor: '#9FFDFF', borderRadius: 4, padding: 10, marginBottom: 8, gap: 10 },
  checkSquare: { width: 28, height: 28, backgroundColor: '#00B2B7', borderRadius: 3, justifyContent: 'center', alignItems: 'center' },
  docTitle: { fontSize: 14, fontWeight: '400', color: '#0f172a', fontFamily: 'Montserrat_400Regular' },
  docSub: { fontSize: 11, color: '#94a3b8', fontFamily: 'Montserrat_400Regular' },
  reqBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#ffffff', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 3 },
  reqBadgeText: { fontSize: 11, color: '#00B2B7', fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
  uncheckedBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#f1f5f9', borderRadius: 4, padding: 10, marginBottom: 8, gap: 10 },
  emptySquare: { width: 24, height: 24, borderRadius: 6, borderWidth: 1.5, borderColor: '#cbd5e1' },
  addInputRow: { flexDirection: 'row', gap: 8, marginTop: 8, marginBottom: 12 },
  customInput: { flex: 1, borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 4, paddingHorizontal: 12, height: 44, fontSize: 13, color: '#334155', fontFamily: 'Montserrat_400Regular' },
  addBtn: { width: 44, height: 44, backgroundColor: '#f1f5f9', borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  chip: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#eafdfd', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4 },
  chipText: { fontSize: 12, color: '#00B2B7', fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
  noticeBox: { backgroundColor: '#f8fafc', padding: 12, borderRadius: 4 },
  noticeText: { fontSize: 12, color: '#64748b', lineHeight: 18, fontFamily: 'Montserrat_400Regular' },
  sendBtn: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00B2B7', height: 48, borderRadius: 2 },
  sendBtnText: { color: '#ffffff', fontSize: 14, fontWeight: '600', fontFamily: 'Montserrat_600SemiBold' },
});