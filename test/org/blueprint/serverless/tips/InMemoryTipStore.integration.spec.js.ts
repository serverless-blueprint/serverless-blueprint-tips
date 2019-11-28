import {InMemoryTipStore} from "../../../../../src/org/blueprint/serverless/tips/InMemoryTipStore";
import {expect} from "chai";

describe("InMemory Tip Store", () => {

    it("should load all tips", () => {
        let tips = InMemoryTipStore.instance().allTips();
        expect(tips.count()).to.equal(2)
    });
});