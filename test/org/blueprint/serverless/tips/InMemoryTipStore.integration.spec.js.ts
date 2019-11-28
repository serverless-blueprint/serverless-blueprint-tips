import {InMemoryTipStore} from "../../../../../src/org/blueprint/serverless/tips/InMemoryTipStore";
import {expect} from "chai";
import * as sinon from "sinon";
import {Tip} from "../../../../../src/org/blueprint/serverless/tips/model/Tip";
import {TipResourceLocation} from "../../../../../src/org/blueprint/serverless/tips/TipResourceLocation";

describe("InMemory Tip Store", () => {

    afterEach(() => {
        sinon.restore();
    });

    it("should load all tips", () => {
        sinon.stub(TipResourceLocation, 'get').callsFake(() => "../../../../../test/org/blueprint/serverless/tips/resources/mock_tips.json");

        let tips = InMemoryTipStore.instance().allTips();

        expect(tips.count()).to.equal(1);
        expect(tips.atIndex(0)).to.deep.equal(new Tip(1, "tip-1", "http://tip1.com"));
    });
});