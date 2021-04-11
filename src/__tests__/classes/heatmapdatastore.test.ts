
import HeatmapDataStore from '../../classes/heatmapdatastore';
import { InputSchemaMock } from '../../__mocks__/inputSchema';

describe("ok", () => {
    it('test calcDomain', () => {
        const ds = new HeatmapDataStore(InputSchemaMock);
        const domain = ds.domain;
        expect(domain[0]).toBe(0)
        expect(domain[1]).toBe(2)
    });

    it('test createScale', () => {
        const ds = new HeatmapDataStore(InputSchemaMock);
        const scale = ds.createScale();
        console.log(scale);
        expect(scale(2) === scale(0)).toBeFalsy();
    })
});


