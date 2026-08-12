import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CustomDatePickerProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function CustomDatePicker({
  label,
  placeholder = 'mm/dd/yyyy',
  value,
  onChangeText,
}: CustomDatePickerProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.inputGroup}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.container, isFocused && styles.containerFocused]}>
        <TextInput
          style={[
            styles.input,
            Platform.OS === 'web' && ({ outlineStyle: 'none' } as any),
          ]}
          placeholder={placeholder}
          placeholderTextColor="#cbd5e1"
          value={value}
          onChangeText={onChangeText}
          selectionColor="#00b2b2"
          underlineColorAndroid="transparent"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <TouchableOpacity activeOpacity={0.7} style={styles.iconContainer}>
          <Feather name="calendar" size={20} color="#a0aec0" />
        </TouchableOpacity>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    height: 48,
  },
  containerFocused: {
    borderColor: '#e2e8f0',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#334155',
    paddingVertical: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  iconContainer: {
    paddingLeft: 8,
  },
});