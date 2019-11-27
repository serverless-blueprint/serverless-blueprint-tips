import {TipStore} from "../TipStore";
import {Tip} from "../model/Tip";

export class TipProvider {
    private tipStore: TipStore;

    constructor() {
        this.tipStore = TipStore.instance();
    }

    provideTips(): Tip[] {
        let allTips = this.tipStore.allTips();
        if (allTips.length === 0)
            return [];
        return allTips;
    }
}