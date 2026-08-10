import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SLIDES = [
  {
    id: '1',
    title: 'Your caseload,\nanywhere',
    subtitle:
      'Track every client and immigration case from your pocket with real-time stage updates.',
    image: require('../../../assets/images/caseload_anywhere_image.png'),
    buttonText: 'Next',
  },
  {
    id: '2',
    title: 'Review\ndocuments fast',
    subtitle:
      'Approve or reject client uploads with AI-assisted OCR verification in seconds.',
    image: require('../../../assets/images/review_documents_fast.png'),
    buttonText: 'Next',
  },
  {
    id: '3',
    title: 'Delegate & deliver',
    subtitle:
      'Assign tasks to partners and let the AI assistant draft government forms for you.',
    image: require('../../../assets/images/delegate.png'),
    buttonText: 'Get Started',
  },
];

export default function ConsultantOnboardingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleFinish = () => {
    router.replace('/auth/consultant/login' as any);
  };

  const scrollToSlide = (index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentIndex(index);

      flatListRef.current?.scrollToOffset({
        offset: index * width,
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      scrollToSlide(currentIndex + 1);
    } else {
      handleFinish();
    }
  };

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    if (width > 0) {
      const newIndex = Math.round(offsetX / width);

      if (
        newIndex >= 0 &&
        newIndex < SLIDES.length &&
        newIndex !== currentIndex
      ) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: any) => {
      if (
        viewableItems &&
        viewableItems.length > 0 &&
        viewableItems[0].index !== null
      ) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const getItemLayout = (_: any, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });

  return (
    <View style={styles.container}>
      {/* Full Screen Background Slides */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            style={[styles.slide, { width, height }]}
            resizeMode="cover"
          >
            {/* Dark/soft overlay for better text visibility */}
            <View style={styles.overlay} />

            {/* Skip Button */}
            <View
              style={[
                styles.header,
                { paddingTop: insets.top + 10 },
              ]}
            >
              <TouchableOpacity
                style={styles.skipButton}
                onPress={handleFinish}
                activeOpacity={0.8}
              >
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Content */}
            <View
              style={[
                styles.bottomContent,
                {
                  paddingBottom: Math.max(insets.bottom, 20),
                },
              ]}
            >
              {/* Text */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>

              {/* Pagination */}
              <View style={styles.paginationRow}>
                {SLIDES.map((_, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => scrollToSlide(index)}
                      style={[
                        styles.dot,
                        isActive
                          ? styles.activeDot
                          : styles.inactiveDot,
                      ]}
                    />
                  );
                })}
              </View>

              {/* Button */}
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNext}
                activeOpacity={0.85}
              >
                <Text style={styles.nextButtonText}>
                  {item.buttonText}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  slide: {
    flex: 1,
    justifyContent: 'space-between',
  },

  /*
   * Full screen overlay.
   * This keeps the original image visible
   * while making the bottom text easier to read.
   */
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    zIndex: 10,
  },

  skipButton: {
    borderWidth: 1,
    borderColor: '#00B2B7',
  
    paddingHorizontal: 14,
    paddingVertical: 6,
   
  },

  skipText: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#00B2B7',
    fontSize: 13,
  },

  bottomContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 28,
    color: '#00A99D',
    textAlign: 'center',
    lineHeight: 34,
  },

  subtitle: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 12,
  },

  paginationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  dot: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },

  activeDot: {
    width: 22,
    backgroundColor: '#00B2B7',
  },

  inactiveDot: {
    width: 7,
    backgroundColor: '#ffffff',
  },

  nextButton: {
    backgroundColor: '#00B2B7',
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  nextButtonText: {
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
    fontSize: 16,
  },
});