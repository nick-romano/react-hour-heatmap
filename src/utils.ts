import { IDay } from './types/interfaces';

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
