import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="role-selection" />
      <Stack.Screen name="auth/consultant/login" />
      <Stack.Screen name="auth/consultant/register" />
      <Stack.Screen name="auth/partner/login" />
      <Stack.Screen name="auth/client/login" />
      <Stack.Screen name="auth/client/register" />
      <Stack.Screen name="consultant" />
      <Stack.Screen name="partner" />
      <Stack.Screen name="client" />
    </Stack>
  );
}