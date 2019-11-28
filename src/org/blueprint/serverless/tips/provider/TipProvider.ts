import {InMemoryTipStore} from "../InMemoryTipStore";
import {Tips} from "../model/Tips";

export class TipProvider {
    private tipStore: InMemoryTipStore;
    private readonly upperCap: number;

    constructor(maximumTips: number = 5) {
        this.tipStore = InMemoryTipStore.instance();
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