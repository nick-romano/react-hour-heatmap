export interface IMinute {
    minute: number,
    data?: any
}

export interface IHour {
    minutes: IMinute[],
    value: number,
    data?: object
}

export interface IDay {
    hours: IHour[],
    data?: object
}

export interface IHeatmapDataStore {
    M: IDay,
    T: IDay,
    W: IDay,
    Th: IDay,
    F: IDay,
    Sa: IDay,
    Su: IDay,
    colors?: any[],
    domain?: any[],
    popup?: React.ReactNode,
    scale?: (arg0: any) => any
}

export interface IHeatmap {
    data: object[],
    dateColumn: string,
    valueColumn?: string,
    adjustTimezone?: boolean,
    popup?: React.ReactNode,
    colors?: any[],
    domain?: any[]
}

export interface IcreateScale {
    colors?: any[]
}

export interface IHourHeatmapFromRows {
    rows: object[],
    dateColumn: string,
    valueColumn?: string
}

export interface IHourCell {
  data: IHour,
  scale: (arg0: any) => any,
  height?: number,
  popup?: React.ReactNode
}
