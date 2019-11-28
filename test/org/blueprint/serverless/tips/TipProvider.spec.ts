import {expect} from 'chai';
import * as sinon from 'sinon';

import {TipProvider} from "../../../../../src/org/blueprint/serverless/tips/provider/TipProvider";
import {Tip} from "../../../../../src/org/blueprint/serverless/tips/model/Tip";
import {TipStore} from "../../../../../src/org/blueprint/serverless/tips/TipStore";
import {Tips} from "../../../../../src/org/blueprint/serverless/tips/model/Tips";

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

    it("should provide zero tips", () => {
        mock.expects("allTips").returns(new Tips([]));

        let tips = new TipProvider().provideTips();
        expect(tips.isEmpty()).to.be.true;
    });

    it("should provide a single tip with a tip-id", () => {
        mock.expects("allTips").returns(new Tips([new Tip(1, "", "")]));

        let tips = new TipProvider().provideTips();
        expect(tips.atIndex(0).id).to.equal(1);
    });

    it("should provide a single tip with a tip-description", () => {
        mock.expects("allTips").returns(new Tips([new Tip(1, "sample tip description", "")]));

        let tips = new TipProvider().provideTips();
        expect(tips.atIndex(0).description).to.equal("sample tip description");
    });

    it("should provide a single tip with a tip-reference", () => {
        mock.expects("allTips").returns(new Tips([new Tip(1, "", "http://sample.com")]));

        let tips = new TipProvider().provideTips();
        expect(tips.atIndex(0).reference).to.equal("http://sample.com");
    });

    it("should provide atmost 2 tips from a randomly selected tips", () => {
        let tip1 = new Tip(1, "tip-1", "");
        let tip2 = new Tip(2, "tip-2", "");

        mock.expects("allTips").returns(new Tips([tip1, tip2]));

        let tips = new TipProvider(3).provideTips();
        expect(tips.count()).to.be.lte(2);
    });

    it("should provide atmost 3 tips from a randomly selected tips", () => {
        let tip1 = new Tip(1, "tip-1", "");
        let tip2 = new Tip(2, "tip-2", "");
        let tip3 = new Tip(3, "tip-3", "");

        mock.expects("allTips").returns(new Tips([tip1, tip2, tip3]));

        let tips = new TipProvider(3).provideTips();
        expect(tips.count()).to.be.lte(3);
    });

    it("should provide 1 tip from a randomly selected tips given maximum number of tips is 1", () => {
        let tip1 = new Tip(1, "tip-1", "");
        let tip2 = new Tip(2, "tip-2", "");
        let tip3 = new Tip(3, "tip-3", "");

        mock.expects("allTips").returns(new Tips([tip1, tip2, tip3]));

        let tips = new TipProvider(1).provideTips();
        expect(tips.count()).to.be.equal(1);
    });
});