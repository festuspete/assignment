const express = require("express");

const app = express();

app.use(express.json());

const theRouter = require("./routes/route");

app.use("", theRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

