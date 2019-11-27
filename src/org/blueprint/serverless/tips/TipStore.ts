import {Tips} from "./model/Tips";

export class TipStore {

    private constructor() {
    }

    private static ref: TipStore;

    static instance() {
        if (TipStore.ref == null)
            TipStore.ref = new TipStore();

        return TipStore.ref;
    }

    allTips(): Tips {
        return null;
    }
}