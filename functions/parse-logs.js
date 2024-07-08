import fs from "fs";
import path from "path";

// type jsonObjectExpectedType = {
//   modelName: string;
//   catalogName: string;
//   userQuestion: string;
//   engineResponse: {
//     "query-id": string;
//     metadata: { succeeded: boolean; "error-message": string };
//   };
//   inboundQuery: string;
//   cleanedUpSql: string;
// };
// type jsonTranslatedType = {
//   modelName: string;
//   catalogName: string;
//   userQuestion: string;
//   inboundQuery: string;
//   cleanedUpSql: string;
//   errorMessage: string;
// };

export const parseLogs = async (logDirectory) => {
  const moveTo = path.join(logDirectory, "..", "translated_docs");

  fs.mkdir(moveTo, (err) => {
    if (!err.code === "EEXIST") {
      throw err;
    } else {
      console.log("FOLDER EXISTS");
    }
  });
  try {
    const files = await fs.promises.readdir(logDirectory);

    for (const file of files) {
      const fromPath = path.join(logDirectory, file);
      const toPath = path.join(moveTo, file);
      const status = await fs.promises.stat(fromPath);
      if (status.isFile()) {
        const json = JSON.parse(
          (await fs.promises.readFile(fromPath)).toString()
        );
        const arr = json.reduce((accumulator, jsonObject) => {
          if (accumulator[jsonObject.engineResponse.metadata["error-message"]])
            return {
              ...accumulator,
              [jsonObject.engineResponse.metadata["error-message"]]: [
                ...accumulator[
                  jsonObject.engineResponse.metadata["error-message"]
                ],
                {
                  ...jsonObject,
                  errorMessage:
                    jsonObject.engineResponse.metadata["error-message"],
                },
              ],
            };
          return {
            ...accumulator,
            [jsonObject.engineResponse.metadata["error-message"]]: [
              {
                ...jsonObject,
                errorMessage:
                  jsonObject.engineResponse.metadata["error-message"],
              },
            ],
          };
        }, {});
        console.log(arr);
        await fs.promises.writeFile(
          toPath,
          JSON.stringify(arr, null, 2, { mode: "w" })
        );
      }
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

parseLogs("/Users/eliasrangel/Documents/docs/docs");
