import fs from "fs";
import path from "path";

export function walkFolderForJson(folderPath) {
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
