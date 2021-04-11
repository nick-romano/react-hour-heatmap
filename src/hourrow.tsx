import React from 'react';
import { Grid } from 'styled-css-grid';
import HourCell from './hourcell';
import styled from 'styled-components';
import { DayOfWeek } from './types/enums';
import DayLabelCell from './daylabelcell';
import { IDay } from './types/interfaces';

const _Grid = styled(Grid)<{ isEven: boolean }>`
    grid-gap: 1px;
    margin: 3px;
    grid-auto-rows: 25px !important;
    padding: 0px 4px;
    background: ${(props: any) => props.isEven ? "rgb(0 0 0 / 2%)" : "rgb(0 0 0 / 4%)"};
    border-radius: 4px;
`

interface IHourRow {
    dayOfWeek: DayOfWeek,
    data: IDay,
    scale: (arg0: any) => any,
    index: number
}

const HourRow = ({ dayOfWeek, data, scale, index }: IHourRow) => {
    return (
        <_Grid flow="column" columns={24} isEven={index%2==0} >
            {data.hours.map((hour, index) => (
                <HourCell 
                    height={1}
                    data={hour}
                    scale={scale}
                    key={`hour-${index}`}
                    />
            ))}
            <DayLabelCell height={1}>
                {dayOfWeek}
            </DayLabelCell>
        </_Grid>
    )
}

export default HourRow;