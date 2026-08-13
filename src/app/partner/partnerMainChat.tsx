import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function partnerMainChat() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const userName = (params.name as string) || 'Sarah Jenkins';
  const isOnline = params.online !== 'false';
  const [inputText, setInputText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
          <Text style={styles.headerTitle}>Message</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* User Status Bar */}
        <View style={styles.userInfoBar}>
          <Text style={styles.userTitle}>{userName}</Text>
          <View style={styles.statusRow}>
            <View style={styles.greenDot} />
            <Text style={styles.statusText}>{isOnline ? 'Online' : 'Offline'}</Text>
          </View>
        </View>

        {/* Chat Messages */}
        <ScrollView
          contentContainerStyle={styles.chatContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Outgoing Message 1 */}
          <View style={[styles.messageWrapper, styles.outgoingWrapper]}>
            <View style={styles.senderHeaderRight}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
                }}
                style={styles.smallAvatar}
              />
              <Text style={styles.senderName}>{userName}</Text>
            </View>
            <View style={[styles.bubble, styles.outgoingBubble]}>
              <Text style={styles.outgoingText}>
                Welcome to the Sahara Desert Safari group chat! I am your guide,
                Ahmed.
              </Text>
            </View>
          </View>

          {/* Incoming Message 1 */}
          <View style={[styles.messageWrapper, styles.incomingWrapper]}>
            <View style={styles.senderHeaderLeft}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
                }}
                style={styles.smallAvatar}
              />
              <Text style={styles.senderNameLeft}>Mike T.</Text>
            </View>
            <View style={[styles.bubble, styles.incomingBubble]}>
              <Text style={styles.incomingText}>
                Hi AI Assistant! Looking forward to the trip.
              </Text>
            </View>
            <Text style={styles.timeLabel}>10:05 AM</Text>
          </View>

          {/* Incoming Message 2 */}
          <View style={[styles.messageWrapper, styles.incomingWrapper]}>
            <View style={styles.senderHeaderLeft}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
                }}
                style={styles.smallAvatar}
              />
              <Text style={styles.senderNameLeft}>Mike T.</Text>
            </View>
            <View style={[styles.bubble, styles.incomingBubble]}>
              <Text style={styles.incomingText}>
                Hello AI Assistant! Quick question, do we need to bring our own
                sleeping bags?
              </Text>
            </View>
            <Text style={styles.timeLabel}>10:15 AM</Text>
          </View>

          {/* Outgoing Message 2 with Reply Preview */}
          <View style={[styles.messageWrapper, styles.outgoingWrapper]}>
            <View style={styles.senderHeaderRight}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
                }}
                style={styles.smallAvatar}
              />
              <Text style={styles.senderName}>{userName}</Text>
            </View>

            <View style={[styles.bubble, styles.outgoingBubble]}>
              {/* Reply Container */}
              <View style={styles.replyBox}>
                <Text style={styles.replyTitle}>Mike T.</Text>
                <Text style={styles.replyMessage} numberOfLines={1}>
                  Hello everyone! Quick question, do we
                </Text>
              </View>

              <Text style={styles.outgoingText}>
                No need! We provide all camping gear including warm sleeping bags.
                Just bring comfortable clothes and a jacket for the night.
              </Text>
            </View>

            <View style={styles.statusMetaRow}>
              <Text style={styles.timeLabelRight}>10:20 AM</Text>
              
            </View>
          </View>
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputBarContainer}>
          <TouchableOpacity style={styles.attachBtn} activeOpacity={0.7}>
            <Feather name="paperclip" size={22} color="#64748b" />
          </TouchableOpacity>

          <View style={styles.textInputBox}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor="#cbd5e1"
              value={inputText}
              onChangeText={setInputText}
            />
          </View>

          <TouchableOpacity style={styles.micBtn} activeOpacity={0.8}>
            <Feather name="mic" size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    paddingBottom: 8,
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
  userInfoBar: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  userTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  statusText: {
    fontSize: 13,
    color: '#10B981',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Messages List */
  chatContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  messageWrapper: {
    marginBottom: 16,
    maxWidth: '85%',
  },
  outgoingWrapper: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  incomingWrapper: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },

  /* Sender Row */
  senderHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  senderHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  smallAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
  },
  senderName: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_500Medium',
  },
  senderNameLeft: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_500Medium',
  },

  /* Bubbles */
  bubble: {
    borderRadius: 16,
    padding: 14,
  },
  outgoingBubble: {
    backgroundColor: '#00B2B7', // Exact Teal Color from screenshot
    borderTopRightRadius: 2,
  },
  incomingBubble: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },

  /* Text inside bubbles */
  outgoingText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Montserrat_400Regular',
  },
  incomingText: {
    color: '#334155',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Reply Box Inside Teal Bubble */
  replyBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  replyTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 2,
    fontFamily: 'Montserrat_700Bold',
  },
  replyMessage: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
  },

  /* Time & Status */
  timeLabel: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 4,
    fontFamily: 'Montserrat_400Regular',
  },
  statusMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  timeLabelRight: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },

  /* Bottom Input Bar */
  inputBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  attachBtn: {
    paddingRight: 12,
  },
  textInputBox: {
    flex: 1,
    height: 44,
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    color: '#0f172a',
    fontFamily: 'Montserrat_400Regular',
  },
  micBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});