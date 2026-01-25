import React from 'react';

import { Text } from 'react-native';
import { AddReminderButton } from './AddReminderButton';
import { CandlesLightingSchedule } from './CandlesLightingSchedule';
import { LinearGradient } from './LinearGradient';
import { SectionTitle } from './SectionTitle';
import { Box } from './ui/box';
import { CandlesIcons } from './ui/CandleIcons';
import { Divider } from './ui/divider';
import { HStack } from './ui/hstack';
import { WeeklyPortionReadings } from './WeeklyPortionReadings';

export const NextShabbatCard = () => {
  return (
    <Box className='border-l-jewish-blue-light rounded-lg'>
      <SectionTitle text='Próximo Shabbat' />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['hsl(220,65%,25%)', 'hsl(220,60%,35%)']}
        className='rounded-lg p-5'
      >
        <HStack className='items-start justify-between mb-3 '>
          <Box className='bg-jewish-primary-foreground/10 opacity-80 border rounded-lg border-transparent p-1.5'>
            <CandlesIcons color='gold' />
          </Box>
          <Text className='font-display text-lg opacity-80 text-jewish-primary-foreground'>
            שבת וירא
          </Text>
        </HStack>
        <Text className='font-display font-bold text-2xl text-jewish-primary-foreground pb-2'>
          Shabbat Vayera
        </Text>
        <Text className='text-base mb-4 capitalize text-jewish-primary-foreground/80'>
          Sexta-Feira, 23 De Janeiro
        </Text>

        <CandlesLightingSchedule />
        <Divider className=' text-jewish-primary-foreground/80' />
        <WeeklyPortionReadings />
        <AddReminderButton />
      </LinearGradient>
    </Box>
  );
};
