import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CustomSelectProps {
  label?: string;
  placeholder?: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

export default function CustomSelect({
  label,
  placeholder = 'Select an option',
  options,
  selectedValue,
  onSelect,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.inputGroup}>
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Select Field Display */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.selectContainer, isOpen && styles.selectContainerActive]}
        onPress={() => setIsOpen(true)}
      >
        <Text
          style={[
            styles.selectedText,
            !selectedValue && styles.placeholderText,
          ]}
          numberOfLines={1}
        >
          {selectedValue || placeholder}
        </Text>
        <Feather name="chevron-down" size={20} color="#a0aec0" />
      </TouchableOpacity>

      {/* Options Popup Modal */}
      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View style={styles.dropdownCard}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => {
                    const isSelected = item === selectedValue;
                    return (
                      <TouchableOpacity
                        style={[
                          styles.optionItem,
                          index === options.length - 1 && styles.noBorder,
                        ]}
                        onPress={() => {
                          onSelect(item);
                          setIsOpen(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            isSelected && styles.optionTextActive,
                          ]}
                        >
                          {item}
                        </Text>
                        {isSelected && (
                          <Feather name="check" size={18} color="#00b2b2" />
                        )}
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    height: 48,
  },
  selectContainerActive: {
    borderColor: '#00b2b2',
  },
  selectedText: {
    flex: 1,
    fontSize: 15,
    color: '#334155',
  },
  placeholderText: {
    color: '#cbd5e1',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  dropdownCard: {
    width: '100%',
    maxHeight: 280,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  optionText: {
    fontSize: 15,
    color: '#334155',
  },
  optionTextActive: {
    color: '#00b2b2',
    fontWeight: '600',
  },
});