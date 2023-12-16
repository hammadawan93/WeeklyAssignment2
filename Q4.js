"use strict";
//let priceOfProduct = 90;
function discountedPrice(priceOfProduct) {
    if (priceOfProduct > 100) {
        console.log(`Price of product is $${priceOfProduct}`);
        console.log(`...You get a discount of 10% !...\n`);
        let discount = 0.1 * priceOfProduct;
        console.log(`Discount=$${discount}`);
        let discountedPrice = priceOfProduct - discount;
        console.log(`New discounted price of product=$${discountedPrice}`);
    }
    else if (priceOfProduct <= 100) {
        console.log(`Price of product is $${priceOfProduct}`);
        console.log(`...You get a discount of 5% !...\n`);
        let discount = 0.05 * priceOfProduct;
        console.log(`Discount=$${discount}`);
        let discountedPrice = priceOfProduct - discount;
        console.log(`New discounted price of product=$${discountedPrice}`);
    }
}
discountedPrice(100);
