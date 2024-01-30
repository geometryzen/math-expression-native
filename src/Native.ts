/**
 * Natively implemented concepts.
 * Uppercase elements correspond to constants.
 * Lowercase elements correspond to functions.
 */
export enum Native {
    // Constants (mixed case)
    /**
     * Euler's number or Napier's constant.
     */
    E,
    IMU,
    MASH,
    NIL,
    greek_uppercase_letter_Pi,
    greek_lowercase_letter_Pi,
    /**
     * mathematical constant Pi.
     */
    PI,
    // Functions (usually lower case)
    abs,
    add,
    arccos,
    arccosh,
    arcsin,
    arcsinh,
    arctan,
    arctanh,
    arg,
    atom,
    circexp,
    clock,
    complex,
    component,
    condense,
    conj,
    cos,
    cosh,
    def,
    defn,
    deref,
    derivative,
    divide,
    exp,
    expand,
    expsin,
    /**
     * Factor a polynomial or integer.
     */
    factor,
    factorial,
    filter,
    float,
    /**
     * (fn [params*] body)
     */
    fn,
    /**
    * (function body paramList)
    */
    function,
    gcd,
    /**
     * im(z) returns the imaginary part of the complex number z.
     */
    im,
    infinitesimal,
    inner,
    integral,
    inverse,
    iscomplex,
    isimag,
    isinfinite,
    isinfinitesimal,
    isnegative,
    ispositive,
    isreal,
    iszero,
    lco,
    leading,
    let,
    log,
    lookup,
    /**
     * mod(a,b) returns the remainder of the result of a divided by b.
     */
    mod,
    multiply,
    not,
    outer,
    polar,
    pow,
    pred,
    prime,
    rationalize,
    /**
     * re(z) returns the real part of the complex number z.
     */
    re,
    rect,
    rco,
    assign,
    simplify,
    sin,
    sinh,
    spread,
    sqrt,
    /**
     * Standard part function
     * 
     * https://en.wikipedia.org/wiki/Standard_part_function
     */
    st,
    subst,
    subtract,
    succ,
    symbol,
    tan,
    tanh,
    /**
     * tau(x) = 2 * PI * x
     */
    tau,
    taylor,
    test,
    testeq,
    testge,
    testgt,
    testle,
    testlt,
    testne
}

/**
 * https://stackoverflow.com/questions/72284571/how-to-get-the-min-max-value-of-enum-in-typescript
 */
function getMinMaxOfEnum(e: object): [min: number, max: number] {
    // const values = Object.keys(e).map(k => k === "" ? NaN : +k).filter(k => !isNaN(k));
    const values = Object.keys(e).map(k => +k).filter(k => !isNaN(k));
    return [Math.min(...values), Math.max(...values)];
}

const minmax = getMinMaxOfEnum(Native);

export const NATIVE_MIN = minmax[0];
export const NATIVE_MAX = minmax[1];