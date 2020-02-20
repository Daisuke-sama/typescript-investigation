import {ReferenceItem} from "./reference-item";
import {timeout} from "../decorators";

export default class Encyclopedia extends ReferenceItem {
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
