import { Header } from '@/components/Header';
import { NextShabbatCard } from '@/components/NextShabbatCard';
import { WeeklyPortions } from '@/components/WeeklyPortions';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View className='px-4 py-6'>
          <NextShabbatCard />
          <WeeklyPortions />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
