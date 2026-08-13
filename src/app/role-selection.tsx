import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function RoleSelectionScreen() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>('Consultant');

  const roles = [
    { title: 'Consultant', path: '/consultant/onboarding' },
    { title: 'Partner', path: '/partner/onboarding' },
    { title: 'Client', path: '/client/onboarding' },
  ];

  const handleRolePress = (title: string, path: string) => {
    setSelectedRole(title);
    router.push(path as any);
  };

  return (
    <LinearGradient
      colors={['#d0efffff', '#f8fafc', '#dce9fcff']}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={styles.header}>Select Your Role</Text>

        {/* Role Options */}
        <View style={styles.buttonContainer}>
          {roles.map((role) => {
            const isFilled = selectedRole === role.title;

            return (
              <TouchableOpacity
                key={role.title}
                style={[
                  styles.button,
                  isFilled ? styles.filledButton : styles.outlinedButton,
                ]}
                onPress={() => handleRolePress(role.title, role.path)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isFilled ? styles.filledText : styles.outlinedText,
                  ]}
                >
                  {role.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: '500',
    color: '#00B2B7',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Montserrat_500Medium', // Uses Montserrat font if configured
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  filledButton: {
    backgroundColor: '#00B2B7',
    borderColor: '#00B2B7',
  },
  outlinedButton: {
    backgroundColor: '#ffffff',
    borderColor: '#00B2B7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  filledText: {
    color: '#ffffff',
  },
  outlinedText: {
    color: '#00B2B7',
  },
});