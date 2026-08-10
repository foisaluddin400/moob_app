import { Stack } from 'expo-router';

export default function PartnerLayout() {
  return (
    <Stack screenOptions={{ headerBackTitle: 'Back' }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="account-settings" options={{ title: 'Account Settings' }} />
      <Stack.Screen name="terms" options={{ title: 'Terms & Conditions' }} />
      <Stack.Screen name="privacy" options={{ title: 'Privacy Policy' }} />
    </Stack>
  );
}
