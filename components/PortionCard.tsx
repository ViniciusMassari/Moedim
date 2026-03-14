import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Text } from 'react-native';
import { TorahScrollIcon } from './TorahScrollIcon';
import { Box } from './ui/box';
import { Card } from './ui/card';
import { Divider } from './ui/divider';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';

interface PortionCardProps {
  date: Date;
  parashaName: string;
  parashahNameHebrew: string;
  torahPortion: string;
  haftaraPortion: string;
  britChadashaPortion: string;
  isNextShabbat?: boolean;
}
export const PortionCard = ({
  date,
  parashaName,
  parashahNameHebrew,
  torahPortion,
  haftaraPortion,
  britChadashaPortion,
  isNextShabbat = false,
}: PortionCardProps) => {
  const formattedDate = format(date, 'dd MMM', { locale: ptBR });
  return (
    <Card
      className={`mr-3 rounded-lg  w-80 border ${isNextShabbat ? ' border-t-0 border-r-2 border-b-2 border-l-2  border-r-jewish-gold border-jewish-gold' : 'border-gray-300'}`}
    >
      <VStack className='px-2 pb-2 rounded-lg'>
        <HStack className='justify-between '>
          <Box className='p-1 bg-jewish-blue-sky rounded-xl'>
            <TorahScrollIcon />
          </Box>
          <Box className=''>
            {isNextShabbat ? (
              <Box className='rounded-2xl bg-jewish-gold/20 px-2 py-2'>
                <Text className='font-medium text-jewish-gold-dark text-sm'>
                  Esta semana
                </Text>
              </Box>
            ) : (
              <Text className='text-base text-muted-foreground'>
                {formattedDate}
              </Text>
            )}
          </Box>
        </HStack>

        <Text className='mt-2 font-display text-lg font-bold leading-tight '>
          Parashá {parashaName}
        </Text>
        <Text className='text-base text-muted-foreground font-display mb-3'>
          {parashahNameHebrew}
        </Text>
        <Divider />
        <Box>
          <Text className='font-semibold text-jewish-blue-deep pt-3 dark:text-jewish-blue-light'>
            Torá:
          </Text>
          <Text className='text-muted-foreground truncate '>
            {torahPortion}
          </Text>
        </Box>

        <Box>
          <Text className='font-semibold text-jewish-blue-deep pt-3 dark:text-jewish-blue-light'>
            Haftará:
          </Text>
          <Text className='text-muted-foreground truncate'>
            {haftaraPortion}
          </Text>
        </Box>
        <Box>
          <Text className='font-semibold  pt-3 text-jewish-gold-dark dark:text-jewish-gold'>
            Brit Chadashá:
          </Text>
          <Text className='text-muted-foreground truncate'>
            {britChadashaPortion}
          </Text>
        </Box>
      </VStack>
    </Card>
  );
};
