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
  "102a": {
    sentenceFormulaSymbol: "102a I'll read (pf fut)",
    sentenceFormulaId: "ENG-00-102a",
    translations: { POL: ["POL-00-102a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic2"],
        tenseDescription: ["future"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "103a": {
    sentenceFormulaSymbol: "I read *future 103a",
    sentenceFormulaId: "ENG-00-103a",
    translations: { POL: ["POL-00-103a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: ["future"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "103b": {
    sentenceFormulaSymbol: "I read *future 103b",
    sentenceFormulaId: "ENG-00-103b",
    translations: { POL: ["POL-00-103b"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: ["future"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "103c": {
    sentenceFormulaSymbol: "I read *future 103c",
    sentenceFormulaId: "ENG-00-103c",
    translations: { POL: ["POL-00-103c"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: ["past"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "104a": {
    sentenceFormulaSymbol: "I read *future 104a",
    sentenceFormulaId: "ENG-00-104a",
    translations: { POL: ["POL-00-104a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: ["past"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "104b": {
    sentenceFormulaSymbol: "I read *future 104b",
    sentenceFormulaId: "ENG-00-104b",
    translations: { POL: ["POL-00-104b"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: [],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "105a": {
    sentenceFormulaSymbol: "I was writing 105a",
    sentenceFormulaId: "ENG-00-105a",
    translations: { POL: ["POL-00-105a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["basic3"],
        tenseDescription: ["past continuous"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  "106a": {
    sentenceFormulaSymbol: "first conditional 106a",
    sentenceFormulaId: "ENG-00-106a",
    translations: { POL: ["POL-00-106a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "if" },
      { chunkId: "fix-2", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["write"],
        tenseDescription: ["cond1 condition"],
        person: ["1per"],
        number: ["singular"],
      },
      { chunkId: "fix-3", wordtype: "fixed", value: "a" },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        specificLemmas: ["book"],
        number: ["singular"],
        gcase: ["nom"],
      },
      { chunkId: "fix-4", wordtype: "fixed", value: "," },
      { chunkId: "fix-5", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-2",
        wordtype: "verb",
        specificLemmas: ["research"],
        tenseDescription: ["cond1 outcome"],
        person: ["1per"],
        number: ["singular"],
      },
      { chunkId: "fix-6", wordtype: "fixed", value: "it" },
    ],
    primaryOrders: [
      [
        "fix-1",
        "fix-2",
        "ver-1",
        "fix-3",
        "nou-1",
        "fix-4",
        "fix-5",
        "ver-2",
        "fix-6",
      ],
    ],
    additionalOrders: [],
  },
  107: {
    sentenceFormulaSymbol: "red door",
    sentenceFormulaId: "ENG-00-107",
    translations: { POL: ["POL-00-107"] },
    structure: [
      {
        chunkId: "adj-1",
        agreeWith: "nou-1",
        wordtype: "adjective",
        andTags: ["colour"],
      },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        specificLemmas: ["door"],
        number: [],
        gcase: ["nom"],
      },
    ],
    primaryOrders: [["adj-1", "nou-1"]],
    additionalOrders: [],
  },
  "107a": {
    sentenceFormulaSymbol: "red door singular",
    sentenceFormulaId: "ENG-00-107a",
    translations: { POL: ["POL-00-107"] }, //Yes, this 107a should go to 107.
    structure: [
      {
        chunkId: "adj-1",
        agreeWith: "nou-1",
        wordtype: "adjective",
        andTags: ["colour"],
      },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        specificLemmas: ["door"],
        number: ["singular"],
        gcase: ["nom"],
      },
    ],
    primaryOrders: [["adj-1", "nou-1"]],
    additionalOrders: [],
  },
};
