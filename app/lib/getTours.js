import fs from "fs";
import path from "path";

export function getTours() {
  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), "tours.json");

  // Read the file synchronously
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the JSON into a JavaScript object and return it
  return JSON.parse(fileContents);
}

// export default async function getTours() {
//   const response = await fetch("../../tours.json");
//   const tours = await response.json();
//   return tours;
// }
