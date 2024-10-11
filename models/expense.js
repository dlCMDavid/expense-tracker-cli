class Expense {
  constructor(id, description, category, amount, createdAt, updatedAt) {
    this.id = id;
    this.description = description;
    this.category = category;
    this.amount = amount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default Expense;
