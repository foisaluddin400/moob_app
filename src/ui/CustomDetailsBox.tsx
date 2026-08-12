import React from 'react';
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CustomDetailsBoxProps {
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  iconName?: React.ComponentProps<typeof Feather>['name'];
  iconColor?: string;
  borderColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function CustomDetailsBox({
  title,
  subtitle,
  subtitleColor = '#10B981',
  iconName = 'mail',
  iconColor = '#00B2B7',
  borderColor = '#00B2B7',
  containerStyle,
}: CustomDetailsBoxProps) {
  return (
    <View style={[styles.emailBox, containerStyle]}>
      <View style={[styles.emailIconBox, { borderColor }]}>
        <Feather name={iconName} size={20} color={iconColor} />
      </View>
      <View>
        <Text style={styles.emailBoxTitle}>{title}</Text>
        {subtitle && (
          <Text style={[styles.onlineStatusText, { color: subtitleColor }]}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emailBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  emailIconBox: {
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emailBoxTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    fontFamily: 'Montserrat_600SemiBold',
  },
  onlineStatusText: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Montserrat_500Medium',
  },
});