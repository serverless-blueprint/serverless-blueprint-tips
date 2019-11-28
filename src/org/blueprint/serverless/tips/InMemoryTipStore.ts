import {Tips} from "./model/Tips";
import {TipResourceLocation} from "./TipResourceLocation";

import {Tip} from "./model/Tip";
import * as fs from 'fs';
import * as path from 'path';

export class InMemoryTipStore {

    private static ref: InMemoryTipStore;

    private tips: Tips;

    private constructor() {
    }

    static instance() {
        if (InMemoryTipStore.ref == null)
            InMemoryTipStore.ref = new InMemoryTipStore();

        if (InMemoryTipStore.ref.tips == null)
            InMemoryTipStore.ref.tips = InMemoryTipStore.loadAllTips();

        return InMemoryTipStore.ref;
    }

    private static loadAllTips() {
        let filePath: string = path.join(__dirname, TipResourceLocation.get());
        let tips: Tip[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
        return new Tips(tips);
    }

    allTips(): Tips {
        return this.tips;
    }
}