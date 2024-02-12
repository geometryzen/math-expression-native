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
    adj,
    add,
    arccos,
    arccosh,
    arcsin,
    arcsinh,
    arctan,
    arctanh,
    arg,
    assign,
    atom,
    besselj,
    bessely,
    binding,
    binomial,
    ceiling,
    check,
    choose,
    circexp,
    clear,
    clearall,
    clock,
    coeff,
    coefficients,
    cofactor,
    complex,
    component,
    condense,
    conj,
    contract,
    cos,
    cosh,
    cross,
    curl,
    d,
    def,
    defint,
    defn,
    deg,
    denominator,
    deref,
    derivative,
    det,
    dim,
    div,
    divide,
    do,
    dot,
    draw,
    eigen,
    eigenval,
    eigenvec,
    erf,
    erfc,
    eval,
    exp,
    expand,
    expcos,
    expcosh,
    expsin,
    expsinh,
    exptan,
    exptanh,
    /**
     * Factor a polynomial or integer.
     */
    factor,
    factorial,
    filter,
    float,
    floor,
    for,
    /**
     * (fn [params*] body)
     */
    fn,
    /**
    * (function body paramList)
    */
    function,
    gcd,
    grad,
    hadamard,
    hermite,
    hilbert,
    /**
     * imag(z) returns the imaginary part of the complex number z.
     */
    imag,
    infinitesimal,
    inner,
    integral,
    inv,
    iscomplex,
    isimag,
    isinfinite,
    isinfinitesimal,
    isnegative,
    ispositive,
    isprime,
    isreal,
    iszero,
    kronecker,
    laguerre,
    last,
    lcm,
    lco,
    leading,
    legendre,
    let,
    log,
    lookup,
    mag,
    minor,
    minormatrix,
    /**
     * mod(a,b) returns the remainder of the result of a divided by b.
     */
    mod,
    multiply,
    noexpand,
    not,
    nroots,
    numerator,
    or,
    outer,
    polar,
    pow,
    pred,
    prime,
    print,
    product,
    quote,
    quotient,
    rank,
    rationalize,
    rco,
    /**
     * real(z) returns the real part of the complex number z.
     */
    real,
    rect,
    roots,
    rotate,
    run,
    shape,
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
    stop,
    subst,
    subtract,
    succ,
    sum,
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
    testne,
    transpose,
    tty,
    unit,
    zero
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