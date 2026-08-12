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

type NotificationType = 'info' | 'success' | 'warning';

interface NotificationItem {
  id: string;
  type: NotificationType;
  message: string;
  time: string;
}

export default function NotificationScreen() {
  const router = useRouter();

  // Notification Items List matching the screenshot exactly
  const notifications: NotificationItem[] = [
    {
      id: '1',
      type: 'info',
      message: 'CAS-670 advanced to next stage',
      time: 'Just now',
    },
    {
      id: '2',
      type: 'success',
      message:
        "David Kim's request approved — CAS-670 is ready and documents are required in the personalized checklist.",
      time: 'Just now',
    },
    {
      id: '3',
      type: 'success',
      message:
        "Elena Rodriguez's request approved — CAS-780 is ready and documents are required in the personalized checklist.",
      time: 'Just now',
    },
    {
      id: '4',
      type: 'info',
      message: 'New request from Elena Rodriguez:\nStudent Visa',
      time: 'Just now',
    },
    {
      id: '5',
      type: 'info',
      message: 'CAS-588 advanced to next stage',
      time: 'Just now',
    },
    {
      id: '6',
      type: 'info',
      message: 'CAS-588 advanced to next stage',
      time: 'Just now',
    },
    {
      id: '7',
      type: 'warning',
      message: 'Employment Contract.pdf is ready for review.',
      time: '4 hours ago',
    },
  ];

  // Helper to render icon & color based on notification type
  const renderIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return <Feather name="check-circle" size={18} color="#10B981" />;
      case 'warning':
        return <Feather name="alert-triangle" size={18} color="#F59E0B" />;
      case 'info':
      default:
        return <Feather name="info" size={18} color="#00B2B7" />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Bar with Centered Title */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backCircle}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={20} color="#00a9b5" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Notifications Card Container */}
        <View style={styles.cardContainer}>
          {notifications.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.notificationRow,
                index < notifications.length - 1 && styles.borderBottom,
              ]}
              activeOpacity={0.7}
            >
              {/* Left Status Icon */}
              <View style={styles.iconWrapper}>{renderIcon(item.type)}</View>

              {/* Notification Message & Timestamp */}
              <View style={styles.contentWrapper}>
                <Text style={styles.messageText}>{item.message}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 30,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  headerSpacer: {
    width: 42,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    paddingVertical: 4,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  iconWrapper: {
    marginRight: 12,
    marginTop: 2,
  },
  contentWrapper: {
    flex: 1,
  },
  messageText: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },
});