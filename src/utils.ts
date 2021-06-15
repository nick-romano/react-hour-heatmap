import { IDay } from './types/interfaces';
import strfTime from './strfTime';

export const createDay = (): IDay => ({
    hours: [...Array(24).keys()].map((r: number) => ({
        value: 0,
        minutes: [...Array(60).keys()].map((r: number) => ({
            minute: r,
            data: {}
        }))
    }))
})

export const generateDays = () => ({
    M: createDay(), T: createDay(), W: createDay(),
    Th: createDay(), F: createDay(), Sa: createDay(),
    Su: createDay()
})


export const isDate = (val: any) => {
    return typeof val.getMonth === 'function'
};

export const readDate = (val: string, adjustTimezone?: boolean) => {
    let date = new Date(val);
    if(adjustTimezone) {
        date = new Date((date.valueOf() - date.getTimezoneOffset()*1000*60));
    }
    return date;
}

const weekday=new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";

export const getDayOfWeek = (day: number) => {
    return weekday[day];
}


export const getTimeString = (date: Date) => {
    return strfTime('%d - %H:%M', date);
}




