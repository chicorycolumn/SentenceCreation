exports.sentenceFormulasBank = [
  {
    sentenceFormulaSymbol: "101a girl is reading",
    sentenceFormulaId: "ENG-00-101a",
    translations: { POL: ["POL-00-101a"] },
    sentenceStructure: [
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
    sentenceFormulaSymbol:
      "101b girl *reads quickly IT WON'T MATTER THAT THIS sentenceFormulaSymbol IS DIFFERENT FROM ITS POL COUNTERPART",
    sentenceFormulaId: "ENG-00-101b",
    translations: { POL: ["POL-00-101b"] },
    sentenceStructure: [
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
    sentenceFormulaSymbol: "I read *future 103a",
    sentenceFormulaId: "ENG-00-103a",
    translations: { POL: ["POL-00-103a"] },
    sentenceStructure: [
      { chunkId: "fix-1", chunkValue: "I" },
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
      { chunkId: "fix-1", chunkValue: "I" },
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
      { chunkId: "fix-1", chunkValue: "I" },
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
      { chunkId: "fix-1", chunkValue: "I" },
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
      { chunkId: "fix-1", chunkValue: "I" },
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
      { chunkId: "fix-1", chunkValue: "I" },
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
      { chunkId: "fix-1", chunkValue: "if" },
      { chunkId: "fix-2", chunkValue: "you" },
      {
        chunkId: "ver-1",
        specificLemmas: ["write"],
        tenseDescription: ["cond1 condition"],
        formulaImportantTraitKeys: ["tenseDescription"],
        person: ["2per"],
        number: ["singular"],
      },
      { chunkId: "fix-3", chunkValue: "a" },
      {
        chunkId: "nco-1",
        specificLemmas: ["book"],
        number: ["singular"],
        gcase: ["nom"],
      },
      { chunkId: "fix-4", chunkValue: "," },
      { chunkId: "fix-5", chunkValue: "I" },
      {
        chunkId: "ver-2",
        specificLemmas: ["research"],
        tenseDescription: ["cond1 outcome"],
        formulaImportantTraitKeys: ["tenseDescription"],
        person: ["1per"],
        number: ["singular"],
      },
      { chunkId: "fix-6", chunkValue: "it" },
    ],
    primaryOrders: [
      [
        "fix-1",
        "fix-2",
        "ver-1",
        "fix-3",
        "nco-1",
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
        agreeWith: "nco-1",
        andTags: ["colour"],
      },
      {
        chunkId: "nco-1",
        specificLemmas: ["door"],
        number: [],
        gcase: ["nom"],
      },
    ],
    primaryOrders: [["adj-1", "nco-1"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "red door singular",
    sentenceFormulaId: "ENG-00-107a",
    translations: { POL: ["POL-00-107"] },
    sentenceStructure: [
      {
        chunkId: "adj-1",
        agreeWith: "nco-1",
        andTags: ["colour"],
      },
      {
        chunkId: "nco-1",
        specificLemmas: ["door"],
        number: ["singular"],
        gcase: ["nom"],
      },
    ],
    primaryOrders: [["adj-1", "nco-1"]],
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
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        number: ["singular"],
        andTags: ["job"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["write"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-2", chunkValue: "a" },
      { chunkId: "fix-3", chunkValue: "prescription" },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "109a doc was writing p",
    sentenceFormulaId: "ENG-00-109a",
    translations: { POL: ["POL-00-109a"] },
    sentenceStructure: [
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        number: ["singular"],
        andTags: ["job"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["write"],
        tenseDescription: ["past continuous"],
      },
      {
        chunkId: "fix-2",
        chunkValue: "a",
      },
      {
        chunkId: "fix-3",
        chunkValue: "prescription",
      },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },

  {
    sentenceFormulaSymbol: "109b docs wrote p",
    sentenceFormulaId: "ENG-00-109b",
    translations: { POL: ["POL-00-109b"] },
    sentenceStructure: [
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        number: ["plural"],
        andTags: ["job"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["write"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-2", chunkValue: "a" },
      { chunkId: "fix-3", chunkValue: "prescription" },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "109c docs were writing p",
    sentenceFormulaId: "ENG-00-109c",
    translations: { POL: ["POL-00-109c"] },
    sentenceStructure: [
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        number: ["plural"],
        andTags: ["job"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["write"],
        tenseDescription: ["past continuous"],
      },
      { chunkId: "fix-2", chunkValue: "a" },
      { chunkId: "fix-3", chunkValue: "prescription" },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1", "fix-2", "fix-3"]],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "110 the woman read me a book",
    sentenceFormulaId: "ENG-00-110",
    translations: { POL: ["POL-00-110"] },
    sentenceStructure: [
      { chunkId: "fix-1", chunkValue: "the" },
      {
        chunkId: "npe-1",
        specificLemmas: ["woman"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["read"],
        tenseDescription: ["past continuous"],
      },
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        gcase: ["dat"],
      },
      { chunkId: "fix-2", chunkValue: "a" },
      {
        chunkId: "nco-2",
        specificLemmas: ["book"],
        number: ["singular"],
      },
      { chunkId: "fix-3", chunkValue: "to" },
    ],
    primaryOrders: [["fix-1", "npe-1", "ver-1", "pro-1", "fix-2", "nco-2"]],
    additionalOrders: [
      ["fix-1", "npe-1", "ver-1", "fix-2", "nco-2", "fix-3", "pro-1"],
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
        chunkId: "npe-1",
        andTags: ["family"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
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
        chunkId: "nco-2",
        specificLemmas: ["book", "mirror", "apple", "onion"],
        number: ["plural"],
      },
      { chunkId: "fix-3", chunkValue: "to" },
    ],
    primaryOrders: [["npe-1", "ver-1", "pro-1", "nco-2"]],
    additionalOrders: [["npe-1", "ver-1", "nco-2", "fix-3", "pro-1"]],
  },
  {
    sentenceFormulaSymbol: "112a familymember gave me thing",
    sentenceFormulaId: "ENG-00-112a",
    translations: { POL: ["POL-00-112a"] },
    sentenceStructure: [
      {
        chunkId: "npe-1",
        andTags: ["family"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-1",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        gcase: ["dat"],
      },
      { chunkId: "fix-1", chunkValue: "one" },
      {
        chunkId: "nco-2",
        specificLemmas: ["book", "mirror", "apple", "onion"],
        number: ["singular"],
      },
      { chunkId: "fix-3", chunkValue: "to" },
    ],
    primaryOrders: [["npe-1", "ver-1", "pro-1", "fix-1", "nco-2"]],
    additionalOrders: [
      // ["npe-1", "ver-1", "nco-2", "fix-3", "pro-1"]
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
        chunkId: "npe-1",
        andTags: ["family"],
        gcase: ["nom"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1",
        agreeWith: "npe-1",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-3",
        agreeWith: "pro-1-invisible",
        gcase: ["dat"],
        formulaImportantTraitKeys: ["gcase"],
        specificLemmas: ["PERSONAL"],
      },
      { chunkId: "fix-1", chunkValue: "a" },
      {
        chunkId: "nco-2",
        specificLemmas: ["book"],
        gcase: ["acc"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["pro-2", "npe-1", "ver-1", "pro-3", "fix-1", "nco-2"]],
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
        chunkId: "npe-1-Father",
        andTags: ["family"],
        gcase: ["nom"],
      },
      {
        chunkId: "ver-1-Gave",
        agreeWith: "npe-1-Father",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-3-Us",
        agreeWith: "pro-1-invisible-We",
        gcase: ["dat"],
        formulaImportantTraitKeys: ["gcase"],
        specificLemmas: ["PERSONAL"],
      },
      {
        chunkId: "pro-4-His",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "npe-1-Father",
      },
      {
        chunkId: "nco-2-Book",
        specificLemmas: ["book"],
        gcase: ["acc"],
        number: ["singular"],
      },
    ],
    primaryOrders: [
      [
        "pro-2-Our",
        "npe-1-Father",
        "ver-1-Gave",
        "pro-3-Us",
        "pro-4-His",
        "nco-2-Book",
      ],
    ],
    additionalOrders: [],
  },
  {
    sentenceFormulaSymbol: "114 doctor gave me her book",
    sentenceFormulaId: "ENG-00-114",
    translations: { POL: ["POL-00-114"] },
    sentenceStructure: [
      { chunkId: "fix-1a", chunkValue: "the" },
      { chunkId: "fix-1b", chunkValue: "a" },
      {
        chunkId: "pro-1-invisible-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "npe-1-Doctor",
        specificLemmas: ["doctor"],
        gcase: ["nom"],
      },
      {
        chunkId: "ver-1-Gave",
        agreeWith: "npe-1-Doctor",
        specificLemmas: ["give"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "pro-2-Me",
        agreeWith: "pro-1-invisible-I",
        gcase: ["dat"],
        formulaImportantTraitKeys: ["gcase"],
        specificLemmas: ["PERSONAL"],
      },
      {
        chunkId: "pro-3-Her",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "npe-1-Doctor",
      },
      {
        chunkId: "nco-2-Book",
        specificLemmas: ["book"],
        gcase: ["acc"],
        number: ["singular"],
      },
    ],
    primaryOrders: [
      [
        "fix-1a",
        "npe-1-Doctor",
        "ver-1-Gave",
        "pro-2-Me",
        "pro-3-Her",
        "nco-2-Book",
      ],
    ],
    additionalOrders: [
      [
        "fix-1b",
        "npe-1-Doctor",
        "ver-1-Gave",
        "pro-2-Me",
        "pro-3-Her",
        "nco-2-Book",
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
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
      },
      { chunkId: "fix-1-and", chunkValue: "and" },
      {
        chunkId: "pro-3-his",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "npe-1-doctor",
      },
      {
        chunkId: "npe-2-doctor",
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
        "npe-1-doctor",
        "fix-1-and",
        "pro-3-his",
        "npe-2-doctor",
      ],
    ],
  },
  {
    sentenceFormulaSymbol: "116 My doctor was a woman",
    sentenceFormulaId: "ENG-116",
    translations: { POL: ["POL-116"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-2-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        gender: ["f"],
        educatorBlocksAnnotationsForTheseTraitKeys: ["gender"],
        // ^ Because here the educator knows that context makes this MGN's gender unambiguous.
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "npe-1-doctor",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-1-a", chunkValue: "a" },
      {
        chunkId: "npe-2-woman",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["woman"],
      },
    ],
    primaryOrders: [
      ["pro-2-my", "npe-1-doctor", "ver-1-was", "fix-1-a", "npe-2-woman"],
    ],
  },
  {
    sentenceFormulaSymbol: "116y My doctor",
    sentenceFormulaId: "ENG-116y",
    translations: { POL: ["POL-116y"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-2-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        gender: ["f"],
      },
    ],
    primaryOrders: [["pro-2-my", "npe-1-doctor"]],
  },
  {
    sentenceFormulaSymbol: "116x My doctor was a woman",
    sentenceFormulaId: "ENG-116x",
    translations: { POL: ["POL-116x"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-2-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        gender: ["f"],
        educatorBlocksAnnotationsForTheseTraitKeys: ["gender"],
        // ^ Because here the educator knows that context makes this MGN's gender unambiguous.
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "npe-1-doctor",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-1-a", chunkValue: "a" },
      {
        chunkId: "npe-2-woman",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["woman"],
      },
    ],
    primaryOrders: [
      ["pro-2-my", "npe-1-doctor", "ver-1-was", "fix-1-a", "npe-2-woman"],
    ],
  },
  {
    sentenceFormulaSymbol: "116a My doctor's doctor was a woman",
    sentenceFormulaId: "ENG-116a",
    translations: { POL: ["POL-116a"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-2-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor's",
        gcase: ["gen"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        // gender: []
      },
      {
        chunkId: "npe-2-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        gender: ["f"],
        educatorBlocksAnnotationsForTheseTraitKeys: ["gender"],
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "npe-2-doctor",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-1-a", chunkValue: "a" },
      {
        chunkId: "npe-3-woman",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["woman"],
      },
    ],
    primaryOrders: [
      [
        "pro-2-my",
        "npe-1-doctor's",
        "npe-2-doctor",
        "ver-1-was",
        "fix-1-a",
        "npe-3-woman",
      ],
    ],
  },
  {
    sentenceFormulaSymbol: "117 I was a doctor",
    sentenceFormulaId: "ENG-117",
    translations: { ENG: ["ENG-117"], POL: ["POL-117"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "pro-1-I",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "art-1-a",
        form: ["indefinite"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor",
        specificLemmas: ["doctor"],
        agreeWith: "pro-1-I",
      },
    ],
    primaryOrders: [["pro-1-I", "ver-1-was", "art-1-a", "npe-1-doctor"]],
  },
  {
    sentenceFormulaSymbol: "117a I* was a doctor",
    sentenceFormulaId: "ENG-117a",
    translations: { ENG: ["ENG-117a"], POL: ["POL-117a"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "pro-1-I",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "art-1-a",
        form: ["indefinite"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor",
        number: ["singular"],
        specificLemmas: ["doctor"],
        agreeWith: "pro-1-I",
      },
    ],
    primaryOrders: [["pro-1-I", "ver-1-was", "art-1-a", "npe-1-doctor"]],
  },
  {
    sentenceFormulaSymbol: "117aa I** was a doctor",
    sentenceFormulaId: "ENG-117aa",
    translations: { ENG: ["ENG-117aa"], POL: ["POL-117aa"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "pro-1-I",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      {
        chunkId: "art-1-a",
        form: ["indefinite"],
        agreeWith: "pro-1-I",
      },
      {
        chunkId: "npe-1-doctor",
        // number: ["singular"],
        specificLemmas: ["doctor"],
        agreeWith: "pro-1-I",
      },
    ],
    primaryOrders: [["pro-1-I", "ver-1-was", "art-1-a", "npe-1-doctor"]],
  },
  {
    sentenceFormulaSymbol: "117b I was here",
    sentenceFormulaId: "ENG-117b",
    translations: { ENG: ["ENG-117b"], POL: ["POL-117b"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1-was",
        agreeWith: "pro-1-I",
        specificLemmas: ["be"],
        tenseDescription: ["past simple"],
      },
      { chunkId: "fix-1-here", chunkValue: "here" },
    ],
    primaryOrders: [["pro-1-I", "ver-1-was", "fix-1-here"]],
  },
  {
    sentenceFormulaSymbol: "117c I am here",
    sentenceFormulaId: "ENG-117c",
    translations: { ENG: ["ENG-117c"], POL: ["POL-117c"] },
    sentenceStructure: [
      {
        chunkId: "pro-1-I",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "ver-1-am",
        agreeWith: "pro-1-I",
        specificLemmas: ["be"],
        tenseDescription: ["present simple"],
      },
      { chunkId: "fix-1-here", chunkValue: "here" },
    ],
    primaryOrders: [["pro-1-I", "ver-1-am", "fix-1-here"]],
  },
  {
    sentenceFormulaSymbol: "118 My doctor and his book",
    sentenceFormulaId: "ENG-118",
    translations: { POL: ["POL-118"] },
    sentenceStructure: [
      {
        chunkId: "pro-0-I-invisible",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-1-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-0-I-invisible",
      },
      {
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        educatorBlocksAnnotationsForTheseTraitKeys: ["gender", "number"],
        // gender: ["f"],
      },
      { chunkId: "fix-1-and", chunkValue: "and" },
      {
        chunkId: "pro-2-his",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "npe-1-doctor",
      },
      {
        chunkId: "nco-2-book",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["book"],
      },
    ],
    primaryOrders: [
      ["pro-1-my", "npe-1-doctor", "fix-1-and", "pro-2-his", "nco-2-book"],
    ],
  },
  {
    sentenceFormulaSymbol: "118a My doctor and my book",
    sentenceFormulaId: "ENG-118a",
    translations: { POL: ["POL-118a"] },
    sentenceStructure: [
      {
        chunkId: "pro-0-I-invisible",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-1-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-0-I-invisible",
      },
      {
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        // gender: ["f"],
      },
      { chunkId: "fix-1-and", chunkValue: "and" },
      {
        chunkId: "pro-2-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-0-I-invisible",
      },
      {
        chunkId: "nco-2-book",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["book"],
      },
    ],
    primaryOrders: [
      ["pro-1-my", "npe-1-doctor", "fix-1-and", "pro-2-my", "nco-2-book"],
    ],
  },
  {
    sentenceFormulaSymbol: "118b My doctor",
    sentenceFormulaId: "ENG-118b",
    translations: { POL: ["POL-118b"] },
    sentenceStructure: [
      {
        chunkId: "pro-0-I-invisible",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
        // gender: ["m"],
      },
      {
        chunkId: "pro-1-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-0-I-invisible",
      },
      {
        chunkId: "npe-1-doctor",
        gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["doctor"],
        // gender: ["f"],
      },
    ],
    primaryOrders: [["pro-1-my", "npe-1-doctor"]],
  },
  {
    sentenceFormulaSymbol: "118c My onion",
    sentenceFormulaId: "ENG-118c",
    translations: { POL: ["POL-118c"] },
    sentenceStructure: [
      {
        chunkId: "pro-0-I-invisible",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "pro-1-my",
        form: ["determiner"],
        specificLemmas: ["POSSESSIVE"],
        agreeWith: "pro-0-I-invisible",
      },
      {
        chunkId: "nco-1-onion",
        // gcase: ["nom"],
        number: ["singular"],
        specificLemmas: ["onion"],
        // gender: ["f"],
      },
    ],
    primaryOrders: [["pro-1-my", "nco-1-onion"]],
  },
  {
    sentenceFormulaSymbol: "119 Woman saw me",
    sentenceFormulaId: "ENG-119",
    translations: { POL: ["POL-119"] },
    sentenceStructure: [
      {
        chunkId: "pro-0-I-invisible",
        specificLemmas: ["PERSONAL"],
        person: ["1per"],
        number: ["singular"],
      },
      {
        chunkId: "art-1",
        // form: ["indefinite"],
        agreeWith: "npe-1-woman",
      },
      {
        chunkId: "npe-1-woman",
        // gcase: ["nom"],
        // number: ["singular"],
        specificLemmas: ["woman"],
      },
      {
        chunkId: "ver-1-see",
        // gcase: ["nom"],
        // number: ["singular"],
        specificLemmas: ["see"],
        agreeWith: ["npe-1-woman"],
      },
      {
        chunkId: "pro-1-me",
        specificLemmas: ["PERSONAL"],
        agreeWith: ["pro-0-I-invisible"],
        gcase: ["acc"],
      },
    ],
    primaryOrders: [["art-1", "npe-1-woman", "ver-1-see", "pro-1-me"]],
  },
];
