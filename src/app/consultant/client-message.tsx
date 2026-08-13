import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ClientMessageChat() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Feather name="arrow-left" size={18} color="#00B2B7" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chat</Text>
          <View style={{ width: 36 }} />
        </View>
        {/* User Info Sub-Header */}
        <View style={styles.userSubHeader}>
          <Text style={styles.userName}>Sarah Jenkins</Text>
          <View style={styles.statusRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.statusText}>Online</Text>
          </View>
        </View>

        {/* Chat Scroll Content */}
        <ScrollView
          style={styles.chatContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Outgoing Message 1 */}
          <View style={styles.outgoingContainer}>
            <View style={styles.avatarRowRight}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                }}
                style={styles.avatarImage}
              />
              <Text style={styles.senderName}>Sarah Jenkins</Text>
            </View>
            <View style={styles.outgoingBubble}>
              <Text style={styles.outgoingText}>
                Welcome to the Sahara Desert Safari group chat! I am your guide,
                Ahmed.
              </Text>
            </View>
          </View>

          {/* Incoming Message 1 */}
          <View style={styles.incomingContainer}>
            <View style={styles.avatarRowLeft}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                }}
                style={styles.avatarImage}
              />
              <Text style={styles.senderName}>Mike T.</Text>
            </View>
            <View style={styles.incomingBubble}>
              <Text style={styles.incomingText}>
                Hi AI Assistant! Looking forward to the trip.
              </Text>
            </View>
            <Text style={styles.timestamp}>10:05 AM</Text>
          </View>

          {/* Incoming Message 2 */}
          <View style={styles.incomingContainer}>
            <View style={styles.avatarRowLeft}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                }}
                style={styles.avatarImage}
              />
              <Text style={styles.senderName}>Mike T.</Text>
            </View>
            <View style={styles.incomingBubble}>
              <Text style={styles.incomingText}>
                Hello AI Assistant! Quick question, do we need to bring our own
                sleeping bags?
              </Text>
            </View>
            <Text style={styles.timestamp}>10:15 AM</Text>
          </View>

          {/* Outgoing Message 2 with Quoted Reply */}
          <View style={styles.outgoingContainer}>
            <View style={styles.avatarRowRight}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                }}
                style={styles.avatarImage}
              />
              <Text style={styles.senderName}>Sarah Jenkins</Text>
            </View>
            <View style={styles.outgoingBubble}>
              {/* Quoted Message Card */}
              <View style={styles.quoteCard}>
                <View style={styles.quoteContent}>
                  <Text style={styles.quoteAuthor}>Mike T.</Text>
                  <Text style={styles.quoteText} numberOfLines={1}>
                    Hello everyone! Quick question, do we
                  </Text>
                </View>
              </View>

              <Text style={styles.outgoingText}>
                No need! We provide all camping gear including warm sleeping
                bags. Just bring comfortable clothes and a jacket for the night.
              </Text>
            </View>

            <View style={styles.readReceiptRow}>
              <Text style={styles.timestampRight}>10:20 AM</Text>
              <Ionicons name="checkmark-done" size={15} color="#00B2B2" />
            </View>
          </View>
        </ScrollView>

        {/* Input Bar Footer */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.attachmentBtn} activeOpacity={0.7}>
            <Feather name="paperclip" size={22} color="#64748b" />
          </TouchableOpacity>

          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message..."
              placeholderTextColor="#94a3b8"
              value={inputText}
              onChangeText={setInputText}
            />
          </View>

          <TouchableOpacity style={styles.micBtn} activeOpacity={0.8}>
            <Feather name="mic" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e6f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    color: "#1e293b",
    fontFamily: "Montserrat_500Medium",
  },

  /* User Sub Header */
  userSubHeader: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#b2ecec",
  },
  userName: {
    fontSize: 22,
    color: "#0f172a",
    marginBottom: 4,
    fontFamily: "Montserrat_600SemiBold",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#22c55e",
  },
  statusText: {
    fontSize: 13,
    color: "#22c55e",
    fontFamily: "Montserrat_400Regular",
  },

  /* Chat Scroll */
  chatContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  /* Avatar & Names */
  senderName: {
    fontSize: 12,
    color: "#64748b",
    fontFamily: "Montserrat_500Medium",
  },
  avatarImage: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },

  /* Incoming Message (Left) */
  incomingContainer: {
    alignSelf: "flex-start",
    maxWidth: "82%",
    marginBottom: 16,
  },
  avatarRowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  incomingBubble: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 18,
    borderTopLeftRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  incomingText: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 19,
    fontFamily: "Montserrat_400Regular",
  },
  timestamp: {
    fontSize: 10,
    color: "#94a3b8",
    marginTop: 4,
    marginLeft: 4,
    fontFamily: "Montserrat_400Regular",
  },

  /* Outgoing Message (Right) */
  outgoingContainer: {
    alignSelf: "flex-end",
    maxWidth: "82%",
    marginBottom: 16,
  },
  avatarRowRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    marginBottom: 6,
  },
  outgoingBubble: {
    backgroundColor: "#00C7CC",
    borderRadius: 18,
    borderTopRightRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  outgoingText: {
    fontSize: 13,
    color: "#ffffff",
    lineHeight: 19,
    fontFamily: "Montserrat_400Regular",
  },

  /* Quoted Card */
  quoteCard: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  quoteContent: {
    flex: 1,
  },
  quoteAuthor: {
    fontSize: 11,
    color: "#ffffff",
    marginBottom: 2,
    fontFamily: "Montserrat_400Regular",
  },
  quoteText: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.9)",
    fontFamily: "Montserrat_400Regular",
  },

  /* Read Receipt */
  readReceiptRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
    marginTop: 4,
  },
  timestampRight: {
    fontSize: 10,
    color: "#94a3b8",
    fontFamily: "Montserrat_400Regular",
  },

  /* Input Footer */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    gap: 10,
  },
  attachmentBtn: {
    padding: 6,
  },
  textInputWrapper: {
    flex: 1,
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 22,
    paddingHorizontal: 16,
    height: 44,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 13,
    color: "#334155",
    fontFamily: "Montserrat_400Regular",
  },
  micBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
  },
});
