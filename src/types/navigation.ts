import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Root Stack Navigator
export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Profile: { userId: string };
};

// Main Tab Navigator
export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Settings: undefined;
};

// Screen Props Types
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

// Navigation types
export type { NativeStackScreenProps, BottomTabScreenProps };
