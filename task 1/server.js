const fs = require("fs");
const prompt = require("prompt-sync")();

function main() {
  try {
    if (!fs.existsSync("input.txt")) {
      console.error("Error: input file does not exist.");
      process.exit(1);
    }

    if (fs.existsSync("output.txt")) {
      const answer = prompt(
        "The output file already exists. Do you want to overwrite it? (y/n): "
      );
      if (answer.toLowerCase() !== "y") {
        console.log(
          "Operation cancelled. Existing output file was not overwritten."
        );
        process.exit(0);
      }
    }

    updateOutputFile();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
main();
async function updateOutputFile() {
  try {
    const data = await fs.promises.readFile("input.txt");

    await fs.promises.writeFile("output.txt", data);

    await fs.promises.unlink("input.txt");

    console.log("Operation completed successfully. Input file deleted.");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
