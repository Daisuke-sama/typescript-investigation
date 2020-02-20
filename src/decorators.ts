export function sealed(param: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${param}`);
        console.log(target);

        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance.');
        console.log(target);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.printLibrarian = function() {
        console.log(`Lib name: ${this.name}, Lib age: ${this.age}`);
    };

    return newConstructor as TFunction;
}
