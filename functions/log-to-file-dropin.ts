import { existsSync, mkdir, readFileSync, writeFile } from "node:fs";
import path from "node:path";

const baseFilePath = path.join(__dirname, "..", process.env.FILEPATH ?? "");

const checkIfDocFolderExists = async () => {
  if (!existsSync(`${baseFilePath}/docs`)) {
    console.log("MAKING DIR");
    await mkdir(`${baseFilePath}/docs`, { recursive: true, mode: "w" }, () => {
      console.log("MADE DIRECTORY docs");
    });
  }
};
const getCurrentLogPath = (
  catalogName: string,
  modelName: string,
  prefix?: string
) =>
  `${baseFilePath}/docs/${
    prefix ? `${prefix}-` : ""
  }${catalogName}-${modelName}.JSON`;
const getJsonFromFile = (
  filepath: string
): {
  modelName: string;
  catalogName: string;
  userQuestion: string;
  engineResponse: any;
  inboundQuery: string;
  cleanedUpSql: string;
}[] => {
  try {
    const content: string = readFileSync(filepath).toString();
    const json: unknown = JSON.parse(content);

    return json as {
      modelName: string;
      catalogName: string;
      userQuestion: string;
      engineResponse: any;
      inboundQuery: string;
      cleanedUpSql: string;
    }[];
  } catch (err) {
    return [];
  }
};
export const logToFile = async (
  modelName: string,
  catalogName: string,
  userQuestion: string,
  engineResponse: any,
  prefix?: string
) => {
  checkIfDocFolderExists();
  const currentLogPath = getCurrentLogPath(catalogName, modelName, prefix);
  try {
    const json: {
      modelName: string;
      catalogName: string;
      userQuestion: string;
      engineResponse: any;
      inboundQuery: string;
      cleanedUpSql: string;
    }[] = getJsonFromFile(currentLogPath);

    json.push({
      modelName,
      catalogName,
      userQuestion,
      engineResponse: engineResponse.hasOwnProperty("engineResponse")
        ? engineResponse.engineResponse
        : engineResponse,
      inboundQuery: engineResponse.inboundQuery,
      cleanedUpSql: engineResponse.cleanedUpSql,
    });

    await writeFile(
      currentLogPath,
      JSON.stringify(json, null, 2),
      { flag: "w" },
      () => {
        console.log("DONE WRITING TO ", currentLogPath);
      }
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};
