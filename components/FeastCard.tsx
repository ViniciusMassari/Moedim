import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { CrownIcon } from './CrownIcon';
import { FireIcon } from './FireIcon';
import { HanukiahIcon } from './HanukiahIcon';
import { LambIcon } from './LambIcon';
import { ShofarIcon } from './ShofarIcon';
import { TempleIcon } from './TempleIcon';
import { TentIcon } from './TentIcon';
import { TorahScrollIcon } from './TorahScrollIcon';
import { TreeIcon } from './TreeIcon';
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
    pesach: LambIcon,
    sukot: TentIcon,
    'shmini atzeret': TentIcon,
    'rosh hashana': ShofarIcon,
    'yom kipur': ShofarIcon,
    chanucá: HanukiahIcon,
    torá: TorahScrollIcon,
    "tishá b'av": TempleIcon,
    purim: CrownIcon,
    'tu bishvat': TreeIcon,
    'lag baoomer': FireIcon,
  };

  const getIconForFeast = (name: string) => {
    const normalizedName = name.toLowerCase();
    const foundKey = Object.keys(iconKey).find((key) =>
      normalizedName.includes(key),
    );
    return foundKey ? iconKey[foundKey] : TorahScrollIcon;
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
            as={getIconForFeast(feastName)}
            className={`${isMajor ? 'color-jewish-gold-dark' : 'color-jewish-blue-deep'} `}
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
