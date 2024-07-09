import { callLlm } from "./call-llm";
import { getCatalogsAndModels } from "./get-catalogs-and-models";
import fs from "fs";
import path from "path";

const callQuestions = async (questions: any[], id: string) => {
  const catalogsAndModels = await getCatalogsAndModels();
  const catalogs = (await catalogsAndModels.json())["catalogs"];
  const catalogKeys = Object.keys(catalogs);
  catalogKeys.forEach(async (catalogKey) => {
    const { catalogName, models } = catalogs[catalogKey];
    questions.forEach(async (question) => {
      const request = {
        orchestrator: "snowflake-cortex",
        catalogName: catalogName,
        modelId: Object.keys(models)[0],
        modelName: models[Object.keys(models)[0]],
        catalogId: catalogKey,
        message: question,
        prefix: id,
      };
      await callLlm(request);
    });
  });
};

function walkFolderForJson(folderPath) {
  let jsonObjects: { id: string; content: JSON[] }[] = [];
  fs.readdirSync(path.join(__dirname, folderPath)).forEach((file) => {
    const filePath = path.join(folderPath, file);

    if (fs.statSync(path.join(__dirname, filePath)).isFile()) {
      try {
        const data = fs.readFileSync(path.join(__dirname, filePath), "utf8");
        const jsonObject = JSON.parse(data);
        jsonObjects.push({
          id: path.parse(file).name.toLowerCase(),
          content: jsonObject,
        });
      } catch (err) {
        console.error(`Error parsing JSON file ${filePath}:`, err);
      }
    }
  });

  return jsonObjects;
}

// Example usage:
const folderPath = "../data"; // Replace with your folder path
const jsonFiles = walkFolderForJson(folderPath);

Promise.all(
  jsonFiles.map(async ({ id, content }) => {
    console.log("GOING FOR ", id);
    return await callQuestions(content, id);
  })
);
