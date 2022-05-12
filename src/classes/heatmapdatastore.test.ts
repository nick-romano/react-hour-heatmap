import HeatmapDataStore from './heatmapdatastore';

describe('testing heatmapdatastore constructor and methods', () => {
  it('should calculate the domain', () => {
    const ds = HeatmapDataStore.fromRows({
      rows: [{ date: new Date('1.2.2021 14:51'), testVal: 4 }],
      dateColumn: 'date',
      valueColumn: 'testVal',
    });
    const { domain } = ds;
    expect(domain[0]).toBe(0);
    expect(domain[1]).toBe(4);
  });

  it('should create a scale the generates different values based on input', () => {
    const ds = HeatmapDataStore.fromRows({
      rows: [{ date: new Date('1.2.2021 14:51'), testVal: 4 }],
      dateColumn: 'date',
      valueColumn: 'testVal',
    });
    const scale = ds.createScale();
    expect(scale(2) === scale(0)).toBeFalsy();
  });

  it('should create a instance of itself through the .fromRows method', () => {
    const rows = [{ date: new Date('1.2.2021 14:51'), testVal: 4 }];
    const ds = HeatmapDataStore.fromRows({ rows, dateColumn: 'date', valueColumn: 'testVal' });
    expect(ds.Sa.hours[14].minutes[51].data!.testVal!).toBe(4);
    expect(ds.Sa.hours[14].value).toBe(4);
  });
});
