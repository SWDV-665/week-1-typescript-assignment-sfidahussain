// It should have a definition of a class with the obvious name Grocery. 
// The class should have some basic attributes such as name, quantity, etc. 
// Feel free to add any other attributes you think will be necessary.
var Grocery = /** @class */ (function () {
    function Grocery(itemName, actualQuantity) {
        this.itemName = itemName;
        this.actualQuantity = actualQuantity;
        this.name = itemName;
        this.quantity = actualQuantity;
    }
    return Grocery;
}());
function listItem(groceryArray) {
    console.log(groceryArray);
    var listItems = "";
    for (var _i = 0, groceryArray_1 = groceryArray; _i < groceryArray_1.length; _i++) {
        var item = groceryArray_1[_i];
        console.log(item);
        listItems = listItems + item.quantity + " " + item.name + "<br>";
    }
    return listItems;
}
var groceryItems = [
    new Grocery("eggs", 2),
    new Grocery("milk", 1)
];
// for loop through each item
document.body.innerHTML = listItem(groceryItems);
