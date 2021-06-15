import React, { useState } from "react";
import { Cell } from "styled-css-grid";
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { IHourCell } from "./types/interfaces";


const _HourCell = styled(Cell)`
  font-size: 12px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  border: 1px solid #dddddd63;
  /*background: #feedde;*/
  line-height: 1;
  height: 50%;
  border-radius: 4px;
  width: 70%;
  transform: translate(15%, 40%);
  &:hover {
    border: 1px dashed;
  }
`;

const contentStyle = {
  width: "unset",
  background: "#000000c9",
  color: '#f7f7f7',
  border: "0px solid"
}

const HourCell: React.FC<IHourCell> = ({ data, scale, height, popup }: IHourCell) => {

  const CustomPopup = popup;

  return (
    <div role="hour-cell">
      <Popup
        trigger={open => (
          <_HourCell
            center middle
            height={height}
            style={{ background: scale(data.value) }}
          ></_HourCell>
        )}
        closeOnDocumentClick
        on={['hover', 'focus', 'click']}
        contentStyle={contentStyle}
        position={['top center', 'bottom right', 'bottom left']}
        keepTooltipInside=".tooltipBoundary"
        arrow={false}
      >
        <span>
          {/*
          @ts-ignore */}
          {popup ? <CustomPopup data={data} /> : data.value}
        </span>
      </Popup>
    </div>
  )
}

export default HourCell;