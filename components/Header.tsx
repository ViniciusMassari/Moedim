import { todayDate } from '@/utils/hebrewCalendarConfig';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from './LinearGradient';
import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';

export const Header = () => {
  const insets = useSafeAreaInsets();
  const todayDateFormatted = todayDate?.render('pt');
  const todayDateBR = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
  }).format(todayDate?.getDate().greg());

  return (
    <View style={{ paddingTop: insets.top }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['hsl(220,65%,25%)', 'hsl(220,60%,35%)']}
      >
        <VStack className='p-6' space='md'>
          <HStack>
            <Box>
              <HStack space='md' className=''>
                <FontAwesome5 name='menorah' size={24} color='white' />
                <Text className='text-jewish-primary-foreground text-2xl font-bold font-display '>
                  Moedim
                </Text>
              </HStack>
            </Box>
          </HStack>

          <HStack space='sm' className='items-baseline'>
            <Text className='text-jewish-primary-foreground text-2xl font-semibold font-jakarta'>
              {todayDateFormatted ?? todayDateFormatted}
            </Text>
            <Text className='text-jewish-primary-foreground  text-sm capitalize opacity-70'>
              {todayDateBR ?? todayDateBR}
            </Text>
          </HStack>
        </VStack>
      </LinearGradient>
    </View>
  );
};
