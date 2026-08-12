import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  Platform,
} from 'react-native';
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

interface CustomInputProps extends TextInputProps {
  label?: string;
  iconName?: React.ComponentProps<typeof Feather>['name']; // Allow all Feather icons dynamically
  isPassword?: boolean;
}

export default function CustomInput({
  label,
  iconName,
  isPassword = false,
  style,
  ...props
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputGroup}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputContainer}>
        {/* Left Icon (Dynamic Render) */}
        {iconName && iconName !== 'lock' && (
          <Feather
            name={iconName}
            size={20}
            color="#a0aec0"
            style={styles.icon}
          />
        )}

        {/* Custom lock icon using MaterialCommunityIcons if lock is passed */}
        {iconName === 'lock' && (
          <MaterialCommunityIcons
            name="lock-outline"
            size={20}
            color="#a0aec0"
            style={styles.icon}
          />
        )}

        {/* Input */}
        <TextInput
          {...props}
          style={[
            styles.input,
            Platform.OS === 'web' && ({ outlineStyle: 'none' } as any),
            style,
          ]}
          placeholderTextColor="#cbd5e1"
          secureTextEntry={isPassword && !showPassword}
        />

        {/* Password Toggle */}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIconContainer}
            activeOpacity={0.7}
          >
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#a0aec0"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    height: 48,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#334155',
    paddingVertical: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },

  eyeIconContainer: {
    padding: 4,
  },
});