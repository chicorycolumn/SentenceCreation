const gpUtils = require("./generalPurposeUtils.js");
const otUtils = require("./objectTraversingUtils.js");
const refObj = require("./referenceObjects.js");
const langUtils = require("./referenceObjects.js");

exports.filterWithinSelectedLemmaObject = (
  lemmaObject,
  structureChunk,
  currentLanguage,
  kumquat
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
  let source = lemmaObject.inflections;

  let inflectionChain =
    refObj.lemmaObjectFeatures[currentLanguage].inflectionChains[
      structureChunk.wordtype
    ];

  let requirementArrs = [];

  inflectionChain.forEach((key) => {
    requirementArrs.push([key, structureChunk[key] || []]);
  });

  let errorInDrilling = false;
  let outputUnitsWithOutputUnitsWithDrillPaths = [];

  exports.traverseAndRecordInflections(
    source,
    requirementArrs,
    outputUnitsWithOutputUnitsWithDrillPaths
  );

  if (
    !outputUnitsWithOutputUnitsWithDrillPaths ||
    !outputUnitsWithOutputUnitsWithDrillPaths.length
  ) {
    errorInDrilling = true;
    return false;
  }

  if (kumquat) {
    outputUnitsWithOutputUnitsWithDrillPaths.forEach((selectedPath) => {
      selectedPath.errorInDrilling = errorInDrilling;
    });
    return outputUnitsWithOutputUnitsWithDrillPaths;
  } else {
    let selectedPath = gpUtils.selectRandom(
      outputUnitsWithOutputUnitsWithDrillPaths
    );

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

exports.updateStructureChunkByAdhocOnly = (
  structureChunk,
  currentLanguage,
  adhocLabel,
  adhocValue
) => {
  console.log(
    "updateStructureChunk ByAdhocOnly '" + structureChunk.chunkId + "'"
  );

  console.log("LF:updateStructureChunkByAdhocOnly fxn was given:", {
    structureChunk,
    currentLanguage,
    adhocLabel,
    adhocValue,
  });

  structureChunk[adhocLabel] = [adhocValue];
};

exports.updateStructureChunkByInflections = (outputUnit, currentLanguage) => {
  if (outputUnit.drillPath) {
    console.log(
      "updateStructureChunk ByInflections '" +
        outputUnit.structureChunk.chunkId +
        "'"
    );
    outputUnit.drillPath.forEach((drillPathSubArr) => {
      let requiredInflectorCategory = drillPathSubArr[0];
      let selectedInflector = drillPathSubArr[1];

      outputUnit.structureChunk[requiredInflectorCategory] = [
        selectedInflector,
      ];
    });
  }
};

exports.updateStructureChunkByAndTagsAndSelectors = (
  outputUnit,
  currentLanguage
) => {
  let { selectedLemmaObject, structureChunk } = outputUnit;
  console.log(
    "updateStructureChunk ByAndTagsAndSelectors '" +
      structureChunk.chunkId +
      "'"
  );
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

exports.filterOutDeficientLemmaObjects = (
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
    if (!lObj.deficient) {
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
        inflectionPathsInSource.some((inflectionPathSou) =>
          gpUtils.areTwoFlatArraysEqual(inflectionPathReq, inflectionPathSou)
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
      matches = exports.filterByKey(matches, structureChunk, selector);
    });
  }

  return matches;
};

exports.traverseAndRecordInflections = (
  source,
  reqArr,
  outputUnitsWithOutputUnitsWithDrillPaths,
  outputUnitsWithOutputUnitsWithDrillPathsMini
) => {
  if (!outputUnitsWithOutputUnitsWithDrillPathsMini) {
    outputUnitsWithOutputUnitsWithDrillPathsMini = [];
  }

  let reqSubArr = reqArr[0];

  let reqInflectorLabel = reqSubArr[0];
  let reqInflectorArr = reqSubArr[1];

  if (!reqInflectorArr.length) {
    reqInflectorArr = Object.keys(source);
  }

  reqInflectorArr.forEach((chosenInflector, reqInflectorArrIndex) => {
    // console.log(
    //   "#Shall I enter WHITE with chosenInflector: " + chosenInflector + "?"
    // );
    if (
      typeof source[chosenInflector] === "string" ||
      Array.isArray(source[chosenInflector])
    ) {
      // console.log(
      //   "I DID enter WHITE with chosenInflector: " + chosenInflector + "."
      // );
      // console.log("*");
      // console.log("**WHITE");
      // console.log("Okay, I am going to push these things into outputUnitsWithOutputUnitsWithDrillPathsMini");
      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is currently:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("Gonna push reqInflectorLabel as:", reqInflectorLabel);
      // console.log("Gonna push chosenInflector as:", chosenInflector);

      outputUnitsWithOutputUnitsWithDrillPathsMini.push([
        reqInflectorLabel,
        chosenInflector,
      ]);

      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is now:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("**");
      // console.log("*");

      // console.log("*");
      // console.log("**RED");
      // console.log("Okay, I am going to push these things into outputUnitsWithOutputUnitsWithDrillPaths");
      // console.log("outputUnitsWithOutputUnitsWithDrillPaths is currently:", outputUnitsWithOutputUnitsWithDrillPaths);
      // console.log("Gonna push selectedWordArray as:", source[chosenInflector]);
      // console.log("Gonna push outputUnitsWithOutputUnitsWithDrillPathsMini as:", outputUnitsWithOutputUnitsWithDrillPathsMini);

      outputUnitsWithOutputUnitsWithDrillPaths.push({
        selectedWordArray:
          typeof source[chosenInflector] === "string"
            ? [source[chosenInflector]]
            : source[chosenInflector],
        drillPath: outputUnitsWithOutputUnitsWithDrillPathsMini.slice(0),
      });

      // console.log("outputUnitsWithOutputUnitsWithDrillPaths is now:", outputUnitsWithOutputUnitsWithDrillPaths);
      // console.log("**");
      // console.log("*");

      // console.log("*");
      // console.log("**YELLOW");
      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is currently:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("Gonna A-pop the last value.");

      outputUnitsWithOutputUnitsWithDrillPathsMini.pop();

      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is now:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("**");
      // console.log("*");

      return source[chosenInflector];
    } else if (typeof source[chosenInflector] === "object") {
      // console.log("*");
      // console.log("**BLUE");
      // console.log("Okay, I am going to push these things into outputUnitsWithOutputUnitsWithDrillPathsMini");
      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is currently:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("Gonna push reqInflectorLabel as:", reqInflectorLabel);
      // console.log("Gonna push chosenInflector as:", chosenInflector);

      outputUnitsWithOutputUnitsWithDrillPathsMini.push([
        reqInflectorLabel,
        chosenInflector,
      ]);

      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is now:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("**");
      // console.log("*");

      exports.traverseAndRecordInflections(
        source[chosenInflector],
        reqArr.slice(1),
        outputUnitsWithOutputUnitsWithDrillPaths,
        outputUnitsWithOutputUnitsWithDrillPathsMini
      );

      // console.log("*");
      // console.log("**GREEN");
      // console.log(
      //   `On this round of GREEN, the chosenInflector is: ${chosenInflector} at reqInflectorArrIndex ${reqInflectorArrIndex}.`
      // );
      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is currently:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("Gonna B-pop the last value.");

      outputUnitsWithOutputUnitsWithDrillPathsMini.pop();

      // console.log("outputUnitsWithOutputUnitsWithDrillPathsMini is now:", outputUnitsWithOutputUnitsWithDrillPathsMini);
      // console.log("**");
      // console.log("*");
    }
  });
};

exports.adjustImOnlyLemmaObjects = (matches) => {
  matches.forEach((lObj) => {
    if (lObj["im only"] && lObj.aspect === "imperfective") {
      let { id } = lObj;
      console.log(
        "Hey, heads up, I'm adjusting the lemma object '" +
          lObj.lemma +
          "' to have perfective Aspect instead."
      );
      let adjustedLemmaObject = gpUtils.copyWithoutReference(lObj);
      adjustedLemmaObject.aspect = "perfective";

      let newIdArr = lObj.id.split("-");
      newIdArr[3] = "pf";
      adjustedLemmaObject.id = newIdArr.join("-");

      matches.push(adjustedLemmaObject);
      delete lObj["im only"];
      // matches = matches.filter((lemmaObject) => !lemmaObject.id === id);
    }
  });
};
