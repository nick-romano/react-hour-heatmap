import React from 'react';
import { Cell } from 'styled-css-grid';
import styled from 'styled-components';

const _DayLabelCell = styled(Cell)`
  font-size: 12px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  // border: 1px solid #999;
  // background: #feedde;
  line-height: 1;
  font-variant: all-small-caps;
`;

function DayLabelCell(props: any) {
  return (
    <_DayLabelCell center middle {...props} />
  );
}

export default DayLabelCell;
