const gpUtils = require("./generalPurposeUtils.js");
const otUtils = require("./objectTraversingUtils.js");

exports.findTypeOneHomographs = (
  currentLanguage,
  homographType,
  ignoreVeeTwoVeeThreeAllohoms,
  ignoreAllohomsAlreadyWithClarifiers
) => {
  if (currentLanguage !== "ENG") {
    ignoreVeeTwoVeeThreeAllohoms = false;
  }

  if (!["syn", "allo", "all"].includes(homographType)) {
    console.log({ homographType });
    throw "findTypeOneHomographs fxn: I don't know what type of homograph you want me to find. I've logged above what you gave me.";
  }

  const { wordsBank } = require(`../source/${currentLanguage}/words.js`);

  let recordOfTerminalValuesAndPaths = [];
  let severallyAppearingTerminalValuesArr = [];
  let temporaryArr = [];
  let homographs = {};

  Object.keys(wordsBank).forEach((wordsetKey) => {
    let wordset = wordsBank[wordsetKey];

    wordset.forEach((lObj) => {
      let terminalValuesAndPathsArr = otUtils.giveRoutesAndTerminalValuesFromObject(
        lObj.inflections
      );

      terminalValuesAndPathsArr.forEach((terminalValuesAndPathsUnit) => {
        terminalValuesAndPathsUnit.nestedRoute.unshift(lObj.id);
        recordOfTerminalValuesAndPaths.push(terminalValuesAndPathsUnit);
      });
    });
  });

  recordOfTerminalValuesAndPaths.forEach((unit) => {
    let { terminalValue } = unit;
    if (
      temporaryArr.includes(terminalValue) &&
      !severallyAppearingTerminalValuesArr.includes(terminalValue)
    ) {
      severallyAppearingTerminalValuesArr.push(terminalValue);
    } else {
      temporaryArr.push(terminalValue);
    }
  });

  severallyAppearingTerminalValuesArr.forEach((terminalValue) => {
    homographs[terminalValue] = recordOfTerminalValuesAndPaths
      .filter((unit) => unit.terminalValue === terminalValue)
      .map((unit) => unit.nestedRoute);
  });

  let allohomographs = {};
  let synhomographs = {};

  Object.keys(homographs).forEach((homographWord) => {
    let homographRoutes = homographs[homographWord];

    if (
      gpUtils.doesArrContainDifferentValues(
        homographRoutes.map((route) => route[0])
      )
    ) {
      checkForIgnoringsAndAddToResult(
        allohomographs,
        homographWord,
        homographRoutes
      );
    } else {
      checkForIgnoringsAndAddToResult(
        synhomographs,
        homographWord,
        homographRoutes
      );
    }
  });

  function checkForIgnoringsAndAddToResult(
    resultObj,
    homographWord,
    homographRoutes
  ) {
    if (ignoreAllohomsAlreadyWithClarifiers) {
      let lemmaObject = otUtils.findObjectInNestedObject(
        wordsBank,
        {
          id: "eng-ver-003",
        },
        false,
        true
      );

      if (
        lemmaObject.allohomClarifier &&
        lemmaObject.allohomClarifier.emoji &&
        lemmaObject.allohomClarifier.text
      ) {
        return;
      }
    } else if (ignoreVeeTwoVeeThreeAllohoms) {
      let firstStepsOfRoute = homographRoutes.map((arr) => arr[0]);
      let secondStepsOfRoute = homographRoutes.map((arr) => arr[1]);

      if (
        !gpUtils.doesArrContainDifferentValues(firstStepsOfRoute) &&
        gpUtils.doesArrHaveOnlyTheseMembers(secondStepsOfRoute, ["v2", "v3"])
      ) {
        return;
      }
    }
    resultObj[homographWord] = homographRoutes;
  }

  if (homographType === "allo") {
    return allohomographs;
  } else if (homographType === "syn") {
    return synhomographs;
  } else if (homographType === "all") {
    return homographs;
  }
};
