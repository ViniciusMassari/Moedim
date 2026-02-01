import React from 'react';
import { View } from 'react-native';
import { FeastCard } from './FeastCard';
import { SectionTitle } from './SectionTitle';

export const FeastsList = () => {
  return (
    <View className='mt-4'>
      <SectionTitle text='Festas Maiores' />
      <FeastCard />
      <View className='mt-2'>
        <SectionTitle text='Festas Menores' />
        <FeastCard isMajor={false} />
      </View>
    </View>
  );
};
