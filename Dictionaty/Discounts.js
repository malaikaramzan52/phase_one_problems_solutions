const final_bill = {};
//product catalog
const product_catalog = {
    "apple": 3.0,
    "banana": 1.5,
    "milk": 2.5,
    "bread": 2.0
};
//cart
const cart = {
    "apple": 4,
    "banana": 6,
    "milk": 2,
    "bread": 3
};
//discount
const discounts = {
    "apple": 10, // 10% off
    "milk": 20,  // 20% off
    "banana": 15, // 15% off
    // if no discount is there for the product, it means discount = 0%
};
//Loop over each item in cart.
for (let i = 0; i < Object.keys(cart).length; i++) {
    let product_name = Object.keys(cart)[i];
    let quantity = cart[product_name];
    let price_per_unit = product_catalog[product_name];
    let discount = discounts[product_name] || 0;

    // Calculate final price after discount
    let final_price = price_per_unit * quantity * (1 - discount / 100);
    final_bill[product_name] = Number(final_price.toFixed(2));
}

// Display the final bill
console.log("Final Bill:");
for (let item in final_bill) {
    console.log(`${item}: ${final_bill[item].toFixed(2)} `);
}