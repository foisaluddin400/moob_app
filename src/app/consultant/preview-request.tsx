import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TextInput,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Icon from '@/icon/icon';

export default function PreviewRequest() {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()} activeOpacity={0.7}>
                        <Feather name="arrow-left" size={18} color="#00a9b5" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Preview Request</Text>
                    <View style={{ width: 36 }} />
                </View>

                {/* Top Banner */}
                <View style={styles.reqBanner}>
                    <View style={styles.reqHeaderRow}>
                        <Text style={styles.reqCode}>REQ-159</Text>
                        <View style={styles.badge}><Text style={styles.badgeText}>Documents received</Text></View>
                    </View>
                    <Text style={styles.reqTitle}>Student Visa</Text>
                </View>

                {/* Client profile */}
                <View style={styles.card}>
                    <View style={styles.cardTitleRow}>
                        <Feather name="user" size={16} color="#00a9b5" />
                        <Text style={styles.cardTitle}>Client profile</Text>
                    </View>
                    <View>
                        <View style={styles.infoRow}>
                            <Icon name="mail" />
                            <Text style={styles.infoLine}>elena@gmail.com</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Icon name="phone" />
                            <Text style={styles.infoLine}>+34 612 555 014</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Icon name="language" />
                            <Text style={styles.infoLine}>Spanish · Spanish</Text>
                        </View>

                        <View style={styles.infoRow}>
                            <Icon name="location" />
                            <Text style={styles.infoLine}>Spain → Germany</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.card}>
                    <View style={styles.cardTitleRow}>
                        <Feather name="file-text" size={16} color="#00a9b5" />
                        <Text style={styles.cardTitle}>Request details</Text>
                    </View>
                    <View style={styles.gridRow}><Text style={styles.label}>PURPOSE</Text><Text style={styles.value}>Citizenship</Text></View>
                    <View style={styles.gridRow}><Text style={styles.label}>DESTINATION</Text><Text style={styles.value}>Australia</Text></View>
                    <View style={styles.gridRow}><Text style={styles.label}>PREFERRED APPOINTMENT</Text><Text style={styles.value}>Flexible</Text></View>
                    <View style={styles.gridRow}><Text style={styles.label}>ADDITIONAL INFORMATION</Text><Text style={styles.value}>4 Members</Text></View>
                    <View style={styles.gridRow}><Text style={styles.label}>NOTES</Text><Text style={styles.value}>Null</Text></View>

                    <View style={styles.fileAttachment}>
                        <Feather name="paperclip" size={14} color="#64748b" />
                        <Text style={styles.fileName}>Supporting file 1.pdf  ·  240 KB</Text>
                    </View>
                </View>

                {/* Document Cards with AI Analysis */}
                {[1, 2, 3].map((_, index) => (
                    <View key={index} style={styles.docCard}>
                        <View style={styles.docCardHeader}>
                            <View style={styles.docHeaderLeft}>
                                <Feather name="file-text" size={18} color="#00a9b5" />
                                <View>
                                    <Text style={styles.docName}>Elena Rodriguez</Text>
                                    <Text style={styles.docMeta}>bank-statement.jpg · Image · 1p · Just now</Text>
                                </View>
                            </View>
                            <View style={styles.consultantTag}>
                                <Text style={styles.consultantTagText}>With consultant</Text>
                            </View>
                        </View>

                        {/* AI Analysis Bar */}
                        <View style={styles.aiBar}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <Feather name="maximize" size={14} color="#00a9b5" />
                                <Text style={styles.aiTitle}>AI analysis</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                <Feather name="pie-chart" size={12} color="#00a9b5" />
                                <Text style={styles.aiScore}>91%</Text>
                            </View>
                        </View>

                        {/* Actions */}
                        <View style={styles.actionRow}>
                            <TouchableOpacity style={[styles.actionBtn, styles.approveBtn]}>
                                <Feather name="check" size={14} color="#16a34a" />
                                <Text style={[styles.actionText, { color: '#16a34a' }]}>Approve</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.actionBtn, styles.rejectBtn]}>
                                <Feather name="x" size={14} color="#dc2626" />
                                <Text style={[styles.actionText, { color: '#dc2626' }]}>Reject</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.actionBtn, styles.previewBtn]}>
                                <Feather name="eye" size={14} color="#475569" />
                                <Text style={[styles.actionText, { color: '#475569' }]}>Preview</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

                {/* Review Notes */}
                <Text style={styles.sectionHeader}>Review notes</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    placeholder="Observations, eligibility checks, follow-ups..."
                    placeholderTextColor="#cbd5e1"
                />
                <TouchableOpacity style={styles.saveNotesBtn}>
                    <Text style={styles.saveNotesText}>Save notes</Text>
                </TouchableOpacity>
  <View style={styles.guidanceBanner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <Feather name="check-square" size={16} color="#00a9b5" />
                        <Text style={styles.guidanceTitle}>Immigration guidance</Text>
                    </View>
                    <Text style={styles.guidanceText}>
                        Approve every required document to unlock the consultation outcome.
                    </Text>
                </View>

                {/* Complete Consultation Button */}
                <TouchableOpacity style={styles.primaryBtn} onPress={() => setModalVisible(true)} activeOpacity={0.85}>
                    <Text style={styles.primaryBtnText}>Complete consultation</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Confirmation Bottom Sheet */}
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.bottomSheet}>
                                <View style={styles.handleBar} />
                                <Text style={styles.modalTitle}>Complete consultation</Text>
                                <Text style={styles.modalSub}>
                                    Are you sure you want to finalize and lock the consultation outcome for this client?
                                </Text>
                                <TouchableOpacity style={styles.primaryBtn} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.primaryBtnText}>Confirm Completion</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#f8fafc' },
    scrollContent: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 32 },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    label: { fontSize: 12, fontWeight: '400', color: '#595d63ff', fontFamily: 'Montserrat_400Regular' },
    value: { fontSize: 13, color: '#334155', fontFamily: 'Montserrat_400Regular' },
    fileAttachment: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#f8fafc', padding: 10, borderRadius: 4, marginTop: 8 },
    fileName: { fontSize: 12, color: '#64748b', fontFamily: 'Montserrat_400Regular' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#eafdfd', justifyContent: 'center', alignItems: 'center' },
    headerTitle: { fontSize: 16, fontWeight: '600', color: '#0f172a', fontFamily: 'Montserrat_600SemiBold' },
    reqBanner: { backgroundColor: '#eafdfd', borderWidth: 1, borderColor: '#b2f5f8', padding: 14, borderRadius: 4, marginBottom: 14 },
    reqHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    reqCode: { fontSize: 13, color: '#00a9b5', fontWeight: '600', fontFamily: 'Montserrat_600SemiBold' },
    badge: { backgroundColor: '#eafdfd', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 3 },
    badgeText: { fontSize: 11, color: '#00a9b5', fontFamily: 'Montserrat_400Regular' },
    reqTitle: { fontSize: 18, fontWeight: '700', color: '#0f172a', fontFamily: 'Montserrat_700Bold' },
    card: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#F2F2F2', borderRadius: 4, padding: 14, marginBottom: 12 },
    cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
    cardTitle: { fontSize: 15, fontWeight: '500', color: '#00a9b5', fontFamily: 'Montserrat_500Medium' },
    infoLine: { fontSize: 13, color: '#475569', marginBottom: 6, fontFamily: 'Montserrat_400Regular' },
    docCard: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#f1f5f9', borderRadius: 4, padding: 12, marginBottom: 12 },
    docCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 },
    docHeaderLeft: { flexDirection: 'row', gap: 10, alignItems: 'center' },
    docName: { fontSize: 14, fontWeight: '500', color: '#0f172a', fontFamily: 'Montserrat_500Medium' },
    docMeta: { fontSize: 11, color: '#94a3b8', fontFamily: 'Montserrat_400Regular' },
    consultantTag: { backgroundColor: '#fef3c7', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 3 },
    consultantTagText: { fontSize: 10, color: '#d97706', fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
    aiBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F0FDFE', padding: 8, borderColor:'#C4F7FC', borderWidth:1, borderRadius: 4, marginBottom: 10 },
    aiTitle: { fontSize: 12, color: '#00a9b5', fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
    aiScore: { fontSize: 12, color: '#00a9b5', fontWeight: '600', fontFamily: 'Montserrat_600SemiBold' },
    actionRow: { flexDirection: 'row', gap: 8 },
    actionBtn: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4, height: 34, borderRadius: 4 },
    approveBtn: { backgroundColor: '#F0FDF4' },
    rejectBtn: { backgroundColor: '#fef2f2' },
    previewBtn: { backgroundColor: '#f1f5f9' },
      guidanceBanner: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#f1f5f9', padding: 14, borderRadius: 4, marginBottom: 20 },
    guidanceTitle: { fontSize: 14, fontWeight: '600', color: '#00a9b5', fontFamily: 'Montserrat_600SemiBold' },
    guidanceText: { fontSize: 12, color: '#64748b', lineHeight: 18, fontFamily: 'Montserrat_400Regular' },
    actionText: { fontSize: 12, fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
    sectionHeader: { fontSize: 14, fontWeight: '500', color: '#0f172a', marginBottom: 8, fontFamily: 'Montserrat_500Medium' },
    textArea: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 4, height: 90, padding: 10, textAlignVertical: 'top', fontSize: 13, color: '#334155', fontFamily: 'Montserrat_400Regular' },
    saveNotesBtn: { alignSelf: 'flex-start', backgroundColor: '#f1f5f9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 4, marginTop: 8, marginBottom: 20 },
    saveNotesText: { fontSize: 12, color: '#475569', fontWeight: '500', fontFamily: 'Montserrat_500Medium' },
    primaryBtn: { backgroundColor: '#00a9b5', height: 48, borderRadius: 2, justifyContent: 'center', alignItems: 'center' },
    primaryBtnText: { color: '#ffffff', fontSize: 14, fontWeight: '600', fontFamily: 'Montserrat_600SemiBold' },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end' },
    bottomSheet: { backgroundColor: '#ffffff', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 20 },
    handleBar: { width: 36, height: 4, backgroundColor: '#cbd5e1', borderRadius: 2, alignSelf: 'center', marginBottom: 16 },
    modalTitle: { fontSize: 16, fontWeight: '600', color: '#00a9b5', marginBottom: 8, fontFamily: 'Montserrat_600SemiBold' },
    modalSub: { fontSize: 13, color: '#64748b', marginBottom: 20, lineHeight: 18, fontFamily: 'Montserrat_400Regular' },
});