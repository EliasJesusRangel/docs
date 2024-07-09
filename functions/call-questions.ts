import { callLlm } from "./call-llm";
import { getCatalogsAndModels } from "./get-catalogs-and-models";

export const callQuestions = async (questions: any[], id: string) => {
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
