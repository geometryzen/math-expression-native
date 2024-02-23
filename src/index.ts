import { Sym } from 'math-expression-atoms';
import { Cons1, items_to_cons, U } from 'math-expression-tree';
import { Native } from './Native';
import { native_sym } from './native_sym';

export { Native, NATIVE_MAX, NATIVE_MIN } from './Native';
export { code_from_native_sym, is_native, is_native_sym, native_sym, ns_greek_alphabet, ns_mathematical_constants } from './native_sym';

const EXP = native_sym(Native.exp);
const IMAG = native_sym(Native.imag);
const LOG = native_sym(Native.log);
const MULTIPLY = native_sym(Native.multiply);
const REAL = native_sym(Native.real);

function combination1(opr: Sym, arg: U): Cons1<Sym, U> {
    return items_to_cons(opr, arg) as Cons1<Sym, U>;
}

export function exp(arg: U): Cons1<Sym, U> {
    return combination1(EXP, arg);
}

export function imag(arg: U): Cons1<Sym, U> {
    return combination1(IMAG, arg);
}

export function log(arg: U): Cons1<Sym, U> {
    return combination1(LOG, arg);
}

export function multiply(...args: U[]): U {
    return items_to_cons(MULTIPLY, ...args);
}

export function real(arg: U): Cons1<Sym, U> {
    return combination1(REAL, arg);
}
