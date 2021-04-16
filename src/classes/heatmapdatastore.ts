import { IDay, IHeatmapDataStore, IHour, IMinute } from '../types/interfaces';
import { scaleQuantile } from 'd3-scale';
import { generateDays } from '../utils';

const defaultColors = ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'];

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
    domain: number[];

    constructor(args: IHeatmapDataStore) {
        this.M = args.M;
        this.T = args.T;
        this.W = args.W;
        this.Th = args.Th;
        this.F = args.F;
        this.Sa = args.Sa;
        this.Su = args.Su;
        this.days = [this.M, this.T, this.W, this.Th, this.F, this.Sa, this.Su]
        this.colors = args.colors ? args.colors : defaultColors;
        this.domain = args.domain ? args.domain : this.calcDomain();
        this.scale = this.createScale();
    };

    calcDomain() {
        let uniqueValues: number[] = [];
        this.days.forEach((day: IDay) => {
            // const sum = day.hours.reduce((a: number, b: IHour) => {
            //     return a + b.value
            // }, 0);
            day.hours.forEach((hour: IHour) => {
                if (!(uniqueValues.indexOf(hour.value) > -1)) {
                    uniqueValues.push(hour.value);
                }
            })
        });

        return uniqueValues;
    };

    createScale() {
        const domain = this.calcDomain();
        const colorScale = scaleQuantile()
            .domain(domain)
            .range(this.colors);
        return colorScale;
    };

    static fromRows({ rows, dateColumn, valueColumn }: { rows: object[], dateColumn: string, valueColumn: string }) {
        const { M, T, W, Th, F, Sa, Su } = generateDays();
        const dayMap: { [key: number]: IDay; } = {0: Su, 1: M, 2: T, 3: W, 4: Th, 5: F, 6: Sa};

        rows.forEach((r: any) => {
            const date = r[dateColumn] as Date;
            const dayInt = date.getDay();
            const hourInt = date.getHours();
            const minuteInt = date.getMinutes();

            const day: IDay = dayMap[dayInt];
            const hour: IHour = day.hours[hourInt];
            const minute: IMinute = hour.minutes[minuteInt];

            const value = r[valueColumn] as number;

            hour.value = hour.value + value;
            minute.data = r;
        });

        return new HeatmapDataStore({M, T, W, Th, F, Sa, Su});
    }

}