import { scaleQuantile } from 'd3-scale';
import {
  IDay, IHeatmapDataStore, IHour, IHourHeatmapFromRows, IMinute,
} from '../types/interfaces';
import { generateDays, isDate, readDate } from '../utils';

const defaultColors = [
  '#edf8e9',
  '#c7e9c0',
  '#a1d99b',
  '#74c476',
  '#41ab5d',
  '#238b45',
  '#005a32',
];
// ['#fff', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494'];
// ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'];

export default class HeatmapDataStore {
  M: IDay;

  T: IDay;

  W: IDay;

  Th: IDay;

  F: IDay;

  Sa: IDay;

  Su: IDay;

  days: IDay[];

  scale: (arg0: any) => any;

  colors: any[];

  domain: any[];

  constructor(args: IHeatmapDataStore) {
    this.M = args.M;
    this.T = args.T;
    this.W = args.W;
    this.Th = args.Th;
    this.F = args.F;
    this.Sa = args.Sa;
    this.Su = args.Su;
    this.days = [this.M, this.T, this.W, this.Th, this.F, this.Sa, this.Su];
    this.colors = args.colors ? args.colors : defaultColors;
    this.domain = args.domain ? args.domain : this.calcDomain();
    this.scale = this.createScale();
  }

  calcDomain() {
    const uniqueValues: number[] = [];
    this.days.forEach((day: IDay) => {
      day.hours.forEach((hour: IHour) => {
        if (!(uniqueValues.indexOf(hour.value) > -1)) {
          uniqueValues.push(hour.value);
        }
      });
    });

    return uniqueValues;
  }

  createScale() {
    const domain = this.calcDomain();
    const colorScale = scaleQuantile()
      .domain(domain)
      .range(this.colors);
    return colorScale;
  }

  static fromRows({ rows, dateColumn, valueColumn }: IHourHeatmapFromRows) {
    const {
      M, T, W, Th, F, Sa, Su,
    } = generateDays();

    const dayMap: { [key: number]: IDay; } = {
      0: Su, 1: M, 2: T, 3: W, 4: Th, 5: F, 6: Sa,
    };

    // iterate through rows and bin to 'hour' containers;
    rows.forEach((r: any) => {
      // check date column to see if its a Date type;
      const date = !isDate(r[dateColumn]) ? readDate(r[dateColumn], true) : r[dateColumn] as Date;
      const dayInt = date.getDay();
      const hourInt = date.getHours();
      const minuteInt = date.getMinutes();

      const day: IDay = dayMap[dayInt];
      const hour: IHour = day.hours[hourInt];
      const minute: IMinute = hour.minutes[minuteInt];

      let value: number;

      // if a value column is specified, use that as the 'value', else assume we
      // want to use a count statistic for our binning.
      if (valueColumn) {
        value = r[valueColumn] as number;
      } else {
        value = 1;
      }
      // sum up values
      hour.value += value;
      // set information to the IMinute container;
      minute.data = r;
    });

    return new HeatmapDataStore({
      M, T, W, Th, F, Sa, Su,
    });
  }
}
