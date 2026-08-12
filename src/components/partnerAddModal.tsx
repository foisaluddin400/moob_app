import CustomDatePicker from '@/ui/CustomDatePicker';
import CustomInput from '@/ui/CustomInput';
import CustomSelect from '@/ui/CustomSelect';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';

// Custom Form Components


interface PartnerAddModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    title: string;
    caseId: string;
    partner: string;
    dueDate: string;
  }) => void;
}

const PARTNER_OPTIONS = [
  'Nadia Volkova',
  'Sarah Smith',
  'Elena Rodriguez',
  'John Doe',
];

export default function PartnerAddModal({
  visible,
  onClose,
  onSubmit,
}: PartnerAddModalProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const [caseId, setCaseId] = useState('');
  const [partner, setPartner] = useState('');
  const [dueDate, setDueDate] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.96)).current;

  // =========================
  // Open Animation
  // =========================
  useEffect(() => {
    if (visible) {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.96);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 80,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  // =========================
  // Close Animation
  // =========================
  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.96,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  // =========================
  // Assign Partner
  // =========================
  const handleAssign = () => {
    if (onSubmit) {
      onSubmit({
        title: taskTitle,
        caseId,
        partner,
        dueDate,
      });
    }

    setTaskTitle('');
    setCaseId('');
    setPartner('');
    setDueDate('');

    handleClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.keyboardView}
          >
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <Animated.View
                style={[
                  styles.modalContent,
                  {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                  },
                ]}
              >
                {/* Grab Handle */}
                <View style={styles.handleContainer}>
                  <View style={styles.handle} />
                </View>

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                >
                  {/* Modal Title */}
                  <Text style={styles.modalTitle}>Assign Partner Task</Text>

                  {/* Task Title Input */}
                  <CustomInput
                    label="Task title"
                    placeholder="Enter your task name"
                    value={taskTitle}
                    onChangeText={setTaskTitle}
                  />

                  {/* Case & Partner Row */}
                  <View style={styles.row}>
                    <View style={styles.flex1}>
                      <CustomInput
                        label="Case"
                        placeholder="Enter Case"
                        value={caseId}
                        onChangeText={setCaseId}
                      />
                    </View>

                    <View style={styles.flex1}>
                      <CustomSelect
                        label="Partner"
                        placeholder="Select Partner"
                        options={PARTNER_OPTIONS}
                        selectedValue={partner}
                        onSelect={setPartner}
                      />
                    </View>
                  </View>

                  {/* Custom Date Picker */}
                  <CustomDatePicker
                    label="Due date"
                    placeholder="mm/dd/yyyy"
                    value={dueDate}
                    onChangeText={setDueDate}
                  />

                  {/* Submit Button */}
                  <TouchableOpacity
                    style={styles.submitBtn}
                    activeOpacity={0.8}
                    onPress={handleAssign}
                  >
                    <Text style={styles.submitBtnText}>Assign Partner</Text>
                  </TouchableOpacity>
                </ScrollView>
              </Animated.View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  keyboardView: {
    width: '100%',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 32,
    maxHeight: '100%',
    width: '100%',
  },
  handleContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#cbd5e1',
  },
  modalTitle: {
    fontSize: 18,
    color: '#00b2b2',
    marginBottom: 20,
    fontFamily: 'Montserrat_400Regular',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  flex1: {
    flex: 1,
  },
  submitBtn: {
    backgroundColor: '#00b2b2',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'Montserrat_400Regular',
  },
});