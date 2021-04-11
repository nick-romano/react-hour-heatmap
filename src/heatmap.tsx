import React from 'react';
import HourLabelRow from './hourlabelrow';
import HourRow from './hourrow';
import { DayOfWeek } from './types/enums';
import { IHeatmap } from './types/interfaces';
import HeatmapDataStore from './classes/heatmapdatastore';

const Heatmap = ({data, popup, colors, domain} : IHeatmap) => {

    const ds =new HeatmapDataStore({...data, popup, colors, domain});

    return (
        <div className="tooltipBoundary">
            <HourRow dayOfWeek={DayOfWeek.M} data={ds.M} scale={ds.scale} index={0} />
            <HourRow dayOfWeek={DayOfWeek.T} data={ds.T}  scale={ds.scale} index={1} />
            <HourRow dayOfWeek={DayOfWeek.W} data={ds.W}  scale={ds.scale} index={2} />
            <HourRow dayOfWeek={DayOfWeek.Th} data={ds.Th}  scale={ds.scale} index={3} />
            <HourRow dayOfWeek={DayOfWeek.F} data={ds.F}  scale={ds.scale} index={4} />
            <HourRow dayOfWeek={DayOfWeek.Sa} data={ds.Sa}  scale={ds.scale} index={5} />
            <HourRow dayOfWeek={DayOfWeek.Su} data={ds.Su}  scale={ds.scale} index={6} />
            <HourLabelRow />
        </div>
    )
};

export default Heatmap;
