
import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
} from 'react-native';

interface ConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;

  title?: string;
  subtitle?: string;

  bannerTitle?: string;
  bannerText?: string;

  confirmText?: string;
}

export default function ConfirmationModal({
  visible,
  onClose,
  onConfirm,
  title = 'Confirm action',
  subtitle = 'Are you sure you want to continue?',
  bannerTitle,
  bannerText,
  confirmText = 'Confirm',
}: ConfirmationModalProps) {
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

  const handleConfirm = () => {
    handleClose();

    // Wait for close animation before action
    setTimeout(() => {
      onConfirm();
    }, 150);
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
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <Animated.View
              style={[
                styles.bottomSheet,
                {
                  opacity: fadeAnim,
                  transform: [{ scale: scaleAnim }],
                },
              ]}
            >
              {/* Handle */}
              <View style={styles.handleBar} />

              {/* Title */}
              <Text style={styles.modalTitle}>{title}</Text>

              {/* Subtitle */}
              <Text style={styles.modalSubtitle}>{subtitle}</Text>

              {/* Banner */}
              {bannerTitle && bannerText && (
                <View style={styles.modalBanner}>
                  <Text style={styles.modalBannerTitle}>
                    {bannerTitle}
                  </Text>

                  <Text style={styles.modalBannerText}>
                    {bannerText}
                  </Text>
                </View>
              )}

              {/* Confirm Button */}
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleConfirm}
                activeOpacity={0.85}
              >
                <Text style={styles.modalButtonText}>
                  {confirmText}
                </Text>
              </TouchableOpacity>
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

  bottomSheet: {
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
    fontWeight: '600',
    color: '#00B2B7',
    marginBottom: 8,
    fontFamily: 'Montserrat_600SemiBold',
  },

  modalSubtitle: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 18,
    marginBottom: 16,
    fontFamily: 'Montserrat_400Regular',
  },

  modalBanner: {
    backgroundColor: '#EAFDFD',
    borderWidth: 1,
    borderColor: '#9FFDFF',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },

  modalBannerTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#008b94',
    marginBottom: 2,
    fontFamily: 'Montserrat_600SemiBold',
  },

  modalBannerText: {
    fontSize: 12,
    color: '#008b94',
    lineHeight: 16,
    fontFamily: 'Montserrat_400Regular',
  },

  modalButton: {
    backgroundColor: '#00B2B7',
    height: 48,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },

  modalButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat_600SemiBold',
  },
});

