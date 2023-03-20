


const wineVarieties = new Set([
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

export default function parseChatGPTResponse(gptResponse: string) {
  const varieties = [];
  wineVarieties.forEach((wine) => {
    if (gptResponse.match(wine)) {
      varieties.push(wine); //then add in chardonnay to our output array/set
    }
  });
  return varieties;
}
