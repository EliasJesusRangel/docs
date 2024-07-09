import fs from "fs";
import path from "path";
import {
  getUserQuestion,
  getErrorMessageOrMessageOrUserQuestion,
  getInboundQuery,
  getErrorMessageOrObject,
} from "./value-extractors";

const extractValue = (arr, key, valueKey) => {
  const tmp = arr.reduce((accumulator, jsonObject) => {
    if (accumulator[key(jsonObject)])
      return {
        ...accumulator,
        [key(jsonObject)]: [
          ...accumulator[key(jsonObject)],
          valueKey(jsonObject),
        ],
      };
    return {
      ...accumulator,
      [key(jsonObject)]: [valueKey(jsonObject)],
    };
  }, {});

  return tmp;
};

const getArraysNeededtoWrite = (json, file, moveTo) => {
  const fullPathFolder = path.join(moveTo, "full");
  const questionPathFolder = path.join(moveTo, "question-error");
  const inboundPathFolder = path.join(moveTo, "inboundQuery-error");

  const objectArrayFull = extractValue(
    json,
    getErrorMessageOrMessageOrUserQuestion,
    getErrorMessageOrObject
  );
  const questionArrayWithErrorLabel = extractValue(
    json,
    getErrorMessageOrMessageOrUserQuestion,
    getUserQuestion
  );

  const inboundQueryArrayWithQuestion = extractValue(
    json,
    getErrorMessageOrMessageOrUserQuestion,
    getInboundQuery
  );
  const fullPath = path.join(fullPathFolder, file);
  const questionPath = path.join(questionPathFolder, file);
  const inboundQuery = path.join(inboundPathFolder, file);
  fs.mkdir(fullPathFolder, (err) => {
    if (err && !err.code) {
      throw err;
    } else {
      console.log("fullPath FOLDER EXISTS");
    }
  });
  fs.mkdir(questionPathFolder, (err) => {
    if (err && !err.code) {
      throw err;
    } else {
      console.log("questionPath FOLDER EXISTS");
    }
  });
  fs.mkdir(inboundPathFolder, (err) => {
    if (err && !err.code) {
      throw err;
    } else {
      console.log("inboundPath FOLDER EXISTS");
    }
  });

  return [
    { path: fullPath, arr: objectArrayFull },
    { path: questionPath, arr: questionArrayWithErrorLabel },
    { path: inboundQuery, arr: inboundQueryArrayWithQuestion },
  ];
};
export const parseLogs = async (logDirectory) => {
  const moveTo = path.join(logDirectory, "..", "translated_docs");
  fs.mkdir(moveTo, (err) => {
    if (err && !err.code) {
      throw err;
    } else {
      console.log("fullPath FOLDER EXISTS");
    }
  });
  try {
    const files = await fs.promises.readdir(logDirectory);
    for (const file of files) {
      const fromPath = path.join(logDirectory, file);

      const status = await fs.promises.stat(fromPath);

      if (status.isFile()) {
        const f = (await fs.promises.readFile(fromPath)).toString();

        const json = JSON.parse(f);
        const pertinentArrays = getArraysNeededtoWrite(json, file, moveTo);
        pertinentArrays.forEach(async (arrayValue) => {
          await fs.promises.writeFile(
            arrayValue.path,
            JSON.stringify(arrayValue.arr, null, 2)
          );
        });
      }
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

parseLogs("/Users/eliasrangel/Documents/docs/docs");
