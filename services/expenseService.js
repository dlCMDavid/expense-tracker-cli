import Expense from "../models/expense";
import ExpenseJson from "../models/expenseJson";

class ExpenseService {
  constructor() {
    this.fileService = new FileService();
  }

  add(description, amount) {}

  list(category) {
    var tasks = this.getTasks(status);

    if (tasks.length === 0) throw new Error("No tasks available.");

    console.log("Tasks:");
    tasks.forEach((task) => {
      console.log(
        `ID: ${task.id}, Description: ${task.description}, Status: ${task.status}, CreatedAt: ${task.createdAt}, UpdatedAt: ${task.updatedAt}`
      );
    });
  }

  getExpensesWithBudgets(category) {
    const data = this.fileService.readFile();

    var expensesWithBudgets = new ExpenseJson(
      data.budgetPerMonths,
      data.expenses
    );

    if (category) {
      if (!Object.values(Task.Status).includes(status))
        throw new Error("Invalid status");

      tasks = tasks.filter((x) => x.status === status);
    }

    return tasks;
  }
}

export default ExpenseService;
