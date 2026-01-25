import React from 'react';
import { Text } from 'react-native';
import { TorahScrollIcon } from './TorahScrollIcon';
import { Box } from './ui/box';
import { Card } from './ui/card';
import { Divider } from './ui/divider';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';

export const PortionCard = () => {
  return (
    <Card className='mr-3 rounded-lg  w-80 border border-gray-300'>
      {/*O card da porção da semana atual será o primeiro, então aplique as seguintes classes sempre no primeiro card,
       dentro do componente Card bordert-0 border-r-2 border-b-2 border-l-2  border-r-jewish-gold border-jewish-gold
      Senão deixe a borda cinza.

      O texto "Esta semana" caso a porção seja a da semana atual, deve ser exibido no topo do card, centralizado, em uma caixa com fundo dourado e texto dourado escuro, com bordas arredondadas.
      Caso contrário, exiba apenas a no formato "dd de mm" exemplo: "12 de jan", as classes devem ser font-medium text-jewish-gold-dark text-sm no <Text></Text>
      na Box devem ser  rounded-2xl bg-jewish-gold/20 px-2 py-2
      
      */}
      <VStack className='px-2 pb-2 rounded-lg'>
        <HStack className='justify-between '>
          <Box className='p-1 bg-jewish-blue-sky rounded-xl'>
            <TorahScrollIcon />
          </Box>
          <Box className=''>
            <Text className='text-base text-muted-foreground'>9 de feb.</Text>
          </Box>
        </HStack>

        <Text className='mt-2 font-display text-lg font-bold leading-tight '>
          Parashá Vayera
        </Text>
        <Text className='text-base text-muted-foreground font-display mb-3'>
          וירא
        </Text>
        <Divider />
        <Box>
          <Text className='font-semibold text-jewish-blue-deep pt-3 dark:text-jewish-blue-light'>
            Torá:
          </Text>
          <Text className='text-muted-foreground truncate '>
            Gênesis 28:10 - 32:3
          </Text>
        </Box>

        <Box>
          <Text className='font-semibold text-jewish-blue-deep pt-3 dark:text-jewish-blue-light'>
            Haftará:
          </Text>
          <Text className='text-muted-foreground truncate'>
            Gênesis 28:10 - 32:3
          </Text>
        </Box>
        <Box>
          <Text className='font-semibold  pt-3 text-jewish-gold-dark dark:text-jewish-gold'>
            Brit Chadashá:
          </Text>
          <Text className='text-muted-foreground truncate'>
            Gênesis 28:10 - 32:3
          </Text>
        </Box>
      </VStack>
    </Card>
  );
};
