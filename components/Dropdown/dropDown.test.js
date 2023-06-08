import React from "react";
import renderer, { act } from "react-test-renderer";
import Dropdown from "./dropDown";

jest.mock("react-native-paper-dropdown", () => "MockDropDown");

describe("Dropdown", () => {
  test("renders correctly with props", () => {
    const currencyList = [{ name: "USD" }, { name: "EUR" }];
    const setCurrency = jest.fn();

    const component = renderer.create(
      <Dropdown
        label="Select Currency"
        currencyList={currencyList}
        currency={0}
        setCurrency={setCurrency}      
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("opens dropdown on showDropDown callback", () => {
    const currencyList = [{ name: "USD" }, { name: "EUR" }];
    const setCurrency = jest.fn();

    const component = renderer.create(
      <Dropdown
        label="Select Currency"
        currencyList={currencyList}
        currency={0}
        setCurrency={setCurrency}
      />
    );

    const instance = component.root;
    act(()=>{
      instance.findByType("MockDropDown").props.showDropDown();
    })
    expect(instance.findByType("MockDropDown").props.visible).toBe(true);
  });

  test("dismisses dropdown on onDismiss callback", () => {
    const currencyList = [{ name: "USD" }, { name: "EUR" }];
    const setCurrency = jest.fn();
    const component = renderer.create(
      <Dropdown
        label="Select Currency"
        currencyList={currencyList}
        currency={0}
        setCurrency={setCurrency}
      />
    );

    const instance = component.root;

    act(()=>{
      instance.findByType("MockDropDown").props.showDropDown();
    })
    expect(instance.findByType("MockDropDown").props.visible).toBe(true);

    
    act(()=>{
      instance.findByType("MockDropDown").props.onDismiss();
    })
    expect(instance.findByType("MockDropDown").props.visible).toBe(false);
  });

  test("sets currency value on selection", () => {
    const currencyList = [{ name: "USD" }, { name: "EUR" }];
    const setCurrency = jest.fn();
    const component = renderer.create(
      <Dropdown
        label="Select Currency"
        currencyList={currencyList}
        currency={0}
        setCurrency={setCurrency}
      />
    );

    const instance = component.root;
    instance.findByType("MockDropDown").props.setValue(1);
    expect(setCurrency).toHaveBeenCalledWith(1);
  });
});
