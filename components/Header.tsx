import { FontAwesome5 } from '@expo/vector-icons';
import { formatJewishDate, toJewishDate } from 'jewish-date';
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from './LinearGradient';
import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';

export const Header = () => {
  const insets = useSafeAreaInsets();
  const todayDate = new Date();
  const jewishDate = toJewishDate(todayDate);
  const formattedJewishDate = formatJewishDate(jewishDate);
  const todayDateBR = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
  }).format(todayDate);

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
              {formattedJewishDate ?? formattedJewishDate}
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
