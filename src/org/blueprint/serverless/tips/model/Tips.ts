import {Tip} from "./Tip";

export class Tips {
    private readonly tips: Tip[];

    constructor(tips: Tip[] = []) {
        if (tips == null)
            this.tips = [];
        else
            this.tips = tips;
    }

    isEmpty() {
        return this.tips.length == 0;
    }

    count() {
        return this.tips.length;
    }

    atIndex(index: number) {
        if (index < this.count())
            return this.tips[index];
        else
            return null;
    }

    randomMaximumTipsUpto(limit: number) {
        let tipsIds = Array.from(
            {length: this.maximumTipsAllowedUpto(limit)},
            () => Math.floor(Math.random() * this.tips.length + 1)
        );

        return new Tips(this.tips.filter(tip => tipsIds.indexOf(tip.id) != -1));
    }

    private maximumTipsAllowedUpto(limit: number) {
        return this.tips.length < limit ? this.tips.length : limit;
    }
}