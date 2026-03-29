import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { ShofarIcon } from './ShofarIcon';
import { Box } from './ui/box';
import { Card } from './ui/card';
import { HStack } from './ui/hstack';
import { Icon } from './ui/icon';

type Icon = {
  [key: string]: any;
};

interface FeastCardProps {
  isMajor?: boolean;
  feastName: string;
  feastDate: Date;
}

export const FeastCard = ({
  isMajor = true,
  feastName,
  feastDate,
}: FeastCardProps) => {
  const iconKey: Icon = {
    shavuot: ShofarIcon,
  };
  const formattedDate = format(feastDate, 'dd MMM', { locale: ptBR });
  return (
    <Card
      className={` ${isMajor ? 'border-l-jewish-gold bg-jewish-gold/5' : ' border-l-jewish-blue-light   '}  border-l-4 flex justify-between flex-row items-center my-1`}
    >
      <HStack className='gap-3 '>
        <View
          className={`w-12 h-12 rounded-lg ${isMajor ? 'bg-jewish-gold/10' : 'bg-jewish-blue-sky'}  items-center justify-center self-start`}
        >
          <Icon
            as={iconKey['shavuot']}
            className={`${isMajor ? 'color-jewish-gold-dark' : 'color-jewish-blue-deep'}`}
            size={'xl'}
          />
        </View>

        <Box className='min-w-0 '>
          <Text className='font-display text-xl font-bold truncate'>
            {feastName}
          </Text>
          <Text className='text-sm text-muted-foreground'>{formattedDate}</Text>
        </Box>
      </HStack>
      <ArrowRight className='text-muted-foreground' size={18} />
    </Card>
  );
};
