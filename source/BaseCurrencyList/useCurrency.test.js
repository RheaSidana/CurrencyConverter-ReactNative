import useCurrency from "./useCurrency";
import FindConversionValue from "../accessibilty/findConversionValue";
import { when } from "jest-when";

jest.mock("../accessibilty/findConversionValue", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useCurrency", () => {
  beforeEach(() => {
    FindConversionValue.mockReset();
  });
  test("returns the conversion rate and conversion amount", () => {
    when(FindConversionValue).calledWith("USD").mockReturnValue(1.22);
    when(FindConversionValue).calledWith("EUR").mockReturnValue(0.91);

    const { Conversion, ConversionRate } = useCurrency();

    const from = "USD";
    const to = "EUR";
    const amount = 10;

    const expectedConversionRate = "0.75";
    const expectedConversionAmount = "7.50";

    const actualConversionRate = ConversionRate(from, to);
    const actualConversionAmount = Conversion(from, to, amount);

    expect(actualConversionRate).toBe(expectedConversionRate);
    expect(actualConversionAmount).toBe(expectedConversionAmount);
  });
});
