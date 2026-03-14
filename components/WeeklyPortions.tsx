import { ScrollView } from 'react-native';
import { PortionCard } from './PortionCard';
import { SectionTitle } from './SectionTitle';
import { Box } from './ui/box';

import { parashiot, shabbatotDates } from '@/utils/hebrewCalendarConfig';
import { portions } from '@/utils/portions';
import { closestTo } from 'date-fns';
export const WeeklyPortions = () => {
  const nextShabbat = shabbatotDates();
  const nextShabbatDate = closestTo(new Date(), nextShabbat || []);

  return (
    <Box className='mt-4'>
      <SectionTitle text='Porções Semanais' />
      <ScrollView horizontal>
        {parashiot.map((parashah, index) => {
          const readings = portions.find(
            (portion) => portion.title === parashah.parsha[0],
          );

          return (
            <PortionCard
              parashahNameHebrew={
                readings?.hebrewName || 'Nome em hebraico não encontrado'
              }
              key={index + parashah.parsha[0]}
              parashaName={parashah.parsha[0]}
              date={parashah.greg()}
              torahPortion={readings?.torah || 'Nenhuma leitura encontrada'}
              haftaraPortion={
                readings?.prophets || 'Nenhuma leitura encontrada'
              }
              britChadashaPortion={
                readings?.newTestament[0] || 'Nenhuma leitura encontrada'
              }
              isNextShabbat={
                parashah.greg().getDate() === nextShabbatDate?.getDate()
              }
            />
          );
        })}
      </ScrollView>
    </Box>
  );
};
