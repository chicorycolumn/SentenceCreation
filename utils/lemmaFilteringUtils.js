const { head } = require("../app.js");
const gpUtils = require("./generalPurposeUtils.js");
const clUtils = require("./zerothOrder/consoleLoggingUtils.js");
const otUtils = require("./objectTraversingUtils.js");
const refObj = require("./reference/referenceObjects.js");
const lfUtils = require("./lemmaFilteringUtils.js");

exports.filterWithinSelectedLemmaObject = (
  lemmaObject,
  structureChunk,
  currentLanguage,
  multipleMode,
  outputArray
) => {
  const langUtils = require("../source/" + currentLanguage + "/langUtils.js");

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
        "elyc lf:filterWithinSelectedLemmaObject at START, PHD section, structureChunk is:" +
        "[0m",
      structureChunk
    );

    if (
      !structureChunk.specificLemmas ||
      structureChunk.specificLemmas.length !== 1
    ) {
      clUtils.throw(
        "#ERR ohmk lf:filterWithinSelectedLemmaObject. PHD-stCh should have exactly one value in specificLemmas arr."
      );
    }

    let postHocInflectionChains = refObj.postHocDependentChunkWordtypes[
      currentLanguage
    ].find((PHD_dataObj) => PHD_dataObj.PHD_type === PHD_type).inflectionChains;

    console.log(
      "srdj lf:filterWithinSelectedLemmaObject postHocInflectionChains",
      postHocInflectionChains
    );

    let lemmaObjectCopy = gpUtils.copyWithoutReference(lemmaObject);

    langUtils.preprocessLemmaObjectsMajor(
      [lemmaObjectCopy],
      structureChunk,
      true,
      currentLanguage
    );

    let source = gpUtils.copyWithoutReference(lemmaObjectCopy.inflections);

    console.log("giuy filterWithin. source", source);

    Object.keys(postHocInflectionChains).forEach((postHocAgreeWithKey) => {
      console.log(
        "[1;35m " +
          `nvnm lf:filterWithinSelectedLemmaObject Running loop for "${postHocAgreeWithKey}"` +
          "[0m"
      );

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
        clUtils.throw(
          "#ERR jzbx filterWithin. There is no drillPath on the outputUnit with which I want to get features from the PHD stCh. Perhaps this outputUnit is one whose stCh did not go through If-PW?"
        );
      }

      if (structureChunk.form) {
        if (structureChunk.form.length !== 1) {
          clUtils.throw(
            "#ERR cwyd filterWithin. Expected structureChunk.form to have length of 1: " +
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
            clUtils.throw(
              "#ERR ikdr lf:filterWithin. Expected formattedFeatureValueArray to have length 1"
            );
          }
          let formattedFeatureValue = formattedFeatureValueArray[0];

          drillPathForPHD.push(["gender", formattedFeatureValue]);
        } else {
          throw "I am unsure about which gender to use - either the one from lobj inherent, or the one from drillPath. I wanted to use this gender for the PHD stCh.";
        }
      }

      console.log(
        "sayt lf:filterWithinSelectedLemmaObject drillPathForPHD is finally",
        drillPathForPHD
      );

      // console.log("ylur filterWithin. source", source);

      postHocInflectionChain.forEach((featureKey) => {
        let featureValue = drillPathForPHD.find(
          (arr) => arr[0] === featureKey
        )[1];

        if (featureValue.slice(0, 3) === "all" && !source[featureValue]) {
          featureValue = otUtils.switchMetaFeatureForAWorkableConvertedFeature(
            featureKey,
            featureValue,
            source,
            currentLanguage,
            "filterWithin -> postHocInflectionChain.forEach"
          );
        }

        console.log(
          `ihjy lf:filterWithinSelectedLemmaObject drilling into source with "${featureValue}"`
        );

        source = source[featureValue];

        //If this is Primary, then update stCh with these featureKeys and featureValues.

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
      console.log(
        "[1;33m " +
          `apcu lf:filterWithinSelectedLemmaObject, the variable called source, is ARRAY` +
          "[0m",
        { source }
      );
      clUtils.throw(
        "apcu lf:filterWithinSelectedLemmaObject Oh no Natasha, array!"
      );
    } else if (
      typeof source === "string" ||
      (gpUtils.isTerminusObject(source) && source.processOnlyAtEnd)
    ) {
      sourceArr.push(source);
    } else if (gpUtils.isTerminusObject(source) && !source.processOnlyAtEnd) {
      clUtils.throw("svqe filterWithin Natasha, take action.");
    } else {
      clUtils.throw(
        "#ERR dyqk filterWithin. Expected this PHD value to be the end of a chain and thus a string or array."
      );
    }

    sourceArr.forEach((selectedWord) => {
      console.log(
        `rzcs filterWithin. Pushing this selectedWord "${selectedWord}" with drillPath null.`
      );

      resArr.push({
        errorInDrilling: false,
        selectedWordArray: [selectedWord],
        drillPath: null,
      });
    });

    console.log(
      "[1;35m " +
        "blij lf:filterWithinSelectedLemmaObject At the END lf:filterWithin PHD section, structureChunk is:" +
        "[0m",
      structureChunk
    );
    console.log(
      "[1;35m " + "blij lf:filterWithinSelectedLemmaObject resArr is" + "[0m",
      resArr
    );

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

        // console.log(
        //   "afwm lf:filterWithinSelectedLemmaObject: formattedFeatureValueArr",
        //   formattedFeatureValueArr
        // );

        inflectionValueArr = [
          ...inflectionValueArr,
          ...formattedFeatureValueArr,
        ];
      });
    }

    requirementArrs.push([key, inflectionValueArr]);
  });

  if (!requirementArrs.length) {
    console.log("zyan filterWithin structureChunk", structureChunk);
    console.log("zyan filterWithin inflectionChain", inflectionChain);
    clUtils.throw(
      "zyan filterWithin requirementArrs ended with length 0, so the above fxn didn't do anything. I have console logged inflectionChain above, to help."
    );
  }

  let errorInDrilling = false;
  let outputUnitsWithDrillPaths = [];
  let source = lemmaObject.inflections;

  console.log(
    "pazk filterWithin now entering traverseAndRecordInflections with args:"
  );
  console.log("paz'k source", source);
  console.log("paz'k requirementArrs", requirementArrs);

  lfUtils.traverseAndRecordInflections(
    source,
    requirementArrs,
    outputUnitsWithDrillPaths,
    null,
    multipleMode,
    "filterWithin", //deletable
    structureChunk.chunkId,
    currentLanguage
  );

  if (!outputUnitsWithDrillPaths || !outputUnitsWithDrillPaths.length) {
    console.log(
      "\n\n\n iszn I failed when looked for values according to these requirementArrs",
      requirementArrs,
      "\n\n\n iszn when I was looking inside this source"
    );
    clUtils.consoleLogObjectAtTwoLevels(source);
    console.log("\n\n\n");

    // console.log(
    clUtils.throw(
      //xpublish: This should not be a throw when in PROD.
      "[1;31m " +
        `#WARN iszn lf:filterWithinSelectedLemmaObject. traverseAndRecordInflections returned FALSY for "${structureChunk.chunkId}" in "${currentLanguage}". See requirementArrs above.` +
        "[0m"
    );

    errorInDrilling = true;

    return false;
  }

  outputUnitsWithDrillPaths.forEach((selectedPath) => {
    selectedPath.errorInDrilling = errorInDrilling;
  });

  return outputUnitsWithDrillPaths;
};

exports.updateStructureChunkByAdhocOnly = (structureChunk, label, value) => {
  structureChunk[label] = [value];
};

exports.updateStructureChunk = (outputUnit, currentLanguage) => {
  let shouldConsoleLog = false;

  if (shouldConsoleLog) {
    console.log(
      "[1;33m " +
        `aizl updateStructureChunk "${outputUnit.structureChunk.chunkId}" "${outputUnit.selectedWord}" ---------------------------` +
        "[0m"
    );

    console.log(
      "rcws updateStructureChunk BEFORE UB-Inf and UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );
  }

  lfUtils.updateStChByInflections(outputUnit, currentLanguage);

  if (shouldConsoleLog) {
    console.log(
      "xppx updateStructureChunk AFTER UB-Inf but BEFORE UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );
  }

  lfUtils.updateStChByAndTagsAndSelectors(outputUnit, currentLanguage);

  if (shouldConsoleLog) {
    console.log(
      "wbxe updateStructureChunk AFTER UB-Inf and UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );

    console.log(
      "[1;33m " +
        `wbxe /updateStructureChunk "${outputUnit.structureChunk.chunkId}"` +
        "[0m"
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

  // console.log(
  //   "[1;35m " + `rakt updateStChByAndTagsAndSelectors--------------------` + "[0m"
  // );
  // console.log(
  //   "rakt updateStChByAndTagsAndSelectors structureChunk starts as",
  //   structureChunk
  // );
  // console.log("rakt updateStChByAndTagsAndSelectors drillPath", drillPath);

  let doneSelectors = [];

  let lemmaObjectIsMGN = /_/.test(selectedLemmaObject.gender);

  //STEP ZERO: Decisive Decant
  //Remove gender values on stCh if drillPath doesn't include gender (ie is infinitive or a participle, say).
  //But if lObj is MGN, don't do this.
  if (
    !lemmaObjectIsMGN &&
    drillPath &&
    !drillPath.map((arr) => arr[0]).includes("gender")
  ) {
    structureChunk.gender = [];
  }

  //STEP ONE: Update stCh gender with that of lObj.
  if (selectedLemmaObject.gender) {
    if (lemmaObjectIsMGN) {
      //If lObj does have metagender, set stCh gender to converted values or filter stCh's gender by them.

      console.log(
        `nxej updateStChByAndTagsAndSelectors Clause S: lObj "${selectedLemmaObject.lemma}" has metaSelector gender`
      );
      console.log("nxej updateStChByAndTagsAndSelectors", structureChunk);
      console.log(
        "[1;33m " +
          `nxej updateStChByAndTagsAndSelectors in clause S start "${structureChunk.gender}"` +
          "[0m"
      );

      let metaGender = selectedLemmaObject.gender.split("_")[0];

      let metaGenderConverted =
        refObj.metaFeatures[currentLanguage].gender[metaGender];

      if (structureChunk.gender && structureChunk.gender.length) {
        structureChunk.gender = structureChunk.gender.filter((genderValue) =>
          metaGenderConverted.includes(genderValue)
        );
      } else {
        structureChunk.gender = metaGenderConverted.slice(0);
      }
      doneSelectors.push("gender");
      console.log(
        "[1;33m " +
          `qdtx updateStChByAndTagsAndSelectors in clause S end "${structureChunk.gender}"` +
          "[0m"
      );
    } else {
      //If lObj has non-meta-gender, then update stCh with lObj gender.

      console.log(
        "ijfw updateStChByAndTagsAndSelectors Clause R: lObj does not have metaSelector gender"
      );
      structureChunk.gender = [selectedLemmaObject.gender];
      doneSelectors.push("gender");
    }
  }

  //STEP TWO: Update the stCh's andTags with the lObj's tags.
  if (structureChunk.andTags && structureChunk.andTags.length) {
    structureChunk.andTags = structureChunk.andTags.filter((andTag) =>
      selectedLemmaObject.tags.includes(andTag)
    );
  } else {
    console.log(
      "[1;31m " +
        `vwaw updateStChByAndTagsAndSelectors Just to note that this stCh has no andTags, and I am adding them from lObj. Perhaps I should no nothing here instead: "${currentLanguage}" "${structureChunk.chunkId}"` +
        "[0m"
    );

    structureChunk.andTags = selectedLemmaObject.tags.slice(0);
  }

  //STEP THREE: For all remaining selectors, update the stCh with values from lObj.
  let selectors =
    refObj.lemmaObjectFeatures[currentLanguage].selectors[
      structureChunk.wordtype
    ];

  console.log("abyy updateStChByAndTagsAndSelectors", { doneSelectors });

  if (selectors) {
    selectors
      .filter((selector) => !doneSelectors.includes(selector))
      .forEach((selector) => {
        if (/_/.test(selectedLemmaObject[selector])) {
          clUtils.throw(
            `oppb updateStChByAndTagsAndSelectors I wasn't expecting a metaFeature selector here. It should have been processed already, in step one, and then added to doneSelectors, which would have prevented it being used here. selectedLemmaObject[selector]:"${selectedLemmaObject[selector]}"`
          );
        }

        structureChunk[selector] = [selectedLemmaObject[selector]];
      });
  } else {
    console.log(
      "[1;31m " +
        `vbob updateStChByAndTagsAndSelectors Just to note that refObj gave no selectors for currentLanguage "${currentLanguage}" and structureChunk.wordtype "${structureChunk.wordtype}"` +
        "[0m"
    );
  }

  console.log(
    "ldod updateStChByAndTagsAndSelectors structureChunk ends as",
    structureChunk
  );
  console.log("[1;35m " + `/updateStChByAndTagsAndSelectors` + "[0m");
};

exports.updateStChByInflections = (outputUnit, currentLanguage) => {
  if (false) {
    console.log(
      "[1;30m " +
        `plol updateStChByInflections "${
          outputUnit.drillPath
            ? outputUnit.drillPath.toString()
            : "no drillPath"
        }"` +
        "[0m"
    );
  }

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

exports.padOutRequirementArrWithMetaFeatures = (
  requirementArrs,
  key,
  currentLanguage
) => {
  let requirementArr = requirementArrs[key] || [];
  let metaFeatureRef = refObj.metaFeatures[currentLanguage][key];

  console.log(
    "[1;35m " + `opoq lf:filterByKey-------------------------- for key "${key}"` + "[0m"
  );
  console.log("opoq lf:filterByKey requirementArr starts as", requirementArr);

  if (metaFeatureRef) {
    requirementArr.forEach((featureValue) => {
      //If the reqArr has a metafeature, all lObj with converted feature to pass filter.
      if (/_/.test(featureValue)) {
        let metaFeatureConverted = metaFeatureRef[featureValue];

        if (!metaFeatureConverted) {
          clUtils.throw(
            "#ERR tufx lf:filterByKey. filterByKey need converted metafeature."
          );
        }
        console.log(
          `ndew filterByKey. Gonna push metaFeatureConverted [${metaFeatureConverted}]`
        );
        requirementArr = [...requirementArr, ...metaFeatureConverted];
      }

      //But also need do the inverse of this. If reqArr has 'f', then allow lObj to pass filter if lObj gender is 'allSingularGenders' eg.
      Object.keys(metaFeatureRef).forEach((metaFeature) => {
        let convertedMetaFeatureArr = metaFeatureRef[metaFeature];

        if (
          convertedMetaFeatureArr.includes(featureValue) &&
          !requirementArr.includes(metaFeature)
        ) {
          console.log(
            `exnh filterByKey. Gonna push metafeature "${metaFeature}"`
          );
          requirementArr.push(metaFeature);
        }
      });

      console.log(
        "sfrl lf:filterByKey requirementArr inside #requirementArr.forEach((featureValue)# is",
        requirementArr
      );
    });
  } else {
    console.log(
      "[1;31m " +
        `jwpv lf:filterByKey saw there was no metaFeatureRef for currentLanguage "${currentLanguage}" and key "${key}"` +
        "[0m"
    );
  }

  console.log("qyvu lf:filterByKey requirementArr ends as", requirementArr);

  return requirementArr;
};

exports.filterByKey = (
  lemmaObjectArr,
  requirementArrs,
  key,
  currentLanguage
) => {
  let paddedRequirementArr = lfUtils.padOutRequirementArrWithMetaFeatures(
    requirementArrs,
    key,
    currentLanguage
  );

  //And finally, do said filter.
  if (paddedRequirementArr.length) {
    return lemmaObjectArr.filter(
      (lObj) =>
        paddedRequirementArr.includes(lObj[key]) ||
        paddedRequirementArr.includes(lObj[key].split("_")[0])
    );
  } else {
    return lemmaObjectArr;
  }
};

exports.filterBySelectors = (
  currentLanguage,
  structureChunk,
  matches,
  consoleLogLabel
) => {
  let selectors =
    refObj.lemmaObjectFeatures[currentLanguage].selectors[
      structureChunk.wordtype
    ];

  console.log(
    `rcwo filterBySelectors called from ${consoleLogLabel}. selectors are [${selectors}]`
  );

  if (selectors) {
    selectors.forEach((selector) => {
      console.log(
        `bnxo filterBySelectors. Will call filterByKey for selector "${selector}"`
      );
      matches = lfUtils.filterByKey(
        matches,
        structureChunk,
        selector,
        currentLanguage
      );
    });
  }

  return matches;
};

exports.traverseAndRecordInflections = (
  source,
  reqArr,
  outputUnitsWithDrillPaths,
  outputUnitsWithDrillPathsMini,
  multipleMode,
  consoleLabel,
  chunkId,
  currentLanguage
) => {
  console.log(
    `zbbg lf.traverseAndRecordInflections starting for "${chunkId}", and source is:`,
    source
  );

  let shouldConsoleLog = true;

  if (shouldConsoleLog) {
    console.log(
      `kyde traverseAndRecordInflections for "${chunkId}" called by "${consoleLabel}" reqArr`,
      reqArr
    );
    console.log(`kyde for "${chunkId}" source`, source);
    console.log(" ");
  }

  if (!reqArr || !reqArr.length) {
    clUtils.throw(
      `#ERR loii traverseAndRecordInflections for "${chunkId}". reqArr bad: [${reqArr}]`
    );
  }

  if (!outputUnitsWithDrillPathsMini) {
    outputUnitsWithDrillPathsMini = [];
  }

  if (!Array.isArray(outputUnitsWithDrillPathsMini)) {
    console.log(`mztl lf:traverseAndRecordInflections for "${chunkId}"`, {
      outputUnitsWithDrillPathsMini,
    });
    clUtils.throw(
      `mztl lf:traverseAndRecordInflections for "${chunkId}" found outputUnitsWithDrillPathsMini not array. See above.`
    );
  }

  let reqSubArr = reqArr[0];

  let reqInflectorLabel = reqSubArr[0];
  let reqInflectorArr = reqSubArr[1];

  if (!reqInflectorArr.length) {
    console.log(
      `xcmg lf:traverseAndRecordInflections for "${chunkId}" setting reqInflectorArr to [${Object.keys(
        source
      )}]`
    );
    reqInflectorArr = Object.keys(source);
  }

  reqInflectorArr.forEach((chosenInflector) => {
    let chosenInflectorTrue = chosenInflector;
    let chosenInflectorAdjusted = chosenInflector;

    if (chosenInflector.slice(0, 3) === "all" && !source[chosenInflector]) {
      chosenInflectorAdjusted = otUtils.switchMetaFeatureForAWorkableConvertedFeature(
        reqInflectorLabel,
        chosenInflector,
        source,
        currentLanguage,
        "traverseAndRecordInflections -> reqInflectorArr.forEach"
      );
    }

    if (Array.isArray(source[chosenInflectorAdjusted])) {
      clUtils.throw(
        `uwmf lf:traverseAndRecordInflections for "${chunkId}" Uh oh Natasha, array!`
      );
    }

    if (
      typeof source[chosenInflectorAdjusted] === "string" ||
      (gpUtils.isTerminusObject(source[chosenInflectorAdjusted]) &&
        source[chosenInflectorAdjusted].processOnlyAtEnd)
    ) {
      // console.log("fxxb2");

      if (shouldConsoleLog) {
        console.log(
          `xuei lf:traverseAndRecordInflections for "${chunkId}" Clause A: string or tObj to process at end`,
          {
            reqInflectorLabel,
            chosenInflectorAdjusted,
          }
        );
      }

      outputUnitsWithDrillPathsMini.push([
        reqInflectorLabel,
        chosenInflectorTrue,
      ]);

      if (shouldConsoleLog) {
        console.log(
          `pkpb lf:traverseAndRecordInflections for "${chunkId}" pushing word "${source[chosenInflectorAdjusted]}"`
        );
      }

      outputUnitsWithDrillPaths.push({
        selectedWordArray: [source[chosenInflectorAdjusted]],
        drillPath: outputUnitsWithDrillPathsMini.slice(0),
      });

      // console.log("fxxb3");

      outputUnitsWithDrillPathsMini.pop();

      return source[chosenInflectorAdjusted];
    } else if (
      gpUtils.isTerminusObject(source[chosenInflectorAdjusted]) &&
      !source[chosenInflectorAdjusted].processOnlyAtEnd
    ) {
      // console.log("fxxb4");

      if (shouldConsoleLog) {
        console.log(
          `qqyr lf:traverseAndRecordInflections for "${chunkId}" Clause B: tObj to process now`,
          {
            reqInflectorLabel,
            chosenInflectorAdjusted,
          }
        );
      }

      outputUnitsWithDrillPathsMini.push([
        reqInflectorLabel,
        chosenInflectorTrue,
      ]);

      let wordsFromTerminusObject = gpUtils.getWordsFromTerminusObject(
        source[chosenInflectorAdjusted],
        multipleMode
      );

      // console.log("fxxb5");

      wordsFromTerminusObject.forEach((word) => {
        if (shouldConsoleLog) {
          console.log(
            `jqbk lf:traverseAndRecordInflections for "${chunkId}" pushing word "${word}"`
          );
        }

        outputUnitsWithDrillPaths.push({
          selectedWordArray: [word],
          drillPath: outputUnitsWithDrillPathsMini.slice(0),
        });
      });

      outputUnitsWithDrillPathsMini.pop();

      // console.log("fxxb6");

      return source[chosenInflectorAdjusted];
    } else if (
      gpUtils.isKeyValueTypeObject(source[chosenInflectorAdjusted]) &&
      !source[chosenInflectorAdjusted].isTerminus
    ) {
      // console.log("fxxb7");

      if (shouldConsoleLog) {
        console.log(
          `mlgc lf:traverseAndRecordInflections for "${chunkId}" Clause C: object for further traversal`,
          {
            reqInflectorLabel,
            chosenInflectorAdjusted,
          }
        );
      }

      outputUnitsWithDrillPathsMini.push([
        reqInflectorLabel,
        chosenInflectorTrue,
      ]);

      lfUtils.traverseAndRecordInflections(
        source[chosenInflectorAdjusted],
        reqArr.slice(1),
        outputUnitsWithDrillPaths,
        outputUnitsWithDrillPathsMini,
        multipleMode,
        "traverseAndRecordInflections", // deletable
        chunkId,
        currentLanguage
      );

      // console.log("fxxb8");

      outputUnitsWithDrillPathsMini.pop();
    } else {
      console.log(
        "[1;33m " +
          `buwt #NB lf.traverseAndRecordInflections for "${chunkId}" found no matching values during drilling for ${reqInflectorLabel}: "${chosenInflectorAdjusted}".` +
          "[0m"
      );
    }
  });
};
