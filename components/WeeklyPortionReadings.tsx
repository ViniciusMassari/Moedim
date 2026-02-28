import { portions } from '@/utils/portions';
import { Text } from 'react-native';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';

export const WeeklyPortionReadings = ({
  parashahTitle,
}: {
  parashahTitle: string;
}) => {
  const readings = portions.find((portion) => portion.title === parashahTitle);
  return (
    <VStack className='mt-3 gap-2'>
      <HStack className='gap-1'>
        <Text className='text-jewish-primary-foreground font-semibold'>
          Torá:
        </Text>
        <Text className='text-jewish-muted'>{readings?.torah || 'N/A'}</Text>
      </HStack>
      <HStack className='gap-1'>
        <Text className='text-jewish-primary-foreground font-semibold'>
          Haftará:
        </Text>
        <Text className='text-jewish-muted'>{readings?.prophets || 'N/A'}</Text>
      </HStack>
      <HStack className='gap-1'>
        <Text className='text-jewish-primary-foreground font-semibold'>
          Brit Chadashá:
        </Text>
        <Text className='text-jewish-muted '>
          {readings?.newTestament[0] || 'N/A'}
        </Text>
      </HStack>
    </VStack>
  );
};
