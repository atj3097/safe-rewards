interface PurchaseOption {
    task: string;
    action: string; 
  }
  
  export const purchaseOptions: PurchaseOption[] = [ 
{ 
    task: "Buy a Coffee",
    action: 'purchaseCoffee'
}, 
{ 
    task: "Buy a Burger",
    action: 'purchaseBurger'

},
{ 
    task: "Buy a Shirt",
    action: 'purchaseShirt'
}


]

function purchaseCoffee(){
    console.log("You bought a coffee");
}

function purchaseBurger(){
    console.log("You bought a burger");
}

function purchaseShirt(){
    console.log("You bought a shirt");
}