import { existsSync, mkdir, readFileSync, writeFile } from "node:fs";

const filePath = "/Users/<user>/Documents/docs";

const logToFile = async (
  modelName: string,
  catalogName: string,
  userQuestion: string,
  engineResponse: any,
  inboundQuery: string,
  cleanedUpSql: string
) => {
  console.log("TRYING TO START LOGGING");
  if (!existsSync(`${filePath}/docs`)) {
    console.log("MAKING DIR");
    await mkdir(
      `${filePath}/docs`,
      { recursive: true, mode: "w" },
      (err: unknown) => {
        console.log("ERROR CREATING DIRECTORY");
      }
    );
  }

  const currentLogPath = `${filePath}/docs/${catalogName}-${modelName}.JSON`;
  console.log("LOGGING TO ", currentLogPath);
  try {
    const content: string = readFileSync(currentLogPath).toString();
    const json: unknown = JSON.parse(content);
    (
      json as {
        modelName: string;
        catalogName: string;
        userQuestion: string;
        engineResponse: any;
        inboundQuery: string;
        cleanedUpSql: string;
      }[]
    ).push({
      modelName,
      catalogName,
      userQuestion,
      engineResponse,
      inboundQuery,
      cleanedUpSql,
    });

    await writeFile(
      currentLogPath,
      JSON.stringify(json),
      { flag: "w" },
      (err) => {
        console.log(err);
      }
    );
  } catch (err) {
    try {
      const json: any[] = [];
      json.push({
        modelName,
        catalogName,
        userQuestion,
        engineResponse,
        inboundQuery,
        cleanedUpSql,
      });

      await writeFile(
        currentLogPath,
        JSON.stringify(json),
        { flag: "a" },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      throw err;
    }
    console.log(`error logging to file: ${err}`);
    console.log(
      modelName,
      catalogName,
      userQuestion,
      engineResponse,
      inboundQuery,
      cleanedUpSql
    );
  }
};
