import {expect} from 'chai';

class TipProvider {
    provideTips() {
        return [];
    }
}

describe("Tip Provider", () => {
    it("should generate zero tips", () => {
       let tips = new TipProvider().provideTips();
       expect(tips).to.be.empty;
    });
});