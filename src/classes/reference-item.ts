abstract class ReferenceItem {
    // title: string;
    // year: number;
    private _publisher: string;
    static department: string = 'Research Dep';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, public year: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = title;
        this.year = year;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

export {ReferenceItem};
