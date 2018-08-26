import { addLeadingZeros } from "./leadingZero";

test("adds leading zero to value under 10", () => {
  expect(addLeadingZeros(5)).toBe("05");
  expect(addLeadingZeros(9)).toBe("09");
  expect(addLeadingZeros(1)).toBe("01");
});

test("adds no leading zero above 10", () => {
  expect(addLeadingZeros(10)).toBe("10");
  expect(addLeadingZeros(12)).toBe("12");
});
