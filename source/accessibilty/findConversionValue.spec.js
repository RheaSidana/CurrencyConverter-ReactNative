import readJsonFile from "./readJsonFile";
import data from "../BaseCurrencyList/Dump/BaseCurrency.json";
import findConversionValue from "./findConversionValue";

jest.mock("./readJsonFile");

describe("findConversionValue", () => {
  test("returns the conversion value for a given symbol", () => {
    const mockJson = {
      rates: {
        USD: 1.22,
        EUR: 1.10,
      },
    };
    readJsonFile.mockReturnValue(mockJson);

    const symbol = "USD";
    const result = findConversionValue(symbol);

    expect(result).toBe(1.22);
  });

  test("returns 0 if the symbol is not found", () => {
    const mockJson = {
      rates: {
        EUR: 1.10,
      },
    };
    readJsonFile.mockReturnValue(mockJson);

    const symbol = "USD";
    const result = findConversionValue(symbol);

    expect(result).toBe(0);
  });
});
