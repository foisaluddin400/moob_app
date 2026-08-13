import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import CustomInput from "@/ui/CustomInput";
import Icon from "@/icon/icon";

const IMMIGRATION_TYPES = [
  { id: "1", title: "Student Visa", icon: "student" },
  { id: "2", title: "Work Permit", icon: "work" },
  { id: "3", title: "Family Reunification", icon: "family" },
  { id: "4", title: "Residency", icon: "residence" },
  { id: "5", title: "Citizenship", icon: "citizen" },
  { id: "6", title: "Digital Nomad Visa", icon: "digital" },
  { id: "7", title: "Business Visa", icon: "business" },
  { id: "8", title: "Investor Visa", icon: "investor" },
  { id: "9", title: "Others", icon: "other" },
];

export default function CreateRequestScreen() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);

  // Form Fields
  const [selectedType, setSelectedType] = useState<string>(
    "Family Reunification",
  );
  const [purpose, setPurpose] = useState("");
  const [country, setCountry] = useState("Australia");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [notes, setNotes] = useState("");
  const [fileAttached, setFileAttached] = useState(true);

  const handleCategorySelect = (title: string) => {
    setSelectedType(title);
    setStep(2);
  };

  const handleContinue = () => {
    router.push({
      pathname: "/client/requestSubmitted",
      params: { reqNumber: "REQ-657", type: selectedType },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={18} color="#00B2B7" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New immigration request</Text>
        <Text style={styles.stepIndicator}>
          {step === 1 ? "Step 1 of 2" : "Step 1 of 2"}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* STEP 1: Select Type */}
        {step === 1 ? (
          <>
            <View style={styles.banner}>
              <Text style={styles.bannerSubText}>Your immigration journey</Text>
              <Text style={styles.bannerTitle}>What can we help with?</Text>
              <Text style={styles.bannerDesc}>
                You're in control. Share your goal and our team will recommend
                the right route.
              </Text>
            </View>

            <View style={styles.gridContainer}>
              {IMMIGRATION_TYPES.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.gridCard}
                  onPress={() => handleCategorySelect(item.title)}
                  activeOpacity={0.7}
                >
                  <View style={styles.gridIconBox}>
                    <Icon
                      name={item.icon as any}
                      
                     
                    />
                  </View>
                  <Text style={styles.gridCardTitle}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          /* STEP 2: Fill Input Details */
          <>
            {/* Selected Type Header card */}
            <View style={styles.selectedTypeBox}>
              <View style={styles.typeLeft}>
                <Feather name="users" size={20} color="#00a9b5" />
                <Text style={styles.selectedTypeName}>{selectedType}</Text>
              </View>
              <TouchableOpacity onPress={() => setStep(1)}>
                <Text style={styles.changeTypeBtn}>Change type</Text>
              </TouchableOpacity>
            </View>

            <CustomInput
              label="Purpose"
              placeholder="What are you hoping to do or achieve?"
              value={purpose}
              onChangeText={setPurpose}
            />

            <CustomInput
              label="Destination country"
              placeholder="Select country"
              value={country}
              onChangeText={setCountry}
            />

            <CustomInput
              label="Additional information"
              placeholder="e.g. job offer, admission letter, family situation"
              value={additionalInfo}
              onChangeText={setAdditionalInfo}
              multiline
              numberOfLines={3}
              style={{ height: 70 }}
            />

            <CustomInput
              label="Optional notes"
              placeholder="Anything else your consultant should know?"
              value={notes}
              onChangeText={setNotes}
              multiline
              numberOfLines={2}
              style={{ height: 60 }}
            />

            {/* Attach optional files */}
            <Text style={styles.fieldLabel}>Attach optional files</Text>
            {fileAttached && (
              <View style={styles.attachedFileRow}>
                <View style={styles.fileLeftIcon}>
                  <Feather name="paperclip" size={16} color="#00a9b5" />
                  <View>
                    <Text style={styles.attachedFileName}>
                      Supporting file 1.pdf
                    </Text>
                    <Text style={styles.attachedFileSize}>240 KB</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => setFileAttached(false)}>
                  <Feather name="x" size={16} color="#94a3b8" />
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              style={styles.uploadPlaceholderBtn}
              onPress={() => setFileAttached(true)}
              activeOpacity={0.7}
            >
              <Feather name="paperclip" size={16} color="#94a3b8" />
              <Text style={styles.uploadPlaceholderText}>
                Tap to attach a file (optional)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continueBtn}
              onPress={handleContinue}
              activeOpacity={0.85}
            >
              <Text style={styles.continueBtnText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveDraftBtn}
              onPress={() => Alert.alert("Saved", "Saved as draft!")}
              activeOpacity={0.7}
            >
              <Text style={styles.saveDraftText}>Save as draft</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  backCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EAFDFD",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 15,
    fontWeight: "600",
    color: "#0f172a",
    fontFamily: "Montserrat_600SemiBold",
  },
  stepIndicator: {
    fontSize: 11,
    color: "#00B2B7",
    fontFamily: "Montserrat_500Medium",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  banner: {
    backgroundColor: "#00B2B7",
    borderRadius: 4,
    padding: 16,
    marginBottom: 20,
  },
  bannerSubText: {
    fontSize: 13,
    color: "#E0F2FE",
    fontFamily: "Montserrat_400Regular",
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "Montserrat_500Medium",
    marginVertical: 4,
  },
  bannerDesc: {
    fontSize: 11,
    color: "#E0F2FE",
    fontFamily: "Montserrat_400Regular",
    lineHeight: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  gridCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    alignItems: "flex-start",
  },
  gridIconBox: {
     backgroundColor: "#f3f3f3b4",
    width: 32,
    height: 32,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  gridCardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0f172a",
    fontFamily: "Montserrat_500Medium",
  },
  selectedTypeBox: {
    backgroundColor: "#EAFDFD",
    borderWidth: 1,
    borderColor: "#9FFDFF",
    padding: 14,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  typeLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectedTypeName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#009398",
    fontFamily: "Montserrat_600SemiBold",
  },
  changeTypeBtn: {
    fontSize: 11,
    color: "#00B2B7",
    fontFamily: "Montserrat_500Medium",
  },
  fieldLabel: {
    fontSize: 12,
    color: "#475569",
    marginBottom: 6,
    fontFamily: "Montserrat_500Medium",
  },
  attachedFileRow: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 4,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  fileLeftIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  attachedFileName: {
    fontSize: 12,
    color: "#0f172a",
    fontFamily: "Montserrat_500Medium",
  },
  attachedFileSize: {
    fontSize: 10,
    color: "#94a3b8",
    fontFamily: "Montserrat_400Regular",
  },
  uploadPlaceholderBtn: {
    height: 46,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  uploadPlaceholderText: {
    fontSize: 12,
    color: "#64748b",
    fontFamily: "Montserrat_400Regular",
  },
  continueBtn: {
    backgroundColor: "#00B2B7",
    height: 46,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  continueBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  saveDraftBtn: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#00B2B7",
    height: 46,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  saveDraftText: {
    color: "#00B2B7",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
});
