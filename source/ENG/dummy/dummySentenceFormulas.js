exports.dummySentenceFormulasBank = {
  dummy25a: {
    sentenceFormulaSymbol: "dummy25a good day",
    sentenceFormulaId: "ENG-dummy25a",
    translations: { POL: ["POL-dummy25a", "POL-dummy25b"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "good" },
      { chunkId: "fix-2", wordtype: "fixed", value: "day" },
    ],
    primaryOrders: [],
  },
  dummy25b: {
    sentenceFormulaSymbol: "dummy25b hello",
    sentenceFormulaId: "ENG-dummy25b",
    translations: { POL: ["POL-dummy25a", "POL-dummy25b"] },
    structure: [{ chunkId: "fix-1", wordtype: "fixed", value: "hello" }],
    primaryOrders: [],
  },
  dummy26: {
    sentenceFormulaSymbol: "dummy26",
    sentenceFormulaId: "ENG-dummy26",
    translations: { POL: ["POL-dummy26"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic2"],
        tenseDescription: [
          "past continuous",
          "future simple",
          "future perfect",
        ],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy27: {
    sentenceFormulaSymbol: "dummy27",
    sentenceFormulaId: "ENG-dummy27",
    translations: { POL: ["POL-dummy27"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: [
          "present simple",
          "present continuous",
          "future simple",
          "future perfect",
        ],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy28: {
    sentenceFormulaSymbol: "dummy28",
    sentenceFormulaId: "ENG-dummy28",
    translations: { POL: ["POL-dummy28"] },
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
  },
  dummy29: {
    sentenceFormulaSymbol: "dummy29",
    sentenceFormulaId: "ENG-dummy29",
    translations: { POL: ["POL-dummy29"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",

        andTags: ["basic3"],
        tenseDescription: [
          "present simple",
          "present continuous",
          "present perfect",
        ],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy30: {
    sentenceFormulaSymbol: "dummy30",
    sentenceFormulaId: "ENG-dummy30",
    translations: { POL: ["POL-dummy30"] },
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
  },
  dummy31: {
    sentenceFormulaSymbol: "dummy31",
    sentenceFormulaId: "ENG-dummy31",
    translations: { POL: ["POL-dummy31"] },
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
  },
  dummy33: {
    sentenceFormulaSymbol: "dummy33",
    sentenceFormulaId: "ENG-dummy33",
    translations: { POL: ["POL-dummy33"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple", "past simple"],
        person: [],
        number: [],
      },
    ],
    primaryOrders: [],
  },
  dummy33a: {
    sentenceFormulaSymbol: "dummy33a",
    sentenceFormulaId: "ENG-dummy33a",
    translations: { POL: ["POL-dummy33a"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple"],
        person: ["1per"],
        number: [],
      },
    ],
    primaryOrders: [],
  },
  dummy33b: {
    sentenceFormulaSymbol: "dummy33b I am",
    sentenceFormulaId: "ENG-dummy33b",
    translations: { POL: ["POL-dummy33b"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple", "past simple"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy33c: {
    sentenceFormulaSymbol: "dummy33c you are",
    sentenceFormulaId: "ENG-dummy33c",
    translations: { POL: ["POL-dummy33c"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "you" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple", "past simple"],
        person: ["2per"],
        number: [],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy33d: {
    sentenceFormulaSymbol: "dummy33d she is",
    sentenceFormulaId: "ENG-dummy33d",
    translations: { POL: ["POL-dummy33d"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "she" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple", "past simple"],
        person: ["3per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy33e: {
    sentenceFormulaSymbol: "dummy33e we are",
    sentenceFormulaId: "ENG-dummy33e",
    translations: { POL: ["POL-dummy33e"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "we" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple", "past simple"],
        person: ["1per"],
        number: ["plural"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy33f: {
    sentenceFormulaSymbol: "dummy33f they are",
    sentenceFormulaId: "ENG-dummy33f",
    translations: { POL: ["POL-dummy33f"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "they" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["present simple", "past simple"],
        person: ["3per"],
        number: ["plural"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy34a: {
    sentenceFormulaSymbol: "dummy34a they are",
    sentenceFormulaId: "ENG-dummy34a",
    translations: { POL: ["POL-dummy34a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: ["future simple"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy34c: {
    sentenceFormulaSymbol: "dummy34c",
    sentenceFormulaId: "ENG-dummy34c",
    translations: { POL: ["POL-dummy34c"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        number: [],
        tenseDescription: ["future"],
        person: ["1per"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy34d: {
    sentenceFormulaSymbol: "dummy34d",
    sentenceFormulaId: "ENG-dummy34d",
    translations: { POL: ["POL-dummy34d"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        tenseDescription: [],
      },
    ],
    primaryOrders: [],
  },
  dummy35: {
    sentenceFormulaSymbol: "dummy35",
    sentenceFormulaId: "ENG-dummy35",
    translations: { POL: ["POL-dummy35"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["basic3"],
        // specificLemmas: [""],
        tenseDescription: ["past simple", "future perfect"],
        person: [],
        number: [],
      },
    ],
    primaryOrders: [],
  },
  dummy36: {
    sentenceFormulaSymbol: "dummy36",
    sentenceFormulaId: "ENG-dummy36",
    translations: { POL: ["POL-dummy36"] },
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        andTags: ["farmyard"],
        // specificLemmas: [""],
        // number: ["singular"],
      },
    ],
    primaryOrders: [],
  },
  dummy37: {
    sentenceFormulaSymbol: "dummy37",
    sentenceFormulaId: "ENG-dummy37",
    translations: { POL: ["POL-dummy37"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        // andTags: ["farmyard"],
        specificLemmas: ["be"],
        number: ["singular"],
        tenseDescription: ["present simple"],
        person: ["2per"],
        // nixedClarifiers: ["person"],
      },
    ],
    primaryOrders: [],
  },
  dummy38: {
    sentenceFormulaSymbol: "dummy38",
    sentenceFormulaId: "ENG-dummy38",
    translations: { POL: ["POL-dummy38"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        // specificLemmas: ["read"],
        andTags: ["basic2"],
        number: ["singular"],
        tenseDescription: ["present simple", "past simple"],
        person: ["1per"],
        // nixedClarifiers: ["person"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy39: {
    sentenceFormulaSymbol: "dummy39",
    sentenceFormulaId: "ENG-dummy39",
    translations: { POL: ["POL-dummy39"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "you" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["be"],
        number: [],
        tenseDescription: ["present simple"],
        person: ["2per"],
        // nixedClarifiers: ["person"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy40: {
    sentenceFormulaSymbol: "dummy40",
    sentenceFormulaId: "ENG-dummy40",
    translations: { POL: ["POL-dummy40"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "you" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["basic3"],
        number: [],
        tenseDescription: ["present simple"],
        person: ["2per"],
        // nixedClarifiers: ["person"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy41: {
    sentenceFormulaSymbol: "dummy41",
    sentenceFormulaId: "ENG-dummy41",
    translations: { POL: ["POL-dummy41"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "you" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["basic3"],
        number: [],
        tenseDescription: ["past simple"],
        person: ["2per"],
        // nixedClarifiers: ["person"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy42: {
    sentenceFormulaSymbol: "dummy42",
    sentenceFormulaId: "ENG-dummy42",
    translations: { POL: ["POL-dummy42"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "you" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["basic3"],
        number: [],
        tenseDescription: ["future continuous"],
        person: ["2per"],
        // nixedClarifiers: ["person"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy43: {
    sentenceFormulaSymbol: "dummy43",
    sentenceFormulaId: "ENG-dummy43",
    translations: { POL: ["POL-dummy43"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "a" },
      {
        chunkId: "adj-1",
        agreeWith: "nou-1",
        wordtype: "adjective",
        andTags: ["size"],
        form: ["simple"],
      },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        // specificLemmas: ["nut"],
        andTags: ["allohomTesting"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "adj-1", "nou-1"]],
  },
  dummy45a: {
    sentenceFormulaSymbol: "dummy45a",
    sentenceFormulaId: "ENG-dummy45a",
    translations: { POL: ["POL-dummy45a"] },
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        andTags: ["allohomTesting2"],
        number: ["singular"],
        pleaseShowMultipleWordtypeAllohomClarifiers: true, //Because this is a sentence of only one word, so could be ambiguous.
      },
    ],
    primaryOrders: [],
  },
  dummy45b: {
    sentenceFormulaSymbol: "dummy45b",
    sentenceFormulaId: "ENG-dummy45b",
    translations: { POL: ["POL-dummy45b"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["allohomTesting2"],
        form: ["infinitive"],
        pleaseShowMultipleWordtypeAllohomClarifiers: true, //Because this is a sentence of only one word, so could be ambiguous.
      },
    ],
    primaryOrders: [],
  },
  dummy45c: {
    sentenceFormulaSymbol: "dummy45c",
    sentenceFormulaId: "ENG-dummy45c",
    translations: { POL: ["POL-dummy45b"] }, //Yes, this does point from c to b. It's fine...
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["allohomTesting2"],
        form: ["infinitive"],
        // pleaseShowMultipleWordtypeAllohomClarifiers: true, // ...because I'm checking I can unrequest this.
      },
    ],
    primaryOrders: [],
  },
  dummy46a: {
    sentenceFormulaSymbol: "dummy46a",
    sentenceFormulaId: "ENG-dummy46a",
    translations: { POL: ["POL-dummy46a"] },
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        andTags: ["allohomTesting3"],
        number: ["singular"],
        // pleaseShowMultipleWordtypeAllohomClarifiers: true,
      },
    ],
    primaryOrders: [],
  },
  dummy46b: {
    sentenceFormulaSymbol: "dummy46b",
    sentenceFormulaId: "ENG-dummy46b",
    translations: { POL: ["POL-dummy46a"] }, //Yes, this does indeed point from b to a...
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        andTags: ["allohomTesting3"],
        number: ["singular"],
        pleaseShowMultipleWordtypeAllohomClarifiers: true, // ...because I'm just testing this.
      },
    ],
    primaryOrders: [],
  },
  dummy46c: {
    sentenceFormulaSymbol: "dummy46c",
    sentenceFormulaId: "ENG-dummy46c",
    translations: { POL: ["POL-dummy46c"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["allohomTesting3"],
        form: ["infinitive"],
        // pleaseShowMultipleWordtypeAllohomClarifiers: true,
      },
    ],
    primaryOrders: [],
  },
  dummy46d: {
    sentenceFormulaSymbol: "dummy46d",
    sentenceFormulaId: "ENG-dummy46d",
    translations: { POL: ["POL-dummy46c"] }, //Yes, this does indeed point from d to c...
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        andTags: ["allohomTesting3"],
        form: ["infinitive"],
        pleaseShowMultipleWordtypeAllohomClarifiers: true, // ...because I'm just testing this.
      },
    ],
    primaryOrders: [],
  },
  dummy53: {
    sentenceFormulaSymbol: "dummy53",
    sentenceFormulaId: "ENG-dummy53",
    translations: { POL: ["POL-dummy53"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple", "past simple"],
        person: [],
        number: [],
      },
    ],
    primaryOrders: [],
  },
  dummy53a: {
    sentenceFormulaSymbol: "dummy53a",
    sentenceFormulaId: "ENG-dummy53a",
    translations: { POL: ["POL-dummy53a"] },
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple"],
        person: ["1per"],
        number: [],
      },
    ],
    primaryOrders: [],
  },
  dummy53b: {
    sentenceFormulaSymbol: "dummy53b I am",
    sentenceFormulaId: "ENG-dummy53b",
    translations: { POL: ["POL-dummy53b"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple", "past simple"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy53c: {
    sentenceFormulaSymbol: "dummy53c you are",
    sentenceFormulaId: "ENG-dummy53c",
    translations: { POL: ["POL-dummy53c"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "you" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple", "past simple"],
        person: ["2per"],
        number: [],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy53d: {
    sentenceFormulaSymbol: "dummy53d she is",
    sentenceFormulaId: "ENG-dummy53d",
    translations: { POL: ["POL-dummy53d"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "she" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple", "past simple"],
        person: ["3per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy53e: {
    sentenceFormulaSymbol: "dummy53e we are",
    sentenceFormulaId: "ENG-dummy53e",
    translations: { POL: ["POL-dummy53e"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "we" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple", "past simple"],
        person: ["1per"],
        number: ["plural"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy53f: {
    sentenceFormulaSymbol: "dummy53f they are",
    sentenceFormulaId: "ENG-dummy53f",
    translations: { POL: ["POL-dummy53f"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "they" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["present simple", "past simple"],
        person: ["3per"],
        number: ["plural"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy54a: {
    sentenceFormulaSymbol: "dummy54a they are",
    sentenceFormulaId: "ENG-dummy54a",
    translations: { POL: ["POL-dummy54a"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        tenseDescription: ["future simple"],
        person: ["1per"],
        number: ["singular"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
  dummy54c: {
    sentenceFormulaSymbol: "dummy54c",
    sentenceFormulaId: "ENG-dummy54c",
    translations: { POL: ["POL-dummy54c"] },
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "I" },
      {
        chunkId: "ver-1",
        wordtype: "verb",
        specificLemmas: ["have"],
        number: [],
        tenseDescription: ["future"],
        person: ["1per"],
      },
    ],
    primaryOrders: [["fix-1", "ver-1"]],
  },
};
