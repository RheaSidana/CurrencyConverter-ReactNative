import { renderHook } from "@testing-library/react-hooks";
import useCurrency from "./useCurrency";
import jsonData from "./Dump/CurrencyList.json";

describe("useCurrency", () => {
  test("returns the currency map and list", () => {
    const { result } = renderHook(() => useCurrency().create(jsonData));

    const expectedCurrencyMap = Object.keys(jsonData.symbols).map((symbol) => ({
      currency: symbol,
      country: jsonData.symbols[symbol],
      name: `${symbol} - ${jsonData.symbols[symbol]}`,
    }));
    expect(result.current.map).toEqual(expectedCurrencyMap);

    const expectedCurrencyList = Object.keys(jsonData.symbols);
    expect(result.current.list).toEqual(expectedCurrencyList);
  });
});
