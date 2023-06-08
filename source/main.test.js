import useCurrencyCountry from "./CurrencyList/useCurrencyCountry";
import Main from "./main";
import React from "react";
import { render } from "@testing-library/react-native";
import useMain from "./useMain";

jest.mock("react-native-paper", () => {
  return {
    Button: jest.fn(({ children, onPress, disabled, testID }) => (
      <mock-Button onPress={onPress} disabled={disabled} testID={testID}>
        {children}
      </mock-Button>
    )),
    Text: jest.fn(({ testID }) => <mock-Text testID={testID} />),
    TextInput: jest.fn(({ testID }) => <mock-TextInput testID={testID} />),
  };
});

jest.mock("../components/Dropdown/dropDown", () =>
  jest.fn(({ label, currencyList, currency, setCurrency, testID }) => (
    <mock-Dropdown
      label={label}
      currencyList={currencyList}
      currency={currency}
      setCurrency={setCurrency}
      testID={testID}
    />
  ))
);

jest.mock("./useMain", () => ({
  __esModule: true,
  default: jest.fn((CurrencyCountry, setConversionObj) => ({
    onConvert: jest.fn(),
    currencyFrom: "",
    setCurrencyFrom: jest.fn(),
    currencyTo: "",
    setCurrencyTo: jest.fn(),
    setAmount: jest.fn(),
    isDisable: false,
  })),
}));

jest.mock("./CurrencyList/useCurrencyCountry", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    CurrencyCountry: ["USD", "EUR", "GBP", "JPY", "CAD"],
  })),
}));

describe("Main Component", () => {
  afterEach(() => {});

  test("should render Main component children", () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId("Currency From")).toBeTruthy();
    expect(getByTestId("Currency To")).toBeTruthy();
    expect(getByTestId("Amount")).toBeTruthy();
    expect(getByTestId("Convert")).toBeTruthy();

    const dropdownCF = getByTestId("Currency From");
    const labelCF = dropdownCF.props.label;
    const currencyListCF = dropdownCF.props.currencyList;

    expect(labelCF).toBe("Currency From");
    expect(currencyListCF).toEqual(["USD", "EUR", "GBP", "JPY", "CAD"]);

    const dropdownCT = getByTestId("Currency To");
    const labelCT = dropdownCT.props.label;
    const currencyListCT = dropdownCT.props.currencyList;

    expect(labelCT).toBe("Currency To");
    expect(currencyListCT).toEqual(["USD", "EUR", "GBP", "JPY", "CAD"]);
  });
});