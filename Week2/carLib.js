
let carArray = [];
let nextId = 1;


function addOne(model, color, age) {
    if (!model || !color || !age) return false;

    const newCar = {
        id: nextId++,
        model,
        color,
        age
    };

    carArray.push(newCar); // ✅ push: adds car to array dynamically
    return newCar;
}


function getAll() {
    return carArray;
}


function findById(id) {
    const numericId = Number(id);
    const car = carArray.find(item => item.id === numericId); // ✅ find: returns first match
    return car || false;
}


function updateOneById(id, updatedData) {
    const car = findById(id); // uses find
    if (car) {
        if (updatedData.model) car.model = updatedData.model;
        if (updatedData.color) car.color = updatedData.color;
        if (updatedData.age) car.age = updatedData.age;
        return car;
    }
    return false;
}

function deleteOneById(id) {
    const car = findById(id); // uses find
    if (car) {
        const initialLength = carArray.length;
        carArray = carArray.filter(car => car.id !== Number(id)); // ✅ filter: remove car
        return carArray.length < initialLength;
    }
    return false;
}

const Car = {
    addOne,
    getAll,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Car;

if (require.main === module) {
    console.log("=== Adding Cars ===");
    console.log(addOne("Corolla", "Red", 3));
    console.log(addOne("Civic", "Blue", 2));

    console.log("\n=== All Cars ===");
    console.log(getAll());

    console.log("\n=== Find Car ID 1 ===");
    console.log(findById(1));

    console.log("\n=== Update Car ID 1 ===");
    console.log(updateOneById(1, { color: "Black", age: 4 }));
    console.log("After update:", findById(1));

    console.log("\n=== Delete Car ID 1 ===");
    console.log("Deleted?", deleteOneById(1));
    console.log("After deletion, find ID 1:", findById(1));

    console.log("\n=== Final Car List ===");
    console.log(getAll());
}