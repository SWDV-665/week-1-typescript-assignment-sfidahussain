// It should have a definition of a class with the obvious name Grocery. 
// The class should have some basic attributes such as name, quantity, etc. 
// Feel free to add any other attributes you think will be necessary.

class Grocery {
    name: string;
    quantity: Number;

    constructor(public itemName: string, public actualQuantity: Number) {
        this.name = itemName;
        this.quantity = actualQuantity;
    }
}

function listItem(groceryArray : Array<Grocery>) {
    console.log(groceryArray);
    let listItems = "";
    for(let item of groceryArray) {
        console.log(item)
        listItems = listItems + item.quantity + " " + item.name + "<br>";
    }
    return listItems;
}

type GroceryItems = Array<Grocery>;

var groceryItems = [
    new Grocery("eggs", 2),
    new Grocery("milk", 1)
]

// for loop through each item
document.body.innerHTML = listItem(groceryItems);
