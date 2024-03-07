const zucchinis = [
  {
    variety: "Black Beauty",
    weight: "179",
    length: "17"
  },
  {
    variety: "Yellow",
    weight: "250",
    length: "20"
  },
  {
    variety: "Cocozelle",
    weight: "180",
    length: "18"
  },
  {
    variety: "Costata Romanesco",
    weight: "198",
    length: "15"
  },
  {
    variety: "Eight Ball",
    weight: "237",
    length: "8"
  },
  {
    variety: "Grey",
    weight: "173",
    length: "17"
  },
  {
    variety: "Ronde de Nice",
    weight: "189",
    length: "10"
  },
  {
    variety: "Tondo di Piacenza",
    weight: "171",
    length: "9"
  },
  {
    variety: "Tromboncino",
    weight: "346",
    length: "34"
  },
  {
    variety: "Yellow Crookneck Squash",
    weight: "178",
    length: "19"
  }
];

console.log(zucchinis);

const zucchinisUnder15cm = zucchinis.filter(zucchini => zucchini.length < 15);

const zucchinisOverOrEqual15cm = zucchinis.filter(zucchini => zucchini.length >= 15);

function calculateTotalWeight(zucchinisArray) {
  return zucchinisArray.reduce((totalWeight, zucchini) => totalWeight + parseInt(zucchini.weight), 0);
}

console.log("Peso totale delle zucchine lunghe meno di 15cm:", calculateTotalWeight(zucchinisUnder15cm), "grammi");
console.log("Peso totale delle zucchine lunghe 15cm o più:", calculateTotalWeight(zucchinisOverOrEqual15cm), "grammi");