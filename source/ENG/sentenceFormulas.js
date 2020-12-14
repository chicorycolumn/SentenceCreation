exports.sentenceFormulasBank = {
  "101a": {
    sentenceFormulaSymbol: "101a girl is reading",
    sentenceFormulaId: "ENG-00-101a",
    translations: { POL: ["POL-00-101a"] },
    structure: [
      // {
      //   chunkId: "art-1",
      //   wordtype: "article",
      //   agreeWith: "nou-1",
      //   definiteness: ["definite", "indefinite", "zero"],
      // },
      { chunkId: "fix-1", wordtype: "fixed", value: "the" },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        andTags: ["person"],
        gcase: ["nom"],
        number: ["singular", "plural"],
        gender: [],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        wordtype: "verb",
        person: ["3per"],
        andTags: ["basic2"],
      },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1"]],
    additionalOrders: [],
  },
  "101b": {
    sentenceFormulaSymbol:
      "101b girl *reads quickly IT WON'T MATTER THAT THIS sentenceFormulaSymbol IS DIFFERENT FROM ITS POL COUNTERPART",
    sentenceFormulaId: "ENG-00-101b",
    translations: { POL: ["POL-00-101b"] },
    structure: [
      // {
      //   chunkId: "art-1",
      //   wordtype: "article",
      //   agreeWith: "nou-1",
      //   definiteness: ["definite", "indefinite", "zero"],
      // },
      { chunkId: "fix-1", wordtype: "fixed", value: "the" },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        andTags: ["person"],
        gcase: ["nom"],
        number: ["singular", "plural"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        wordtype: "verb",
        person: ["3per"],
        tenseDescription: ["present"],
        andTags: ["basic2"],
      },
      { chunkId: "fix-2", wordtype: "fixed", value: "quickly" },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "fix-2"]],
    additionalOrders: [["fix-2", "fix-1", "nou-1", "ver-1"]],
  },
  // "102a": {
  //   sentenceFormulaSymbol: "102a I'll read (pf fut)",
  //   sentenceFormulaId: "ENG-00-102a",
  //   translations: { POL: ["POL-00-102a"] },
  //   structure: [
  //     { chunkId: "fix-1", wordtype: "fixed", value: "I" },
  //     {
  //       chunkId: "ver-1",
  //       wordtype: "verb",
  //       andTags: ["basic2"],
  //       tenseDescription: ["future"],
  //       person: ["1per"],
  //       number: ["singular"],
  //     },
  //   ],
  //   primaryOrders: [["fix-1", "ver-1"]],
  //   additionalOrders: [],
  // },
};
