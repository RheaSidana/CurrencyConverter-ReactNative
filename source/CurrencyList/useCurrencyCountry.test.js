import { renderHook } from "@testing-library/react-hooks";
import useCurrencyCountry from "./useCurrencyCountry";
import readJsonFile from "../accessibilty/readJsonFile";
import data from "./Dump/CurrencyList.json";
import useCurrency from "./useCurrency";

jest.mock("../accessibilty/readJsonFile", () => jest.fn());
jest.mock("./useCurrency", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useCurrencyCountry", () => {
  test("returns the currency country and list", () => {
    const mockCreateCurrency = {
      map: [
        {
          currency: "USD",
          country: "United States",
          name: "USD - United States",
        },
      ],
      list: ["USD"],
    };
    readJsonFile.mockReturnValueOnce(data);
    useCurrency.mockReturnValueOnce({
      create: jest.fn().mockReturnValue(mockCreateCurrency),
    });

    const { result } = renderHook(() => useCurrencyCountry());

    expect(readJsonFile).toHaveBeenCalledWith(data);
    expect(useCurrency).toHaveBeenCalled();

    expect(result.current.CurrencyCountry).toEqual(mockCreateCurrency.map);
    expect(result.current.CurrencyList).toEqual(mockCreateCurrency.list);
  });
});
