import { RBTree } from "generic-rbtree";
import { create_sym, create_sym_ns, Sym } from "math-expression-atoms";
import { Native, NATIVE_MAX, NATIVE_MIN } from "./Native";

export const ns_mathematical_constants = 'Math';
export const ns_greek_alphabet = 'Greek';

interface Comparator<K> {
    (a: K, b: K): (-1 | 1 | 0);
}

const numberComparator: Comparator<number> = function (x: number, y: number) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
};

const nilValue = create_sym_ns('', '');
/**
 * map from Native to the Sym using RBTree.
 */
const cacheN: RBTree<Native, Sym> = new RBTree<Native, Sym>(NATIVE_MIN - 1, NATIVE_MAX + 1, nilValue, numberComparator);
/**
 * map from the Sym.key() (string) to the Sym.
 */
const cacheS: Map<string, Native> = new Map();

for (let code = NATIVE_MIN; code <= NATIVE_MAX; code++) {
    const sym = build_sym(code);
    cacheN.insert(code, sym);
    cacheS.set(sym.key(), code);
}

/**
 * @returns The `Sym` corresponding to the `Native` `code`.
 */
export function native_sym(code: Native): Sym {
    return cacheN.search(code);
}

/**
 * @returns Determines whether the `sym` is recognized as `Native`.
 */
export function is_native_sym(sym: Sym): boolean {
    return cacheS.has(sym.key());
}

export function code_from_native_sym(sym: Sym): Native | -1 {
    const key = sym.key();
    if (cacheS.has(sym.key())) {
        return cacheS.get(key);
    }
    else {
        return -1;
    }
}

export function is_native(sym: Sym, code: Native): boolean {
    const genuine = cacheN.search(code);
    return genuine.equalsSym(sym);
}

function build_sym(code: Native): Sym {
    switch (code) {
        // Constants (upper case)...
        case Native.E: return create_sym_ns('e', ns_mathematical_constants);
        case Native.IMU: return create_sym('IMU');
        case Native.MASH: return create_sym('MASH');
        case Native.NIL: return create_sym('NIL');
        case Native.greek_uppercase_letter_Pi: return create_sym_ns('PI', ns_greek_alphabet);
        case Native.PI: return create_sym_ns('Pi', ns_mathematical_constants);
        case Native.greek_lowercase_letter_Pi: return create_sym_ns('pi', ns_greek_alphabet);
        // Functions (lower case)...
        case Native.abs: return create_sym('abs');
        case Native.adj: return create_sym('adj');
        case Native.add: return create_sym('+');
        case Native.and: return create_sym('and');
        case Native.arccos: return create_sym('arccos');
        case Native.arccosh: return create_sym('arccosh');
        case Native.arcsin: return create_sym('arcsin');
        case Native.arcsinh: return create_sym('arcsinh');
        case Native.arctan: return create_sym('arctan');
        case Native.arctanh: return create_sym('arctanh');
        case Native.arg: return create_sym('arg');
        case Native.assign: return create_sym('=');
        case Native.atom: return create_sym('atom');
        case Native.autoexpand: return create_sym('autoexpand');
        case Native.autofactor: return create_sym('autofactor');
        case Native.bake: return create_sym('bake');
        case Native.besselj: return create_sym('besselj');
        case Native.bessely: return create_sym('bessely');
        case Native.binding: return create_sym('binding');
        case Native.binomial: return create_sym('binomial');
        case Native.ceiling: return create_sym('ceiling');
        case Native.check: return create_sym('check');
        case Native.choose: return create_sym('choose');
        case Native.circexp: return create_sym('circexp');
        case Native.clear: return create_sym('clear');
        case Native.clearall: return create_sym('clearall');
        case Native.clock: return create_sym('clock');
        case Native.coeff: return create_sym('coeff');
        case Native.coefficients: return create_sym('coefficients');
        case Native.cofactor: return create_sym('cofactor');
        case Native.complex: return create_sym('complex');
        case Native.component: return create_sym('component');
        case Native.condense: return create_sym('condense');
        case Native.conj: return create_sym('conj');
        case Native.contract: return create_sym('contract');
        case Native.cos: return create_sym('cos');
        case Native.cosh: return create_sym('cosh');
        case Native.cross: return create_sym('cross');
        case Native.curl: return create_sym('cur');
        case Native.d: return create_sym('d');
        case Native.def: return create_sym('def');
        case Native.defint: return create_sym('defint');
        case Native.defn: return create_sym('defn');
        case Native.deg: return create_sym('deg');
        case Native.deref: return create_sym('deref');
        case Native.derivative: return create_sym('derivative');
        case Native.denominator: return create_sym('denominator');
        case Native.det: return create_sym('det');
        case Native.dim: return create_sym('dim');
        case Native.div: return create_sym('div');
        case Native.divide: return create_sym('/');
        case Native.do: return create_sym('do');
        case Native.dot: return create_sym('dot');
        case Native.draw: return create_sym('draw');
        case Native.eigen: return create_sym('eigen');
        case Native.eigenval: return create_sym('eigenval');
        case Native.eigenvec: return create_sym('eigenvec');
        case Native.erf: return create_sym('erf');
        case Native.erfc: return create_sym('erfc');
        case Native.eval: return create_sym('eval');
        case Native.exp: return create_sym('exp');
        case Native.expand: return create_sym('expand');
        case Native.expcos: return create_sym('expcos');
        case Native.expcosh: return create_sym('expcosh');
        case Native.expsin: return create_sym('expsin');
        case Native.expsinh: return create_sym('expsinh');
        case Native.exptan: return create_sym('exptan');
        case Native.exptanh: return create_sym('exptanh');
        case Native.factor: return create_sym('factor');
        case Native.factorial: return create_sym('factorial');
        case Native.filter: return create_sym('filter');
        case Native.float: return create_sym('float');
        case Native.floor: return create_sym('floor');
        case Native.for: return create_sym('for');
        case Native.fn: return create_sym('fn');
        case Native.function: return create_sym('function');
        case Native.gamma: return create_sym('gamma');
        case Native.gcd: return create_sym('gcd');
        case Native.grad: return create_sym('grad');
        case Native.grade: return create_sym('grade');
        case Native.hadamard: return create_sym('hadamard');
        case Native.hermite: return create_sym('hermite');
        case Native.hilbert: return create_sym('hilbert');
        case Native.if: return create_sym('if');
        case Native.imag: return create_sym('imag');
        case Native.infinitesimal: return create_sym('infinitesimal');
        case Native.inner: return create_sym('inner');
        case Native.integral: return create_sym('integral');
        case Native.inv: return create_sym('inv');
        case Native.invg: return create_sym('invg');
        case Native.iscomplex: return create_sym('iscomplex');
        case Native.isimag: return create_sym('isimag');
        case Native.isinfinite: return create_sym('isinfinite');
        case Native.isinfinitesimal: return create_sym('isinfinitesimal');
        case Native.isnegative: return create_sym('isnegative');
        case Native.isone: return create_sym('isone');
        case Native.ispositive: return create_sym('ispositive');
        case Native.isprime: return create_sym('isprime');
        case Native.isreal: return create_sym('isreal');
        case Native.iszero: return create_sym('iszero');
        case Native.kronecker: return create_sym('kronecker');
        case Native.laguerre: return create_sym('laguerre');
        case Native.last: return create_sym('last');
        case Native.lcm: return create_sym('lcm');
        case Native.lco: return create_sym('<<');
        case Native.leading: return create_sym('leading');
        case Native.legendre: return create_sym('legendre');
        case Native.let: return create_sym('let');
        case Native.log: return create_sym('log');
        case Native.lookup: return create_sym('lookup');
        case Native.mag: return create_sym('mag');
        case Native.major: return create_sym('major');
        case Native.minor: return create_sym('minor');
        case Native.minormatrix: return create_sym('minormatrix');
        case Native.mod: return create_sym('mod');
        case Native.multiply: return create_sym('*');
        case Native.noexpand: return create_sym('noexpand');
        case Native.not: return create_sym('not');
        case Native.nroots: return create_sym('nroots');
        case Native.number: return create_sym('number');
        case Native.numerator: return create_sym('numerator');
        case Native.or: return create_sym('or');
        case Native.outer: return create_sym('outer');
        case Native.patch: return create_sym('patch');
        case Native.pattern: return create_sym('pattern');
        case Native.polar: return create_sym('polar');
        case Native.pow: return create_sym('pow');
        case Native.pred: return create_sym('pred');
        case Native.prime: return create_sym('prime');
        case Native.print: return create_sym('print');
        case Native.product: return create_sym('product');
        case Native.quote: return create_sym('quote');
        case Native.quotient: return create_sym('quotient');
        case Native.rank: return create_sym('rank');
        case Native.rationalize: return create_sym('rationalize');
        case Native.real: return create_sym('real');
        case Native.rect: return create_sym('rect');
        case Native.rco: return create_sym('>>');
        case Native.roots: return create_sym('roots');
        case Native.rotate: return create_sym('rotate');
        case Native.round: return create_sym('round');
        case Native.run: return create_sym('run');
        case Native.shape: return create_sym('shape');
        case Native.simplify: return create_sym('simplify');
        case Native.sin: return create_sym('sin');
        case Native.sinh: return create_sym('sinh');
        case Native.sqrt: return create_sym('sqrt');
        case Native.spread: return create_sym('...');
        case Native.st: return create_sym('st');
        case Native.stop: return create_sym('stop');
        case Native.subst: return create_sym('subst');
        case Native.subtract: return create_sym('-');
        case Native.succ: return create_sym('succ');
        case Native.sum: return create_sym('sum');
        case Native.symbol: return create_sym('symbol');
        case Native.tan: return create_sym('tan');
        case Native.tanh: return create_sym('tanh');
        case Native.tau: return create_sym('tau');
        case Native.taylor: return create_sym('taylor');
        case Native.test: return create_sym('test');
        case Native.testeq: return create_sym('==');
        case Native.testge: return create_sym('>=');
        case Native.testgt: return create_sym('>');
        case Native.testle: return create_sym('<=');
        case Native.testlt: return create_sym('<');
        case Native.testne: return create_sym('!=');
        case Native.trace: return create_sym('trace');
        case Native.transpose: return create_sym('transpose');
        case Native.tty: return create_sym('tty');
        case Native.typeof: return create_sym('typeof');
        case Native.unit: return create_sym('unit');
        case Native.uom: return create_sym('uom');
        case Native.version: return create_sym('version');
        case Native.zero: return create_sym('zero');
        default: throw new Error(`${code} symbol is not defined.`);
    }
}
