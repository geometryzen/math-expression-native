import { create_sym } from "math-expression-atoms";
import { is_native_sym, Native, native_sym } from "../src/index";

test("PI is native", function () {
    const PI = native_sym(Native.PI);
    expect(is_native_sym(PI)).toBe(true);
    expect(PI.printname).toBe("pi");
});

test("caching", function () {
    const PI_1 = native_sym(Native.PI);
    const PI_2 = native_sym(Native.PI);
    expect(PI_1 === PI_2).toBe(true);
});

test("foo is NOT native", function () {
    const foo = create_sym("foo");
    expect(is_native_sym(foo)).toBe(false);
    expect(foo.printname).toBe("foo");
});

test("E", function () {
    const sym = native_sym(Native.E);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("e");
});
test("add", function () {
    const sym = native_sym(Native.add);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("+");
});
test("arccos", function () {
    const sym = native_sym(Native.arccos);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("arccos");
});
test("arccosh", function () {
    const sym = native_sym(Native.arccosh);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("arccosh");
});
test("arcsin", function () {
    const sym = native_sym(Native.arcsin);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("arcsin");
});
test("arcsinh", function () {
    const sym = native_sym(Native.arcsinh);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("arcsinh");
});
test("arctan", function () {
    const sym = native_sym(Native.arctan);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("arctan");
});
test("arctanh", function () {
    const sym = native_sym(Native.arctanh);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("arctanh");
});
test("cos", function () {
    const sym = native_sym(Native.cos);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("cos");
});
test("cosh", function () {
    const sym = native_sym(Native.cosh);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("cosh");
});
test("exp", function () {
    const sym = native_sym(Native.exp);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("exp");
});
test("multiply", function () {
    const sym = native_sym(Native.multiply);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("*");
});
test("pow", function () {
    const sym = native_sym(Native.pow);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("pow");
});
test("sin", function () {
    const sym = native_sym(Native.sin);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("sin");
});
test("sinh", function () {
    const sym = native_sym(Native.sinh);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("sinh");
});
test("tan", function () {
    const sym = native_sym(Native.tan);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("tan");
});
test("tanh", function () {
    const sym = native_sym(Native.tanh);
    expect(is_native_sym(sym)).toBe(true);
    expect(sym.printname).toBe("tanh");
});
