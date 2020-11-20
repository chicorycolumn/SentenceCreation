const level01 = {
  dummy01: {
    symbol: "dummy01",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["nonexistent tag"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
    ],
  },
  dummy02: {
    symbol: "dummy02",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: [],
        optTags: [],
        gcase: ["nonexistent gcase"],
        number: [],
        gender: [],
      },
    ],
  },
  dummy03: {
    symbol: "dummy03",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy"],
        optTags: [],
        gcase: ["nom"],
        number: [],
        gender: [],
      },
    ],
  },
  dummy04: {
    symbol: "dummy04",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular", "plural"],
        gender: [],
      },
    ],
  },
  dummy05: {
    symbol: "dummy05",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy"],
        optTags: [],
        gcase: ["nom", "loc"],
        number: [],
        gender: [],
      },
    ],
  },
  dummy06: {
    symbol: "dummy06",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy"],
        optTags: [],
        gcase: ["ins"],
        number: [],
        gender: [],
      },
    ],
  },
  dummy07: {
    symbol: "dummy07",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy2"],
        optTags: [],
        gcase: ["loc"],
        number: ["singular"],
        gender: [],
      },
    ],
  },
  dummy08: {
    symbol: "dummy08",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy3"],
        optTags: [],
        gcase: ["loc"],
        number: ["singular"],
        gender: [],
      },
    ],
  },
  dummy09: {
    symbol: "dummy09",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["foobar-A"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
      {
        chunkId: "nou-2",
        wordtype: "noun",
        manTags: ["foobar-B"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
      {
        chunkId: "nou-3",
        wordtype: "noun",
        manTags: ["foobar-C"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
    ],
    primaryOrders: [["nou-1", "nou-3", "nou-2"]],
    additionalOrders: [
      ["nou-1", "nou-2", "nou-3"],
      ["nou-2", "nou-1", "nou-3"],
      ["nou-2", "nou-3", "nou-1"],
    ],
  },
  dummy10: {
    symbol: "dummy10",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["foobar-A"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
      {
        chunkId: "nou-2",
        wordtype: "noun",
        manTags: ["foobar-B"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
      {
        chunkId: "nou-3",
        wordtype: "noun",
        manTags: ["foobar-C"],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
      },
    ],
    primaryOrders: [
      ["nou-1", "nou-3", "nou-2"],
      ["nou-1", "nou-2", "nou-3"],
      ["nou-2", "nou-1", "nou-3"],
      ["nou-2", "nou-3", "nou-1"],
    ],
    additionalOrders: [],
  },
  dummy11: {
    symbol: "I have APPLE",
    structure: [
      { chunkId: "fix-1", wordtype: "fixed", value: "mam" },
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: [],
        optTags: [],
        gcase: ["nom"],
        number: ["singular"],
        gender: [],
        specificLemmas: ["jabłko"], //This overrides tags and selectRandom. But still conjugates for features.
      },
    ],
    primaryOrders: [["fix-1", "nou-1"]],
    additionalOrders: [],
  },
  dummy12: {
    symbol: "shirt",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["wearable"],
        optTags: [],
        gcase: ["nom"],
        number: [],
        gender: [],
      },
    ],
  },
  dummy12: {
    symbol: "dummy12 2per",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["verb"],
        person: ["2per"],
      },
    ],
  },
  dummy13: {
    symbol: "dummy13 conditional plural",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["verb"],
        tense: ["conditional"],
        number: ["plural"],
      },
    ],
  },
  dummy14: {
    symbol: "dummy14 infinitive",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["infinitive"],
      },
    ],
  },
  dummy15: {
    symbol: "dummy15 impersonal",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["verb"],
        person: ["impersonal"],
      },
    ],
  },
  dummy16: {
    symbol: "dummy16 participle",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["participle"],
      },
    ],
  },
  dummy17: {
    symbol: "dummy17 participle female",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["participle"],
        gender: ["f"],
      },
    ],
  },
  dummy18: {
    symbol: "dummy18",
    structure: [
      {
        chunkId: "nou-1",
        wordtype: "noun",
        manTags: ["dummy-nou-010"],
        optTags: [],
        number: ["singular", "plural"],
        gcase: ["acc"],
      },
    ],
  },
  dummy19: {
    symbol: "dummy19 participle f nonvirile",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        gender: ["f", "nonvirile"],
        form: ["participle"],
      },
    ],
  },
  dummy20: {
    symbol: "dummy20 participle n virile",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        gender: ["n", "virile"],
        form: ["participle"],
      },
    ],
  },
  dummy20a: {
    symbol: "dummy20a participle n virile 2per",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        gender: ["n", "virile"],
        person: ["2per"],
        form: ["participle"],
      },
    ],
  },
  dummy21: {
    symbol: "dummy21 verbalNoun",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["verbalNoun"],
      },
    ],
  },
  dummy22: {
    symbol: "dummy22 verbalNoun ~f",
    structure: [
      {
        chunkId: "ver-1",
        wordtype: "verb",
        manTags: [],
        optTags: [],
        form: ["verbalNoun"],
        gender: ["f"],
      },
    ],
  },
};

exports.dummySentenceFormulasBank = { level01 };
