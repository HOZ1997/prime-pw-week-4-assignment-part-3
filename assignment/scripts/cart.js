console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem (item1, item2, item3){
console.log ('Add Item', basket );
basket.push (item1, item2, item3);
// adding item to basket
console.log ('basket', basket)
// checking item added to basket
if (basket){
    console.log ('basket', basket)
// checking basket contents 
      return true; 
      
}
  else{
  
  return false;
  }
}

console.log ( 'add item', addItem ('cheese', 'milk', 'butter'));
// function to add items to basket array
console.log ('basket', basket)
// checking that basket still has items 
//end addItem function 


function listItems (){
console.log ('basket', basket);
//checking basket
for ( let i=0; i<basket.length; i++);{
console.log ('basket', basket);
//checking items still in basket after loop


console.log ('item in basket', basket[0]);
console.log ('item in basket', basket[1]);
console.log ('item in basket', basket[2]);
//checking item in basket 
}
}
listItems ()
//end listItems function


function empty ( ){
basket = [];
// removing items from basket
console.log ('item in basket', basket);
}
empty ()
console.log ('items in basket', basket);
//end empty function


// Stretch Goals