
export interface IMinute {
    minute: number,
    data?: any
};

export interface IHour {
    minutes: IMinute[],
    value: number,
    data?: object
};

export interface IDay {
    hours: IHour[],
    data?: object
};

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
};

export interface IHeatmap {
    data: object[],
    dateColumn: string,
    valueColumn: string,
    popup?: React.ReactNode,
    colors?: any[],
    domain?: any[]
};


export interface IcreateScale {
    colors?: any[],

}

