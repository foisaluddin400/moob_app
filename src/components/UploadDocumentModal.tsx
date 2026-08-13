import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

interface UploadDocumentModalProps {
  visible: boolean;
  docTitle?: string;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export default function UploadDocumentModal({
  visible,
  docTitle = 'Birth Certificate',
  onClose,
  onSubmitSuccess,
}: UploadDocumentModalProps) {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: string;
  } | null>(null);

  // ==============================
  // Animation
  // Same as ConfirmationModal
  // ==============================
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.96)).current;

  // Open animation
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

  // Close animation
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

  // ==============================
  // Select File
  // ==============================
  const handleSelectSource = (type: string) => {
    setSelectedFile({
      name: `${docTitle.toLowerCase().replace(/\s+/g, '-')}.pdf`,
      size: 'PDF • 1 page • ready',
    });
  };

  // ==============================
  // Replace File
  // ==============================
  const handleReset = () => {
    setSelectedFile(null);
  };

  // ==============================
  // Submit
  // ==============================
  const handleSubmit = () => {
    handleClose();

    // Wait for close animation
    setTimeout(() => {
      setSelectedFile(null);
      onSubmitSuccess?.();
    }, 150);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      {/* Overlay */}
      <TouchableWithoutFeedback onPress={handleClose}>
        <View style={styles.overlay}>
          {/* Modal Content */}
          <TouchableWithoutFeedback
            onPress={(e) => e.stopPropagation()}
          >
            <Animated.View
              style={[
                styles.sheetContainer,
                {
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              {/* Drag Handle */}
              <View style={styles.handleBar} />

              {/* Title */}
              <Text style={styles.modalTitle}>
                Upload document
              </Text>

              {/* Document Title */}
              <Text style={styles.docSubTitle}>
                {docTitle}
              </Text>

              {!selectedFile ? (
                // ========================================
                // STATE 1: SELECT DOCUMENT SOURCE
                // ========================================
                <View style={styles.optionsList}>
                  {/* PDF */}
                  <TouchableOpacity
                    style={styles.optionCard}
                    activeOpacity={0.7}
                    onPress={() => handleSelectSource('pdf')}
                  >
                    <View style={styles.iconCircle}>
                      <Feather
                        name="file-text"
                        size={18}
                        color="#00a9b5"
                      />
                    </View>

                    <View style={styles.optionTextCol}>
                      <Text style={styles.optionTitle}>
                        PDF file
                      </Text>

                      <Text style={styles.optionSub}>
                        From files
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/* Photo */}
                  <TouchableOpacity
                    style={styles.optionCard}
                    activeOpacity={0.7}
                    onPress={() => handleSelectSource('photo')}
                  >
                    <View style={styles.iconCircle}>
                      <Feather
                        name="image"
                        size={18}
                        color="#00a9b5"
                      />
                    </View>

                    <View style={styles.optionTextCol}>
                      <Text style={styles.optionTitle}>
                        Photo
                      </Text>

                      <Text style={styles.optionSub}>
                        From gallery
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/* Camera */}
                  <TouchableOpacity
                    style={styles.optionCard}
                    activeOpacity={0.7}
                    onPress={() => handleSelectSource('camera')}
                  >
                    <View style={styles.iconCircle}>
                      <Feather
                        name="camera"
                        size={18}
                        color="#00a9b5"
                      />
                    </View>

                    <View style={styles.optionTextCol}>
                      <Text style={styles.optionTitle}>
                        Camera scan
                      </Text>

                      <Text style={styles.optionSub}>
                        Scan pages
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : (
                // ========================================
                // STATE 2: FILE SELECTED
                // ========================================
                <View style={styles.attachedContainer}>
                  {/* File Preview */}
                  <View style={styles.filePreviewCard}>
                    <View style={styles.fileIconBox}>
                      <Feather
                        name="file-text"
                        size={20}
                        color="#00a9b5"
                      />
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text
                        style={styles.fileName}
                        numberOfLines={1}
                      >
                        {selectedFile.name}
                      </Text>

                      <Text style={styles.fileMeta}>
                        {selectedFile.size}
                      </Text>
                    </View>
                  </View>

                  {/* Preview / Replace */}
                  <View style={styles.actionRow}>
                    <TouchableOpacity
                      style={styles.actionBtn}
                      activeOpacity={0.7}
                    >
                      <Feather
                        name="eye"
                        size={14}
                        color="#334155"
                      />

                      <Text style={styles.actionBtnText}>
                        Preview
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.actionBtn}
                      activeOpacity={0.7}
                      onPress={handleReset}
                    >
                      <Feather
                        name="refresh-cw"
                        size={14}
                        color="#334155"
                      />

                      <Text style={styles.actionBtnText}>
                        Replace
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Submit */}
                  <TouchableOpacity
                    style={styles.submitBtn}
                    activeOpacity={0.85}
                    onPress={handleSubmit}
                  >
                    <Feather
                      name="upload"
                      size={16}
                      color="#FFFFFF"
                      style={{ marginRight: 6 }}
                    />

                    <Text style={styles.submitBtnText}>
                      Submit to Consultant
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Animated.View>
          </TouchableWithoutFeedback>
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
  },

  sheetContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },

  handleBar: {
    width: 36,
    height: 4,
    backgroundColor: '#cbd5e1',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: 'Montserrat_700Bold',
  },

  docSubTitle: {
    fontSize: 12,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 16,
  },

  optionsList: {
    gap: 10,
  },

  optionCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 6,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionTextCol: {
    justifyContent: 'center',
  },

  optionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },

  optionSub: {
    fontSize: 11,
    color: '#94a3b8',
    fontFamily: 'Montserrat_400Regular',
  },

  attachedContainer: {
    paddingTop: 4,
  },

  filePreviewCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },

  fileIconBox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: '#EAFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fileName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },

  fileMeta: {
    fontSize: 10,
    color: '#64748b',
    fontFamily: 'Montserrat_400Regular',
    marginTop: 2,
  },

  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },

  actionBtn: {
    flex: 1,
    height: 38,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },

  actionBtnText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#334155',
    fontFamily: 'Montserrat_500Medium',
  },

  submitBtn: {
    backgroundColor: '#00a9b5',
    height: 44,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});