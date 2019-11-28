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

    it("should return a tip at index 0", () => {
        let tips = new Tips([new Tip(1, "", "")]);
        expect(tips.atIndex(0)).to.deep.equal(new Tip(1, "", ""));
    });

    it("should return null given index queried for tips does not exist", () => {
        let tips = new Tips([new Tip(1, "", "")]);
        expect(tips.atIndex(1)).to.be.null;
    });

    it("should return tips with zero tip given an upper cap of 0 tip", () => {
        let tips = new Tips([new Tip(1, "description", "reference")]);
        let randomTips = tips.randomMaximumTipsUpto(0);

        expect(randomTips.count()).to.equal(0);
    });

    it("should return tips with a single tip given an upper cap of 1 tip", () => {
        let tips = new Tips([new Tip(1, "description", "reference")]);
        let randomTips = tips.randomMaximumTipsUpto(1);

        expect(randomTips.count()).to.equal(1);
        expect(tips.atIndex(0)).to.deep.equal(new Tip(1, "description", "reference"));
    });

    it("should return maximum of 2 tips given an upper cap of 3 tips but total tips present are 2", () => {
        let tips = new Tips([new Tip(1, "description1", "reference1"),
                             new Tip(2, "description2", "reference2")]);

        let randomTips = tips.randomMaximumTipsUpto(3);

        expect(randomTips.count()).to.be.lte(2)
    });

    it("should return maximum of 3 tips given an upper cap of 3 tips with total tips present are 3", () => {
        let tips = new Tips([new Tip(1, "description1", "reference1"),
                             new Tip(2, "description2", "reference2"),
                             new Tip(3, "description3", "reference3")]);

        let randomTips = tips.randomMaximumTipsUpto(3);

        expect(randomTips.count()).to.be.lte(3)
    });
});