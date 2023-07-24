import fs from "fs";
import path from "path";
export default function getCategories() {
  const filePath = path.join(process.cwd(), "categories.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const categories = JSON.parse(fileContents);
  return categories.data;
}
