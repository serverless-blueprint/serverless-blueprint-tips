import {expect} from 'chai';
import * as sinon from 'sinon';

class TipProvider {
    private tipStore: TipStore;

    constructor() {
        this.tipStore = TipStore.instance();
    }

    provideTips(): Tip[] {
        let allTips = this.tipStore.allTips();
        if (allTips.length === 0)
            return [];
        return allTips;
    }
}

class Tip {
    constructor(public readonly id: number) {
    }
}

class TipStore {

    private constructor() {
    }

    private static ref: TipStore;

    static instance() {
        if (TipStore.ref == null)
            TipStore.ref = new TipStore();

        return TipStore.ref;
    }

    allTips(): Tip[] {
        return null;
    }
}

describe("Tip Provider", () => {

    let tipStore;
    let mock;

    beforeEach(() => {
        tipStore = TipStore.instance();
        mock = sinon.mock(tipStore);
    });

    afterEach(() => {
        sinon.restore();
    });


    it("should generate zero tips", () => {
        mock.expects("allTips").returns([]);

        let tips = new TipProvider().provideTips();
        expect(tips).to.be.empty;
    });

    it("should generate a single tip with a tip-id", () => {
        mock.expects("allTips").returns([new Tip(1)]);

        let tips = new TipProvider().provideTips();
        expect(tips[0].id).to.equal(1);
    });
});