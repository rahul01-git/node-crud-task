const express = require("express");
const router = express.Router();

let data = [
    {
        id: 1,
        title: "Create a project",
        order: 1,
        completed: true,
        createdOn: new Date(),
    },
    {
        id: 2,
        title: "Take a coffee",
        order: 2,
        completed: true,
        createdOn: new Date(),
    },
    {
        id: 3,
        title: "Write new article",
        order: 3,
        completed: true,
        createdOn: new Date(),
    },
    {
        id: 4,
        title: "Walk toward home",
        order: 4,
        completed: false,
        createdOn: new Date(),
    },
    {
        id: 5,
        title: "Have some dinner",
        order: 5,
        completed: false,
        createdOn: new Date(),
    },
];

router.get("/", function (req, res) {
    res.status(200).json(data);
})

router.post("/", function (req, res) {
    const task = req.body;
    const alreadyAdded = data.find(item => item.id === task.id);
    if (!alreadyAdded) {
        data = [...data, task];
        res.status(200).json({ message: "new item added", item: task });
    }else res.send("data with same id already exists");
})

router.get("/:id", function (req, res) {
    const item = data.find(item => item.id === parseInt(req.params.id));
    if (item) res.status(200).json(item);
    else res.status(404).send("item not found with id: " + req.params.id);
});

router.put('/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);
    if (item) {
        item.title = req.body.title;
        item.order = req.body.order;
        item.completed = req.body.completed;
    } else {
        res.send("no item found with id: " + id);
    }
    res.send("data updated succesfully");
})

router.delete('/:id', function (req, res) {
    const id = parseInt(req.params.id);
    data = data.filter(item => item.id !== id);
    res.send("data deleted succesfully");
})


module.exports = router;