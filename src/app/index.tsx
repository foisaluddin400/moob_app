import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export default function SplashScreen() {
  const router = useRouter();

  // Animation values
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.92);

  useEffect(() => {
    // Smooth Fade-In + Scale Animation
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });

    // Navigate to next screen after delay
    const timer = setTimeout(() => {
      router.replace('/role-selection');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient
      colors={['#d0efffff', '#f8fafc', '#dce9fcff']}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Animated.View style={[styles.content, animatedStyle]}>
        {/* Splash Logo Image from Assets */}
        <Image
          source={require('../../assets/images/app_logo.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  logoImage: {
    width: '80%',
    height: 180,
  },
});