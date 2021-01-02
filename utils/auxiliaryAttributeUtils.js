const gpUtils = require("./generalPurposeUtils.js");
const scUtils = require("./sentenceCreatingUtils.js");
const otUtils = require("../utils/objectTraversingUtils.js");
const refObj = require("./referenceObjects.js");
const { head } = require("../app.js");

exports.addSpecifiers = (
  answerSentenceFormula,
  questionOutputArr,
  languagesObj
) => {
  //STEP ZERO: Getting materials

  let answerSentenceStructure = answerSentenceFormula.sentenceStructure;
  let questionSentenceStructure = questionOutputArr.map(
    (outputUnit) => outputUnit.structureChunk
  );

  let { answerLanguage, questionLanguage } = languagesObj;

  let {
    answerHeadChunks,
    answerDependentChunks,
    answerOtherChunks,
    questionHeadChunks,
    questionDependentChunks,
    questionOtherChunks,
  } = sortAnswerAndQuestionStructureChunks(
    questionSentenceStructure,
    answerSentenceStructure
  );

  /**
   * We have the A sentStructure, and the Q sentStructure,
   * as well as the Q lObjs for each Q stCh.
   *
   * For each Q stCh, we will get ready:
   *  --Q stCh
   *  --Q headChunk if present
   *  --A stCh
   *  --A headChunk if present
   *
   * Get the requestedSpecifiers by the A lang and the A stCh wordtype.
   *
   * if every featureConditionsOfSelf is fulfilled by A stCh,
   * and every featureConditionsOfHead is fulfilled by any of A stCh or A headCh.
   *
   * and if neither A stCh/headCh has the action feature
   *
   * then put that action feature on the A stCh, and note it in annotations of Q stCh.
   */

  const sortAnswerAndQuestionStructureChunks = (
    questionSentenceStructure,
    answerSentenceStructure
  ) => {
    let responseObj = {
      answerHeadChunks: null,
      answerDependentChunks: null,
      answerOtherChunks: null,
      questionHeadChunks: null,
      questionDependentChunks: null,
      questionOtherChunks: null,
    };

    if (true) {
      let {
        headChunks,
        dependentChunks,
        otherChunks,
      } = scUtils.sortStructureChunks(answerSentenceStructure);

      responseObj.answerHeadChunks = headChunks;
      responseObj.answerDependentChunks = dependentChunks;
      responseObj.answerOtherChunks = otherChunks;
    }

    if (true) {
      let {
        headChunks,
        dependentChunks,
        otherChunks,
      } = scUtils.sortStructureChunks(questionSentenceStructure);

      responseObj.questionHeadChunks = headChunks;
      responseObj.questionDependentChunks = dependentChunks;
      responseObj.questionOtherChunks = otherChunks;
    }

    return responseObj;
  };

  questionHeadChunks.forEach((questionHeadChunk) => {
    let answerHeadChunk = answerHeadChunks.find(
      (chunk) => chunk.chunkId === questionHeadChunk.chunkId
    );

    if (!questionHeadChunk.annotations) {
      questionHeadChunk.annotations = {};
    }

    let requestedSpecifierInstructionsArr =
      refObj.requestedSpecifiersNew[answerLanguage][answerHeadChunk.wordtype];

    if (!requestedSpecifierInstructionsArr) {
      console.log("RETURN! No requestedSpecifierInstructionsArr.");
      return;
    }
  });

  //STEP ONE: Adding requested Specifiers

  requestedSpecifierInstructionsArr.forEach(
    (requestedSpecifierInstructions) => {
      if (
        //If answerChunk fits the conditions...
        //(also check its headChunk)
        Object.keys(
          requestedSpecifierInstructions.featureConditionsOfSelf
        ).every((featureKey) => {
          let featureValues =
            requestedSpecifierInstructions.featureConditionsOfSelf[featureKey];

          return featureValues.some((featureValue) =>
            answerStructureChunk[featureKey].includes(featureValue)
          );
        }) &&
        Object.keys(
          requestedSpecifierInstructions.featureConditionsOfSelf
        ).every((featureKey) => {
          let featureValues =
            requestedSpecifierInstructions.featureConditionsOfSelf[featureKey];

          return featureValues.some(
            (featureValue) =>
              (answerStructureChunk[featureKey] &&
                answerStructureChunk[featureKey].includes(featureValue)) ||
              (answerHeadChunk &&
                answerHeadChunk[featureKey] &&
                answerHeadChunk[featureKey].includes(featureValue))
          );
        })
      ) {
        //...hard change the answerChunk's features and note them in questionChunk's annotations.
        Object.keys(requestedSpecifierInstructions.featureActions).forEach(
          (featureActionKey) => {
            let featureActionValues =
              requestedSpecifierInstructions.featureActions[featureActionKey];

            let featureActionValue = gpUtils.selectRandom(featureActionValues);

            answerStructureChunk[featureActionKey] = [featureActionValue];
            if (!questionStructureChunk.annotations) {
              questionStructureChunk.annotations = {};
            }

            questionStructureChunk.annotations[
              featureActionKey
            ] = featureActionValue;
          }
        );
      }
    }
  );
};

exports.addClarifiers = (arrayOfOutputUnits, languagesObj) => {
  let { answerLanguage, questionLanguage } = languagesObj;

  if (!answerLanguage) {
    throw "OT:addClarifiers says Did you mean to call me? You didn't give me an answerLanguage argument. I am only supposed to add clarifiers to the question sentence, and in order to do that I must know what the answerLanguage is going to be.";
  }

  const langUtils = require("../source/" + questionLanguage + "/langUtils.js");

  arrayOfOutputUnits.forEach((outputUnit) => {
    if (outputUnit.structureChunk.wordtype === "fixed") {
      return;
    }

    let {
      selectedLemmaObject,
      drillPath,
      structureChunk,
      selectedWord,
    } = outputUnit;

    if (!structureChunk.annotations) {
      structureChunk.annotations = {};
    }
    //
    //console.log(outputUnit)
    //
    // {
    //   selectedLemmaObject: {
    //     translations: { ENG: [Array], POL: [Array] },
    //     tags: [ 'animate', 'animal', 'farmyard', 'concrete' ],
    //     lemma: 'sheep',
    //     id: 'eng-nou-008',
    //     gender: 'n',
    //
    //     inflections: { singular: [Object], plural: [Object] }
    //   },
    //   selectedWord: 'sheep',
    //   drillPath: [ [ 'number', 'plural' ], [ 'gcase', 'nom' ] ],
    //   structureChunk: {
    //     chunkId: 'nou-1',
    //     wordtype: 'noun',
    //     andTags: [ 'farmyard' ],
    //     gcase: [ 'nom' ],
    //     number: [ 'plural' ]
    //   }
    // }

    //STEP ONE: Type 1 Allohomographs (get clarifiers from lObj)
    //
    //  Textmoji Clarifiers
    //  Wordtype Clarifiers
    //
    //          STEP 1A: singleWordtype - Textmoji clarifiers

    let { allohomInfo } = selectedLemmaObject;

    if (allohomInfo && allohomInfo.singleWordtype) {
      if (!allohomInfo.emoji || !allohomInfo.text) {
        throw (
          "Lemma object '" +
          selectedLemmaObject.id +
          "' was marked as singleWordtype but not Textmoji Clarifiers were present!"
        );
      }

      let { emoji, text } = allohomInfo;

      structureChunk.annotations.emoji = emoji;
      structureChunk.annotations.text = text;
    }

    //          STEP 1B: multipleWordtype - Wordtype clarifiers

    if (allohomInfo && allohomInfo.multipleWordtype) {
      if (structureChunk.pleaseShowMultipleWordtypeAllohomClarifiers) {
        structureChunk.annotations.wordtype = gpUtils.getWordtypeFromLemmaObject(
          selectedLemmaObject
        );
      }
    }

    //STEP TWO: Types 2-6 Synhomographs (language-specific)
    //
    //  Feature Clarifiers
    //
    //eg ENG has some verbs with v1-v2 synhomography, and 2per ambiguous re number.

    langUtils.addLanguageParticularClarifiers(
      structureChunk,
      questionLanguage,
      selectedLemmaObject
    );

    //STEP THREE: Type 1 Synhomographs (find synhoms in lobj programmatically)
    //
    //  Feature Clarifiers
    //
    //Find synhoms, add Feature Clarifiers if such clarifiers are allowed.
    let allowableClarifiers =
      refObj.lemmaObjectFeatures[answerLanguage]
        .allowableTransfersFromQuestionStructure[structureChunk.wordtype];

    console.log("The allowableClarifiers are as follows", allowableClarifiers);

    //allowableClarifiers. Any clarifiers not in here, don't bother adding them.
    //We're looking ahead to the answerLanguage, and thinking, hmmmmm, well right now the questionLanguage
    //is POL, and soon the answerLanguage will be ENG. And looking it up... ENG doesn't allow "gender" as a transfer.
    //So from that, we can surmise that ENG doesn't care about gender, and thus, won't want it as a clarifer on the POL Q sentence.

    if (!structureChunk.preventAddingClarifiers) {
      let synhomographData = otUtils.findSynhomographs(
        selectedLemmaObject,
        structureChunk,
        questionLanguage
      );

      if (synhomographData) {
        synhomographData.synhomographs.forEach((synhomDataUnit) => {
          if (selectedWord === synhomDataUnit.terminalValue) {
            //
            // console.log(synhomDataUnit);
            //
            // {
            //   terminalValue: 'sheep',
            //   inflectionPaths: [ [ 'singular', 'nom' ], [ 'plural', 'nom' ] ],
            //   labelsWhereTheyDiffer: [ 'number' ]
            // }

            let labelsWhereTheyDiffer = synhomDataUnit.labelsWhereTheyDiffer.filter(
              (label) => allowableClarifiers.includes(label)
            );

            labelsWhereTheyDiffer.forEach((label) => {
              structureChunk.annotations[label] = structureChunk[label];
            });
          }
        });
      }
    } else {
      console.log("I was told not to add any further clarifiers!");
    }
  });

  // aaUtils.attachAnnotations(arrayOfOutputUnits);

  gpUtils.consoleLogObjectAtTwoLevels(arrayOfOutputUnits);
};

exports.attachAnnotations = (arrayOfOutputUnits, languagesObj) => {
  let { answerLanguage, questionLanguage } = languagesObj;

  arrayOfOutputUnits.forEach((outputUnit) => {
    let { structureChunk, selectedLemmaObject } = outputUnit;

    if (
      structureChunk.annotations &&
      Object.keys(structureChunk.annotations).length
    ) {
      let formattedAnnotationArr = Object.keys(structureChunk.annotations).map(
        (annotationKey) => {
          let annotationValue = structureChunk.annotations[annotationKey];

          if (answerLanguage === "POL" && annotationKey === "gender") {
            const POLgenderToPlainEnglishRef = {
              m1: "male",
              m2: "male",
              m3: "male",
              f: "female",
              n: "neuter",
            };

            return POLgenderToPlainEnglishRef[annotationValue];
          } else {
            return annotationValue;
          }
        }
      );
      outputUnit.selectedWord += ` (${formattedAnnotationArr.join(", ")})`;
    }
  });
};
