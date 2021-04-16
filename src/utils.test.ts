import * as utils from './utils';

describe("test createDay function", () => {
    it("should contain 24 hours", () => {
        const day = utils.createDay();
        expect(day.hours.length).toBe(24);
    })
    it("should contain 60 minutes", () => {
        const day = utils.createDay();
        expect(day.hours[0].minutes.length).toBe(60);
    });
})

