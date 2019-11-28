import {Tips} from "../../../../../../src/org/blueprint/serverless/tips/model/Tips";
import {expect} from "chai";
import {Tip} from "../../../../../../src/org/blueprint/serverless/tips/model/Tip";

describe("Tips", () => {

    it("should return empty given tips is empty", () => {
        let tips = new Tips(null);
        expect(tips.isEmpty()).to.be.true;
    });

    it("should not return empty given tips is not empty", () => {
        let tips = new Tips([new Tip(1, "", "")]);
        expect(tips.isEmpty()).to.be.false;
    });

    it("should return 0 as the tip count", () => {
        let tips = new Tips(null);
        expect(tips.count()).to.equal(0);
    });

    it("should return 1 as the tip count", () => {
        let tips = new Tips([new Tip(1, "", "")]);
        expect(tips.count()).to.equal(1);
    });
});