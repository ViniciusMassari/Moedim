import { CalOptions, HebrewCalendar, Location } from '@hebcal/core';
import '@hebcal/locales';

const date = new Date();

// primeiro e último dia do mês atual
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

const startPerf = performance.now();
export const shabbattot = HebrewCalendar.calendar(
  monthShabbatotCalendar,
).filter((ev) => {
  const category = ev.getCategories();

  return (
    category.includes('candles') ||
    category.includes('havdalah') ||
    category.includes('parashat') ||
    // including today's date for simplicity purposes
    ev.getDate().greg().toDateString() === new Date().toDateString()
  );
});

export const todayDate = shabbattot.find(
  (ev) => ev.getDate().greg().toDateString() === new Date().toDateString(),
);
