import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@shared/components';
import type { MainTabScreenProps } from '../../../types/navigation';

export default function SearchScreen(_props: MainTabScreenProps<'Search'>) {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        {searchQuery ? (
          <Text style={styles.text}>Searching for: {searchQuery}</Text>
        ) : (
          <Text style={styles.text}>Enter a search query</Text>
        )}
      </View>
    </View>
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
  text: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 16,
    textAlign: 'center',
  },
});
