import {TipStore} from "../TipStore";
import {Tip} from "../model/Tip";

export class TipProvider {
    private tipStore: TipStore;
    private readonly maxTipsToProvide: number;

    constructor() {
        this.tipStore = TipStore.instance();
        this.maxTipsToProvide = 5;
    }

    provideTips(): Tip[] {
        return this.nTips();
    }

    private nTips() {
        let allTips = this.allTips();
        if (allTips.length === 0) return [];
        return allTips;
    }

    private randomTipsFrom(allTips) {
        let tipCount = this.tipCountTobeReturnedFrom(allTips);
        let tipsIds = Array.from({length: tipCount}, () => Math.floor(Math.random() * allTips.length + 1));

        return allTips.filter(tip => tipsIds.indexOf(tip.id) != -1);
    }

    private tipCountTobeReturnedFrom(allTips) {
        if (allTips.length < this.maxTipsToProvide)
            return allTips.length;
        else
            return this.maxTipsToProvide;
    }

    private allTips() {
        return this.tipStore.allTips();
    }
}