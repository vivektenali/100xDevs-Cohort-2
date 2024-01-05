const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({}));

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedpayload = createTodo.safeParse(createPayload);
  if (!parsedpayload) {
    res.status(411).json({
      message: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ msg: "todo created" });
});
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos: todos });
});
app.put("/todo", async function (req, res) {
  const updatedPayload = req.body;
  const parsedpayload = updateTodo.safeParse(updatedPayload);
  if (!parsedpayload) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
});

app.listen(3000, () => {
  console.log("App is listening on PORT 3000");
});
