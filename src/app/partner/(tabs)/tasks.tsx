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

export interface TaskItem {
  id: string;
  title: string;
  caseId: string;
  clientName: string;
  dueDate: string;
  instruction: string;
  status: 'In Progress' | 'Completed';
  deliveryNote?: string;
}

// Dummy Tasks Data
export const INITIAL_TASKS: TaskItem[] = [
  {
    id: '1',
    title: 'Translate Employment Contract (ES→EN)',
    caseId: 'CAS-089',
    clientName: 'Elena Rodriguez',
    dueDate: 'Oct 22, 2026',
    instruction: 'Certified translation required.',
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'Translate Employment Contract (ES→EN)',
    caseId: 'CAS-089',
    clientName: 'Elena Rodriguez',
    dueDate: 'Oct 22, 2026',
    instruction: 'Certified translation required.',
    status: 'In Progress',
  },
  {
    id: '3',
    title: 'Translate Employment Contract (ES→EN)',
    caseId: 'CAS-089',
    clientName: 'Elena Rodriguez',
    dueDate: 'Oct 22, 2026',
    instruction: 'Certified translation required.',
    status: 'Completed',
    deliveryNote: 'Task completed and deliverable uploaded.',
  },
];

export default function TasksScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Active' | 'Completed'>('Active');

  // Filter tasks based on active tab
  const filteredTasks = INITIAL_TASKS.filter((task) =>
    activeTab === 'Active' ? task.status === 'In Progress' : task.status === 'Completed'
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.pageTitle}>My Tasks</Text>
        <Text style={styles.pageSubTitle}>Work & deliverables</Text>

        {/* Tab Switcher */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'Active' && styles.activeTabBtn]}
            onPress={() => setActiveTab('Active')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Active' && styles.activeTabText,
              ]}
            >
              Active
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'Completed' && styles.activeTabBtn]}
            onPress={() => setActiveTab('Completed')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Completed' && styles.activeTabText,
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {/* Task Cards List */}
        {filteredTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={styles.taskCard}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: '/partner/taskDetails',
                params: {
                  id: task.id,
                  title: task.title,
                  caseId: task.caseId,
                  clientName: task.clientName,
                  dueDate: task.dueDate,
                  instruction: task.instruction,
                  initialStatus: task.status,
                  initialNote: task.deliveryNote || '',
                },
              })
            }
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{task.title}</Text>
              <Feather name="chevron-right" size={18} color="#94a3b8" />
            </View>

            <Text style={styles.cardMeta}>
              {task.caseId} • {task.clientName}
            </Text>

            {/* Status Badge */}
            <View
              style={[
                styles.badge,
                task.status === 'In Progress'
                  ? styles.badgeInProgress
                  : styles.badgeCompleted,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  task.status === 'In Progress'
                    ? styles.badgeTextInProgress
                    : styles.badgeTextCompleted,
                ]}
              >
                {task.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
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
    paddingTop: 16,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
  },
  pageSubTitle: {
    fontSize: 13,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 20,
    marginTop: 2,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 2,
    marginBottom: 20,
  },
  tabBtn: {
    flex: 1,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabBtn: {
    backgroundColor: '#00B2B7',
  },
  tabText: {
    fontSize: 13,
    color: '#475569',
    fontFamily: 'Montserrat_500Medium',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  taskCard: {
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
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    flex: 1,
    paddingRight: 8,
    fontFamily: 'Montserrat_600SemiBold',
  },
  cardMeta: {
    fontSize: 12,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
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
  badgeText: {
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
});