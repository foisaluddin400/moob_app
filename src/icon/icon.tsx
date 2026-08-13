import React from "react";
import Svg, { G, Path, ClipPath, Rect, Defs } from "react-native-svg";

type IconName =
  | "clipboard"
  | "document"
  | "carve"
  | "recommend"
  | "done"
  | "mail"
  | "phone"
  | "hand"
  | "language"
  | "lock"
  | "check"
  | "star"
  | "star-filled"
  | "star-half"
  | "star-empty"
  | "student"
  | "work"
  | "citizenship"
  | "family"
  | "visa"
  | "passport"
  | "residence"
  | "citizen"
  | "digital"
  | "business"
  | "investor"
  | "other"
  | "newImmi"
  | "gdpr"
  | "location"
  | "client"
  | "lock";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export default function Icon({
  name,
  size = 20,
  color = "#00B2B7",
}: IconProps) {
  switch (name) {
    case "clipboard":
      return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
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

    case "document":
      return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
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

    case "carve":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
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

    case "done":
      return (
        <Svg width={48} height={48} viewBox="0 0 48 48" fill="none">
          <Path
            d="M3.98999 23.945C3.98999 12.9241 12.9241 3.98999 23.945 3.98999C34.9658 3.98999 43.9 12.9241 43.9 23.945C43.9 34.9658 34.9658 43.9 23.945 43.9C12.9241 43.9 3.98999 34.9658 3.98999 23.945Z"
            stroke="#059669"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Path
            d="M17.95 23.94L21.94 27.93L29.92 19.95"
            stroke="#059669"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "recommend":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <G clipPath="url(#clip0_141_1673)">
            <Path
              d="M7.34448 1.87448C7.40343 1.55887 7.67892 1.33008 7.99999 1.33008C8.32105 1.33008 8.59654 1.55887 8.65549 1.87448L9.35634 5.58078C9.45821 6.12005 9.88002 6.54186 10.4193 6.64372L14.1256 7.34457C14.4412 7.40352 14.67 7.67901 14.67 8.00008C14.67 8.32115 14.4412 8.59663 14.1256 8.65558L10.4193 9.35643C9.88002 9.4583 9.45821 9.88011 9.35634 10.4194L8.65549 14.1257C8.59654 14.4413 8.32105 14.6701 7.99999 14.6701C7.67892 14.6701 7.40343 14.4413 7.34448 14.1257L6.64363 10.4194C6.54176 9.88011 6.11995 9.4583 5.58069 9.35643L1.87439 8.65558C1.55878 8.59663 1.32999 8.32115 1.32999 8.00008C1.32999 7.67901 1.55878 7.40352 1.87439 7.34457L5.58069 6.64372C6.11995 6.54186 6.54176 6.12005 6.64363 5.58078L7.34448 1.87448Z"
              stroke="#00C2D6"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M13.33 1.33008V4.00008"
              stroke="#00C2D6"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M14.67 2.66016H12"
              stroke="#00C2D6"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M1.32999 13.335C1.32999 12.5977 1.92769 12 2.66499 12C3.40229 12 3.99999 12.5977 3.99999 13.335C3.99999 14.0723 3.40229 14.67 2.66499 14.67C1.92769 14.67 1.32999 14.0723 1.32999 13.335Z"
              stroke="#00C2D6"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>

          <Defs>
            <ClipPath id="clip0_141_1673">
              <Rect width={16} height={16} fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case "client":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <Path
            d="M10.67 7.335L12.0033 8.67L14.67 6"
            stroke="#065357"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Path
            d="M10.66 14V12.6667C10.66 11.1939 9.46654 10 7.9943 10H3.99573C2.5235 10 1.33002 11.1939 1.33002 12.6667V14"
            stroke="#065357"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Path
            d="M3.33002 4.665C3.33002 3.19316 4.52318 2 5.99502 2C7.46686 2 8.66002 3.19316 8.66002 4.665C8.66002 6.13684 7.46686 7.33 5.99502 7.33C4.52318 7.33 3.33002 6.13684 3.33002 4.665Z"
            stroke="#065357"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "mail":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <Path
            d="M14.66 4.66016L8.66752 8.66016C8.25356 8.91211 7.74247 8.91211 7.32852 8.66016L1.33002 4.66016"
            stroke="#A8A8AB"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Path
            d="M2.66302 2.66016H13.327C14.0632 2.66016 14.66 3.2573 14.66 3.99391V11.9964C14.66 12.733 14.0632 13.3302 13.327 13.3302H2.66302C1.92682 13.3302 1.33002 12.733 1.33002 11.9964V3.99391C1.33002 3.2573 1.92682 2.66016 2.66302 2.66016Z"
            stroke="#A8A8AB"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "phone":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <G clipPath="url(#clip0_245_9360)">
            <Path
              d="M9.21604 11.0396C9.49958 11.1699 9.83551 11.086 10.0245 10.8377L10.2611 10.5278C10.5129 10.1921 10.9079 9.99458 11.3275 9.99458H13.327C14.0632 9.99458 14.66 10.5914 14.66 11.3276V13.3271C14.66 14.0633 14.0632 14.6601 13.327 14.6601C6.70126 14.6601 1.33002 9.28884 1.33002 2.66308C1.33002 1.92688 1.92682 1.33008 2.66302 1.33008H4.66252C5.39871 1.33008 5.99552 1.92688 5.99552 2.66308V4.66258C5.99552 5.08215 5.79797 5.47724 5.46232 5.72898L5.1504 5.96292C4.89811 6.15556 4.81668 6.49939 4.95578 6.78471C5.86667 8.63483 7.36479 10.1311 9.21604 11.0396Z"
              stroke="#A8A8AB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>

          <Defs>
            <ClipPath id="clip0_245_9360">
              <Rect width={16} height={16} fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case "language":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <G clipPath="url(#clip0_245_9364)">
            <Path
              d="M14.36 10H11.3333C10.597 10 10 10.597 10 11.3333V14.36"
              stroke="#A8A8AB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M4.66998 2.22021V3.32624C4.66998 4.43017 5.56573 5.32509 6.67069 5.32509C7.40733 5.32509 8.00449 5.9217 8.00449 6.65765C8.00449 7.39056 8.6047 7.99021 9.3383 7.99021C10.0749 7.99021 10.6721 7.39361 10.6721 6.65765C10.6721 5.92474 11.2723 5.32509 12.0059 5.32509H14.12"
              stroke="#A8A8AB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M7.33999 14.6301V11.9967C7.33999 11.2604 6.74271 10.6634 6.00592 10.6634C5.26913 10.6634 4.67184 10.0665 4.67184 9.33008V8.66341C4.67184 7.92703 4.07455 7.33008 3.33776 7.33008H1.37"
              stroke="#A8A8AB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M1.33002 7.99508C1.33002 4.3141 4.31404 1.33008 7.99502 1.33008C11.676 1.33008 14.66 4.3141 14.66 7.99508C14.66 11.6761 11.676 14.6601 7.99502 14.6601C4.31404 14.6601 1.33002 11.6761 1.33002 7.99508Z"
              stroke="#A8A8AB"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>

          <Defs>
            <ClipPath id="clip0_245_9364">
              <Rect width={16} height={16} fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );

    case "location":
      return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <Path
            d="M13.33 6.66333C13.33 10.6633 7.995 14.67 7.995 14.67C7.995 14.67 2.66 10.6633 2.66 6.66333C2.66 3.71667 5.04667 1.33 7.995 1.33C10.9433 1.33 13.33 3.71667 13.33 6.66333Z"
            stroke="#A8A8AB"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <Path
            d="M7.995 8.66333C9.09957 8.66333 9.995 7.7679 9.995 6.66333C9.995 5.55876 9.09957 4.66333 7.995 4.66333C6.89043 4.66333 5.995 5.55876 5.995 6.66333C5.995 7.7679 6.89043 8.66333 7.995 8.66333Z"
            stroke="#A8A8AB"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case "hand":
      return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
          <G clipPath="url(#clip0_120_3639)">
            <Path
              d="M9.16998 14.3367L11.046 16.3501C11.823 17.184 13.0829 17.184 13.86 16.3501C14.637 15.5161 14.637 14.164 13.86 13.3301"
              stroke="#0F172A"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M11.397 11.9494L13.5766 14.27C14.2989 15.039 15.4699 15.039 16.1922 14.27C16.9145 13.501 16.9145 12.2543 16.1922 11.4853L12.8094 7.88375C11.7882 6.79789 10.1339 6.79789 9.11277 7.88375L8.34554 8.7006C7.62327 9.46957 6.45225 9.46957 5.72998 8.7006C5.00771 7.93163 5.00771 6.68487 5.72998 5.9159L8.17988 3.30756C9.81614 1.57005 12.3517 1.23739 14.3352 2.5L14.7449 2.75991C15.1162 2.99845 15.5575 3.08118 15.983 2.99196L17.5 2.66708"
              stroke="#0F172A"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M17.505 2.5L18.34 11.67H16.67"
              stroke="#0F172A"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M2.55735 2.5L1.66998 11.9914L7.43788 17.6C8.173 18.3148 9.36486 18.3148 10.1 17.6C10.8351 16.8852 10.8351 15.7262 10.1 15.0114"
              stroke="#0F172A"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M2.5 3.33008H9.17"
              stroke="#0F172A"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>

          <Defs>
            <ClipPath id="clip0_120_3639">
              <Rect width={20} height={20} fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );









    case 'student':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M14.2726 7.30302C14.5165 7.19133 14.6728 6.93953 14.6701 6.66282C14.6673 6.38611 14.506 6.13772 14.26 6.03129L8.54744 3.33008C8.19606 3.16369 7.79243 3.16369 7.44105 3.33008L1.72919 6.02852C1.48672 6.13876 1.33008 6.38752 1.33008 6.66231C1.33008 6.93711 1.48672 7.18586 1.72919 7.2961L7.44105 10.0001C7.79243 10.1665 8.19606 10.1665 8.54744 10.0001L14.2726 7.30302Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.6699 6.65991V10.6599"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4 8.33008V10.6616C4 11.7653 5.79086 12.6601 8 12.6601C10.2091 12.6601 12 11.7653 12 10.6616V8.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

  case 'work':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M8 8H8.01"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.6601 4.00008V2.66508C10.6601 1.92778 10.0635 1.33008 9.32758 1.33008H6.66258C5.92666 1.33008 5.33008 1.92778 5.33008 2.66508V4.00008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.6601 10.6599C10.6175 4.50855e+15 5.37263 4.50855e+15 1.33008 8.65991"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.66308 4H13.3271C14.0633 4 14.6601 4.59674 14.6601 5.33286V11.9971C14.6601 12.7333 14.0633 13.33 13.3271 13.33H2.66308C1.92688 13.33 1.33008 12.7333 1.33008 11.9971V5.33286C1.33008 4.59674 1.92688 4 2.66308 4Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

  case 'family':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M8.26768 3.65402L6.38615 5.53517C5.86577 6.0671 5.86577 6.92935 6.38615 7.46127C6.90668 7.99304 7.75047 7.99304 8.27101 7.46127L9.41072 6.29662C9.71198 5.98864 10.1206 5.81561 10.5468 5.81561C10.9729 5.81561 11.3816 5.98864 11.6828 6.29662L12.9365 7.57842C13.4569 8.11035 13.4569 8.9726 12.9365 9.50452C13.9936 8.42432 14.6601 7.51985 14.6601 6.15768C14.6601 4.60614 13.724 3.21519 12.3063 2.65991C10.8885 2.10463 9.2825 2.49995 8.26768 3.65402ZM12.9365 9.50452C12.671 9.77586 12.3109 9.9283 11.9354 9.9283C11.5599 9.9283 11.1998 9.77586 10.9343 9.50452C11.3221 9.8628 11.485 10.4103 11.3582 10.9285C11.2314 11.4467 10.8354 11.8513 10.3283 11.9809C9.82119 12.1105 9.28545 11.944 8.93484 11.5478C9.20056 11.8182 9.35015 12.1856 9.35065 12.5688C9.35115 12.9521 9.20252 13.3198 8.93751 13.591C8.68161 13.8526 8.33261 13.9966 7.97072 13.9899C7.60882 13.9832 7.26515 13.8265 7.01866 13.5556L3.32958 9.90364C2.32983 8.88201 1.33008 7.72417 1.33008 6.15768C1.33038 4.60626 2.26652 3.21558 3.68421 2.66047C5.1019 2.10537 6.70774 2.50073 7.72248 3.6547C7.87623 3.80072 8.11428 3.80042 8.26768 3.65402"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

  case 'residence':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M10 14V8.66667C10 8.29848 9.70152 8 9.33333 8H6.66667C6.29848 8 6 8.29848 6 8.66667V14"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2 6.47795C1.99991 6.07526 2.17283 5.69299 2.47267 5.43306L7.13933 1.33008C7.63626 0.899284 8.36374 0.899284 8.86067 1.33008L13.5273 5.43306C13.8272 5.69299 14.0001 6.07526 14 6.47795V12.6324C14 13.3878 13.403 14.0001 12.6667 14.0001H3.33333C2.59695 14.0001 2 13.3878 2 12.6324V6.47795Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

  case 'citizen':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M1.33008 13.9902C1.32996 11.6914 2.55804 9.6059 4.46867 8.66016C6.3793 7.71441 8.61799 8.08392 10.1901 9.60452"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.33008 5.335C3.33008 3.49313 4.82321 2 6.66508 2C8.50695 2 10.0001 3.49313 10.0001 5.335C10.0001 7.17687 8.50695 8.67 6.66508 8.67C4.82321 8.67 3.33008 7.17687 3.33008 5.335Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.6699 12.6651L12.0033 14.0001L14.6699 11.3301"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

  case 'digital':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M11.9736 12.7871L10.7606 7.26123L13.1192 4.90262C14.13 3.89178 14.4669 2.54401 14.13 1.87012C13.4561 1.53317 12.1083 1.87012 11.0975 2.88095L8.73889 5.23956L3.213 4.02656C2.87606 3.95917 2.6065 4.09395 2.47172 4.36351L2.26956 4.70045C2.13478 5.03739 2.20217 5.37434 2.47172 5.57651L6.04333 7.93512L4.69556 9.95678H2.67389L2 10.6307L4.02167 11.9785L5.36944 14.0001L6.04333 13.3262V11.3046L8.065 9.95678L10.4236 13.5284C10.6258 13.798 10.9627 13.8653 11.2997 13.7306L11.6366 13.5958C11.9062 13.3936 12.0409 13.1241 11.9736 12.7871Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

case 'investor':
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_194_13312)">
        <Path
          d="M6.66992 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M7.39475 1.33008C7.7775 1.1422 8.22471 1.14374 8.60619 1.33425L14.0205 4.01001C14.3481 4.17207 14.2338 4.67008 13.869 4.67008H2.1319C1.76709 4.67008 1.65352 4.17207 1.98047 4.01001L7.39475 1.33008Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M9.33008 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M12 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M2 14.6602H14"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M4 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>

      <Defs>
        <ClipPath id="clip0_194_13312">
          <Rect width={16} height={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );



  case 'business':
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_194_13312)">
        <Path
          d="M6.66992 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M7.39475 1.33008C7.7775 1.1422 8.22471 1.14374 8.60619 1.33425L14.0205 4.01001C14.3481 4.17207 14.2338 4.67008 13.869 4.67008H2.1319C1.76709 4.67008 1.65352 4.17207 1.98047 4.01001L7.39475 1.33008Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M9.33008 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M12 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M2 14.6602H14"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <Path
          d="M4 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>

      <Defs>
        <ClipPath id="clip0_194_13312">
          <Rect width={16} height={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );



  case 'investor':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M6.66992 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.39475 1.33008C7.7775 1.1422 8.22471 1.14374 8.60619 1.33425L14.0205 4.01001C14.3481 4.17207 14.2338 4.67008 13.869 4.67008H2.1319C1.76709 4.67008 1.65352 4.17207 1.98047 4.01001L7.39475 1.33008Z"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.33008 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2 14.6602H14"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4 12.0001V7.33008"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );

  case 'other':
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
          d="M7.57145 14.6601H4.00367C3.26706 14.6601 2.66992 14.0633 2.66992 13.3271V2.66308C2.66992 1.92688 3.26706 1.33008 4.00367 1.33008H9.33867C9.76551 1.32903 10.1751 1.49843 10.4764 1.80063L12.8691 4.19203C13.1715 4.49314 13.341 4.90248 13.3399 5.32908V8.89485"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.33008 1.33008V4.66341C9.33008 5.0316 9.62855 5.33008 9.99674 5.33008H13.3301"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.33008 12.6602H13.3301"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.3301 10.6602V14.6602"
          stroke="#6B6B6B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );


case 'newImmi':
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M7.50367 1.66992H12.5062C12.9666 1.66992 13.3399 2.04264 13.3399 2.50242V4.16742C13.3399 4.6272 12.9666 4.99992 12.5062 4.99992H7.50367C7.0432 4.99992 6.66992 4.6272 6.66992 4.16742V2.50242C6.66992 2.04264 7.0432 1.66992 7.50367 1.66992Z"
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M13.3276 3.33008H14.9938C15.9141 3.33008 16.6601 4.07627 16.6601 4.99674V16.6634C16.6601 17.5839 15.9141 18.3301 14.9938 18.3301H4.99633C4.07608 18.3301 3.33008 17.5839 3.33008 16.6634V4.99674C3.33008 4.07627 4.07608 3.33008 4.99633 3.33008H6.66258"
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M7.5 11.6699H12.5"
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M10 14.1699V9.16992"
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );


case 'gdpr':
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M16.6601 10.7549C16.6601 14.9924 13.7441 17.1111 10.2783 18.3399C10.0969 18.4025 9.89972 18.3995 9.72015 18.3314C6.24602 17.1111 3.33008 14.9924 3.33008 10.7549V4.82256C3.33008 4.35451 3.70308 3.97508 4.1632 3.97508C5.82945 3.97508 7.91227 2.9581 9.3619 1.66992C9.72654 1.35302 10.2636 1.35302 10.6283 1.66992C12.0862 2.96657 14.1607 3.97508 15.827 3.97508C16.2871 3.97508 16.6601 4.35451 16.6601 4.82256V10.7549Z"
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Path
        d="M7.5 9.99508L9.16667 11.6601L12.5 8.33008"
        stroke="#0F172A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );




    default:
      return null;
  }
}
