import { existsSync, mkdir, readFileSync, writeFile } from "node:fs";

const filePath = "/Users/eliasrangel/Documents/docs";

export const logToFile = async (
  modelName: string,
  catalogName: string,
  userQuestion: string,
  engineResponse: any,
  prefix?: string
) => {
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

  const currentLogPath = `${filePath}/docs/${
    prefix ? `${prefix}-` : ""
  }${catalogName}-${modelName}.JSON`;
  console.log("LOGGING TO ", currentLogPath);
  try {
    const content: string = readFileSync(currentLogPath).toString();
    const json: unknown = JSON.parse(content);
    const { inboundQuery, cleanedUpSql, ...rest } = engineResponse;

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
      engineResponse: rest,
      inboundQuery,
      cleanedUpSql,
    });

    await writeFile(
      currentLogPath,
      JSON.stringify(json, null, 2),
      { flag: "w" },
      () => {}
    );
  } catch (err) {
    try {
      const json: any[] = [];
      const { inboundQuery, cleanedUpSql, ...rest } = engineResponse;
      const tmp = {
        modelName,
        catalogName,
        userQuestion,
        engineResponse: engineResponse,
        inboundQuery,
        cleanedUpSql,
      };
      json.push(tmp);
      await writeFile(
        currentLogPath,
        JSON.stringify(json, null, 2),
        { flag: "w" },
        (err) => {}
      );
    } catch (err) {
      throw err;
    }
  }
};
