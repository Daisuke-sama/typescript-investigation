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
    newConstructor.prototype.printLibrarian = function () {
        console.log(`Lib name: ${this.name}, Lib age: ${this.age}`);
    };

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
        console.log(`writable decorator is called with ${isWritable}`);
        console.log(target, methodName, descriptor);

        descriptor.writable = isWritable;

        return descriptor;
    }
}

export function timeout(ms: number = 0) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(descriptor);

        const origMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            setTimeout(() => {
                origMethod.apply(this, args);
            }, ms)
        }

        return descriptor;
    }
}

