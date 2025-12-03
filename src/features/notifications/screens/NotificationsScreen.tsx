import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { MainTabScreenProps } from '../../../types/navigation';

export default function NotificationsScreen(
  _props: MainTabScreenProps<'Notifications'>,
) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No Notifications</Text>
          <Text style={styles.emptyText}>
            You're all caught up! Check back later for new notifications.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
  },
});
