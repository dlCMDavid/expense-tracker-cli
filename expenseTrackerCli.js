import readline from "readline";
import CommandBuilder from "./services/commandBuilder.js";

const commandBuilder = new CommandBuilder();

var program = commandBuilder.add().update().customDefault().built();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "expense-tracker ",
});

// program.parse(process.argv);

rl.prompt();

rl.on("line", (line) => {
  const args = line.trim().split(" ");

  if (args[0] === "exit") {
    rl.close();
    return;
  }

  try {
    program.parse([process.argv[0], process.argv[1], ...args]);
  } catch (error) {
    console.error(error.message);
  }
  rl.prompt();
});
