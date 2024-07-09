import { callQuestions } from "./call-questions";
import { walkFolderForJson } from "./walk-folder-for-questions";
const folderPath = "../data"; // Replace with your folder path
const jsonFiles = walkFolderForJson(folderPath);

Promise.all(
  jsonFiles.map(async ({ id, content }) => {
    console.log("GOING FOR ", id);
    return await callQuestions(content, id);
  })
);
