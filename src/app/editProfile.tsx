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
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomInput from '@/ui/CustomInput';


export default function EditProfile() {
  const router = useRouter();

  // Profile Form States
  const [fullName, setFullName] = useState('Momtaj Uddin');
  const [email, setEmail] = useState('momtaj@example.com');
  const [phone, setPhone] = useState('+880 1700-000000');
  const [bio, setBio] = useState('Full Stack & React Native Developer');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backCircle}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Feather name="arrow-left" size={20} color="#00a9b5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.avatarImage}
            />
            <TouchableOpacity style={styles.cameraBadge} activeOpacity={0.8}>
              <Feather name="camera" size={14} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.changePhotoText}>Change Profile Picture</Text>
        </View>

        {/* Form Inputs using CustomInput */}
        <View style={styles.formContainer}>
          <CustomInput
            label="Full Name"
            placeholder="Enter your full name"
            iconName="user"
            value={fullName}
            onChangeText={setFullName}
          />

          <CustomInput
            label="Email Address"
            placeholder="Enter your email"
            iconName="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            label="Phone Number"
            placeholder="Enter your phone number"
            iconName="phone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <CustomInput
            label="Bio / Description"
            placeholder="Write something about yourself..."
            value={bio}
            onChangeText={setBio}
            multiline={true}
            numberOfLines={3}
            textAlignVertical="top"
            style={styles.textArea}
          />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveBtn} activeOpacity={0.85}>
          <Feather name="check" size={18} color="#ffffff" style={{ marginRight: 8 }} />
          <Text style={styles.saveBtnText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingBottom: 16,
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 8,
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E2E8F0',
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00B2B7',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  changePhotoText: {
    fontSize: 12,
    color: '#00B2B7',
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
  formContainer: {
    marginTop: 10,
  },
  textArea: {
    height: 80,
    paddingTop: 10,
  },
  saveBtn: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  saveBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});