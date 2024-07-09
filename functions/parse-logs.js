import fs from "fs";
import path from "path";

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

export const parseLogs = async (logDirectory) => {
  const moveTo = path.join(logDirectory, "..", "translated_docs");
  const fullPathFolder = path.join(moveTo, "full");
  const questionPathFolder = path.join(moveTo, "question-error");
  const inboundPathFolder = path.join(moveTo, "inboundQuery-error");
  fs.mkdir(moveTo, (err) => {
    if (err && Object.hasOwn(err, "code") && !err.code === "EEXIST") {
      throw err;
    } else {
      console.log("fullPath FOLDER EXISTS");
    }
  });
  fs.mkdir(fullPathFolder, (err) => {
    if (err && Object.hasOwn(err, "code") && !err.code === "EEXIST") {
      throw err;
    } else {
      console.log("fullPath FOLDER EXISTS");
    }
  });
  fs.mkdir(questionPathFolder, (err) => {
    if (err && Object.hasOwn(err, "code") && !err.code === "EEXIST") {
      throw err;
    } else {
      console.log("questionPath FOLDER EXISTS");
    }
  });
  fs.mkdir(inboundPathFolder, (err) => {
    if (err && Object.hasOwn(err, "code") && !err.code === "EEXIST") {
      throw err;
    } else {
      console.log("inboundPath FOLDER EXISTS");
    }
  });
  try {
    const files = await fs.promises.readdir(logDirectory);
    for (const file of files) {
      const fromPath = path.join(logDirectory, file);

      const fullPath = path.join(fullPathFolder, file);
      const questionPath = path.join(questionPathFolder, file);
      const inboundQuery = path.join(inboundPathFolder, file);

      const status = await fs.promises.stat(fromPath);

      if (status.isFile()) {
        const f = (await fs.promises.readFile(fromPath)).toString();

        const json = JSON.parse(f);
        const arr = extractValue(
          json,
          (obj) =>
            Object.hasOwn(obj.engineResponse, "metadata")
              ? obj.engineResponse.metadata["error-message"]
              : "",
          (obj) =>
            Object.hasOwn(obj.engineResponse, "metadata")
              ? {
                  modelName: obj.modelName,
                  catalogName: obj.catalogName,
                  userQuestion: obj.userQuestion,
                  inboundQuery: obj.inboundQuery,
                  cleanedUpSql: obj.cleanedUpSql,
                  errorMessage: obj.engineResponse.metadata["error-message"],
                }
              : {}
        );
        const questionErrorArray = extractValue(
          json,
          (obj) =>
            Object.hasOwn(obj.engineResponse, "metadata")
              ? obj.engineResponse.metadata["error-message"]
              : "",
          (obj) =>
            Object.hasOwn(obj, "userQuestion")
              ? {
                  userQuestion: obj.userQuestion,
                }
              : {}
        );

        const questionInboundQueryArray = extractValue(
          json,
          (obj) =>
            Object.hasOwn(obj.engineResponse, "metadata")
              ? obj.engineResponse.metadata["error-message"]
              : "",
          (obj) =>
            Object.hasOwn(obj, "inboundQuery")
              ? {
                  inboundQuery: obj.inboundQuery,
                }
              : {}
        );

        await fs.promises.writeFile(fullPath, JSON.stringify(arr, null, 2));
        await fs.promises.writeFile(
          questionPath,
          JSON.stringify(questionErrorArray, null, 2)
        );
        await fs.promises.writeFile(
          inboundQuery,
          JSON.stringify(questionInboundQueryArray, null, 2)
        );
      }
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

parseLogs("/Users/eliasrangel/Documents/docs/docs");
