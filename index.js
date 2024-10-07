
const storeName = "Tech Haven";//details ng store
const storeLocation = "Metro Manila";
const storeCapacity = 230; // Max number of products

console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);

// products with name, price, and quantity
let products = [
    { name: "Laptop", price: 18999, quantity: 50 },
    { name: "Smartphone", price: 9999, quantity: 100 },
    { name: "Tablet", price: 12999, quantity: 80 }
];

// check inventory capacity
function checkInventoryCapacity() {
    let totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
    if (totalQuantity > storeCapacity) {
        console.log("Store is at full capacity, cannot add new products.");
        return false;
    } else {
        return true;
    }
}

// Function to add a new product
function addProduct(productName, price, quantity) {
    let totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
    
    if (totalQuantity + quantity <= storeCapacity) {
        products.push({ name: productName, price: price, quantity: quantity });
        console.log(`Added ${productName} with quantity ${quantity}`);
    } else {
        console.log("Cannot add product, exceeds store capacity.");
    }
}

// remove a specified quantity of a product with edge case handling
function removeProduct(productName, quantity) {
    let product = products.find(p => p.name === productName);
    
    if (product) {
        if (quantity > product.quantity) {
            console.log(`Error: You tried to remove ${quantity}, but only ${product.quantity} are available.`);
        } else {
            product.quantity -= quantity;
            console.log(`Removed ${quantity} of ${productName}. New quantity: ${product.quantity}`);
        }
    } else {
        console.log("Product not found.");
    }
}

// find the most expensive product
function getMostExpensiveProduct() {
    let mostExpensive = products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    return mostExpensive.name;
}

//calculate total inventory value
function calculateTotalInventoryValue() {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

//restock a product if its quantity is below a threshold
function restockProduct(productName, threshold) {
    let product = products.find(p => p.name === productName);
    
    if (product && product.quantity < threshold) {
        product.quantity += 20;
        console.log(`Automatically restocked 20 units of ${productName}. New quantity: ${product.quantity}`);
    }
}

// prompt user to add a new product
let newProductName = prompt("Enter product name:");
let newProductPrice = parseFloat(prompt("Enter product price:"));
let newProductQuantity = parseInt(prompt("Enter product quantity:"));

// add the product
addProduct(newProductName, newProductPrice, newProductQuantity);

// display updated inventory value
console.log("Updated Inventory Value: " + calculateTotalInventoryValue());

// check if the store is over capacity
checkInventoryCapacity();

// Restock if any product falls below the threshold of 10
products.forEach(product => restockProduct(product.name, 10));

// remove a product
let removeProductAnswer = prompt("Would you like to remove a product? (yes/no)");
if (removeProductAnswer.toLowerCase() === "yes") {
    let removeProductName = prompt("Enter product name to remove:");
    let removeQuantity = parseInt(prompt("Enter quantity to remove:"));
    removeProduct(removeProductName, removeQuantity);
}

// Output 
console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);
let totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
console.log(`Total Number of Products: ${totalQuantity}`);
console.log(`Total Inventory Value: ${calculateTotalInventoryValue()}`);
console.log(`Most Expensive Product: ${getMostExpensiveProduct()}`);

// Check if the store is at full capacity again after all operations
checkInventoryCapacity();
