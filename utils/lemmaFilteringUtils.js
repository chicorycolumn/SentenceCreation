const gpUtils = require("./generalPurposeUtils.js");
const uUtils = require("./universalUtils.js");
const consol = require("./zerothOrder/consoleLoggingUtils.js");
const otUtils = require("./objectTraversingUtils.js");
const refObj = require("./reference/referenceObjects.js");
const refFxn = require("./reference/referenceFunctions.js");
const lfUtils = require("./lemmaFilteringUtils.js");

exports.filterWithin_PHD = (
  lemmaObject,
  PHDstructureChunk,
  currentLanguage,
  multipleMode,
  outputArray
) => {
  consol.log("pebb", {
    lemmaObject,
    PHDstructureChunk,
    currentLanguage,
    multipleMode,
  });

  PHDstructureChunk["wordtype"] = gpUtils.getWorrdtypeStCh(PHDstructureChunk);

  let drillPath = [];
  let drillPathSecondary = [];
  let drillPathTertiary = [];

  const langUtils = require("../source/" + currentLanguage + "/langUtils.js");

  let PHD_type;

  refObj.postHocDependentChunkWordtypes[currentLanguage].forEach(
    (PHD_dataObj) => {
      console.log("PHD_dataObj", PHD_dataObj);

      if (
        Object.keys(PHD_dataObj.conditions).every((PHD_conditionTraitKeyy) => {
          let PHD_conditionTraitValyyeArr =
            PHD_dataObj.conditions[PHD_conditionTraitKeyy];

          if (
            PHD_conditionTraitValyyeArr.some((arrayItem) => {
              if (
                PHDstructureChunk[PHD_conditionTraitKeyy] &&
                Array.isArray(PHDstructureChunk[PHD_conditionTraitKeyy]) &&
                PHDstructureChunk[PHD_conditionTraitKeyy].includes(arrayItem)
              ) {
                return true;
              } else if (
                PHDstructureChunk[PHD_conditionTraitKeyy] === arrayItem
              ) {
                return true;
              }
            })
          ) {
            return true;
          }
        })
      ) {
        PHD_type = PHD_dataObj.PHD_type;
      }
    }
  );

  delete PHDstructureChunk["wordtype"];

  if ("check") {
    if (!PHD_type) {
      consol.throw(
        "pwir filterWithin_PHD. Failed postHocDependentChunkWordtypes[currentLanguage].forEach(PHD_dataObj => passing the PHD_dataObj.conditions)"
      );
    }

    if (
      !PHDstructureChunk.specificLemmas ||
      PHDstructureChunk.specificLemmas.length !== 1
    ) {
      consol.throw(
        "#ERR ohmk lf:filterWithin_PHD. PHD-stCh should have exactly one traitValyye in specificLemmas arr."
      );
    }
  }

  let postHocInflectionChains = refObj.postHocDependentChunkWordtypes[
    currentLanguage
  ].find((PHD_dataObj) => PHD_dataObj.PHD_type === PHD_type).inflectionChains;

  let lemmaObjectCopy = uUtils.copyWithoutReference(lemmaObject);

  langUtils.preprocessLemmaObjectsMajor(
    [lemmaObjectCopy],
    PHDstructureChunk,
    true,
    currentLanguage
  );

  consol.log("terx filterWithin_PHD", {
    lemmaObjectCopy,
    PHDstructureChunk,
    currentLanguage,
    multipleMode,
    outputArray,
    PHD_type,
    postHocInflectionChains,
  });
  // consol.consoleLogObjectAtTwoLevels(
  //   outputArray,
  //   "outputArray",
  //   "filterWithin_PHD"
  // );

  let source = uUtils.copyWithoutReference(lemmaObjectCopy.inflections);

  consol.log("giuy filterWithin_PHD. source", source);

  Object.keys(postHocInflectionChains).forEach((postHocAgreeWithKey) => {
    consol.log(
      "[1;35m " +
        `nvnm lf:filterWithin_PHD Running loop for "${postHocAgreeWithKey}"` +
        "[0m"
    );
    consol.log(
      "[1;33m " + `outputArray: [${outputArray.map((x) => x.selectedWord)}]` + "[0m"
    );

    let postHocInflectionChain = postHocInflectionChains[postHocAgreeWithKey];

    let headOutputUnit = outputArray.find(
      (outputUnit) =>
        outputUnit.structureChunk.chunkId ===
        PHDstructureChunk[postHocAgreeWithKey]
    );

    let drillPathOfHead = uUtils.copyWithoutReference(headOutputUnit.drillPath);

    if (!drillPathOfHead) {
      consol.throw(
        "#ERR jzbx filterWithin_PHD. There is no drillPath on the outputUnit with which I want to get inflections from the PHD stCh. Perhaps this outputUnit is one whose stCh did not go through If-PW?"
      );
    }

    if (PHDstructureChunk.form) {
      if (PHDstructureChunk.form.length !== 1) {
        consol.throw(
          "#ERR cwyd filterWithin_PHD. Expected PHDstructureChunk.form to have length of 1: " +
            PHDstructureChunk.chunkId
        );
      }

      consol.log(
        `ijef filterWithin_PHD. Updating drillPathOfHead with form "${PHDstructureChunk.form[0]}"`
      );
      drillPathOfHead.push(["form", PHDstructureChunk.form[0]]);
    }

    if (
      gpUtils.getWorrdtypeAgree(PHDstructureChunk, postHocAgreeWithKey) ===
      "noun"
    ) {
      let personArr = drillPathOfHead.find((arr) => arr[0] === "person");

      if (!personArr) {
        consol.log(
          `ijeg filterWithin_PHD. Updating drillPathOfHead with person "3per"`
        );
        drillPathOfHead.push(["person", "3per"]);
      } else if (personArr && personArr[1] !== "3per") {
        personArr[1] = "3per";
      }
    }

    // consol.log("dxxd headOutputUnit", headOutputUnit);

    if (headOutputUnit.selectedLemmaObject.gender) {
      if (!drillPathOfHead.find((arr) => arr[0] === "gender")) {
        let numberArr = drillPathOfHead.find((arr) => arr[0] === "number");

        let numberTraitValyye = numberArr[1];

        let formattedInflectionKeyyArray = langUtils.formatTraitValyye(
          "gender",
          headOutputUnit.selectedLemmaObject.gender,
          numberTraitValyye
        );

        if (formattedInflectionKeyyArray.length !== 1) {
          consol.throw(
            "#ERR ikdr lf:filterWithin_PHD. Expected formattedInflectionKeyyArray to have length 1"
          );
        }
        let formattedInflectionKeyy = formattedInflectionKeyyArray[0];

        consol.log(
          `ijeg filterWithin_PHD. Updating drillPathOfHead with gender "${formattedInflectionKeyy}"`
        );
        drillPathOfHead.push(["gender", formattedInflectionKeyy]);
      } else {
        throw "I am unsure about which gender to use - either the one from lobj inherent, or the one from drillPath. I wanted to use this gender for the PHD stCh.";
      }
    }

    postHocInflectionChain.forEach((inflectionCategoryy) => {
      let inflectionKeyy = drillPathOfHead.find(
        (arr) => arr[0] === inflectionCategoryy
      )[1];

      if (
        gpUtils.traitValyyeIsMeta(inflectionKeyy) &&
        !source[inflectionKeyy]
      ) {
        inflectionKeyy =
          otUtils.switchMetaTraitValyyeForAWorkableConvertedTraitValyye(
            inflectionCategoryy,
            inflectionKeyy,
            source,
            currentLanguage,
            PHDstructureChunk,
            "filterWithin_PHD -> postHocInflectionChain.forEach"
          );
      }

      source = source[inflectionKeyy];

      consol.log(
        `\nihjy lf:filterWithin_PHD "${postHocAgreeWithKey}" drilling into source with "${inflectionKeyy}" so source is now`,
        // source,
        "\n"
      );

      //Update drillPath, for both ...Pri and ...Sec

      consol.log("viko", { postHocAgreeWithKey }, drillPathOfHead);

      if (/.*Primary/.test(postHocAgreeWithKey)) {
        lfUtils.updateStChByInflections(
          { structureChunk: PHDstructureChunk, drillPath: drillPathOfHead },
          currentLanguage
        );
      } else if (/.*Secondary/.test(postHocAgreeWithKey)) {
        drillPathSecondary.push([inflectionCategoryy, inflectionKeyy]);
      } else if (/.*Tertiary/.test(postHocAgreeWithKey)) {
        drillPathTertiary.push([inflectionCategoryy, inflectionKeyy]);
      } else {
        consol.throw(
          `mezp filterWithin_PHD. Malformed postHocAgreeWithKey: "${postHocAgreeWithKey}".`
        );
      }

      //Update stCh with these inflectionCategoryys and inflectionKeyys, but just for postHocAgreeWithPrimary.
      // if (/.*Primary/.test(postHocAgreeWithKey)) {
      //   lfUtils.updateStChByInflections(
      //     { structureChunk: PHDstructureChunk, drillPath: drillPathOfHead },
      //     currentLanguage
      //   );

      //   drillPath.push([inflectionCategoryy, inflectionKeyy]);
      // } else if (/.*Secondary/.test(postHocAgreeWithKey)) {
      //   drillPathSecondary.push([inflectionCategoryy, inflectionKeyy]);
      // } else if (/.*Tertiary/.test(postHocAgreeWithKey)) {
      //   drillPathTertiary.push([inflectionCategoryy, inflectionKeyy]);
      // } else {
      //   consol.throw(
      //     `mezp filterWithin_PHD. Malformed postHocAgreeWithKey: "${postHocAgreeWithKey}".`
      //   );
      // }
    });
  });

  consol.log("-----------------------tiko");
  consol.log("drillPath", drillPath);
  consol.log("drillPathSecondary", drillPathSecondary);
  consol.log("drillPathTertiary", drillPathTertiary);
  consol.log("--------------------------");

  let sourceArr = [];
  let resArr = [];

  if (Array.isArray(source)) {
    consol.log(
      "[1;33m " +
        `apcu lf:filterWithin_PHD, the variable called source, is ARRAY` +
        "[0m",
      { source }
    );
    consol.throw("apcu lf:filterWithin_PHD Oh no Natasha, array!");
  } else if (
    typeof source === "string" ||
    (gpUtils.isTerminusObject(source) && source.processOnlyAtEnd)
  ) {
    sourceArr.push(source);
  } else if (gpUtils.isTerminusObject(source) && !source.processOnlyAtEnd) {
    consol.throw("svqe filterWithin_PHD Natasha, take action.");
  } else {
    consol.throw(
      "#ERR dyqk filterWithin_PHD. Expected this PHD inflectorValyye to be the end of a chain and thus a string or array."
    );
  }

  sourceArr.forEach((selectedWord) => {
    consol.log(
      `rzcs filterWithin_PHD. Pushing this selectedWord "${selectedWord}" with drillPath ${drillPath}.`
    );

    let resultingOutputUnit = {
      errorInDrilling: false,
      selectedWordArray: [selectedWord],
      drillPath,
    };

    if (drillPathSecondary.length) {
      resultingOutputUnit.drillPathSecondary = drillPathSecondary;
    }

    if (drillPathTertiary.length) {
      resultingOutputUnit.drillPathTertiary = drillPathTertiary;
    }

    consol.log(
      "iqoe filterWithin_PHD. resultingOutputUnit",
      resultingOutputUnit
    );

    resArr.push(resultingOutputUnit);
  });

  consol.log(
    "[1;35m " +
      "blij lf:filterWithin_PHD At the END lf:filterWithin PHD section, PHDstructureChunk is:" +
      "[0m",
    PHDstructureChunk
  );
  consol.log("[1;35m " + "blij lf:filterWithin_PHD resArr is" + "[0m", resArr);
  return resArr;
};

exports.filterWithinSelectedLemmaObject = (
  lemmaObject,
  structureChunk,
  currentLanguage,
  multipleMode,
  outputArray,
  isPHD
) => {
  if ("console") {
    if (outputArray) {
      consol.log(
        "[1;33m " +
          `nvnl filterWithinSelectedLemmaObject outputArray: [${outputArray.map(
            (x) => x.selectedWord
          )}]` +
          "[0m"
      );
    } else {
      consol.log(
        "[1;33m " + `nvnl filterWithinSelectedLemmaObject outputArray null` + "[0m"
      );
    }
  }

  if (isPHD) {
    return lfUtils.filterWithin_PHD(
      lemmaObject,
      structureChunk,
      currentLanguage,
      multipleMode,
      outputArray
    );
  }

  const langUtils = require("../source/" + currentLanguage + "/langUtils.js");

  //STEP ZERO: Get necessary materials, ie inflectionPaths and requirementArrs.

  let inflectionChain =
    refObj.lemmaObjectTraitKeyys[currentLanguage].inflectionChains[
      gpUtils.getWorrdtypeStCh(structureChunk)
    ];

  let requirementArrs = [];

  inflectionChain.forEach((inflectionCategoryy) => {
    let inflectionKeyyArr = [];

    if (structureChunk[inflectionCategoryy]) {
      structureChunk[inflectionCategoryy].forEach((inflectionKeyy) => {
        let formattedInflectionKeyyArr = langUtils.formatTraitValyye(
          inflectionCategoryy,
          inflectionKeyy
        );

        // consol.log(
        //   "afwm lf:filterWithinSelectedLemmaObject: formattedInflectionKeyyArr",
        //   formattedInflectionKeyyArr
        // );

        inflectionKeyyArr = [
          ...inflectionKeyyArr,
          ...formattedInflectionKeyyArr,
        ];
      });
    }

    requirementArrs.push([inflectionCategoryy, inflectionKeyyArr]);
  });

  if (!requirementArrs.length) {
    consol.log("zyan filterWithin structureChunk", structureChunk);
    consol.log("zyan filterWithin inflectionChain", inflectionChain);
    consol.throw(
      "zyan filterWithin requirementArrs ended with length 0, so the above fxn didn't do anything. I have console logged inflectionChain above, to help."
    );
  }

  let errorInDrilling = false;
  let outputUnitsWithDrillPaths = [];
  let source = lemmaObject.inflections;

  consol.log(
    "pazk filterWithin now entering traverseAndRecordInflections with args:"
  );
  consol.log("paz'k source", source);
  consol.log("paz'k requirementArrs", requirementArrs);

  lfUtils.traverseAndRecordInflections(
    source,
    requirementArrs,
    outputUnitsWithDrillPaths,
    null,
    structureChunk,
    multipleMode,
    currentLanguage,
    "filterWithin" //deletable
  );

  if (!outputUnitsWithDrillPaths || !outputUnitsWithDrillPaths.length) {
    consol.log(
      "\n\n\n iszn I failed when searched with these requirementArrs",
      requirementArrs,
      "\n\n\n iszn when I was looking inside this source"
    );
    consol.consoleLogObjectAtTwoLevels(source);
    consol.log("\n\n\n");

    consol.log(
      // consol.throw(
      //xpublish: This should not be a throw when in PROD.
      "[1;31m " +
        `#WARN/#ERR iszn lf:filterWithinSelectedLemmaObject. traverseAndRecordInflections returned FALSY for "${structureChunk.chunkId}" in "${currentLanguage}". See requirementArrs above.` +
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

exports.updateStructureChunkByAdhocOnly = (
  structureChunk,
  traitKeyy,
  traitValyye
) => {
  structureChunk[traitKeyy] = [traitValyye];
};

exports.updateStructureChunk = (outputUnit, currentLanguage) => {
  let shouldConsoleLog = false;

  if (shouldConsoleLog) {
    consol.log(
      "[1;33m " +
        `aizl updateStructureChunk "${outputUnit.structureChunk.chunkId}" "${outputUnit.selectedWord}" ---------------------------` +
        "[0m"
    );

    consol.log(
      "rcws updateStructureChunk BEFORE UB-Inf and UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );
  }

  lfUtils.updateStChByInflections(outputUnit, currentLanguage);

  if (shouldConsoleLog) {
    consol.log(
      "xppx updateStructureChunk AFTER UB-Inf but BEFORE UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );
  }

  lfUtils.updateStChByAndTagsAndSelectors(outputUnit, currentLanguage);

  if (shouldConsoleLog) {
    consol.log(
      "wbxe updateStructureChunk AFTER UB-Inf and UB-Tag-Sel, structureChunk is:",
      outputUnit.structureChunk
    );

    consol.log(
      "[1;33m " +
        `wbxe /updateStructureChunk "${outputUnit.structureChunk.chunkId}"` +
        "[0m"
    );
    consol.log(" ");
  }
};

exports.updateStChByAndTagsAndSelectors = (outputUnit, currentLanguage) => {
  let { selectedLemmaObject, structureChunk, selectedWord, drillPath } =
    outputUnit;

  consol.log(
    "[1;35m " + `rakt updateStChByAndTagsAndSelectors--------------------` + "[0m"
  );
  consol.log(
    `updateStChByAndTagsAndSelectors "${structureChunk.chunkId}" starts as`,
    structureChunk
  );
  consol.log(
    "updateStChByAndTagsAndSelectors selectedLemmaObject is",
    selectedLemmaObject
  );
  // consol.log("updateStChByAndTagsAndSelectors drillPath", drillPath);

  let doneSelectors = [];

  let lemmaObjectIsMGN = gpUtils.lObjIsMGN(selectedLemmaObject);

  let stChTraits = refFxn.getstructureChunkTraits(currentLanguage);

  //STEP ZERO: Decisive Decant
  //Remove gender traitValyyes on stCh if drillPath doesn't include the traitKeyy 'gender' (ie is infinitive or a participle, say).
  //But if lObj is MGN, don't do this.
  if (
    !lemmaObjectIsMGN &&
    drillPath &&
    !drillPath.map((arr) => arr[0]).includes("gender") &&
    stChTraits["gender"].compatibleWordtypes.includes(
      gpUtils.getWorrdtypeLObj(selectedLemmaObject)
    )
  ) {
    structureChunk.gender = [];
  }

  //STEP ONE: Update stCh gender with that of lObj.
  if (selectedLemmaObject.gender) {
    if (lemmaObjectIsMGN) {
      //If lObj does have metagender, set stCh gender to converted traitValyyes or filter stCh's gender by them.

      consol.log(
        `nxej updateStChByAndTagsAndSelectors Clause S: lObj "${selectedLemmaObject.lemma}" has metaSelector gender`
      );
      consol.log("nxej updateStChByAndTagsAndSelectors", structureChunk);
      consol.log(
        "[1;33m " +
          `nxej updateStChByAndTagsAndSelectors in clause S start "${structureChunk.gender}"` +
          "[0m"
      );

      let metaGender = selectedLemmaObject.gender;

      let metaGenderConverted =
        refObj.metaTraitValyyes[currentLanguage].gender[metaGender];

      if (structureChunk.gender && structureChunk.gender.length) {
        structureChunk.gender = structureChunk.gender.filter(
          (genderTraitValyye) => metaGenderConverted.includes(genderTraitValyye)
        );
      } else {
        structureChunk.gender = metaGenderConverted.slice(0);
      }
      doneSelectors.push("gender");
      consol.log(
        "[1;33m " +
          `qdtx updateStChByAndTagsAndSelectors in clause S end "${structureChunk.gender}"` +
          "[0m"
      );
    } else {
      //If lObj has non-meta-gender, then update stCh with lObj gender.

      consol.log(
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
    consol.log(
      "[1;31m " +
        `vwaw updateStChByAndTagsAndSelectors Just to note that this stCh has no andTags, and I am adding them from lObj. Perhaps I should no nothing here instead: "${currentLanguage}" "${structureChunk.chunkId}"` +
        "[0m"
    );

    structureChunk.andTags = selectedLemmaObject.tags.slice(0);
  }

  //STEP THREE: For all remaining selectors, update the stCh with traitValyyes from lObj.
  let selectors =
    refObj.lemmaObjectTraitKeyys[currentLanguage].selectors[
      gpUtils.getWorrdtypeStCh(structureChunk)
    ];

  consol.log("abyy updateStChByAndTagsAndSelectors", { doneSelectors });

  if (selectors) {
    selectors
      .filter((selector) => !doneSelectors.includes(selector))
      .forEach((selector) => {
        if (gpUtils.traitValyyeIsMeta(selectedLemmaObject[selector])) {
          consol.throw(
            `oppb updateStChByAndTagsAndSelectors I wasn't expecting a metaTraitValyye selector here. It should have been processed already, in step one, and then added to doneSelectors, which would have prevented it being used here. selectedLemmaObject[selector]:"${selectedLemmaObject[selector]}"`
          );
        }

        structureChunk[selector] = [selectedLemmaObject[selector]];
      });
  } else {
    consol.log(
      "[1;31m " +
        `vbob updateStChByAndTagsAndSelectors Just to note that refObj gave no selectors for currentLanguage "${currentLanguage}" and s'tructureChunk.worrdtype "${gpUtils.getWorrdtypeStCh(
          structureChunk
        )}"` +
        "[0m"
    );
  }

  //STEP FOUR: Selectors that must be handled specially.

  if (structureChunk.specificLemmas && structureChunk.specificLemmas.length) {
    structureChunk.specificLemmas = [selectedLemmaObject.lemma];
  }

  consol.log(
    `raku updateStChByAndTagsAndSelectors "${structureChunk.chunkId}" ends as`,
    structureChunk
  );
  consol.log("[1;35m " + `/updateStChByAndTagsAndSelectors` + "[0m");
};

exports.updateStChByInflections = (outputUnit, currentLanguage) => {
  if (false) {
    consol.log(
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
      let requiredInflectionCategoryy = drillPathSubArr[0];
      let selectedInflectionKeyy = drillPathSubArr[1];

      outputUnit.structureChunk[requiredInflectionCategoryy] = [
        selectedInflectionKeyy,
      ];
    });
  }
};

exports.filterOutLackingLemmaObjects = (sourceArr, stCh, currentLanguage) => {
  let inflectionChain =
    refObj.lemmaObjectTraitKeyys[currentLanguage].inflectionChains[
      gpUtils.getWorrdtypeStCh(stCh)
    ];
  let requirementArrs = inflectionChain.map((key) => stCh[key] || []);

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
          uUtils.areTwoFlatArraysEqual(inflectionPathReq, inflectionPathSource)
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

exports.padOutRequirementArrWithmetaTraitValyyesIfNecessary = (
  requirementArrs,
  traitKeyy,
  currentLanguage
) => {
  let requirementArr = requirementArrs[traitKeyy] || [];
  let metaTraitValyyeRef = refObj.metaTraitValyyes[currentLanguage][traitKeyy];

  consol.log(
    "[1;35m " +
      `opoq lf:filterByKey-------------------------- for traitKeyy "${traitKeyy}"` +
      "[0m"
  );
  consol.log("opoq lf:filterByKey requirementArr starts as", requirementArr);

  if (metaTraitValyyeRef) {
    requirementArr.forEach((traitValyye) => {
      //If the reqArr has a metaTraitValyye, all lObj with converted traitValyyes to pass filter.
      if (gpUtils.traitValyyeIsMeta(traitValyye)) {
        let metaTraitValyyeConverted = metaTraitValyyeRef[traitValyye];

        if (!metaTraitValyyeConverted) {
          consol.throw(
            "#ERR tufx lf:filterByKey. filterByKey need converted metaTraitValyye."
          );
        }
        consol.log(
          `ndew filterByKey. Gonna push metaTraitValyyeConverted [${metaTraitValyyeConverted}]`
        );
        requirementArr = [...requirementArr, ...metaTraitValyyeConverted];
      }

      //But also need do the inverse of this. If reqArr has 'f', then allow lObj to pass filter if lObj gender is 'allSingularGenders' eg.
      Object.keys(metaTraitValyyeRef).forEach((metaTraitValyye) => {
        let ConvertedMetaTraitValyyeArr = metaTraitValyyeRef[metaTraitValyye];

        if (
          ConvertedMetaTraitValyyeArr.includes(traitValyye) &&
          !requirementArr.includes(metaTraitValyye)
        ) {
          consol.log(
            `exnh filterByKey. Gonna push metaTraitValyye "${metaTraitValyye}"`
          );
          requirementArr.push(metaTraitValyye);
        }
      });

      consol.log(
        "sfrl lf:filterByKey requirementArr inside ```requirementArr.forEach((traitValyye)``` is",
        requirementArr
      );
    });
  } else {
    consol.log(
      "[1;31m " +
        `jwpv lf:filterByKey saw there was no metaTraitValyyeRef for currentLanguage "${currentLanguage}" and traitKeyy "${traitKeyy}"` +
        "[0m"
    );
  }

  consol.log("qyvu lf:filterByKey requirementArr ends as", requirementArr);

  return requirementArr;
};

exports.filterByKey = (
  lemmaObjectArr,
  structureChunk,
  traitKeyy,
  currentLanguage
) => {
  consol.log("wdwe filterByKey START. structureChunk", structureChunk);

  let requirementArray =
    lfUtils.padOutRequirementArrWithmetaTraitValyyesIfNecessary(
      structureChunk,
      traitKeyy,
      currentLanguage
    );

  consol.log("wdet filterByKey. requirementArray", requirementArray);

  //And finally, do said filter.
  if (requirementArray.length) {
    return lemmaObjectArr.filter((lObj) => {
      let lObjSelectorValyyes = [lObj[traitKeyy]];

      consol.log("wdeu lObjSelectorValyyes", lObjSelectorValyyes);

      if (traitKeyy === "gender") {
        structureChunk.number.forEach((numberKeyy) => {
          let extraVirilityConvertedValyyes =
            refObj.pluralVirilityAndSingularConversionRef[currentLanguage][
              numberKeyy
            ][lObj[traitKeyy]];

          consol.log({
            currentLanguage,
            numberKeyy,
            traitKeyy,
            "lObj[traitKeyy]": lObj[traitKeyy],
          });
          consol.log(
            "wdee . extraVirilityConvertedValyyes",
            extraVirilityConvertedValyyes
          );

          if (extraVirilityConvertedValyyes) {
            lObjSelectorValyyes = [
              ...lObjSelectorValyyes,
              ...extraVirilityConvertedValyyes,
            ];
          }
        });
      }

      consol.log("wdev . lObjSelectorValyyes", lObjSelectorValyyes);

      return lObjSelectorValyyes.some((lObjSelectorValyye) =>
        requirementArray.includes(lObjSelectorValyye)
      );
    });
  } else {
    return lemmaObjectArr;
  }
};

exports.filterBySelectors = (
  currentLanguage,
  structureChunk,
  matches,
  consoleLogLaabel
) => {
  let selectors =
    refObj.lemmaObjectTraitKeyys[currentLanguage].selectors[
      gpUtils.getWorrdtypeStCh(structureChunk)
    ];

  consol.log(
    `rcwo filterBySelectors called from ${consoleLogLaabel}. selectors are [${selectors}]`
  );

  if (selectors) {
    selectors.forEach((selector) => {
      consol.log(
        `bnxo filterBySelectors. Will call filterByKey for selector "${selector}"`
      );
      consol.log(`bnxo matches before filterByKey "${selector}" is:`, matches);
      matches = lfUtils.filterByKey(
        matches,
        structureChunk,
        selector,
        currentLanguage
      );
      consol.log(`bnxu matches AFTER filterByKey "${selector}" is:`, matches);
    });
  }

  return matches;
};

exports.traverseAndRecordInflections = (
  source,
  reqArr,
  outputUnitsWithDrillPaths,
  outputUnitsWithDrillPathsMini,
  structureChunk,
  multipleMode,
  currentLanguage,
  consoleLogLaabel
) => {
  let chunkId = structureChunk ? structureChunk.chunkId : "???";

  consol.log(
    `zbbg lf.traverseAndRecordInflections starting for "${chunkId}", and source is:`,
    source
  );

  let shouldConsoleLog = true;

  if (shouldConsoleLog) {
    consol.log(
      `kyde traverseAndRecordInflections for "${chunkId}" called by "${consoleLogLaabel}" reqArr`,
      reqArr
    );
    consol.log(`kyde for "${chunkId}" source`, source);
    consol.log(" ");
  }

  if (!reqArr || !reqArr.length) {
    consol.throw(
      `#ERR loii traverseAndRecordInflections for "${chunkId}". reqArr bad: [${reqArr}]`
    );
  }

  if (!outputUnitsWithDrillPathsMini) {
    outputUnitsWithDrillPathsMini = [];
  }

  if (!Array.isArray(outputUnitsWithDrillPathsMini)) {
    consol.log(`mztl lf:traverseAndRecordInflections for "${chunkId}"`, {
      outputUnitsWithDrillPathsMini,
    });
    consol.throw(
      `mztl lf:traverseAndRecordInflections for "${chunkId}" found outputUnitsWithDrillPathsMini not array. See above.`
    );
  }

  let reqSubArr = reqArr[0];

  let reqInflectionCategoryy = reqSubArr[0];
  let reqInflectionKeyys = reqSubArr[1];

  if (!reqInflectionKeyys.length) {
    consol.log(
      `xcmg lf:traverseAndRecordInflections for "${chunkId}" setting  reqInflectionKeyys to [${Object.keys(
        source
      )}]`
    );
    reqInflectionKeyys = Object.keys(source);
  }

  reqInflectionKeyys.forEach((chosenInflectionKeyy) => {
    let chosenInflectionKeyyTrue = chosenInflectionKeyy;
    let chosenInflectionKeyyAdjusted = chosenInflectionKeyy;

    if (
      gpUtils.traitValyyeIsMeta(chosenInflectionKeyy) &&
      !source[chosenInflectionKeyy]
    ) {
      chosenInflectionKeyyAdjusted =
        otUtils.switchMetaTraitValyyeForAWorkableConvertedTraitValyye(
          reqInflectionCategoryy,
          chosenInflectionKeyy,
          source,
          currentLanguage,
          structureChunk,
          "traverseAndRecordInflections ->  reqInflectionKeyys.forEach"
        );
    }

    if (Array.isArray(source[chosenInflectionKeyyAdjusted])) {
      consol.throw(
        `uwmf lf:traverseAndRecordInflections for "${chunkId}" Uh oh Natasha, array!`
      );
    }

    if (
      typeof source[chosenInflectionKeyyAdjusted] === "string" ||
      (gpUtils.isTerminusObject(source[chosenInflectionKeyyAdjusted]) &&
        source[chosenInflectionKeyyAdjusted].processOnlyAtEnd)
    ) {
      // consol.log("fxxb2");

      if (shouldConsoleLog) {
        consol.log(
          `xuei lf:traverseAndRecordInflections for "${chunkId}" Clause A: string or tObj to process at end`,
          {
            reqInflectionCategoryy,
            chosenInflectionKeyyAdjusted,
          }
        );
      }

      outputUnitsWithDrillPathsMini.push([
        reqInflectionCategoryy,
        chosenInflectionKeyyTrue,
      ]);

      if (shouldConsoleLog) {
        consol.log(
          `pkpb lf:traverseAndRecordInflections for "${chunkId}" pushing word "${source[chosenInflectionKeyyAdjusted]}"`
        );
      }

      outputUnitsWithDrillPaths.push({
        selectedWordArray: [source[chosenInflectionKeyyAdjusted]],
        drillPath: outputUnitsWithDrillPathsMini.slice(0),
      });

      // consol.log("fxxb3");

      outputUnitsWithDrillPathsMini.pop();

      return source[chosenInflectionKeyyAdjusted];
    } else if (
      gpUtils.isTerminusObject(source[chosenInflectionKeyyAdjusted]) &&
      !source[chosenInflectionKeyyAdjusted].processOnlyAtEnd
    ) {
      // consol.log("fxxb4");

      if (shouldConsoleLog) {
        consol.log(
          `qqyr lf:traverseAndRecordInflections for "${chunkId}" Clause B: tObj to process now`,
          {
            reqInflectionCategoryy,
            chosenInflectionKeyyAdjusted,
          }
        );
      }

      outputUnitsWithDrillPathsMini.push([
        reqInflectionCategoryy,
        chosenInflectionKeyyTrue,
      ]);

      let wordsFromTerminusObject = gpUtils.getWordsFromTerminusObject(
        source[chosenInflectionKeyyAdjusted],
        multipleMode
      );

      // consol.log("fxxb5");

      wordsFromTerminusObject.forEach((word) => {
        if (shouldConsoleLog) {
          consol.log(
            `jqbk lf:traverseAndRecordInflections for "${chunkId}" pushing word "${word}"`
          );
        }

        outputUnitsWithDrillPaths.push({
          selectedWordArray: [word],
          drillPath: outputUnitsWithDrillPathsMini.slice(0),
        });
      });

      outputUnitsWithDrillPathsMini.pop();

      // consol.log("fxxb6");

      return source[chosenInflectionKeyyAdjusted];
    } else if (
      uUtils.isKeyVaalueTypeObject(source[chosenInflectionKeyyAdjusted]) &&
      !source[chosenInflectionKeyyAdjusted].isTerminus
    ) {
      // consol.log("fxxb7");

      if (shouldConsoleLog) {
        consol.log(
          `mlgc lf:traverseAndRecordInflections for "${chunkId}" Clause C: object for further traversal`,
          {
            reqInflectionCategoryy,
            chosenInflectionKeyyAdjusted,
          }
        );
      }

      outputUnitsWithDrillPathsMini.push([
        reqInflectionCategoryy,
        chosenInflectionKeyyTrue,
      ]);

      lfUtils.traverseAndRecordInflections(
        source[chosenInflectionKeyyAdjusted],
        reqArr.slice(1),
        outputUnitsWithDrillPaths,
        outputUnitsWithDrillPathsMini,
        structureChunk,
        multipleMode,
        currentLanguage,
        "traverseAndRecordInflections" // deletable
      );

      // consol.log("fxxb8");

      outputUnitsWithDrillPathsMini.pop();
    } else {
      consol.log(
        "[1;33m " +
          `buwt #NB lf.traverseAndRecordInflections for "${chunkId}" found no matching inflectionValyyes during drilling for ${reqInflectionCategoryy}: "${chosenInflectionKeyyAdjusted}".` +
          "[0m"
      );
    }
  });
};
