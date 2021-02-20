/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export class EnumSymbol {
    sym = null;
    value = '';
    description = '';

    constructor(name, { value, description }) {
        if (name) {
            this.sym = Symbol.for(name);
        }

        if (!Object.is(value, undefined)) {
            this.value = value;
        }

        if (description) {
            this.description = description;
        }

        Object.freeze(this);
    }

    get display() {
        return this.description || Symbol.keyFor(this.sym);
    }

    toString() {
        return this.sym;
    }

    valueOf() {
        return this.value;
    }
}

export class Enum {
    constructor(enumLiterals) {
        for (const key in enumLiterals) {
            if (!enumLiterals[key]) {
                throw new TypeError('each enum should have been initialized with atleast empty {} value');
            }
            this[key] = new EnumSymbol(key, enumLiterals[key]);
        }
        Object.freeze(this);
    }

    symbols() {
        const result = [];
        for (const key of Object.keys(this)) {
            result.push(this[key]);
        }
        return result;
    }

    keys() {
        return Object.keys(this);
    }

    enumOf(value) {
        return this[this.keys().find(key => value === this[key].valueOf())];
    }

    contains(sym) {
        if (!(sym instanceof EnumSymbol)) {
            return false;
        }
        return this[Symbol.keyFor(sym.sym)] === sym;
    }
}
