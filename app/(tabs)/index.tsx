import { FeastsList } from '@/components/FeastsList';
import { Header } from '@/components/Header';
import { NextShabbatCard } from '@/components/NextShabbatCard';
import { WeeklyPortions } from '@/components/WeeklyPortions';
import { ScrollView } from 'react-native';

export default function TabOneScreen() {
  return (
    <>
      <Header />
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        <NextShabbatCard />
        <WeeklyPortions />
        <FeastsList />
      </ScrollView>
    </>
  );
}
