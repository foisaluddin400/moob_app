import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import UploadDocumentModal from '@/components/UploadDocumentModal';


type TabType = 'Requested' | 'Uploaded' | 'Rejected' | 'Approved';

interface DocItem {
  id: string;
  title: string;
  description: string;
  status: 'Waiting for Upload' | 'Under Review' | 'Action Required' | 'Approved';
  dueDate?: string;
  submittedTime?: string;
  category: TabType;
}

const MOCK_DOCUMENTS: DocItem[] = [
  // Requested Tab
  {
    id: '1',
    title: 'Passport',
    description: 'Please upload your passport.',
    status: 'Waiting for Upload',
    dueDate: 'Nov 15, 2026',
    category: 'Requested',
  },
  {
    id: '2',
    title: 'National ID',
    description: 'Please upload your national id.',
    status: 'Waiting for Upload',
    dueDate: 'Nov 15, 2026',
    category: 'Requested',
  },
  {
    id: '3',
    title: 'Birth Certificate',
    description: 'Please upload your birth certificate.',
    status: 'Waiting for Upload',
    dueDate: 'Nov 15, 2026',
    category: 'Requested',
  },
  {
    id: '4',
    title: 'Marriage Certificate',
    description: 'Please upload your marriage certificate.',
    status: 'Waiting for Upload',
    dueDate: 'Nov 15, 2026',
    category: 'Requested',
  },
  {
    id: '5',
    title: 'Employment Letter',
    description: 'Please upload your employment letter.',
    status: 'Waiting for Upload',
    dueDate: 'Nov 15, 2026',
    category: 'Requested',
  },

  // Uploaded Tab
  {
    id: '6',
    title: 'Bank Statement',
    description:
      'Your bank statement has been submitted and is currently being reviewed by your consultant.',
    status: 'Under Review',
    dueDate: 'Nov 15, 2026',
    submittedTime: 'Submitted Just now',
    category: 'Uploaded',
  },
  {
    id: '7',
    title: 'Employment Letter',
    description:
      'Your employment letter has been submitted and is currently being reviewed by your consultant.',
    status: 'Under Review',
    dueDate: 'Nov 15, 2026',
    submittedTime: 'Submitted 4 hours ago',
    category: 'Uploaded',
  },

  // Rejected Tab
  {
    id: '8',
    title: 'Bank Statement',
    description: 'Last three months, showing your name and balance.',
    status: 'Action Required',
    dueDate: 'Nov 15, 2026',
    category: 'Rejected',
  },
  {
    id: '9',
    title: 'Bank Statement',
    description: 'Last three months, showing your name and balance.',
    status: 'Action Required',
    dueDate: 'Nov 15, 2026',
    category: 'Rejected',
  },

  // Approved Tab
  {
    id: '10',
    title: 'Passport',
    description: 'Your passport has been successfully reviewed and approved.',
    status: 'Approved',
    submittedTime: 'Approved 2 days ago',
    category: 'Approved',
  },
  {
    id: '11',
    title: 'Passport',
    description: 'Your passport has been successfully reviewed and approved.',
    status: 'Approved',
    submittedTime: 'Approved 2 days ago',
    category: 'Approved',
  },
];

export default function DocumentsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>('Requested');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDocTitle, setSelectedDocTitle] = useState('Birth Certificate');

  const filteredDocs = MOCK_DOCUMENTS.filter(
    (doc) => doc.category === activeTab
  );

  const handleOpenUpload = (title: string) => {
    setSelectedDocTitle(title);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Documents</Text>
          <Text style={styles.headerSubTitle}>14 waiting for you</Text>
        </View>

        {/* Status Tab Navigation */}
        <View style={styles.tabBar}>
          {(['Requested', 'Uploaded', 'Rejected', 'Approved'] as TabType[]).map(
            (tab) => {
              const isActive = activeTab === tab;
              return (
                <TouchableOpacity
                  key={tab}
                  style={[styles.tabItem, isActive && styles.tabItemActive]}
                  onPress={() => setActiveTab(tab)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.tabText,
                      isActive && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            }
          )}
        </View>

        {/* Documents Scroll Container */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {filteredDocs.map((item) => (
            <View key={item.id} style={styles.docCard}>
              {/* Card Title & Status Badge */}
              <View style={styles.cardHeader}>
                <View style={styles.titleLeft}>
                  <Feather name="file-text" size={16} color="#00a9b5" />
                  <Text style={styles.docTitle}>{item.title}</Text>
                </View>

                {item.status === 'Waiting for Upload' && (
                  <View style={[styles.badge, styles.badgeWaiting]}>
                    <Text style={[styles.badgeText, { color: '#00a9b5' }]}>
                      Waiting for Upload
                    </Text>
                  </View>
                )}

                {item.status === 'Under Review' && (
                  <View style={[styles.badge, styles.badgeReview]}>
                    <Text style={[styles.badgeText, { color: '#D97706' }]}>
                      Under Review
                    </Text>
                  </View>
                )}

                {item.status === 'Action Required' && (
                  <View style={[styles.badge, styles.badgeAction]}>
                    <Text style={[styles.badgeText, { color: '#EF4444' }]}>
                      Action Required
                    </Text>
                  </View>
                )}

                {item.status === 'Approved' && (
                  <View style={[styles.badge, styles.badgeApproved]}>
                    <Text style={[styles.badgeText, { color: '#059669' }]}>
                      Approved
                    </Text>
                  </View>
                )}
              </View>

              {/* Description */}
              <Text style={styles.docDesc}>{item.description}</Text>

              {/* Due Date or Submission Info */}
              {item.dueDate && (
                <View style={styles.metaRow}>
                  <Feather name="calendar" size={12} color="#94a3b8" />
                  <Text style={styles.metaText}>Due: {item.dueDate}</Text>
                </View>
              )}

              {item.submittedTime && (
                <Text style={styles.submittedTimeText}>
                  {item.submittedTime}
                </Text>
              )}

              {/* Action Buttons */}
              {item.status === 'Waiting for Upload' && (
                <TouchableOpacity
                  style={styles.uploadBtn}
                  activeOpacity={0.85}
                  onPress={() => handleOpenUpload(item.title)}
                >
                  <Feather
                    name="upload"
                    size={14}
                    color="#FFFFFF"
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.uploadBtnText}>Upload Document</Text>
                </TouchableOpacity>
              )}

              {item.status === 'Action Required' && (
                <TouchableOpacity
                  style={styles.uploadNewBtn}
                  activeOpacity={0.85}
                  onPress={() => handleOpenUpload(item.title)}
                >
                  <Feather
                    name="refresh-cw"
                    size={14}
                    color="#FFFFFF"
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.uploadNewBtnText}>
                    Upload New Document
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Sheet Upload Modal */}
      <UploadDocumentModal
        visible={modalVisible}
        docTitle={selectedDocTitle}
        onClose={() => setModalVisible(false)}
      />
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
    paddingHorizontal: 20,
    paddingTop: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
  },
  headerSubTitle: {
    fontSize: 11,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 2,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 6,
    marginBottom: 16,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tabItemActive: {
    backgroundColor: '#00B2B7',
    borderColor: '#00B2B7',
  },
  tabText: {
    fontSize: 11,
    color: '#64748b',
    fontFamily: 'Montserrat_500Medium',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  docCard: {
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
    marginBottom: 8,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  docTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00B2B7',
    fontFamily: 'Montserrat_600SemiBold',
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 2,
  },
  badgeWaiting: {
    backgroundColor: '#EAFDFD',
  },
  badgeReview: {
    backgroundColor: '#FEF3C7',
  },
  badgeAction: {
    backgroundColor: '#FEE2E2',
  },
  badgeApproved: {
    backgroundColor: '#D1FAE5',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
  docDesc: {
    fontSize: 11,
    color: '#475569',
    fontFamily: 'Montserrat_400Regular',
    lineHeight: 16,
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  metaText: {
    fontSize: 10,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
  submittedTimeText: {
    fontSize: 10,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 4,
  },
  uploadBtn: {
    backgroundColor: '#00B2B7',
    height: 40,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  uploadNewBtn: {
    backgroundColor: '#EF4444',
    height: 40,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  uploadNewBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});