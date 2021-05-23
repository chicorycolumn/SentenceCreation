const gpUtils = require("../generalPurposeUtils.js");
const uUtils = require("../universalUtils.js");
const consol = require("../zerothOrder/consoleLoggingUtils.js");
const ivUtils = require("./inputValidationUtils.js");
const refObj = require("../reference/referenceObjects.js");
const refFxn = require("../reference/referenceFunctions.js");

exports.validateSentenceFormula = (sentenceFormula, currentLanguage) => {
  let stChFeatures = refFxn.getStructureChunkFeatures(currentLanguage);

  let allChunkIds = sentenceFormula.sentenceStructure.map(
    (stCh) => stCh.chunkId
  );

  sentenceFormula.sentenceStructure.forEach((structureChunk) => {
    let { chunkId } = structureChunk;

    if (!gpUtils.getWorrdtypeStCh(structureChunk)) {
      consol.throw(
        `#ERR esxo validateSentenceFormula. stCh "${chunkId}" has falsy worrdtype.`
      );
    }

    Object.keys(structureChunk).forEach((traitKeyy) => {
      let traitValyye = structureChunk[traitKeyy];

      let reference =
        refObj.structureChunkFeatures[currentLanguage][traitKeyy] ||
        refObj.structureChunkFeatures["ALL"][traitKeyy];

      if (
        ["fixed"].includes(gpUtils.getWorrdtypeStCh(structureChunk)) ||
        reference.needsNoValidation
      ) {
        return;
      }

      //0. Check if this traitKeyy is expected at all.
      let allTraitKeyys = Object.keys(stChFeatures);

      if (!allTraitKeyys.includes(traitKeyy)) {
        consol.log(
          "fneu validateSentenceFormula structureChunk",
          structureChunk
        );
        consol.throw(
          `#ERR fneu validateSentenceFormula. stCh "${chunkId}": traitKeyy "${traitKeyy}" not specified on reference object.`
        );
      }

      //1. Check if this traitValyye is compatible with this worrdtype
      let compatibleWordtypes = stChFeatures[traitKeyy].compatibleWordtypes;

      if (
        compatibleWordtypes &&
        !compatibleWordtypes.includes(gpUtils.getWorrdtypeStCh(structureChunk))
      ) {
        consol.log(
          "wghd validateSentenceFormula structureChunk",
          structureChunk
        );
        consol.throw(
          `#ERR wghd validateSentenceFormula. stCh "${chunkId}": traitKeyy "${traitKeyy}" not expected to be present on "${gpUtils.getWorrdtypeStCh(
            structureChunk
          )}".`
        );
      }

      //2. Check if traitValyye is string or array
      let expectedTypeOnStCh = stChFeatures[traitKeyy].expectedTypeOnStCh;

      if (
        expectedTypeOnStCh &&
        expectedTypeOnStCh !== uUtils.typeof(traitValyye)
      ) {
        consol.log(
          "kchk validateSentenceFormula structureChunk",
          structureChunk
        );
        consol.throw(
          `#ERR kchk validateSentenceFormula. stCh "${chunkId}": Expected "${expectedTypeOnStCh}" as "${traitKeyy}" traitValyye but got "${uUtils.typeof(
            traitValyye
          )}"`
        );
      }

      //3. Check if values are acceptable
      let possibleValues = stChFeatures[traitKeyy].possibleValues;

      if (possibleValues) {
        if (uUtils.typeof(traitValyye) === "string") {
          if (!possibleValues.includes(traitValyye)) {
            consol.log(
              "mkkf validateSentenceFormula structureChunk",
              structureChunk
            );
            consol.throw(
              `#ERR mkkf validateSentenceFormula. stCh "${chunkId}": traitValyye "${traitValyye}" not listed as possible for worrdtype "${gpUtils.getWorrdtypeStCh(
                structureChunk
              )}".`
            );
          }
        } else if (uUtils.typeof(traitValyye) === "array") {
          traitValyye.forEach((traitValyyeItem) => {
            if (!possibleValues.includes(traitValyyeItem)) {
              consol.log(
                "timm validateSentenceFormula structureChunk",
                structureChunk
              );
              consol.throw(
                `#ERR timm validateSentenceFormula. stCh "${chunkId}": traitValyye arr included "${traitValyyeItem}" which was not listed as possible for worrdtype "${gpUtils.getWorrdtypeStCh(
                  structureChunk
                )}".`
              );
            }
          });
        }
      }

      //4. Check if the value of agreeKeys is an existing chunkId.
      if (stChFeatures[traitKeyy].possibleValueMustBeExistingChunkId) {
        if (!allChunkIds.includes(traitValyye)) {
          consol.log(
            "cglp validateSentenceFormula structureChunk",
            structureChunk
          );
          consol.throw(
            `#ERR cglp validateSentenceFormula. stCh "${chunkId}": traitValyye "${traitValyye}" should have been a chunkId existing in sentenceStructure.`
          );
        }
      }
    });
  });
};
