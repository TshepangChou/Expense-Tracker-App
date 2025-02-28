const express = require("express");
const Expense = require("../models/Expense");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Expense
router.post("/", authMiddleware, async (req, res) => {
    const { title, amount, category } = req.body;
    try {
      const newExpense = new Expense({ title, amount, category, user: req.user.id });
      await newExpense.save();
      res.status(201).json(newExpense);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

// Get All Expenses for a User
router.get("/", authMiddleware, async (req, res) => {
    try {
      const expenses = await Expense.find({ user: req.user.id });
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

// Delete Expense
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
      await Expense.findByIdAndDelete(req.params.id);
      res.json({ message: "Expense deleted" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

  module.exports = router;