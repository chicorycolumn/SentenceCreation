exports.sentenceFormulasBank = [
  {
    sentenceFormulaSymbol: "101a girl is reading",
    sentenceFormulaId: "ENG-00-101a",
    translations: { POL: ["POL-00-101a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        andTags: ["person", "personTest1"],
        gcase: ["nom"],
        number: ["singular", "plural"],
        gender: [],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        person: ["3per"],
        andTags: ["basic2"],
      },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol:
      "101b girl *reads quickly IT WON'T MATTER THAT THIS sentenceFormulaSymbol IS DIFFERENT FROM ITS POL COUNTERPART",
    sentenceFormulaId: "ENG-00-101b",
    translations: { POL: ["POL-00-101b"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        andTags: ["person", "personTest1"],
        gcase: ["nom"],
        number: ["singular", "plural"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        person: ["3per"],
        tenseDescription: ["present"],
        andTags: ["basic2"],
      },
      { chunkId: "fix-2", value: "quickly" },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "fix-2"]],
    additionalOrders: [["fix-2", "fix-1", "nou-1", "ver-1"]],
  },
  {
    sentenceFormulaSymbol: "102a I'll read (pf fut)",
    sentenceFormulaId: "ENG-00-102a",
    translations: { POL: ["POL-00-102a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
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
    sentenceFormulaSymbol: "I read *future 103a",
    sentenceFormulaId: "ENG-00-103a",
    translations: { POL: ["POL-00-103a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic3"],
        tenseDescription: ["future"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "I read *future 103b",
    sentenceFormulaId: "ENG-00-103b",
    translations: { POL: ["POL-00-103b"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic3"],
        tenseDescription: ["future"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "I read *future 103c",
    sentenceFormulaId: "ENG-00-103c",
    translations: { POL: ["POL-00-103c"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic3"],
        tenseDescription: ["past"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "I read *future 104a",
    sentenceFormulaId: "ENG-00-104a",
    translations: { POL: ["POL-00-104a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic3"],
        tenseDescription: ["past"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "I read *future 104b",
    sentenceFormulaId: "ENG-00-104b",
    translations: { POL: ["POL-00-104b"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic3"],
        tenseDescription: [],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "I was writing 105a",
    sentenceFormulaId: "ENG-00-105a",
    translations: { POL: ["POL-00-105a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "I" },
      {
        chunkId: "ver-1",
        andTags: ["basic3"],
        tenseDescription: ["past continuous"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "first conditional 106a",
    sentenceFormulaId: "ENG-00-106a",
    translations: { POL: ["POL-00-106a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "if" },
      { chunkId: "fix-2", value: "you" },
      {
        chunkId: "ver-1",
        specificLemmas: ["write"],
        tenseDescription: ["cond1 condition"],
        importantFeatures: ["tenseDescription"],
        person: ["2per"],
        number: ["singular"],
      },
      { chunkId: "fix-3", value: "a" },
      {
        chunkId: "nou-1",
        specificLemmas: ["book"],
        number: ["singular"],
        gcase: ["nom"],
      },
      { chunkId: "fix-4", value: "," },
      { chunkId: "fix-5", value: "I" },
      {
        chunkId: "ver-2",
        specificLemmas: ["research"],
        tenseDescription: ["cond1 outcome"],
        importantFeatures: ["tenseDescription"],
        person: ["1per"],
        number: ["singular"],
      },
      { chunkId: "fix-6", value: "it" },
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
  {
    sentenceFormulaSymbol: "red door",
    sentenceFormulaId: "ENG-00-107",
    translations: { POL: ["POL-00-107"] },
    sentenceStructure: [
      {
        chunkId: "adj-1",
        agreeWith: "nou-1",
        andTags: ["colour"],
      },
      {
        chunkId: "nou-1",
        specificLemmas: ["door"],
        number: [],
        gcase: ["nom"],
      },
    ],
    primaryOrders: [["adj-1", "nou-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "red door singular",
    sentenceFormulaId: "ENG-00-107a",
    translations: { POL: ["POL-00-107"] }, //Yes, this 107a should go to 107.
    sentenceStructure: [
      {
        chunkId: "adj-1",
        agreeWith: "nou-1",
        andTags: ["colour"],
      },
      {
        chunkId: "nou-1",
        specificLemmas: ["door"],
        number: ["singular"],
        gcase: ["nom"],
      },
    ],
    primaryOrders: [["adj-1", "nou-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "108 singular I am",
    sentenceFormulaId: "ENG-00-108",
    translations: { POL: ["POL-00-108"] },
    sentenceStructure: [
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        gcase: ["nom"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "pro-1",
        specificLemmas: ["be"],
        tenseDescription: ["present simple"],
      },
    ],
    primaryOrders: [["pro-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "109 doc wrote p",
    sentenceFormulaId: "ENG-00-109",
    translations: { POL: ["POL-00-109"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        number: ["singular"],
        andTags: ["job", "person"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["write"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-2", value: "a" },
      { chunkId: "fix-3", value: "prescription" },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "109a doc was writing p",
    sentenceFormulaId: "ENG-00-109a",
    translations: { POL: ["POL-00-109a"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        number: ["singular"],
        andTags: ["job", "person"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["write"],
        tenseDescription: ["past continuous"],
      },
      {
        chunkId: "fix-2",
        value: "a",
      },
      {
        chunkId: "fix-3",
        value: "prescription",
      },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },

  {
    sentenceFormulaSymbol: "109b docs wrote p",
    sentenceFormulaId: "ENG-00-109b",
    translations: { POL: ["POL-00-109b"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        number: ["plural"],
        andTags: ["job", "person"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["write"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-2", value: "a" },
      { chunkId: "fix-3", value: "prescription" },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "109c docs were writing p",
    sentenceFormulaId: "ENG-00-109c",
    translations: { POL: ["POL-00-109c"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        number: ["plural"],
        andTags: ["job", "person"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["write"],
        tenseDescription: ["past continuous"],
      },
      { chunkId: "fix-2", value: "a" },
      { chunkId: "fix-3", value: "prescription" },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "110 the woman read me a book",
    sentenceFormulaId: "ENG-00-110",
    translations: { POL: ["POL-00-110"] },
    sentenceStructure: [
      { chunkId: "fix-1", value: "the" },
      {
        chunkId: "nou-1",
        specificLemmas: ["woman"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["read"],
        tenseDescription: ["past continuous"],
      },
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        gcase: ["dat"],
      },
      { chunkId: "fix-2", value: "a" },
      {
        chunkId: "nou-2",
        specificLemmas: ["book"],
        number: ["singular"],
      },
      { chunkId: "fix-3", value: "to" },
    ],
    primaryOrders: [["fix-1", "nou-1", "ver-1", "pro-1", "fix-2", "nou-2"]],
    additionalOrders: [
      ["fix-1", "nou-1", "ver-1", "fix-2", "nou-2", "fix-3", "pro-1"],
    ],
  },
  {
    sentenceFormulaSymbol: "111a I am",
    sentenceFormulaId: "ENG-00-111a",
    translations: { POL: ["POL-00-111a"] },
    sentenceStructure: [
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "pro-1",
        specificLemmas: ["be"],
        tenseDescription: ["present simple"],
      },
    ],
    primaryOrders: [["pro-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "111b I was",
    sentenceFormulaId: "ENG-00-111b",
    translations: { POL: ["POL-00-111b"] },
    sentenceStructure: [
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "pro-1",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
    ],
    primaryOrders: [["pro-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "111c you were",
    sentenceFormulaId: "ENG-00-111c",
    translations: { POL: ["POL-00-111c"] },
    sentenceStructure: [
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["2per"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "pro-1",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
    ],
    primaryOrders: [["pro-1", "ver-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "112 familymember gave me things",
    sentenceFormulaId: "ENG-00-112",
    translations: { POL: ["POL-00-112"] },
    sentenceStructure: [
      {
        chunkId: "nou-1",
        andTags: ["person", "family"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        gcase: ["dat"],
      },
      {
        chunkId: "nou-2",
        specificLemmas: ["book", "mirror", "apple", "onion"],
        number: ["plural"],
      },
      { chunkId: "fix-3", value: "to" },
    ],
    primaryOrders: [["nou-1", "ver-1", "pro-1", "nou-2"]],
    additionalOrders: [
      // ["nou-1", "ver-1", "nou-2", "fix-3", "pro-1"]
    ],
  },
  {
    sentenceFormulaSymbol: "112a familymember gave me thing",
    sentenceFormulaId: "ENG-00-112a",
    translations: { POL: ["POL-00-112a"] },
    sentenceStructure: [
      {
        chunkId: "nou-1",
        andTags: ["person", "family"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        gcase: ["dat"],
      },
      { chunkId: "fix-1", value: "one" },
      {
        chunkId: "nou-2",
        specificLemmas: ["book", "mirror", "apple", "onion"],
        number: ["singular"],
      },
      { chunkId: "fix-3", value: "to" },
    ],
    primaryOrders: [["nou-1", "ver-1", "pro-1", "fix-1", "nou-2"]],
    additionalOrders: [
      // ["nou-1", "ver-1", "nou-2", "fix-3", "pro-1"]
    ],
  },
  {
    sentenceFormulaSymbol: "113 my father gave me a book",
    sentenceFormulaId: "ENG-00-113",
    translations: { POL: ["POL-00-113"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-invisible",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
      },
      {
        chunkId: "pro-2",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-invisible",
      },
      {
        chunkId: "nou-1",
        andTags: ["person", "family"],
        gcase: ["nom"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "nou-1",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-3",
        agreeWith: "pro-1-invisible",
        gcase: ["dat"],
        importantFeatures: ["gcase"],
        specificLemmas: ["PERSONAL"],
      },
      { chunkId: "fix-1", value: "a" },
      {
        chunkId: "nou-2",
        specificLemmas: ["book"],
        gcase: ["acc"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["pro-2", "nou-1", "ver-1", "pro-3", "fix-1", "nou-2"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "113a my father gave me his book",
    sentenceFormulaId: "ENG-00-113a",
    translations: { POL: ["POL-00-113a"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-invisible-We",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
      },
      {
        chunkId: "pro-2-Our",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-invisible-We",
      },
      {
        chunkId: "nou-1-Father",
        andTags: ["person", "family"],
        gcase: ["nom"],
      },
      {
        chunkId: "ver-1-Gave",
        agreeWith: "nou-1-Father",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-3-Us",
        agreeWith: "pro-1-invisible-We",
        gcase: ["dat"],
        importantFeatures: ["gcase"],
        specificLemmas: ["PERSONAL"],
      },
      {
        chunkId: "pro-4-His",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "nou-1-Father",
      },
      {
        chunkId: "nou-2-Book",
        specificLemmas: ["book"],
        gcase: ["acc"],
        number: ["singular"],
      },
    ],
    primaryOrders: [
      [
        "pro-2-Our",
        "nou-1-Father",
        "ver-1-Gave",
        "pro-3-Us",
        "pro-4-His",
        "nou-2-Book",
      ],
    ],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "114 doctor gave me her book",
    sentenceFormulaId: "ENG-00-114",
    translations: { POL: ["POL-00-114"] },
    sentenceStructure: [
      { chunkId: "fix-1a", value: "the" },
      { chunkId: "fix-1b", value: "a" },
      {
        chunkId: "pro-1-invisible-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "nou-1-Doctor",
        andTags: ["person"],
        specificLemmas: ["doctor"],
        gcase: ["nom"],
      },
      {
        chunkId: "ver-1-Gave",
        agreeWith: "nou-1-Doctor",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-2-Me",
        agreeWith: "pro-1-invisible-I",
        gcase: ["dat"],
        importantFeatures: ["gcase"],
        specificLemmas: ["PERSONAL"],
      },
      {
        chunkId: "pro-3-Her",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "nou-1-Doctor",
      },
      {
        chunkId: "nou-2-Book",
        specificLemmas: ["book"],
        gcase: ["acc"],
        number: ["singular"],
      },
    ],
    primaryOrders: [
      [
        "fix-1a",
        "nou-1-Doctor",
        "ver-1-Gave",
        "pro-2-Me",
        "pro-3-Her",
        "nou-2-Book",
      ],
    ],
    additionalOrders: [
      [
        "fix-1b",
        "nou-1-Doctor",
        "ver-1-Gave",
        "pro-2-Me",
        "pro-3-Her",
        "nou-2-Book",
      ],
    ],
  },
  {
    sentenceFormulaSymbol: "115 I saw my doctor and her doctor",
    sentenceFormulaId: "ENG-115",
    translations: { POL: ["POL-115"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1-see",
        agreeWith: "pro-1-I",
        specificLemmas: ["see"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-2-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "nou-1-doctor",
        andTags: ["person"],
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
      },
      { chunkId: "fix-1-and", value: "and" },
      {
        chunkId: "pro-3-his",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "nou-1-doctor",
      },
      {
        chunkId: "nou-2-doctor",
        andTags: ["person"],
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
      },
    ],
    primaryOrders: [
      [
        "pro-1-I",
        "ver-1-see",
        "pro-2-my",
        "nou-1-doctor",
        "fix-1-and",
        "pro-3-his",
        "nou-2-doctor",
      ],
    ],
  },
];
