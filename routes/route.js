const express = require("express");

const router = express.Router();

const { login, signup, addTodo, getTodos } = require("../controllers/auth");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/todo").post(addTodo);
router.route("/getAll").post(getTodos);

module.exports = router;
