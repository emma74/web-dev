let shoppingCart = [];

//add items to array
shoppingCart.push('milk', 'sugar', 'eggs', 'water');
console.log(shoppingCart);

//remove last item
shoppingCart.pop()
// console.log(shoppingCart);

for (let item of shoppingCart) {
  console.log(item);
}

shoppingCart.forEach(item => console.log(item))
