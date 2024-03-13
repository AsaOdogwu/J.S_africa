// E-commerce Website:

// How would you implement client-side form validation for a checkout page to ensure users enter valid credit card information?
let clientDetails = [];
function clientForm(cardNumber) {
    if (action === "valid"){
        clientDetails.push({
            name,
            contact,
            address,
            card_no
        })
    }
    else if (action === "invalid"){
        clientDetails = clientDetails.filter(client => client.name!== name);
    }
    // console.log(clientDetails);


}
// all_Details=clientForm.map(clientDetails)
// Explain how you would use JavaScript to dynamically update the shopping cart total when users add or remove items from their cart without refreshing the page.

// let shoppingCart = []


// function updateCart(action, name, price, quantity) {
  
//   let item = shoppingCart.find(item => item.name === name)

//   if (action === "add") {
    
//     if (item) {
//       item.quantity += quantity
//     }
//     // Otherwise, add a new item to the cart
//     else {
//       shoppingCart.push({ name, price, quantity })
//     }
//   }
//   // If the action is "remove"
//   else if (action === "remove") {
//     // If the item is in the cart and has a quantity greater than the removal quantity,crement its quantity
//     if (item && item.quantity > quantity) {
//       item.quantity -= quantity
//     }
//     // Otherwise, remove the item from the cart
//     else {
//       shoppingCart = shoppingCart.filter(item => item.name !== name);
//     }
//   }

//   // Recalculate the total cost of the cart
//   const total = shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0)

//   console.log("shoppingCart:", shoppingCart);
//   console.log("total cost: $",+  total.toFixed(2));
// }
// updateCart("add", "Spag", 10.99,2);
// updateCart("add","Indomie",5.60,3);
// updateCart("remove", null, 10.99,2);
// updateCart("remove", null, 5.60,);

// **************different assignment********************************

// Sure, here are some JavaScript questions covering the concepts of arrays, objects, loops, functions, conditional statements, variables, and methods, with two questions for each concept:

// Arrays:
// 1. Question: Explain how you would add an element to the end of an existing array in JavaScript. Provide code examples.
let nums = [2,3,4,5];
nums.push(6,7)
console.log(nums);

   
// 2. Question: Discuss different methods available in JavaScript for removing elements from an array. Explain when you would use each method.
Pop()
splice ()

// Objects:
// 1. Question: Describe the difference between dot notation and bracket notation when accessing object properties in JavaScript. When would you use each notation?
// dot notation is used when the value is already known
// bracket notation can access the object only through the index[]

// 2. Question: How can you iterate over the properties of an object in JavaScript? Provide examples of different techniques for looping through object properties.
// using for loop and forEach
    


// Loops:
// 1. Question: Explain the difference between the `for` loop, `while` loop, and `do-while` loop in JavaScript. When would you choose one loop over the others?
// for loop is used when you want to iterate over array of objects.
// while loop is used when the true condition is met

// 2. Question: Discuss the concept of iteration and how it applies to loops in JavaScript. Provide an example of using a loop to iterate over an array or object.

// Functions:
// 1. Question: What are the benefits of using named functions over anonymous functions in JavaScript? Provide examples illustrating both approaches.

// 2. Question: Explain the concept of function scope and how it influences variable accessibility within JavaScript functions. How does the use of `let` and `const` affect function scope?

// Conditional statements (if):
// 1. Question: Discuss the difference between the `if`, `else if`, and `else` statements in JavaScript. Provide examples of how you would use each statement in different scenarios.

// 2. Question: How can you use nested `if` statements to create more complex conditional logic in JavaScript? Provide an example of nested `if` statements in action.

// Variables:
// 1. Question: Explain the difference between `var`, `let`, and `const` when declaring variables in JavaScript. When would you use each type of variable declaration?

// 2. Question: Describe variable hoisting in JavaScript and how it affects variable declarations. Provide examples to illustrate variable hoisting in practice.

// Methods:
// 1. Question: Discuss the concept of method chaining in JavaScript and how it can be achieved using object methods. Provide an example of chaining multiple methods together.

// 2. Question: Explain the difference between built-in methods and user-defined methods in JavaScript. How would you define and use a custom method for an object in JavaScript?

// These questions cover foundational JavaScript concepts and are designed to help a not-so-beginner programmer deepen their understanding of JavaScript syntax and usage.



