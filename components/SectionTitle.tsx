import React from 'react';
import { Text } from 'react-native';

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <Text className='font-display text-2xl text-jewish-foreground font-bold mb-3'>
      {text}
    </Text>
  );
};
