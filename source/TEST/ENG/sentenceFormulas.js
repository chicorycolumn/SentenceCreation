exports.sentenceFormulasBank = [
  {
    sentenceFormulaSymbol: "symb1",
    sentenceFormulaId: "ENG-00-101a",
    translations: { POL: ["POL-00-101a"] },
    sentenceStructure: [
      // {
      //   chunkId: "art-1",
      //   agreeWith: "npe-1",
      //   definiteness: ["definite", "indefinite", "zero"],
      // },
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        andTags: ["personTest1"],
        gcase: ["nom"],
        number: ["singular", "plural"],
        gender: [],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        person: ["3per"],
        andTags: ["basic2"],
      },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "symb1",
    sentenceFormulaId: "ENG-00-101b",
    translations: { POL: ["POL-00-101b"] },
    sentenceStructure: [
      // {
      //   chunkId: "art-1",
      //   agreeWith: "npe-1",
      //   definiteness: ["definite", "indefinite", "zero"],
      // },
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        andTags: ["personTest1"],
        gcase: ["nom"],
        number: ["singular", "plural"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        person: ["3per"],
        tenseDescription: ["present"],
        andTags: ["basic2"],
      },
      { chunkId: "fix-2", chunkValue: "quickly" },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1", "fix-2"]],
    additionalOrders: [["fix-2", "fix-1", "npe-1", "ver-1"]],
  },
  {
    sentenceFormulaSymbol: "102a I'll read (pf fut)",
    sentenceFormulaId: "ENG-00-102a",
    translations: { POL: ["POL-00-102a"] },
    sentenceStructure: [
      { chunkId: "fix-1", chunkValue: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic2"],
        tenseDescription: ["future"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "102a I'll read",
    sentenceFormulaId: "ENG-00-102a",
    translations: { POL: ["POL-00-102a"] },
    sentenceStructure: [],
    primaryOrders: [],
    additionalOrders: [],
  },
];
