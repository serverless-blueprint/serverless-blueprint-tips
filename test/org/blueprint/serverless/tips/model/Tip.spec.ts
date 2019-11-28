import {Tip} from "../../../../../../src/org/blueprint/serverless/tips/model/Tip";
import {IllegalArgumentException} from "../../../../../../src/org/blueprint/serverless/tips/exception/IllegalArgumentExxecption";

import {expect} from "chai";

describe("Tip", () => {

    it("should throw an exception given tip id is 0", () => {
        expect(() => new Tip(0, "", "")).to.throw(IllegalArgumentException);
    });

    it("should create an instance of tip given tip id is not 0", () => {
        let tip = new Tip(1, "", "");
        expect(tip).to.deep.equal(new Tip(1, "", ""));
    });
});