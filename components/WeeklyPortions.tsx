import { ScrollView } from 'react-native';
import { PortionCard } from './PortionCard';
import { SectionTitle } from './SectionTitle';
import { Box } from './ui/box';

export const WeeklyPortions = () => {
  return (
    <Box className='mt-4'>
      <SectionTitle text='Porções Semanais' />
      <ScrollView horizontal>
        <PortionCard />
      </ScrollView>
    </Box>
  );
};
