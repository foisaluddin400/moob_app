import React from 'react';
import Svg, {
  G,
  Path,
  ClipPath,
  Rect,
  Defs,
} from 'react-native-svg';

type IconName =
  | 'clipboard'
  | 'document'
  | 'carve'
  | 'lock';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function Icon({
  name,
  size = 20,
  color = '#00B2B7',
}: IconProps) {
  switch (name) {
    case 'clipboard':
      return (
        <Svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
        >
          <G clipPath="url(#clip0_59_2220)">
            <Path
              d="M7.50373 1.65991H12.5062C12.9667 1.65991 13.34 2.03264 13.34 2.49241V4.15741C13.34 4.61719 12.9667 4.98991 12.5062 4.98991H7.50373C7.04327 4.98991 6.66998 4.61719 6.66998 4.15741V2.49241C6.66998 2.03264 7.04327 1.65991 7.50373 1.65991Z"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M13.3275 3.33008H14.9938C15.914 3.33008 16.66 4.07627 16.66 4.99674V16.6634C16.66 17.5839 15.914 18.3301 14.9938 18.3301H4.99627C4.07602 18.3301 3.33002 17.5839 3.33002 16.6634V4.99674C3.33002 4.07627 4.07602 3.33008 4.99627 3.33008H6.66252"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M10 9.15991H13.33"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M10 13.3301H13.33"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M6.66998 9.15991H6.67998"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M6.66998 13.3301H6.67998"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>

          <ClipPath id="clip0_59_2220">
            <Rect width={20} height={20} fill="white" />
          </ClipPath>
        </Svg>
      );

case 'document':
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <G clipPath="url(#clip0_247_12066)">
        <Path
          d="M4.99627 18.3299C4.07602 18.3299 3.33002 17.5836 3.33002 16.6629V3.32691C3.33002 2.40625 4.07602 1.65991 4.99627 1.65991H11.6613C12.1939 1.65905 12.7049 1.87086 13.0809 2.24836L16.0702 5.23896C16.4485 5.61524 16.6609 6.12718 16.66 6.66091V16.6629C16.66 17.5836 15.914 18.3299 14.9938 18.3299H4.99627Z"
          stroke="#D97706"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M11.67 1.65991V5.82658C11.67 6.28682 12.0431 6.65991 12.5033 6.65991H16.67"
          stroke="#D97706"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M8.33998 7.5H6.66998"
          stroke="#D97706"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M13.34 10.8301H6.66998"
          stroke="#D97706"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M13.34 14.1599H6.66998"
          stroke="#D97706"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>

      <ClipPath id="clip0_247_12066">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Svg>
  );

case 'carve':
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G clipPath="url(#clip0_139_855)">
        <Path
          d="M7.3445 1.87448C7.40345 1.55887 7.67893 1.33008 8 1.33008C8.32107 1.33008 8.59656 1.55887 8.65551 1.87448L9.35635 5.58078C9.45822 6.12005 9.88003 6.54186 10.4193 6.64372L14.1256 7.34457C14.4412 7.40352 14.67 7.67901 14.67 8.00008C14.67 8.32115 14.4412 8.59663 14.1256 8.65558L10.4193 9.35643C9.88003 9.4583 9.45822 9.88011 9.35635 10.4194L8.65551 14.1257C8.59656 14.4413 8.32107 14.6701 8 14.6701C7.67893 14.6701 7.40345 14.4413 7.3445 14.1257L6.64365 10.4194C6.54178 9.88011 6.11997 9.4583 5.58071 9.35643L1.87441 8.65558C1.5588 8.59663 1.33 8.32115 1.33 8.00008C1.33 7.67901 1.5588 7.40352 1.87441 7.34457L5.58071 6.64372C6.11997 6.54186 6.54178 6.12005 6.64365 5.58078L7.3445 1.87448Z"
          stroke="#065357"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M13.33 1.33008V4.00008"
          stroke="#065357"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M14.67 2.65991H12"
          stroke="#065357"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M1.33 13.335C1.33 12.5977 1.9277 12 2.665 12C3.4023 12 4 12.5977 4 13.335C4 14.0723 3.4023 14.67 2.665 14.67C1.9277 14.67 1.33 14.0723 1.33 13.335Z"
          stroke="#065357"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>

      <Defs>
        <ClipPath id="clip0_139_855">
          <Rect width={16} height={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );

    default:
      return null;
  }
}