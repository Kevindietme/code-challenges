//write a function that receives a person object as an argument and outputs the person't full name 

//function fullName(first, last) {
  //  const first = inputOne
    //const last = inputTwo
    //return 'first '+' 'last'
    
//}

//write a for loop that outputs "i will never give up" ten times

//for (let i=0; i<10; i++) {
  //  console.log ("i will never give up")
//}

//you are given 2 arrays, one called shoppingList and one called cart. Create a new version of shoppingList where the items in the cart have been removed. 

shoppingList = ['bread', 'cheese', 'milk']
cart = ['milk', 'beer', 'roast beef']

//shoppingList.pop();
//console.log(shoppingList);

const newShoppingList = shoppingList.filter(item => !cart.includes(item))
console.log(newShoppingList);