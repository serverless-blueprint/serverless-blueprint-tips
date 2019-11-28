import {TipStore} from "../TipStore";
import {Tips} from "../model/Tips";

export class TipProvider {
    private tipStore: TipStore;
    private readonly upperCap: number;

    constructor(maximumTips: number = 5) {
        this.tipStore = TipStore.instance();
        this.upperCap = maximumTips;
    }

    provideTips(): Tips {
        return this.nTips();
    }

    private nTips() {
        let allTips = this.allTips();
        if (allTips.isEmpty()) return allTips;

        return allTips.randomMaximumTipsUpto(this.upperCap);
    }

    private allTips(): Tips {
        return this.tipStore.allTips();
    }
}