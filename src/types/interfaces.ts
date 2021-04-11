
export interface IMinute {
    minute: number,
    data?: object
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
    domain?: number[],
    popup?: React.ReactNode
};

export interface IHeatmap {
    data: IHeatmapDataStore,
    popup?: React.ReactNode,
    colors?: any[],
    domain?: any[]
};


export interface IcreateScale {
    colors?: any[],

}

