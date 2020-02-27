import {ReferenceItem} from "./reference-item";
import {positiveInteger, timeout} from "../decorators";

export default class Encyclopedia extends ReferenceItem {

    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    @timeout(1000)
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log('I am a citation');
    }
}
