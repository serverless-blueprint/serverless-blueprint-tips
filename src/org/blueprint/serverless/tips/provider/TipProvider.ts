import {TipStore} from "../TipStore";
import {Tip} from "../model/Tip";

export class TipProvider {
    private tipStore: TipStore;

    constructor() {
        this.tipStore = TipStore.instance();
    }

    provideTips(): Tip[] {
        return this.nTips();
    }

    private nTips() {
        let allTips = this.allTips();
        if (allTips.length === 0)
            return [];
        return allTips;
    }

    private allTips() {
        return this.tipStore.allTips();
    }
}