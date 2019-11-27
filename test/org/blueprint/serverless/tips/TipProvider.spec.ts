import {expect} from 'chai';
import * as sinon from 'sinon';

import {TipProvider} from "../../../../../src/org/blueprint/serverless/tips/provider/TipProvider";
import {Tip} from "../../../../../src/org/blueprint/serverless/tips/model/Tip";
import {TipStore} from "../../../../../src/org/blueprint/serverless/tips/TipStore";

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