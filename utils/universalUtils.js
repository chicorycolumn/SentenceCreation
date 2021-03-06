exports.combineTwoKeyValueObjectsCarefully = (obj1, obj2) => {
  Object.keys(obj1).forEach((obj1Key) => {
    if (Object.keys(obj2).includes(obj1Key)) {
      throw `qoko combineTwoObjectsCarefully. Oh no, "${obj1Key}" present in both objects.`;
    }
  });
  Object.keys(obj2).forEach((obj2Key) => {
    if (Object.keys(obj1).includes(obj2Key)) {
      throw `qoko combineTwoObjectsCarefully. Oh no, "${obj2Key}" present in both objects.`;
    }
  });

  let combinedObj = {};

  Object.keys(obj1).forEach((obj1Key) => {
    let obj1Value = obj1[obj1Key];
    combinedObj[obj1Key] = this.copyWithoutReference(obj1Value); //copywithoutref
  });

  Object.keys(obj2).forEach((obj2Key) => {
    obj2Value = obj2[obj2Key];
    combinedObj[obj2Key] = this.copyWithoutReference(obj2Value); //copywithoutref
  });

  return combinedObj;
};

exports.addToArrayAtKey = (object, key, item) => {
  if (!object[key]) {
    object[key] = [item];
  } else {
    object[key].push(item);
  }
};

exports.selectRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

exports.capitaliseFirst = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

exports.areTwoFlatArraysEqualAndInSameOrder = (arr1, arr2) => {
  return arr1.every((item, index) => arr2[index] === item);
};

exports.areTwoFlatArraysEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((item) => arr2.includes(item)) &&
    arr2.every((item) => arr1.includes(item))
  );
};

exports.doKeyValuesMatch = (object, keyValues) => {
  return Object.keys(keyValues).every((key) => {
    if (
      typeof keyValues[key] === "number" ||
      typeof keyValues[key] === "string"
    ) {
      return object[key] === keyValues[key];
    } else if (Array.isArray(keyValues[key]) && Array.isArray(object[key])) {
      return this.areTwoFlatArraysEqual(object[key], keyValues[key]);
    }
  });
};

exports.isEmpty = (obj) => {
  return (
    !obj ||
    (this.isKeyValueTypeObject(obj) && !Object.keys(obj).length) ||
    (Array.isArray(obj) && !obj.length)
  );
};

exports.isKeyValueTypeObject = (item) => {
  return typeof item === "object" && item !== null && !Array.isArray(item);
};

exports.isKeyValueTypeObjectOrArray = (item) => {
  return typeof item === "object" && item !== null;
};

exports.findKeysInObjectAndExecuteCallback = (obj, soughtKey, callback) => {
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      if (key === soughtKey) {
        callback(obj);
      } else {
        this.findKeysInObjectAndExecuteCallback(obj[key], soughtKey, callback);
      }
    });
  }
};

exports.copyWithoutReference = (source) => {
  if (typeof source !== "object" || source === null) {
    return source;
  }
  if (Array.isArray(source)) {
    return recursivelyCopyObject(source, []);
  } else {
    return recursivelyCopyObject(source, {});
  }

  function recursivelyCopyObject(input, targ) {
    Object.keys(input).forEach((key) => {
      let item = input[key];

      if (typeof item !== "object" || item === null) {
        targ[key] = item;
        return;
      } else if (Array.isArray(item)) {
        targ[key] = [];
        recursivelyCopyObject(item, targ[key]);
        return;
      } else {
        targ[key] = {};
        recursivelyCopyObject(item, targ[key]);
        return;
      }
    });
    return targ;
  }
};

exports.copyValueOfKey = (
  navigatedObject,
  sourceKey,
  targetKeyArr,
  shouldDeleteSourceKey
) => {
  targetKeyArr.forEach((targetKey) => {
    navigatedObject[targetKey] = this.copyWithoutReference(
      navigatedObject[sourceKey]
    );
  });

  if (shouldDeleteSourceKey) {
    delete navigatedObject[sourceKey];
  }
};

exports.arrayExploder = (superArray) => {
  if (!superArray) {
    return [];
  }

  superArray = superArray.filter((array) => array.length);

  if (!superArray.length) {
    return [];
  }

  if (superArray.length === 1) {
    return superArray[0].map((item) => [item]);
  }

  let result = [];

  arrayExploderRecursion(superArray, result, []);

  return result;

  function arrayExploderRecursion(src, res, miniRes) {
    let arr = src[0];

    arr.forEach((item, itemIndex) => {
      miniRes.push(item);

      if (src.length > 1) {
        arrayExploderRecursion(src.slice(1), res, miniRes);
      } else {
        res.push(miniRes.slice(0));
        miniRes.pop();
      }
    });
    miniRes.pop();
  }
};

exports.doesArrContainDifferentItems = (arr) => {
  if (!arr.length) {
    return false;
  }

  arr.sort((a, b) => a - b);

  return arr[0] !== arr[arr.length - 1];
};

exports.doesArrHaveOnlyTheseMembers = (arr1, arr2, disallowDuplicates) => {
  if (disallowDuplicates && arr1.length !== arr2.length) {
    return false;
  }

  let differingItems = arr1.filter((item) => !arr2.includes(item));
  return !differingItems.length;
};

exports.typeof = (item) => {
  return Array.isArray(item)
    ? "array"
    : item === null
    ? "null"
    : typeof item === "object"
    ? "keyValueObject"
    : typeof item;
};

exports.areTwoObjectsEqual = (obj1, obj2) => {
  if (this.typeof(obj1) !== this.typeof(obj2)) {
    return false;
  }

  if (!["keyValueObject", "array"].includes(this.typeof(obj1))) {
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  return Object.keys(obj1).every((obj1Key) => {
    return this.areTwoObjectsEqual(obj1[obj1Key], obj2[obj1Key]);
  });
};

exports.checkEachSequentialPairing = (arr, checkFxn, allowArrayOfZeroOrOne) => {
  if (arr.length < 2) {
    return !!allowArrayOfZeroOrOne;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (!checkFxn(arr[i], arr[i + 1])) {
      return false;
    }
  }

  return true;
};

exports.oneStepCheck = (n1, n2) => {
  return Math.abs(n1 - n2) === 1;
};

exports.returnArrayWithItemAtIndexRemoved = (arr, indexToRemove) => {
  return [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];
};

exports.isThisObjectInThisArrayOfObjects = (obj, arr) => {
  return arr.some((objFromArr) => this.areTwoObjectsEqual(objFromArr, obj));
};
