                     // Assignment 3: Company Product Catalog 
 
 // Task: Create a program to represent a product catalog using an array and perform basic queries.


 // 1. Define an array named inventory to store product information. 
// 2. Create three separate objects, each representing a product, with properties like name,  model, cost, and quantity. 
// 3. Add these product objects to the inventory array using an appropriate array method. 
// 4. Access and log the quantity property of a specific product (e.g., third product) in the  inventory array. 
// 5. Explore adding and accessing more elements within the inventory array to understand  how to manage product data.
           
                               //   Question #  1&2
//  1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,  model, cost, and quantity. 
type  product={
    name:string,
    model:string,
    cost:number,
    quantity:number
};                   
const inventory:product[] = [];

    const firstProduct:product={
        name:"PEL invrter",
        model:"18k jambo",
        cost:189999 ,
        quantity: 25,
    };
    const secProduct:product={
        name:"kenwood",
        model:"KEE-1265S",
        cost: 14499,
        quantity:10,   
    };
    const thirdProduct:product={
        name:"Haier",
        model:"18HFC",
        cost: 164999,
        quantity: 15,   
    };
                        //   Question#3
// 3. Add these product objects to the inventory array using an appropriate array method.
                       
inventory.push(firstProduct,secProduct,thirdProduct);
console.log(inventory);

                                //   Question#4
// 4. Access and log the quantity property of a specific product (e.g., third product) in the  inventory array.

  console.log( `quantity of third product:${inventory[2].quantity}`);                             

                                 //   Question#5
// 5. Explore adding and accessing more elements within the inventory array to understand  how to manage product data.
      //adding forth product to the inventory array
const forthProduct:product={
    name:"GREE",
        model:"18PITH14S/GS",
        cost: 172899 ,
        quantity:5, 
};
inventory.push(forthProduct);
console.log("current inventory",inventory );