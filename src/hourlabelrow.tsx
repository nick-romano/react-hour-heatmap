import React from 'react';
import { Cell, Grid } from 'styled-css-grid';
import styled from 'styled-components';

const HourLabelRowGrid = styled(Grid)`
    grid-gap: 1px;
    margin: 3px;
    grid-auto-rows: minmax(20px,auto);
    padding: 0px 4px;
`

const _HourLabelCell = styled(Cell)`
    font-size: 12px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-align: center;
    line-height: 1;
    font-variant: all-small-caps;
  `

const HourLabelRow = () => {
    return (
        <HourLabelRowGrid flow="column" columns={24}>
            <_HourLabelCell center middle height={1}>12 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>1 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>2 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>3 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>4 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>5 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>6 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>7 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>8 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>9 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>10 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>11 AM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>12 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>1 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>2 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>3 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>4 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>5 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>6 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>7 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>8 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>9 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>10 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>11 PM</_HourLabelCell>
            <_HourLabelCell center middle height={1}>&nbsp;</_HourLabelCell>
        </HourLabelRowGrid>
    )
};

export default HourLabelRow;
