const { head } = require("../app.js");
const gpUtils = require("./generalPurposeUtils.js");
const otUtils = require("./objectTraversingUtils.js");
const refObj = require("./referenceObjects.js");
const lfUtils = require("./lemmaFilteringUtils.js");

exports.filterWithinSelectedLemmaObject = (
  lemmaObject,
  structureChunk,
  currentLanguage,
  kumquat,
  outputArray
) => {
  const langUtils = require("../source/" + currentLanguage + "/langUtils.js");

  //Counteract Masculinist Agenda: Overrepresentation
  if (currentLanguage === "POL") {
    langUtils.preventMasculineOverrepresentation(
      structureChunk,
      currentLanguage
    );
  }

  //STEP ZERO: Get necessary materials, ie inflectionPaths and requirementArrs.
  let PHD_type;

  refObj.postHocDependentChunkWordtypes[currentLanguage].forEach(
    (PHD_dataObj) => {
      if (
        Object.keys(PHD_dataObj.conditions).every((PHD_conditionKey) => {
          let PHD_conditionValue = PHD_dataObj.conditions[PHD_conditionKey];

          if (
            Array.isArray(PHD_conditionValue) &&
            PHD_conditionValue.every(
              (arrayItem) =>
                structureChunk[PHD_conditionKey] &&
                structureChunk[PHD_conditionKey].includes(arrayItem)
            )
          ) {
            return true;
          } else if (structureChunk[PHD_conditionKey] === PHD_conditionValue) {
            return true;
          } else {
            return false;
          }
        })
      ) {
        PHD_type = PHD_dataObj.PHD_type;
      }
    }
  );

  if (PHD_type) {
    console.log(
      "[1;35m " +
        "s11 At the START lf:filterWithin PHD section, structureChunk is:" +
        "[0m",
      structureChunk
    );

    if (
      !structureChunk.specificLemmas ||
      structureChunk.specificLemmas.length !== 1
    ) {
      throw "#ERR ----------------------> PHD-stCh should have exactly one value in specificLemmas arr.";
    }

    let postHocInflectionChains = refObj.postHocDependentChunkWordtypes[
      currentLanguage
    ].find((PHD_dataObj) => PHD_dataObj.PHD_type === PHD_type).inflectionChains;

    console.log("postHocInflectionChains", postHocInflectionChains);

    let lemmaObjectCopy = gpUtils.copyWithoutReference(lemmaObject);

    langUtils.preprocessLemmaObjectsMajor(
      [lemmaObjectCopy],
      structureChunk,
      true,
      currentLanguage
    );

    let source = gpUtils.copyWithoutReference(lemmaObjectCopy.inflections);

    Object.keys(postHocInflectionChains).forEach((postHocAgreeWithKey) => {
      console.log("[1;35m " + `Running loop for ${postHocAgreeWithKey}` + "[0m");

      let postHocInflectionChain = postHocInflectionChains[postHocAgreeWithKey];

      let headOutputUnit = outputArray.find(
        (outputUnit) =>
          outputUnit.structureChunk.chunkId ===
          structureChunk[postHocAgreeWithKey]
      );

      let drillPathForPHD = gpUtils.copyWithoutReference(
        headOutputUnit.drillPath
      );

      if (!drillPathForPHD) {
        throw "#ERR There is no drillPath on the outputUnit with which I want to get features from the PHD stCh. Perhaps this outputUnit is one whose stCh did not go through If-PW?";
      }

      if (structureChunk.form) {
        if (structureChunk.form.length !== 1) {
          throw (
            "#ERR Expected structureChunk.form to have length of 1: " +
            structureChunk.chunkId
          );
        }

        drillPathForPHD.push(["form", structureChunk.form[0]]);
      }

      if (
        gpUtils.getWordtypeOfAgreeWith(structureChunk, postHocAgreeWithKey) ===
        "noun"
      ) {
        let personArr = drillPathForPHD.find((arr) => arr[0] === "person");

        if (!personArr) {
          drillPathForPHD.push(["person", "3per"]);
        } else if (personArr && !personArr[1] === "3per") {
          personArr[1] = "3per";
        }
      }

      if (headOutputUnit.selectedLemmaObject.gender) {
        if (!drillPathForPHD.find((arr) => arr[0] === "gender")) {
          let numberArr = drillPathForPHD.find((arr) => arr[0] === "number");

          let numberValue = numberArr[1];

          let formattedFeatureValueArray = langUtils.formatFeatureValue(
            "gender",
            headOutputUnit.selectedLemmaObject.gender,
            numberValue
          );

          if (formattedFeatureValueArray.length !== 1) {
            gpUtils.throw(
              "#ERR lf:filterWithin expected formattedFeatureValueArray to have length 1"
            );
          }
          let formattedFeatureValue = formattedFeatureValueArray[0];

          drillPathForPHD.push(["gender", formattedFeatureValue]);
        } else {
          throw "I am unsure about which gender to use - either the one from lobj inherent, or the one from drillPath. I wanted to use this gender for the PHD stCh.";
        }
      }

      console.log("s13 drillPathForPHD is finally", drillPathForPHD);

      postHocInflectionChain.forEach((featureKey) => {
        let featureValue = drillPathForPHD.find(
          (arr) => arr[0] === featureKey
        )[1];

        console.log(`s14 drilling into source with ${featureValue}`);
        source = source[featureValue];

        //If this is Primary, then update stCh with these featureKeys and featureValues.
        // /.*Primary/.test(a)

        if (/.*Primary/.test(postHocAgreeWithKey)) {
          lfUtils.updateStChByInflections(
            { structureChunk, drillPath: drillPathForPHD },
            currentLanguage
          );
        }
      });
    });

    let sourceArr = [];
    let resArr = [];

    if (Array.isArray(source)) {
      sourceArr = source;
    } else if (typeof source === "string") {
      sourceArr.push(source);
    } else {
      throw "#ERR ---------------> Expected this PHD value to be the end of a chain and thus a string or array.";
    }

    sourceArr.forEach((selectedWord) => {
      resArr.push({
        errorInDrilling: false,
        selectedWordArray: [selectedWord],
        drillPath: null,
      });
    });

    if (!kumquat) {
      resArr = [gpUtils.selectRandom(resArr)];
    }

    //Okay, so, at this point, finishing the PHD section, structureChunk is like this.

    //I want to, within this section, decant the gender feature (well, all features) into arr of ONE.

    //Now let's think - from which PHDheadchunks should we take each feature?
    //In this ecxact sitation, Gender should be taken from PHDawPrimary

    // {
    //   chunkId: 'pro-2',
    //   wordtype: 'pronoun',
    //   form: [ 'determiner' ],
    //   specificLemmas: [ 'POSSESSIVE' ],
    //   postHocAgreeWithPrimary: 'pro-1',
    //   postHocAgreeWithSecondary: 'nou-1',
    //   gcase: [ 'nom' ],
    //   gender: [
    //     'm1', 'm2', 'm3',        'f','n',         'virile', 'nonvirile', 'f',...etc
    //   ]
    // }

    console.log(
      "[1;35m " +
        "s19 At the END lf:filterWithin PHD section, structureChunk is:" +
        "[0m",
      structureChunk
    );
    console.log("[1;35m " + "and resArr is" + "[0m", resArr);

    return resArr;
  }

  let inflectionChain =
    refObj.lemmaObjectFeatures[currentLanguage].inflectionChains[
      structureChunk.wordtype
    ];

  let requirementArrs = [];

  inflectionChain.forEach((key) => {
    let inflectionValueArr = [];

    if (structureChunk[key]) {
      structureChunk[key].forEach((inflectionValue) => {
        let formattedFeatureValueArr = langUtils.formatFeatureValue(
          key,
          inflectionValue
        );

        console.log(
          "filterWithinSelectedLemmaObject: formattedFeatureValueArr",
          formattedFeatureValueArr
        );

        inflectionValueArr = [
          ...inflectionValueArr,
          ...formattedFeatureValueArr,
        ];
      });
    }

    requirementArrs.push([key, inflectionValueArr]);
  });

  let errorInDrilling = false;
  let outputUnitsWithDrillPaths = [];

  let source = lemmaObject.inflections;

  lfUtils.traverseAndRecordInflections(
    source,
    requirementArrs,
    outputUnitsWithDrillPaths
  );

  if (!outputUnitsWithDrillPaths || !outputUnitsWithDrillPaths.length) {
    console.log(
      "[1;31m " +
        "#ERR --------------------------------------> traverseAndRecordInflections returned FALSY for " +
        structureChunk.chunkId +
        " in " +
        currentLanguage +
        "[0m"
    );

    console.log({ outputUnitsWithDrillPaths });
    errorInDrilling = true;
    return false;
  }

  if (kumquat) {
    outputUnitsWithDrillPaths.forEach((selectedPath) => {
      selectedPath.errorInDrilling = errorInDrilling;
    });

    return outputUnitsWithDrillPaths;
  } else {
    let selectedPath = gpUtils.selectRandom(outputUnitsWithDrillPaths);

    let { selectedWordArray, drillPath } = selectedPath;

    return [
      {
        errorInDrilling,
        selectedWordArray,
        drillPath,
      },
    ];
  }
};

exports.updateStructureChunkByAdhocOnly = (structureChunk, label, value) => {
  structureChunk[label] = [value];
};

exports.updateStructureChunk = (outputUnit, currentLanguage) => {
  let shouldConsoleLog = false;

  if (shouldConsoleLog) {
    console.log(
      "[1;33m " +
        `updateStructureChunk ${outputUnit.structureChunk.chunkId} ${outputUnit.selectedWord} ---------------------------` +
        "[0m"
    );

    console.log(
      "BEFORE UB-Inf and UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );
  }

  lfUtils.updateStChByInflections(outputUnit, currentLanguage);

  if (shouldConsoleLog) {
    console.log(
      "AFTER UB-Inf but BEFORE UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );
  }

  lfUtils.updateStChByAndTagsAndSelectors(outputUnit, currentLanguage);

  if (shouldConsoleLog) {
    console.log(
      "AFTER UB-Inf and UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );

    console.log(
      "[1;33m " + `/updateStructureChunk ${outputUnit.structureChunk.chunkId}` + "[0m"
    );
    console.log(" ");
  }
};

exports.updateStChByAndTagsAndSelectors = (outputUnit, currentLanguage) => {
  let {
    selectedLemmaObject,
    structureChunk,
    selectedWord,
    drillPath,
  } = outputUnit;

  console.log("r11", { drillPath, structureChunk });
  if (drillPath && !drillPath.map((arr) => arr[0]).includes("gender")) {
    structureChunk.gender = [];
  }

  //Epsilon - this had to be done for ENG, but for POL it was already done elsewhere?
  if (selectedLemmaObject.gender) {
    if ("check") {
      if (
        !structureChunk.number ||
        !structureChunk.number.length ||
        structureChunk.number.length !== 1
      ) {
        console.log(
          "[1;31m " +
            currentLanguage +
            " structureChunk that has no Number key or such with length not 1:" +
            "[0m"
        );

        gpUtils.throw(
          "#ERR Need to know the Number. Trzeba wiedzie¢ liczb€. Es preciso saber el numero."
        );
      }
    }
    //Nownow: Because I will use stCh.number to decide which [ONE] gender to update the stCh to.
    //I must not give the stCh a gender key of ["m1", "virile"] at this point.
    let number = structureChunk.number[0];

    if (/_/.test(selectedLemmaObject.gender)) {
      console.log("Clause P: lObj has metaSelector gender");
      let metaGender = selectedLemmaObject.gender.split("_")[0];

      if ("check") {
        if (
          !structureChunk.gender ||
          !structureChunk.gender.length ||
          structureChunk.gender.length !== 1
        ) {
          console.log("selectedLemmaObject", selectedLemmaObject);
          console.log("structureChunk", structureChunk);
          console.log(
            "[1;31m " +
              "structureChunk does not have gender exactly 1, but I will try to reconcile it with the metaSelector gender of lObj anyway." +
              "[0m"
          );

          // gpUtils.throw(
          //   "#ERR: updateStChByAndTagsAndSelectors: I ideally need Gender key to hold array of exactly 1 value."
          // );
        }

        if (
          structureChunk.gender &&
          structureChunk.gender.length &&
          !refObj.metaFeatures[currentLanguage].gender[metaGender].includes(
            structureChunk.gender[0]
          )
        ) {
          console.log("selectedLemmaObject", selectedLemmaObject);
          console.log("structureChunk", structureChunk);
          gpUtils.throw(
            `#ERR The lObj has metagender: ${metaGender} but I can't reconcile this with the structureChunk gender which is ${structureChunk.gender[0]}`
          );
        }
      }

      if (structureChunk.gender && structureChunk.gender.length) {
        structureChunk.gender = structureChunk.gender; //Yes, if lObj has metaSelector gender, and stCh gender fits that, then leave as is.
      } else {
        structureChunk.gender = refObj.metaFeatures[currentLanguage].gender[
          metaGender
        ].slice(0);
      }
    } else {
      console.log("Clause Q: lObj does not have metaSelector gender");
      structureChunk.gender = [selectedLemmaObject.gender]; //Update stCh with lObj gender.
    }
  }

  //Yellow option:
  /**If structureChunk has any andTags, then filter that down to only
   * the andTags that are present in the tags of the lObj.
   */
  if (structureChunk.andTags) {
    structureChunk.andTags = structureChunk.andTags.filter((andTag) =>
      selectedLemmaObject.tags.includes(andTag)
    );
  }

  //Magenta option:
  /**Even if structureChunk doesn't have any andTags, create such a key,
   * and fill it with the tags from the lobj.
   */
  // if (structureChunk.andTags) {
  //   structureChunk.andTags = structureChunk.andTags.filter((andTag) =>
  //     selectedLemmaObject.tags.includes(andTag)
  //   );
  // } else {
  //   structureChunk.andTags = selectedLemmaObject.tags.slice();
  // }

  let selectors =
    refObj.lemmaObjectFeatures[currentLanguage].selectors[
      structureChunk.wordtype
    ];

  if (selectors) {
    selectors.forEach((selector) => {
      structureChunk[selector] = [selectedLemmaObject[selector]];
    });
  }
};

exports.updateStChByInflections = (outputUnit, currentLanguage) => {
  if (outputUnit.drillPath) {
    outputUnit.drillPath.forEach((drillPathSubArr) => {
      let requiredInflectorCategory = drillPathSubArr[0];
      let selectedInflector = drillPathSubArr[1];

      outputUnit.structureChunk[requiredInflectorCategory] = [
        selectedInflector,
      ];
    });
  }
};

exports.filterOutLackingLemmaObjects = (
  sourceArr,
  specObj,
  currentLanguage
) => {
  let inflectionChain =
    refObj.lemmaObjectFeatures[currentLanguage].inflectionChains[
      specObj.wordtype
    ];
  let requirementArrs = inflectionChain.map((key) => specObj[key] || []);

  return sourceArr.filter((lObj) => {
    if (!lObj.lacking) {
      return true;
    } else {
      let { routesByNesting, routesByLevel } = otUtils.extractNestedRoutes(
        lObj.inflections
      );

      let inflectionPathsInSource = routesByNesting;

      let inflectionPathsInRequirements = otUtils.concoctNestedRoutes(
        requirementArrs,
        routesByLevel
      );

      return inflectionPathsInRequirements.some((inflectionPathReq) =>
        inflectionPathsInSource.some((inflectionPathSource) =>
          gpUtils.areTwoFlatArraysEqual(inflectionPathReq, inflectionPathSource)
        )
      );
    }
  });
};

exports.filterByAndTagsAndOrTags = (wordset, structureChunk) => {
  let lemmaObjects = Object.values(wordset);

  let { andTags, orTags } = structureChunk;

  if (andTags && andTags.length) {
    lemmaObjects = lemmaObjects.filter((lemmaObject) =>
      andTags.every((andTag) => lemmaObject.tags.includes(andTag))
    );
  }

  if (orTags && orTags.length) {
    lemmaObjects = lemmaObjects.filter((lemmaObject) =>
      orTags.some((orTag) => lemmaObject.tags.includes(orTag))
    );
  }

  return lemmaObjects;
};

exports.filterByKey = (lemmaObjectArr, requirementArrs, key) => {
  let requirementArr = requirementArrs[key] || [];

  if (requirementArr.length) {
    return lemmaObjectArr.filter((lObj) => requirementArr.includes(lObj[key]));
  } else {
    return lemmaObjectArr;
  }
};

exports.filterBySelectors = (currentLanguage, structureChunk, matches) => {
  let selectors =
    refObj.lemmaObjectFeatures[currentLanguage].selectors[
      structureChunk.wordtype
    ];

  if (selectors) {
    selectors.forEach((selector) => {
      matches = lfUtils.filterByKey(matches, structureChunk, selector);
    });
  }

  return matches;
};

exports.traverseAndRecordInflections = (
  source,
  reqArr,
  outputUnitsWithDrillPaths,
  outputUnitsWithDrillPathsMini
) => {
  /////////////////////////////
  let shouldConsoleLog = false;
  /////////////////////////////

  if (!outputUnitsWithDrillPathsMini) {
    outputUnitsWithDrillPathsMini = [];
  }

  let reqSubArr = reqArr[0];

  let reqInflectorLabel = reqSubArr[0];
  let reqInflectorArr = reqSubArr[1];

  if (!reqInflectorArr.length) {
    reqInflectorArr = Object.keys(source);
  }

  reqInflectorArr.forEach((chosenInflector, reqInflectorArrIndex) => {
    if (
      typeof source[chosenInflector] === "string" ||
      Array.isArray(source[chosenInflector]) ||
      (source[chosenInflector] && source[chosenInflector].isTerminus)
    ) {
      if (shouldConsoleLog) {
        console.log("traverseAndRecordInflections Clause B", {
          reqInflectorLabel,
          chosenInflector,
        });
      }

      outputUnitsWithDrillPathsMini.push([reqInflectorLabel, chosenInflector]);

      outputUnitsWithDrillPaths.push({
        selectedWordArray: Array.isArray(source[chosenInflector])
          ? source[chosenInflector]
          : [source[chosenInflector]],
        drillPath: outputUnitsWithDrillPathsMini.slice(0),
      });

      outputUnitsWithDrillPathsMini.pop();

      return source[chosenInflector];
    } else if (
      gpUtils.isKeyValueTypeObject(source[chosenInflector]) &&
      !source[chosenInflector].isTerminus
    ) {
      if (shouldConsoleLog) {
        console.log("traverseAndRecordInflections Clause A", {
          reqInflectorLabel,
          chosenInflector,
        });
      }

      outputUnitsWithDrillPathsMini.push([reqInflectorLabel, chosenInflector]);

      lfUtils.traverseAndRecordInflections(
        source[chosenInflector],
        reqArr.slice(1),
        outputUnitsWithDrillPaths,
        outputUnitsWithDrillPathsMini
      );

      outputUnitsWithDrillPathsMini.pop();
    } else {
      if (shouldConsoleLog) {
        console.log("traverseAndRecordInflections Clause X", {
          reqInflectorLabel,
          chosenInflector,
        });
      }
    }
  });
};
