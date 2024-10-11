import { Command } from "commander";
import ExpenseService from "./expenseService.js";

class CommandBuilder {
  constructor() {
    this.program = new Command();
    this.expenseService = new ExpenseService();
  }

  add() {
    this.program
      .command("add")
      .description("Add new expense")
      .option("-d, --description", "Description")
      .option("-a, --amount", "Amount")
      .action((name, options) => {
        var description = options.description
        var amount = options.amount;



        console.log(`Expense added successfully (ID: ${})`);
      });

    return this;
  }

  update() {
    this.program
      .command("update <name>")
      .description("Update a expense")
      .option("-d, --description", "Greet loudly")
      .option("-a, --amount", "Greet loudly")
      .action((name, options) => {
        const greeting = `Hello, ${name}!`;
        console.log(options.loud ? greeting.toUpperCase() : greeting);
      });

    return this;
  }

  customDefault() {
    this.program.action(() => {
      this.program.outputHelp();
    });
    return this;
  }

  built() {
    return this.program;
  }
}

export default CommandBuilder;
