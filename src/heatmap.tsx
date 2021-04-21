import React from 'react';
import HourLabelRow from './hourlabelrow';
import HourRow from './hourrow';
import { DayOfWeek } from './types/enums';
import { IHeatmap } from './types/interfaces';
import HeatmapDataStore from './classes/heatmapdatastore';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid rgb(0 0 0 / 16%);
    border-radius: 4px;
    line-height: 1;
`

const Heatmap = ({ data, popup, colors, domain, valueColumn, dateColumn }: IHeatmap) => {

    const d = HeatmapDataStore.fromRows({ rows: data, dateColumn, valueColumn });

    const ds = new HeatmapDataStore({ ...d, popup, colors, domain });

    return (
        <Container className="tooltipBoundary">
            <HourRow dayOfWeek={DayOfWeek.M} data={ds.M} scale={ds.scale} index={0} popup={popup} />
            <HourRow dayOfWeek={DayOfWeek.T} data={ds.T} scale={ds.scale} index={1} popup={popup} />
            <HourRow dayOfWeek={DayOfWeek.W} data={ds.W} scale={ds.scale} index={2} popup={popup} />
            <HourRow dayOfWeek={DayOfWeek.Th} data={ds.Th} scale={ds.scale} index={3} popup={popup} />
            <HourRow dayOfWeek={DayOfWeek.F} data={ds.F} scale={ds.scale} index={4} popup={popup} />
            <HourRow dayOfWeek={DayOfWeek.Sa} data={ds.Sa} scale={ds.scale} index={5} popup={popup} />
            <HourRow dayOfWeek={DayOfWeek.Su} data={ds.Su} scale={ds.scale} index={6} popup={popup} />
            <HourLabelRow />
        </Container>
    )
};

export default Heatmap;
