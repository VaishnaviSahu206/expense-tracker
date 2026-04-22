// const express = require("express");
// const router = express.Router();

// router.get("/test-expense", (req, res) => {
//   res.send("Expense route working");
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const { addExpense, getExpenses, deleteExpense } = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

// protected routes
router.post("/", authMiddleware, addExpense);
router.get("/", authMiddleware, getExpenses);
router.delete("/:id", authMiddleware, deleteExpense);

module.exports = router;