                              //Assignment no 1

//   Task: Create a program that manages a simple friend list. 
//1. Define an object named people containing an empty array called friends. 
//2. Create three separate objects, each representing a friend, with properties like firstName,  lastName, and optionally id. 
//3. Add these friend objects to the friends array within the people object. 
//4. Output the entire people object to the console, displaying your information and your  friend list. 

                                  //Question no 1
// 1. Define an object named people containing an empty array called friends.
 const people={
     friends:[] as threefriends[], 
  };
                                //Question no 2
// //2. Create three separate objects, each representing a friend, with properties like firstName,  lastName, and optionally id.
 type  threefriends={
     firstName:string,
     lastName:string,
     id:number
 };
const friend1:threefriends={
     firstName: "Hifza",
     lastName:"cheena",
    id: 101,

};
const friend2:threefriends={
    firstName: "saba",
    lastName:"shanzad",
    id: 102,
};
const friend3:threefriends={
    firstName: "salman",
    lastName:"Ahmed",
    id: 103,
};
                               //Question no 3+4
// 3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your  friend list.
 people.friends.push (friend1,friend2,friend3);
 console.log(people);