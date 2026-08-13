import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TaskDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Route Params with Fallbacks
  const title = (params.title as string) || 'Translate Employment Contract (ES→EN)';
  const caseId = (params.caseId as string) || 'CAS-089';
  const clientName = (params.clientName as string) || 'Elena Rodriguez';
  const dueDate = (params.dueDate as string) || 'Oct 22, 2026';
  const instruction = (params.instruction as string) || 'Certified translation required.';

  // Local State to Manage Completed vs In Progress state
  const [status, setStatus] = useState<'In Progress' | 'Completed'>(
    (params.initialStatus as 'In Progress' | 'Completed') || 'In Progress'
  );
  const [deliveryNote, setDeliveryNote] = useState<string>(
    (params.initialNote as string) || ''
  );
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(
    params.initialStatus === 'Completed'
  );

  // File Upload Handler Simulation
  const handleUploadFile = () => {
    setIsFileUploaded(true);
    Alert.alert('Success', 'Deliverable file uploaded successfully.');
  };

  // Mark as Completed Handler
  const handleMarkAsCompleted = () => {
    if (!isFileUploaded) {
      Alert.alert('Upload Required', 'Please upload a deliverable file before completing.');
      return;
    }
    setStatus('Completed');
    if (!deliveryNote.trim()) {
      setDeliveryNote('Task completed and deliverable uploaded.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backCircle}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color="#00B2B7" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Task Detail</Text>
          <View style={{ width: 42 }} />
        </View>

        {/* Task Overview Card */}
        <View style={styles.detailCard}>
          <View style={styles.titleRow}>
            <Text style={styles.taskTitle}>{title}</Text>
            <View
              style={[
                styles.statusBadge,
                status === 'In Progress'
                  ? styles.badgeInProgress
                  : styles.badgeCompleted,
              ]}
            >
              <Text
                style={[
                  styles.statusBadgeText,
                  status === 'In Progress'
                    ? styles.badgeTextInProgress
                    : styles.badgeTextCompleted,
                ]}
              >
                {status}
              </Text>
            </View>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Case</Text>
            <Text style={styles.metaValue}>{caseId}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Client</Text>
            <Text style={styles.metaValue}>{clientName}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>Due date</Text>
            <Text style={styles.metaValue}>{dueDate}</Text>
          </View>

          <View style={styles.instructionBox}>
            <Text style={styles.instructionText}>{instruction}</Text>
          </View>
        </View>

        {/* Reference Files Section */}
        <Text style={styles.sectionTitle}>Reference Files</Text>
        <View style={styles.card}>
          <View style={[styles.fileRow, styles.borderBottom]}>
            <View style={styles.fileLeft}>
              <Feather name="file-text" size={18} color="#475569" />
              <Text style={styles.fileName}>Original Document.pdf</Text>
            </View>
            <Feather name="download" size={18} color="#00B2B7" />
          </View>

          <View style={styles.fileRow}>
            <View style={styles.fileLeft}>
              <Feather name="file-text" size={18} color="#475569" />
              <Text style={styles.fileName}>Instructions.pdf</Text>
            </View>
            <Feather name="download" size={18} color="#00B2B7" />
          </View>
        </View>

        {/* Deliverable Section (Conditional) */}
        <Text style={styles.sectionTitle}>Deliverable</Text>
        {status === 'Completed' || isFileUploaded ? (
          <View style={styles.successUploadBox}>
            <Text style={styles.successUploadText}>
              Deliverable uploaded successfully.
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.uploadBox}
            onPress={handleUploadFile}
            activeOpacity={0.7}
          >
            <Feather name="upload" size={24} color="#cbd5e1" style={{ marginBottom: 8 }} />
            <Text style={styles.uploadText}>Tap to upload your work</Text>
          </TouchableOpacity>
        )}

        {/* Delivery Notes Section (Conditional Read-only vs Editable) */}
        <Text style={styles.sectionTitle}>Delivery Notes</Text>
        <View style={styles.notesContainer}>
          {status === 'Completed' ? (
            <Text style={styles.notesReadOnlyText}>
              {deliveryNote || 'Task completed and deliverable uploaded.'}
            </Text>
          ) : (
            <TextInput
              style={styles.notesInput}
              placeholder="Add notes about your deliverable..."
              placeholderTextColor="#94a3b8"
              multiline
              numberOfLines={3}
              textAlignVertical="top"
              value={deliveryNote}
              onChangeText={setDeliveryNote}
            />
          )}
        </View>

        {/* Mark as Completed Button (Only visible when status === 'In Progress') */}
        {status === 'In Progress' && (
          <TouchableOpacity
            style={styles.markBtn}
            onPress={handleMarkAsCompleted}
            activeOpacity={0.85}
          >
            <Feather name="check" size={18} color="#ffffff" style={{ marginRight: 8 }} />
            <Text style={styles.markBtnText}>Mark as Completed</Text>
          </TouchableOpacity>
        )}
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
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
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 18,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#00B2B7',
    flex: 1,
    paddingRight: 10,
    fontFamily: 'Montserrat_600SemiBold',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 2,
  },
  badgeInProgress: {
    backgroundColor: '#FEF3C7',
  },
  badgeCompleted: {
    backgroundColor: '#D1FAE5',
  },
  statusBadgeText: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  badgeTextInProgress: {
    color: '#D97706',
  },
  badgeTextCompleted: {
    color: '#059669',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metaLabel: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  metaValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  instructionBox: {
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 4,
    marginTop: 12,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 12,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00B2B7',
    marginBottom: 10,
    fontFamily: 'Montserrat_600SemiBold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 20,
  },
  fileRow: {
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
  fileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fileName: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  uploadBox: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 4,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
  },
  successUploadBox: {
    backgroundColor: '#ECFDF5',
    borderRadius: 4,
    padding: 14,
    marginBottom: 20,
  },
  successUploadText: {
    fontSize: 13,
    color: '#059669',
    fontFamily: 'Montserrat_500Medium',
  },
  notesContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 4,
    padding: 12,
    minHeight: 80,
    marginBottom: 24,
  },
  notesInput: {
    fontSize: 13,
    color: '#0f172a',
    fontFamily: 'Montserrat_400Regular',
  },
  notesReadOnlyText: {
    fontSize: 13,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
  },
  markBtn: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});