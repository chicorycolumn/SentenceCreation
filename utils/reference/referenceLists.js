const { lObjIsMGN, getWorrdtypeStCh } = require("../generalPurposeUtils");

exports.incompatibleTraitsRef = {
  POL: {
    //If we're examining gender traitKeyy.
    gender: {
      //Check the "number" traitKeyy...
      number: {
        //...and if the number traitValyyes do not include "singular", remove these values from the gender array.
        singular: ["m", "m1", "m2", "m3", "f", "n"],
        //...and if the number does not include "plural", remove these values from the gender array.
        plural: ["virile", "nonvirile"],
      },
      //Check the "person" traitKeyy...
      person: {
        //...and if the person traitValyyes do not include "3per", remove these values from the gender array.
        "3per": ["m2", "m3", "n"],
      },
    },
  },
  ENG: {
    //If we're examining gender.
    gender: {
      //Check the number...
      number: {
        //...and if the number does not include singular, remove these values from the gender array.
        singular: ["m", "f", "n"],
        ///...and if the number does not include plural, remove these values from the gender array.
        plural: ["virile", "nonvirile"],
      },
    },
  },
};

exports.metaCorrectionRef = {
  ENG: {
    gender: [
      {
        condition: { number: "singular" },
        changeRef: {
          allGenders: "allSingularGenders",
          allSingularGenders: "allSingularGenders",
          allPluralGenders: false,
          allPersonalGenders: "allPersonalSingularGenders",
          allPersonalSingularGenders: "allPersonalSingularGenders",
          allPersonalPluralGenders: false,
        },
      },
      {
        condition: { number: "plural" },
        changeRef: {
          allGenders: "allPluralGenders",
          allSingularGenders: false,
          allPluralGenders: "allPluralGenders",
          allPersonalGenders: "allPersonalPluralGenders",
          allPersonalSingularGenders: false,
          allPersonalPluralGenders: "allPersonalPluralGenders",
        },
      },
    ],
  },
  POL: {
    gender: [
      {
        condition: { number: "singular" },
        changeRef: {
          allGenders: "allSingularGenders",
          allSingularGenders: "allSingularGenders",
          allPluralGenders: false,
          allPersonalGenders: "allPersonalSingularGenders",
          allPersonalSingularGenders: "allPersonalSingularGenders",
          allPersonalPluralGenders: false,
        },
      },
      {
        condition: { number: "plural" },
        changeRef: {
          allGenders: "allPluralGenders",
          allSingularGenders: false,
          allPluralGenders: "allPluralGenders",
          allPersonalGenders: "allPersonalPluralGenders",
          allPersonalSingularGenders: false,
          allPersonalPluralGenders: "allPersonalPluralGenders",
        },
      },
    ],
  },
};

exports.metaTraitValyyes = {
  ENG: {
    gender: {
      allGenders: ["m", "n", "f", "virile", "nonvirile"],
      allSingularGenders: ["m", "f", "n"],
      allPluralGenders: ["virile", "nonvirile"],
      allPersonalGenders: ["m", "f", "virile", "nonvirile"],
      allPersonalSingularGenders: ["m", "f"],
      allPersonalPluralGenders: ["virile", "nonvirile"],
    },
    // form: { pronounAndDeterminer: ["pronoun", "determiner"] },
  },
  POL: {
    gender: {
      allGenders: [
        "m1",
        "m2",
        "m3",
        "n",
        "n",
        "n",
        "f",
        "f",
        "f",
        "virile",
        "virile",
        "virile",
        "nonvirile",
        "nonvirile",
        "nonvirile",
      ],
      allSingularGenders: ["m1", "m2", "m3", "f", "f", "f", "n", "n", "n"],
      allPluralGenders: ["virile", "nonvirile"],
      allPersonalGenders: ["m1", "f", "virile", "nonvirile"],
      allPersonalSingularGenders: ["m1", "f"],
      allPersonalPluralGenders: ["virile", "nonvirile"],
      //
      allSingularGendersExcludingNeuter: ["m1", "m2", "m3", "f", "f", "f"],
      allMasculineSingularGenders: ["m1", "m2", "m3"],
    },
    form: { pronounAndDeterminer: ["pronoun", "determiner"] },
  },
};

exports.lemmaObjectTraitKeyys = {
  POL: {
    selectors: {
      noun: ["gender"],
      "noun-common": ["gender"],
      "noun-person": ["gender"],
      "noun-proper": ["gender"],
      verb: ["aspect"],
    },
    hybridSelectors: {
      verb: ["tenseDescription"],
    },
    inflectionChains: {
      noun: ["number", "gcase"],
      "noun-common": ["number", "gcase"],
      "noun-person": ["number", "gcase"],
      "noun-proper": ["number", "gcase"],
      adjective: ["form", "number", "gender", "gcase"],
      verb: ["form", "tense", "person", "number", "gender"],
      pronoun: ["form", "person", "number", "gender", "gcase"],
      //MASSACHEUSETTS
      // pronounPERSONAL: ["form", "person", "number", "gender", "gcase"],
      // pronounPOSSESSIVE: ["form", "person", "number", "gender", "number", "gender", "gcase"],
      // article: NONE
      preposition: ["form"],
    },
    inheritableInflectionKeyys: {
      "noun-common": ["number", "gcase"],
      "noun-person": ["number", "gcase", "gender"], //BOSTON0
      "noun-proper": ["number", "gcase"],
      adjective: ["number", "gender", "gcase"],
      verb: [
        "tense",
        "person",
        "number",
        "gender",
        "aspect",
        "tenseDescription",
      ],
      pronoun: ["person", "number", "gender", "gcase"],
    },
    allowableTransfersFromQuestionStructure: {
      noun: ["number"], //boston-?
      adjective: ["form", "number", "gender"],
      verb: ["tenseDescription", "person", "number", "gender"],
      pronoun: ["person", "number", "gender"],
      preposition: [],
    },
    allowableExtraClarifiersInSingleWordSentences: {
      noun: ["gcase"],
      adjective: [],
      verb: [],
      pronoun: [],
    },
  },
  ENG: {
    selectors: { noun: ["gender"] },
    hybridSelectors: {
      verb: ["tenseDescription"],
    },
    inflectionChains: {
      noun: ["number", "gcase"],
      adjective: ["form"],
      verb: ["form", "tense", "person", "number"],
      pronoun: ["form", "person", "number", "gender", "gcase"],
      article: ["form", "number"],
      preposition: ["form"],
    },
    inheritableInflectionKeyys: {
      "noun-common": ["number", "gcase"],
      "noun-person": ["number", "gcase", "gender"],
      "noun-proper": ["number", "gcase"],
      adjective: [],
      verb: ["tense", "person", "number"],
      pronoun: ["person", "number", "gender", "gcase"],
      article: ["number"],
    },
    allowableTransfersFromQuestionStructure: {
      noun: ["number"], //boston-?
      adjective: ["form"],
      verb: ["tenseDescription", "person", "number", "gender"],
      pronoun: ["form", "person", "number", "gender"],
      article: [],
      preposition: [],
    },
    allowableExtraClarifiersInSingleWordSentences: {
      noun: [],
      adjective: [],
      verb: [],
      pronoun: [],
    },
  },
};

exports.structureChunkTraits = {
  ALL: {
    //
    //
    //    These stCh traits require validation that given traitValyyes are okay.
    //
    //
    preventAddingFurtherClarifiers: { expectedTypeOnStCh: "boolean" },
    pleaseShowMultipleWordtypeAllohomClarifiers: {
      expectedTypeOnStCh: "boolean",
      needsNoValidation: true,
    },
    educatorBlocksAnnotationsForTheseTraitKeyys: {
      expectedTypeOnStCh: "array",
      ultimatelyMultipleValuesOkay: true,
      needsNoValidation: true,
    },
    formulaImportantTraitKeyys: {
      expectedTypeOnStCh: "array",
      ultimatelyMultipleValuesOkay: true,
      needsNoValidation: true,
    },
    counterfactuallyImportantTraitKeyys: {
      expectedTypeOnStCh: "array",
      ultimatelyMultipleValuesOkay: true,
    },
    dontSpecifyOnThisChunk: { expectedTypeOnStCh: "boolean" },
    specificLemmas: { expectedTypeOnStCh: "array" },
    specificIds: { expectedTypeOnStCh: "array" },
    andTags: {
      expectedTypeOnStCh: "array",
      ultimatelyMultipleValuesOkay: true,
    },
    orTags: { expectedTypeOnStCh: "array", ultimatelyMultipleValuesOkay: true },
    form: { expectedTypeOnStCh: "array" },
    chunkId: { expectedTypeOnStCh: "string" },
    preferredChoicesForQuestionSentence: {
      expectedTypeOnStCh: "keyValueObject",
    },
    // wordtype: {
    //   expectedTypeOnStCh: "string",
    //   possibleTraitValyyes: [
    //     "noun",
    //     "adjective",
    //     "verb",
    //     "adverb",
    //     "pronoun",
    //     "preposition",
    //     "article",
    //     "fixed",
    //   ],
    // },
    agreeWith: {
      expectedTypeOnStCh: "string",
      possibleValueMustBeExistingChunkId: true,
    },
    connectedTo: {
      expectedTypeOnStCh: "string",
      possibleValueMustBeExistingChunkId: true,
    },
    value: { expectedTypeOnStCh: "string" },
  },
  POL: {
    //
    //
    //    These stCh traits require validation that given traitValyyes are okay.
    //
    //
    postHocAgreeWithPrimary: {
      expectedTypeOnStCh: "string",
      possibleValueMustBeExistingChunkId: true,
    },
    postHocAgreeWithSecondary: {
      expectedTypeOnStCh: "string",
      possibleValueMustBeExistingChunkId: true,
    },
    postHocAgreeWithTertiary: {
      expectedTypeOnStCh: "string",
      possibleValueMustBeExistingChunkId: true,
    },
    //
    //
    //    These stCh traits get validation by their possibleTraitValyyes arr.
    //
    //
    tenseDescription: {
      compatibleWordtypes: ["verb"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: [
        "past im",
        "present im",
        "future im",
        "past pf",
        "future pf",
        // "imperative",
        // "negative imperative",
        // "conditional im",
        // "conditional pf",
        // "cond0 condition",
        // "cond0 outcome",
        // "cond1 condition",
        // "cond1 outcome",
        // "cond2 condition",
        // "cond2 outcome",
        // "cond3 condition",
        // "cond3 outcome",
      ],
    },
    person: {
      compatibleWordtypes: ["noun", "verb", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["1per", "2per", "3per", "impersonal"],
    },
    gender: {
      compatibleWordtypes: ["noun", "verb", "adjective", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: [
        "m1",
        "m2",
        "m3",
        "f",
        "f",
        "f",
        "n",
        "n",
        "n",
        "virile",
        "virile",
        "virile",
        "nonvirile",
        "nonvirile",
        "nonvirile",
      ],
    },
    number: {
      compatibleWordtypes: ["noun", "verb", "adjective", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["singular", "plural"],
    },
    gcase: {
      compatibleWordtypes: ["noun", "adjective", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["nom", "gen", "dat", "acc", "ins", "loc"],
    },
    aspect: {
      compatibleWordtypes: ["verb"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["imperfective", "perfective"],
    },
    tense: {
      compatibleWordtypes: ["verb"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: [
        "past",
        "present",
        "future",
        "conditional",
        "imperative",
      ],
    },
  },
  ENG: {
    //
    //
    //    These stCh traits get validation by their possibleTraitValyyes arr.
    //
    //
    tenseDescription: {
      compatibleWordtypes: ["verb"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: [
        "past",
        "present",
        "future",
        "past simple",
        "past continuous",
        "past perfect",
        "present simple",
        "present continuous",
        "present perfect",
        "future simple",
        "future continuous",
        "future perfect",
      ],
    },
    person: {
      compatibleWordtypes: ["noun", "verb", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["1per", "2per", "3per"],
    },
    gender: {
      compatibleWordtypes: ["noun", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["m", "f", "n", "virile", "nonvirile"],
    },
    number: {
      compatibleWordtypes: ["noun", "verb", "pronoun", "article"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["singular", "plural"],
    },
    gcase: {
      compatibleWordtypes: ["noun", "pronoun"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: ["nom", "gen", "dat", "acc"],
    },
    tense: {
      compatibleWordtypes: ["verb"],
      expectedTypeOnStCh: "array",
      possibleTraitValyyes: [
        "past",
        "present",
        "future",
        "conditional",
        "imperative",
      ],
    },
  },
};

exports.uninflectedForms = {
  POL: {
    verb: [
      "contemporaryAdverbial",
      "anteriorAdverbial",
      // "activeAdjectival", Would need to be conjugated as an adjective.
      // "passiveAdjectival", Would need to be conjugated as an adjective.
    ],
  },
  ENG: {
    verb: [],
  },
};

exports.adhocInflectionCategoryys = {
  POL: {},
  ENG: { verb: ["tenseDescription"] },
};

exports.adhocForms = {
  POL: {},
  ENG: {
    verb: [
      "contemporaryAdverbial",
      "anteriorAdverbial",
      "activeAdjectival",
      "passiveAdjectival",
      "pastParticiple",
    ],
  },
};

exports.wordtypeShorthandTranslation = {
  //boston0
  nco: "noun-common",
  npe: "noun-person",
  npr: "noun-proper",
  ver: "verb",
  adj: "adjective",
  adv: "adverb",
  pro: "pronoun",
  art: "article",
  pre: "preposition",
  fix: "fixed",
};
