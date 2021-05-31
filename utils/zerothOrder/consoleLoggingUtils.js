const consol = require("./consoleLoggingUtils.js");

exports.log = (...args) => {
  if (!process.argv.includes("r")) {
    console.log(...args);
  }
};

exports.consoleLogObjectAtOneLevel = (obj, laabel, originLaabel) => {
  if (!obj) {
    consol.log(
      "[1;33m " +
        `--Console log "${laabel}" at one level, from "${originLaabel}" but FALSY.` +
        "[0m"
    );
    return;
  }

  consol.log(
    "[1;33m " + `--Console log "${laabel}" at one level, from "${originLaabel}":` + "[0m"
  );
  consol.log("[1;32m " + `------` + "[0m");
  consol.log("[1;32m " + `----------` + "[0m");
  Object.keys(obj).forEach((key) => {
    let vaalue = obj[key];
    consol.log("[1;30m " + `${key}` + "[0m");
    consol.log(vaalue);
  });
  consol.log("[1;32m " + `----------` + "[0m");
  consol.log("[1;32m " + `------` + "[0m");
  consol.log("[1;32m " + `--` + "[0m");
};

exports.consoleLogObjectAtTwoLevels = (obj, laabel, originLaabel) => {
  if (!obj) {
    consol.log(
      "[1;33m " +
        `--Console log "${laabel}" at two levels, from "${originLaabel}" but FALSY.` +
        "[0m"
    );
    return;
  }

  consol.log(
    "[1;33m " +
      `--Console log "${laabel}" at two levels, from "${originLaabel}":` +
      "[0m"
  );
  consol.log("[1;32m " + `------` + "[0m");
  consol.log("[1;32m " + `----------` + "[0m");
  Object.keys(obj).forEach((key) => {
    let vaalue = obj[key];
    if (vaalue) {
      Object.keys(vaalue).forEach((key2) => {
        let vaalue2 = vaalue[key2];
        consol.log("[1;30m " + `${key}:${key2}` + "[0m");
        consol.log("subvaalue:", vaalue2);
      });
    } else {
      consol.log("[1;30m " + `${key}` + "[0m");
      consol.log("vaalue:", vaalue);
    }
  });
  consol.log("[1;32m " + `----------` + "[0m");
  consol.log("[1;32m " + `------` + "[0m");
  consol.log("[1;32m " + `--` + "[0m");
};

exports.consoleLogAestheticBorder = (reps) => {
  let border =
    " │ ║ ▌ │ ║ ▌ ║ ▌ █ ║ ▌ ║ █ ║ ▌ │ ║ ▌ │ ║ ▌ ║ █ ║ ▌ │ ║ ▌ │ ║ ▌ ║ ▌ █ ║ ▌ ║ █ ║ ▌ │ ║ ▌ │ ║ ▌ ║ ▌ █ ║ ▌ ║ █ ║ ▌ │ ▌ ║ █ ║ ▌ │ ║ ▌ │ ║";

  for (let i = 0; i < reps; i++) {
    consol.log(border.slice(i, border.length - (10 - i)));
  }
};

exports.consoleLogPW = (laabel, structureChunk, multipleMode) => {
  if (multipleMode) {
    consol.consoleLogYellowWithBorder(`##${laabel} ${structureChunk.chunkId}`);
  } else {
    consol.consoleLogBlueWithBorder(`##${laabel} ${structureChunk.chunkId}`);
  }
};

exports.consoleLogYellowWithBorder = (text) => {
  consol.log(" ");
  consol.log(
    "[1;33m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log(
    "[1;33m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log("                   " + text);
  consol.log(
    "[1;33m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log(
    "[1;33m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log(" ");
};

exports.consoleLogBlueWithBorder = (text) => {
  consol.log(" ");
  consol.log(
    "[1;36m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log(
    "[1;36m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log("                   " + text);
  consol.log(
    "[1;36m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log(
    "[1;36m " +
      "~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~" +
      "[0m"
  );
  consol.log(" ");
};

exports.consoleLogPurpleWithBorder = (text) => {
  consol.log(" ");
  consol.log(
    "[1;35m " +
      ": : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :" +
      "[0m"
  );
  consol.log(
    "[1;35m " +
      ": : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :" +
      "[0m"
  );
  consol.log("                   " + text);
  consol.log(
    "[1;35m " +
      ": : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :" +
      "[0m"
  );
  consol.log(
    "[1;35m " +
      ": : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : :" +
      "[0m"
  );
  consol.log(" ");
};

exports.throw = (msg = "Cease.") => {
  consol.log("[1;31m " + "!   !   !   !   !   !   !   !   !   !" + "[0m");
  consol.log("[1;31m " + "!   !   ! " + msg + "[0m");
  consol.log("[1;31m " + "!   !   !   !   !   !   !   !   !   !" + "[0m");
  throw msg;
};
