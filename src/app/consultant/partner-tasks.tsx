import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import PartnerAddModal from '@/components/partnerAddModal';
import { useRouter } from 'expo-router';


const INITIAL_TASKS = [
    {
        id: '1',
        title: 'Notarize Family Documents',
        status: 'Pending',
        statusType: 'warning',
        caseCode: 'CAS-104',
        clientName: 'Sarah Smith',
        dueDate: 'Oct 25, 2026',
        assignee: 'Nadia Volkova',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Translate Employment Contract (ES→EN)',
        status: 'In Progress',
        statusType: 'info',
        caseCode: 'CAS-089',
        clientName: 'Elena Rodriguez',
        dueDate: 'Oct 22, 2026',
        assignee: 'Nadia Volkova',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Translate Employment Contract (ES→EN)',
        status: 'In Progress',
        statusType: 'info',
        caseCode: 'CAS-089',
        clientName: 'Elena Rodriguez',
        dueDate: 'Oct 22, 2026',
        assignee: 'Nadia Volkova',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    },
];

export default function PartnerTasksScreen({ navigation }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const router = useRouter();
    const handleAddNewTask = (data: { title: string; caseId: string; partner: string; dueDate: string }) => {
        if (!data.title) return;
        const newTask = {
            id: Date.now().toString(),
            title: data.title,
            status: 'Pending',
            statusType: 'warning',
            caseCode: data.caseId || 'CAS-000',
            clientName: 'Client',
            dueDate: data.dueDate || 'Pending',
            assignee: data.partner || 'Unassigned',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
        };
        setTasks([newTask, ...tasks]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Navigation Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={20} color="#00B2B2" />
                    </TouchableOpacity>
                </View>

                {/* Title Section */}
                <View style={styles.titleSection}>
                    <View>
                        <Text style={styles.pageTitle}>Partner Tasks</Text>
                        <Text style={styles.pageSubtitle}>Delegated work</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.addBtn}
                        activeOpacity={0.8}
                        onPress={() => setModalVisible(true)}
                    >
                        <Feather name="plus" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                {/* Task Cards List */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {tasks.map((task) => (
                        <View key={task.id} style={styles.taskCard}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => router.push('/consultant/review-request')}
                            >
                                <View style={styles.cardHeader}>
                                    <Text style={styles.taskTitle}>{task.title}</Text>

                                    <View
                                        style={[
                                            styles.statusBadge,
                                            task.statusType === 'warning'
                                                ? styles.bgWarning
                                                : styles.bgInfo,
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.statusText,
                                                task.statusType === 'warning'
                                                    ? styles.textWarning
                                                    : styles.textInfo,
                                            ]}
                                        >
                                            {task.status}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={styles.caseMeta}>
                                    {task.caseCode} • {task.clientName} • Due {task.dueDate}
                                </Text>

                                <View style={styles.cardFooter}>
                                    <View style={styles.assigneeRow}>
                                        <Image
                                            source={{ uri: task.avatar }}
                                            style={styles.avatar}
                                        />

                                        <Text style={styles.assigneeName}>
                                            {task.assignee}
                                        </Text>
                                    </View>

                                    <Ionicons
                                        name="chevron-forward"
                                        size={18}
                                        color="#cbd5e1"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Bottom Sheet Modal Component */}
                <PartnerAddModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSubmit={handleAddNewTask}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e6f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    pageTitle: {
        fontSize: 24,
        color: '#0f172a',
        fontFamily: 'Montserrat_400Regular',
    },
    pageSubtitle: {
        fontSize: 13,
        color: '#64748b',
        marginTop: 2,
        fontFamily: 'Montserrat_400Regular',
    },
    addBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#00b2b2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 24,
        gap: 12,
    },
    taskCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 8,
    },
    taskTitle: {
        fontSize: 15,
        color: '#1e293b',
        flex: 1,
        fontFamily: 'Montserrat_400Regular',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
    },
    bgWarning: {
        backgroundColor: '#fef3c7',
    },
    textWarning: {
        color: '#d97706',
    },
    bgInfo: {
        backgroundColor: '#e0f2fe',
    },
    textInfo: {
        color: '#0284c7',
    },
    statusText: {
        fontSize: 11,
        fontFamily: 'Montserrat_400Regular',
    },
    caseMeta: {
        fontSize: 12,
        color: '#94a3b8',
        marginTop: 6,
        marginBottom: 12,
        fontFamily: 'Montserrat_400Regular',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    assigneeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    avatar: {
        width: 22,
        height: 22,
        borderRadius: 11,
    },
    assigneeName: {
        fontSize: 12,
        color: '#64748b',
        fontFamily: 'Montserrat_400Regular',
    },
});