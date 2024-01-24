/**
 * Natively implemented concepts.
 * Uppercase elements correspond to constants.
 * Lowercase elements correspond to functions.
 */
export enum Native {
    // Constants (mixed case)
    mathematical_constant_Eulers_number_Napiers_constant,
    IMU,
    MASH,
    NIL,
    greek_uppercase_letter_Pi,
    greek_lowercase_letter_Pi,
    mathematical_constant_Pi,
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
    circexp,
    clock,
    complex,
    component,
    condense,
    conj,
    cos,
    cosh,
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
    testne,
}