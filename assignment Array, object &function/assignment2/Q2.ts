              //Assignment 2:
             // Manipulating an Array: Rearranging Words  
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC". Steps: 
// 1. Scrambled Array: 
// o Start with an array of elements in a scrambled order, like: 
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"]; • Modify the Array: 
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:  o Convert non-strings (booleans, numbers) to strings if needed. 
// o Split elements into character arrays (optional). 
// o Rearrange characters or elements in the desired order (modify original array or  create temporary arrays). 
// • Output the Result: 
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

  const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
                   //remove last  element of array with pop method
  scrambledArray.pop();
 console.log(scrambledArray);
             //remove  elements ("true","123","am","a") with splice method
 scrambledArray.splice(2,4);
 console.log(scrambledArray);
                    //add element ("I") with unshift method
  scrambledArray.unshift("I");
  console.log(scrambledArray);
                 //add element ("am","a") with splice method after 1 index
   scrambledArray.splice(1,0,"am","a");
   console.log(scrambledArray);
//    //to combine elements back into a single string
   const finalAns = scrambledArray.join(" ");
   console.log(finalAns);