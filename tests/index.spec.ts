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
