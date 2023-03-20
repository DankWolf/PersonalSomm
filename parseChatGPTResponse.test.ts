// @ts-nocheck
import parseChatGPTResponse from "./parseChatGPTResponse";

describe("Parse ChatGPT function", () => {
  it("should accept a string and output an array", () => {
    const output = parseChatGPTResponse("Some String");
    expect(Array.isArray(output)).toBe(true);
  });
  it("should output an array of all wine varieties included in the string", () => {
    expect(
      parseChatGPTResponse(
        "asdifnewak Pinot Noir daslkfeioand Merlot. This is the end,"
      )
    ).toEqual(["Pinot Noir", "Merlot"]);
    expect(parseChatGPTResponse("")).toEqual([]);
    expect(
      parseChatGPTResponse(
        "ChardonnaySauvignon BlancPinot GrigioPinot GrisRieslingPinot NoirZinfandelSyrahCabernet SauvignonMerlotMalbec"
      )
    ).toEqual([
      "Chardonnay",
      "Sauvignon Blanc",
      "Pinot Grigio",
      "Pinot Gris",
      "Riesling",
      "Pinot Noir",
      "Zinfandel",
      "Syrah",
      "Cabernet Sauvignon",
      "Merlot",
      "Malbec",
    ]);
  });
});
