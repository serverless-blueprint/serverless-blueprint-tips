import {TipStore} from "../../../../../src/org/blueprint/serverless/tips/TipStore";
import { expect } from "chai";

describe("Tip Store", () => {

    it("should load all tips", () => {
        let tips = TipStore.instance().allTips();
        expect(tips.count()).to.equal(2)
    });
});