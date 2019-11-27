import {Tip} from "./model/Tip";

export class TipStore {

    private constructor() {
    }

    private static ref: TipStore;

    static instance() {
        if (TipStore.ref == null)
            TipStore.ref = new TipStore();

        return TipStore.ref;
    }

    allTips(): Tip[] {
        return null;
    }
}