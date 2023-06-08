import { renderHook, act } from "@testing-library/react-hooks";
import useConversion from "./useConversion";
import useCurrency from "./useCurrency";
import { when } from "jest-when";

jest.mock("./useCurrency", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useConversion", () => {
  beforeEach(() => {
    useCurrency.mockReset();
  });

  test("returns the correct conversion result and state", () => {
    const mockConversion = jest.fn();
    const mockConversionRate = jest.fn();
    useCurrency.mockReturnValue({
      Conversion: mockConversion,
      ConversionRate: mockConversionRate,
    });

    const { result } = renderHook(() =>
      useConversion({ from: "USD", to: "EUR", amount: 100 })
    );

    expect(result.current.isObjValid).toBe(false);

    act(() => {
      result.current.setObjValid(true);
    });

    when(mockConversionRate).calledWith("USD","EUR").mockReturnValue("0.93");
    when(mockConversion).calledWith("USD","EUR", 100).mockReturnValue("92.75");

    expect(mockConversion).toHaveBeenCalledWith("USD", "EUR", 100);
    expect(mockConversionRate).toHaveBeenCalledWith("USD", "EUR");

    act(() => {
      result.current.setObjValid(false);
    });

    expect(result.current.Result).toEqual(
      "Converion Rate: 0.93\nConversion Amount: 92.75"
    );

    expect(result.current.isObjValid).toBe(false);
  });
});
