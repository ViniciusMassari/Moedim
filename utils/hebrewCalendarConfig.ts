import { NextShabbat } from '@/types/NextShabbat';
import {
  CalOptions,
  CandleLightingEvent,
  HavdalahEvent,
  HebrewCalendar,
  Location,
  ParshaEvent,
} from '@hebcal/core';
import '@hebcal/locales';
import { isPast, isSameDay } from 'date-fns';

const date = new Date();

// first and last day of the current month
const start = new Date(date.getFullYear(), date.getMonth(), 1);
const end = new Date(new Date().getFullYear(), start.getMonth() + 1, 0);

const monthShabbatotCalendar: CalOptions = {
  year: new Date().getFullYear(),
  isHebrewYear: false,
  start,
  end,
  location: Location.lookup('Sao Paulo'),
  sedrot: true,
  candlelighting: true,
  yizkor: false,
  noMinorFast: true,
  noModern: true,
  noSpecialShabbat: true,
  omer: false,
  noRoshChodesh: true,
  noHolidays: true,
  yomKippurKatan: false,
  molad: false,
  addHebrewDates: true,
};

export const shabbattot = HebrewCalendar.calendar(
  monthShabbatotCalendar,
).filter((ev) => {
  const category = ev.getCategories();

  return (
    category.includes('candles') ||
    category.includes('havdalah') ||
    category.includes('parashat')
  );
});

export function nextShabbat() {
  let candleLighting: CandleLightingEvent | null = null;
  let shabbat: ParshaEvent | null = null;
  let havdalah: HavdalahEvent | null = null;
  for (let i = 0; i < shabbattot.length; i++) {
    const event = shabbattot[i];

    // if it's a parashat and it's not in the past or it's the same day, we consider it the next shabbat.
    if (
      (event.getCategories().includes('parashat') && !isPast(event.greg())) ||
      (event.getCategories().includes('parashat') &&
        isSameDay(event.greg(), new Date()))
    ) {
      candleLighting = shabbattot[i - 1] as CandleLightingEvent;
      shabbat = event as ParshaEvent;
      havdalah = shabbattot[i + 1] as HavdalahEvent;
    }
    continue;
  }

  if (candleLighting && shabbat && havdalah) {
    const nextShabbat: NextShabbat = {
      candleLightingTime: candleLighting?.eventTime,
      parashahTitle: shabbat.parsha[0],
      havdalahTime: havdalah?.eventTime,
    };
    return nextShabbat;
  }

  return null;
}
