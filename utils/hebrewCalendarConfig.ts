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

function getCalendarOptions(year: number, month: number): CalOptions {
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);

  return {
    year,
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
}

function getFeastsCalendarOptions(year: number): CalOptions {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);

  return {
    year,
    isHebrewYear: false,
    start,
    end,
    location: Location.lookup('Sao Paulo'),
    sedrot: false,
    candlelighting: false,
    yizkor: false,
    noMinorFast: false,
    noModern: true,
    noSpecialShabbat: true,
    omer: false,
    noRoshChodesh: false,
    noHolidays: false,
    yomKippurKatan: false,
    molad: false,
    addHebrewDates: true,
  };
}

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();

let monthShabbatotCalendar = getCalendarOptions(year, month);
let shabbattot = HebrewCalendar.calendar(monthShabbatotCalendar).filter(
  (ev) => {
    const category = ev.getCategories();
    return (
      category.includes('candles') ||
      category.includes('havdalah') ||
      category.includes('parashat')
    );
  },
);

let parashiot = shabbattot.filter((ev) =>
  ev.getCategories().includes('parashat'),
) as ParshaEvent[];

function nextShabbat() {
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
      break;
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

// Check if nextShabbat returns null, if so, advance to next month up to 3 times
let attempts = 0;
while (nextShabbat() === null && attempts < 3) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  monthShabbatotCalendar = getCalendarOptions(year, month);
  shabbattot = HebrewCalendar.calendar(monthShabbatotCalendar).filter((ev) => {
    const category = ev.getCategories();
    return (
      category.includes('candles') ||
      category.includes('havdalah') ||
      category.includes('parashat')
    );
  });
  parashiot = shabbattot.filter((ev) =>
    ev.getCategories().includes('parashat'),
  ) as ParshaEvent[];
  attempts++;
}

export { nextShabbat, parashiot, shabbattot };

export function shabbatotDates(): Date[] | null {
  return shabbattot.map((ev) => ev.greg());
}

let currentDateFeasts = new Date();
let yearFeasts = currentDateFeasts.getFullYear();

let feastsCalendar = getFeastsCalendarOptions(yearFeasts);

let feasts = HebrewCalendar.calendar(feastsCalendar).filter((ev) => {
  const category = ev.getCategories();
  const desc = ev.getDesc();
  const allowedFeasts = [
    'Erev Pesach',
    'Erev Shavuot',
    "Erev Tish'a B'Av",
    'Erev Rosh Hashana',
    'Erev Yom Kippur',
    'Yom Kippur',
    'Erev Sukkot',
    'Sukkot VII (Hoshana Raba)',
    'Shmini Atzeret',
    'Simchat Torah',
    'Chanukah: 1 Candle',
    'Chanukah: 8 Candles',
    'Erev Purim',
    'Purim',
    'Tu BiShvat',
    'Shushan Purim',
    'Pesach Sheni',
    'Lag BaOmer',
  ];
  return (
    ((category.includes('holiday') && category.includes('major')) ||
      (category.includes('holiday') && category.includes('minor')) ||
      category.includes('fast') ||
      category.includes('roshchodesh')) &&
    !category.includes('shabbat') &&
    allowedFeasts.some((allowed) => desc.includes(allowed))
  );
});

export { feasts };
