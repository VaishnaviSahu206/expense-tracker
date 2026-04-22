// const Expense = require("../models/Expense");

// // ADD EXPENSE
// exports.addExpense = async (req, res) => {
//   try {
//     const { title, amount, category } = req.body;

//     const expense = await Expense.create({
//       user: req.user,
//       title,
//       amount,
//       category
//     });

//     res.status(201).json(expense);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // GET EXPENSES
// exports.getExpenses = async (req, res) => {
//   try {
//     const expenses = await Expense.find({ user: req.user });

//     res.json(expenses);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// exports.deleteExpense = async (req, res) => {
//   try {
//     const expense = await Expense.findById(req.params.id);

//     if (!expense) {
//       return res.status(404).json({ message: "Expense not found" });
//     }

//     await expense.deleteOne();

//     res.json({ message: "Expense deleted" });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// module.exports = {
//   addExpense,
//   getExpenses,
//   deleteExpense
// };
const Expense = require("../models/Expense");

// ADD EXPENSE
const addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = await Expense.create({
      user: req.user,
      title,
      amount,
      category
    });

    res.status(201).json(expense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET EXPENSES
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user });

    res.json(expenses);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE EXPENSE
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    await expense.deleteOne();

    res.json({ message: "Expense deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// EXPORT
module.exports = {
  addExpense,
  getExpenses,
  deleteExpense
};