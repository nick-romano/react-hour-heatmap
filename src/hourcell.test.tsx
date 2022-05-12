import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HourCell from './hourcell';
import HeatmapDataStore from './classes/heatmapdatastore';

describe('test rendering hourcell', () => {
  it('should', () => {
    const ds = HeatmapDataStore.fromRows({
      rows: [{ date: new Date('1.2.2021 14:51'), testVal: 4 }],
      dateColumn: 'date',
      valueColumn: 'testVal',
    });

    const _data = ds.Sa.hours[14];

    const _myMock = jest.fn();

    const { getByRole } = render(
      <HourCell
        data={_data}
        scale={ds.scale}
        height={1}
        popup={(data: any) => {
          _myMock();
          return ('eeee');
        }}
      />,
    );
    const el = getByRole('hour-cell');
    expect(el).toBeInTheDocument();
    fireEvent.click(el);
    setTimeout(() => expect(_myMock).toBeCalled(), 500);
  });
});
