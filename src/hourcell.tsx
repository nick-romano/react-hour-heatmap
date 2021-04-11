import React, { useState } from "react";
import { Cell } from "styled-css-grid";
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { IHour } from "./types/interfaces";


const _HourCell = styled(Cell)`
  font-size: 12px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  border: 1px solid #dddddd63;
  /*background: #feedde;*/
  line-height: 1;
  height: 50%;
  border-radius: 50px;
  width: 70%;
  transform: translate(15%, 40%);
  &:hover {
    border: 1px dashed;
  }
`;

const contentStyle = {
  width: 100,
  height: 50,
  background: "#000000c9",
  color: '#f7f7f7',
  border: "0px solid"
}

export interface IHourCell {
  data: IHour,
  scale: (arg0: any) => any,
  height?: number,
  popup?: React.ReactNode
}

const HourCell: React.FC<any> = ({data, scale, height, popup}: IHourCell) => {
  return (
    <Popup
      trigger={open => (
        <_HourCell 
          center middle 
          height={height}
          style={{background: scale(data.value)}}
        ></_HourCell>
      )}
      closeOnDocumentClick
      on={['hover', 'focus']}
      contentStyle={contentStyle}
      position={['top center', 'bottom right', 'bottom left']}
      keepTooltipInside=".tooltipBoundary"
      arrow={false}
    >
      <span>{data.value}</span>
    </Popup>
  )
}

export default HourCell;