import axios, { AxiosError } from "axios";
import { logToFile } from "./log-to-file-dropin";
import { getAuthToken } from "./get-auth-token";

type LlmRequestExample = {
  orchestrator: string;
  catalogName: string;
  modelId: string;
  modelName: string;
  message: string;
  catalogId: string;
  authorization: string;
  access_token?: string;
  prefix?: string;
};
const EXAMPLE_BODY: LlmRequestExample = JSON.parse(
  process.env.EXAMPLE_BODY ?? ""
);
export const callLlm = async (request: Partial<LlmRequestExample>) => {
  const token = (await getAuthToken()).access_token;

  const body: LlmRequestExample = {
    ...EXAMPLE_BODY,
    ...request,
    authorization: token,
  };

  const response = await fetch("http://localhost:3001/llm/nlq", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  if (
    responseJson.hasOwnProperty("statusCode") &&
    responseJson.statusCode !== 200
  ) {
    logToFile(
      body.modelName,
      body.catalogName,
      body.message,
      responseJson,
      request.prefix
    );
    return;
  }

  if (
    responseJson.hasOwnProperty("engineResponse") &&
    responseJson.engineResponse.hasOwnProperty("metadata") &&
    responseJson.engineResponse.metadata.succeeded === false
  ) {
    logToFile(
      body.modelName,
      body.catalogName,
      body.message,
      responseJson,
      request.prefix
    );
  }
  logToFile(
    body.modelName,
    body.catalogName,
    body.message,
    responseJson,
    "SUCCESSFUL-ANSWERS"
  );
};
