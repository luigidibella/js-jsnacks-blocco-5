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
      diameter: "8"
    },
    {
      variety: "Grey",
      weight: "173",
      length: "17"
    },
    {
      variety: "Ronde de Nice",
      weight: "189",
      diameter: "10"
    },
    {
      variety: "Tondo di Piacenza",
      weight: "171",
      diameter: "9"
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

const pesoTotaleZucchine = zucchinis.reduce((totalWeight, zucchina) => {
  return totalWeight + parseInt(zucchina.weight || 0);
}, 0);

console.log(`Il peso totale di tutte le zucchine è ${pesoTotaleZucchine} grammi.`);