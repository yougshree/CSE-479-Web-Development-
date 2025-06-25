//Exercise-1
function isBlank(input) {
    return input.trim().length === 0;
}

console.log(isBlank(""));             
console.log(isBlank("hello"));              

//Exercise-2
function stringToArray(input) {
    return input.split(" ");
}

console.log(stringToArray("Robin Singh")); 

//Exercise-3
function abbreviateName(name) {
// Split the name by spaces
    const nameParts = name.trim().split(" ");
// If there's only one part, return it
    if (nameParts.length === 1) 
        {
        return nameParts[0];
        }
 // Otherwise, abbreviate the last name     
    const firstName = nameParts[0];
    const lastNameInitial = nameParts[1][0].toUpperCase();

    return `${firstName} ${lastNameInitial}.`;
}
// Test Runs
console.log(abbreviateName("Robin Singh"));             
console.log(abbreviateName("Michael Jordan")); 

//Exercise-4
function titleCase(input) {
    return input
        .toLowerCase() 
        .split(" ")   
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" ");    
}
// Test Runs
console.log(titleCase('JavaScript exercises. python exercises.')); 

//Exercise-5
function firstN(array, n= 1) 
{
    if (n< 0)
      {
        return [];
      }

    if (n> array.length)
      {
        return array;
      }

   return array.slice(0, n);
}

// Test Runs
console.log(firstN([7, 9, 0, -2]));  
console.log(firstN([], 3));                
console.log(firstN([7, 9, 0, -2], 3));     
console.log(firstN([7, 9, 0, -2], 6));     
console.log(firstN([7, 9, 0, -2], -3));  
*/
//Excercise-6

function lastN(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }

    if (n < 0) {
      return [];
    }
    if (n > array.length) {
      return array;
    }
       
    return array.slice(-n);
  }
 
  // Test Runs
  console.log(lastN([7, 9, 0, -2])); 
  console.log(lastN([7, 9, 0, -2], 3));
  console.log(lastN([7, 9, 0, -2], 6)); 
  

//Excercise-7

function sumPair(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + numbers[i + 1] === target) {
            return [i, i + 1];
        }
    }
    return [-1, -1];
}

// Test Run
const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;
console.log(sumPair(numbers, target)); */

//Excersise-8

function move(array, from, to)
 {
    if (from < 0) from = array.length + from;
    if (to < 0) to = array.length + to;


    if (from >= array.length || to >= array.length || from < 0 || to < 0)
         {
        return array; 
         }
    const [element] = array.splice(from, 1);
    array.splice(to, 0, element);
    return array;
}

// Test Runs
console.log(move([10, 20, 30, 40, 50], 0, 2));   
console.log(move([10, 20, 30, 40, 50], -1, -2));  




