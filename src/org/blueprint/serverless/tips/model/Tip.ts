import {IllegalArgumentException} from "../exception/IllegalArgumentExxecption";

export class Tip {

    public readonly id: number;

    constructor(id: number,
                public readonly description: string,
                public readonly reference: string) {

        if (id == 0)
            throw new IllegalArgumentException("Tip is can not be 0");

        this.id = id;
    }
}