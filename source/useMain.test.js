import { renderHook, act } from "@testing-library/react-hooks";
import useMain from "./useMain";

describe("useMain", () => {
  test("updates state and toggles button correctly", async () => {
    const list = {
      USD: {
        currency: "USD",
        country: "United States",
        name: "USD - United States",
      },
      EUR: {
        currency: "EUR",
        country: "Europe",
        name: "EUR - Europe",
      },
    };

    const setConversionObj = jest.fn();

    const { result } = renderHook(() => useMain(list, setConversionObj));

    const {
      setCurrencyFrom,
      setCurrencyTo,
      setAmount,
    } = result.current;

    expect(result.current.isDisable).toBe(true);

    await act(async () => {
      setCurrencyFrom("USD");
      setCurrencyTo("EUR");
      setAmount("100");
    });

    expect(result.current.currencyFrom).toBe('USD');
    expect(result.current.currencyTo).toBe('EUR');
    
    expect(result.current.isDisable).toBe(false);
    await act(async()=>{
      result.current.onConvert();
    });
    
    expect(setConversionObj).toHaveBeenCalledWith({
      amount: '100',
      from: 'USD',
      to: 'EUR',
    });
    expect(result.current.isDisable).toBe(true);
  });
});
