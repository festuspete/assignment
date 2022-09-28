const signup = (req, res) => {
     const { username, email, password, confirmpassword } = req.body;
     if (!username || !email || !password) {
          res.status(401).send(`Please Complete your signup`);
     }
     if (password !== confirmpassword) {
          res.status(401).send(`Confirm password and Password not the same`);
     }

     res.status(201).json({ Msg: `Sign Up Successful` });
};

const login = (req, res) => {
     const { email, password } = req.body;
     if (!email || !password) {
          res.status(401).send(`incomplete login details`);
     }
     if (password !== "secret") {
          res.status(401).send(`Incorrect Password`);
     }
     res.status(201).json({ Msg: `Login Successful` });
};

const getTodos = (req, res) => {
     res.status(201).json({ Msg: req.body });
};

const addTodo = (req, res) => {
     const { task1, task2, task3 } = req.body;
     if (!task1 || !task2 || !task3) {
          res.send(`Please Complete your task`);
     }

     const postTask = {
          task1: task1,
          task2: task2,
          task3: task3,
          Date: new Date(),
     };
     res.status(201).json({ Successful: postTask });
};

module.exports = addTodo;

module.exports = { signup, login, addTodo, getTodos };
