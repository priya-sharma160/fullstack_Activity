
let todosArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    if (!task || completed === undefined || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId++, // unique incremental ID
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

function getAll() {
    return todosArray;
}

function findById(id) {
    const numericId = Number(id);
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo;
    }
    return false;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(t => t.id !== Number(id));
        return todosArray.length < initialLength; // true if deleted
    }
    return false;
}


if (require.main === module) {
    console.log("Adding todos...");
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Finish homework", true, "2025-09-10");
    console.log(result);

    console.log("\ngetAll called:", getAll());
    console.log("findById(1):", findById(1));

    console.log("\nupdateOneById(1):", updateOneById(1, { completed: true, task: "Buy groceries and cook dinner" }));
    console.log("findById(1) after update:", findById(1));

    console.log("\ndeleteOneById(1):", deleteOneById(1));
    console.log("findById(1) after delete:", findById(1));

    console.log("\nFinal getAll:", getAll());
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
