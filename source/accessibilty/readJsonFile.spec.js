import readJsonFile from "./readJsonFile";

describe("readJsonFile", () => {
  test("returns the parsed JSON object", () => {
    const data = { key: "value" };
    const result = readJsonFile(data);
    expect(result).toEqual(data);
  });
});
