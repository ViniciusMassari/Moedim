import React from 'react';
import { Text } from 'react-native';
import { CandlesIcons } from './ui/CandleIcons';
import { HStack } from './ui/hstack';
interface CandlesLightingScheduleProps {
  candleLightingTime?: Date | null;
  havdalahTime?: Date | null;
}
export const CandlesLightingSchedule = ({
  candleLightingTime,
  havdalahTime,
}: CandlesLightingScheduleProps) => {
  return (
    <HStack className='gap-4 mb-4 text-sm '>
      <HStack className='items-center gap-1.5'>
        <CandlesIcons size={14} color='gold' />
        <Text className='text-jewish-primary-foreground'>
          Velas:{' '}
          {candleLightingTime?.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </HStack>
      <HStack className='items-center gap-1.5'>
        <Text className='text-jewish-gold'>✦</Text>
        <Text className='text-jewish-primary-foreground'>
          havdalá:{' '}
          {havdalahTime?.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </HStack>
    </HStack>
  );
};
