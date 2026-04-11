import { feasts } from '@/utils/hebrewCalendarConfig';
import '@hebcal/locales';
import React from 'react';
import { View } from 'react-native';
import { FeastCard } from './FeastCard';
import { SectionTitle } from './SectionTitle';

export const FeastsList = () => {
  return (
    <View className='mt-4'>
      <SectionTitle text='Festas Maiores' />
      {feasts
        .filter((ev) => ev.getCategories().includes('major'))
        .map((feast, index) => (
          <FeastCard
            key={index}
            feastName={feast.render('pt')}
            feastDate={feast.greg()}
          />
        ))}
      <View className='mt-2'>
        <SectionTitle text='Festas Menores' />
        {feasts
          .filter((ev) => ev.getCategories().includes('minor'))
          .map((feast, index) => (
            <FeastCard
              key={index}
              isMajor={false}
              feastName={feast.render('pt')}
              feastDate={feast.greg()}
            />
          ))}
      </View>
    </View>
  );
};
