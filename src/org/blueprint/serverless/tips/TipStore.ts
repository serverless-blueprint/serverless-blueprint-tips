import {Tips} from "./model/Tips";
import {Tip} from "./model/Tip";

import * as fs from 'fs';
import * as path from 'path';

export class TipStore {

    private static ref: TipStore;

    private tips: Tips;

    private constructor() {
    }

    static instance() {
        if (TipStore.ref == null)
            TipStore.ref = new TipStore();

        if (TipStore.ref.tips == null)
            TipStore.ref.tips = TipStore.loadAllTips();

        return TipStore.ref;
    }

    private static loadAllTips() {
        let filePath: string = path.join(__dirname, "./resources/tips.json");
        let tips: Tip[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
        return new Tips(tips);
    }

    allTips(): Tips {
        return this.tips;
    }
}